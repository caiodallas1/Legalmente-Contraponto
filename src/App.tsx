/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ActiveView, Category, Question } from './types';
import { ALL_QUESTIONS } from './data/questions';
import { ALL_CATEGORIES } from './data/categories';
import { filterQuestions, selectRandomQuestion } from './utils/questionSelector';
import {
  getSavedQuestionIds,
  toggleSaveQuestionId,
  getRecentQuestionIds,
  addRecentQuestionId,
} from './utils/storage';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryFilter } from './components/CategoryFilter';
import { QuestionCard } from './components/QuestionCard';
import { ConcentrationMode } from './components/ConcentrationMode';
import { TheOtherSideModal } from './components/TheOtherSideModal';
import { QuestionDetailsModal } from './components/QuestionDetailsModal';
import { SavedQuestionsView } from './components/SavedQuestionsView';
import { QuestionDirectoryView } from './components/QuestionDirectoryView';
import { AboutView } from './components/AboutView';
import { Footer } from './components/Footer';

export default function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [sessionRecentIds, setSessionRecentIds] = useState<string[]>([]);

  // Active modal state
  const [activeModal, setActiveModal] = useState<
    | null
    | { type: 'timer'; question: Question; phase: 'research' | 'argumentation' }
    | { type: 'otherSide'; question: Question }
    | { type: 'details'; question: Question }
  >(null);

  // Load saved question IDs and recent on mount
  useEffect(() => {
    setSavedIds(getSavedQuestionIds());
    setSessionRecentIds(getRecentQuestionIds());

    // Check URL parameters for autostart testability
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autostart') === '1' && ALL_QUESTIONS.length > 0) {
      setCurrentQuestion(ALL_QUESTIONS[0]);
    }
  }, []);

  // Compute question counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<Category, number> = {} as Record<Category, number>;
    for (const cat of ALL_CATEGORIES) {
      counts[cat] = 0;
    }
    for (const q of ALL_QUESTIONS) {
      if (counts[q.category] !== undefined) {
        counts[q.category]++;
      }
    }
    return counts;
  }, []);

  // Handle toggling categories
  const handleToggleCategory = (category: Category) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const handleSelectAllCategories = () => {
    setSelectedCategories([]);
  };

  const handleClearCategories = () => {
    setSelectedCategories([]);
  };

  // Generate question function respecting selected categories and non-repetition
  const handleGenerateQuestion = useCallback(() => {
    setIsShuffling(true);

    const pool = filterQuestions(ALL_QUESTIONS, selectedCategories);
    const chosen = selectRandomQuestion(pool, sessionRecentIds);

    setTimeout(() => {
      if (chosen) {
        setCurrentQuestion(chosen);
        const updatedRecent = addRecentQuestionId(chosen.id, 25);
        setSessionRecentIds(updatedRecent);
      }
      setIsShuffling(false);
    }, 280);
  }, [selectedCategories, sessionRecentIds]);

  // Toggle save handler
  const handleToggleSave = (question: Question) => {
    const result = toggleSaveQuestionId(question.id);
    setSavedIds(result.list);
  };

  // Saved questions objects
  const savedQuestionsList = useMemo(() => {
    const set = new Set(savedIds);
    return ALL_QUESTIONS.filter((q) => set.has(q.id));
  }, [savedIds]);

  // Scroll to generator card on Hero click
  const handleExploreHeroClick = () => {
    if (activeView !== 'home') {
      setActiveView('home');
    }
    setTimeout(() => {
      const card = document.getElementById('generator-card');
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (!currentQuestion) {
        handleGenerateQuestion();
      }
    }, 50);
  };

  // Start challenge with a specific question (e.g. from saved or directory)
  const handleLaunchChallenge = (question: Question) => {
    setCurrentQuestion(question);
    setActiveModal({ type: 'timer', question, phase: 'research' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5F9] text-[#25232A]">
      {/* Header */}
      <Header
        activeView={activeView}
        onNavigate={setActiveView}
        savedCount={savedIds.length}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <Hero
              onExploreClick={handleExploreHeroClick}
              totalQuestions={ALL_QUESTIONS.length}
            />

            <CategoryFilter
              selectedCategories={selectedCategories}
              onToggleCategory={handleToggleCategory}
              onSelectAll={handleSelectAllCategories}
              onClearAll={handleClearCategories}
              categoryCounts={categoryCounts}
            />

            <QuestionCard
              currentQuestion={currentQuestion}
              onGenerate={handleGenerateQuestion}
              onStartResearch={(q) =>
                setActiveModal({ type: 'timer', question: q, phase: 'research' })
              }
              onToggleSave={handleToggleSave}
              isSaved={currentQuestion ? savedIds.includes(currentQuestion.id) : false}
              onOpenOtherSide={(q) =>
                setActiveModal({ type: 'otherSide', question: q })
              }
              onOpenDetails={(q) =>
                setActiveModal({ type: 'details', question: q })
              }
              isShuffling={isShuffling}
            />
          </>
        )}

        {activeView === 'directory' && (
          <QuestionDirectoryView
            allQuestions={ALL_QUESTIONS}
            savedIds={savedIds}
            onToggleSave={handleToggleSave}
            onSelectForChallenge={handleLaunchChallenge}
            onOpenDetails={(q) =>
              setActiveModal({ type: 'details', question: q })
            }
            onOpenOtherSide={(q) =>
              setActiveModal({ type: 'otherSide', question: q })
            }
            onBackToHome={() => setActiveView('home')}
          />
        )}

        {activeView === 'saved' && (
          <SavedQuestionsView
            savedQuestions={savedQuestionsList}
            onRemove={(id) => {
              const res = toggleSaveQuestionId(id);
              setSavedIds(res.list);
            }}
            onSelectForChallenge={handleLaunchChallenge}
            onOpenDetails={(q) =>
              setActiveModal({ type: 'details', question: q })
            }
            onOpenOtherSide={(q) =>
              setActiveModal({ type: 'otherSide', question: q })
            }
            onBackToHome={() => setActiveView('home')}
          />
        )}

        {activeView === 'about' && (
          <AboutView onBackToHome={() => setActiveView('home')} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={setActiveView} />

      {/* Concentration Mode Modal (10 min research + 2 min argumentation) */}
      {activeModal?.type === 'timer' && (
        <ConcentrationMode
          question={activeModal.question}
          initialPhase={activeModal.phase}
          onClose={() => setActiveModal(null)}
          onGenerateNew={() => {
            setActiveModal(null);
            handleGenerateQuestion();
          }}
          onToggleSave={handleToggleSave}
          isSaved={savedIds.includes(activeModal.question.id)}
          onOpenOtherSide={(q) =>
            setActiveModal({ type: 'otherSide', question: q })
          }
        />
      )}

      {/* The Other Side Modal */}
      {activeModal?.type === 'otherSide' && (
        <TheOtherSideModal
          question={activeModal.question}
          onClose={() => setActiveModal(null)}
          onOpenDetails={(q) =>
            setActiveModal({ type: 'details', question: q })
          }
        />
      )}

      {/* Question Exploration Details Modal */}
      {activeModal?.type === 'details' && (
        <QuestionDetailsModal
          question={activeModal.question}
          onClose={() => setActiveModal(null)}
          onStartResearch={(q) =>
            setActiveModal({ type: 'timer', question: q, phase: 'research' })
          }
          onToggleSave={handleToggleSave}
          isSaved={savedIds.includes(activeModal.question.id)}
        />
      )}
    </div>
  );
}
