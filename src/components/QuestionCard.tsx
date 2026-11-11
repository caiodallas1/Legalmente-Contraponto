import React, { useState } from 'react';
import { Question } from '../types';
import {
  Shuffle,
  Bookmark,
  Sparkles,
  Timer,
  Eye,
  BookOpen,
  ArrowRight,
  Check,
} from 'lucide-react';

interface QuestionCardProps {
  currentQuestion: Question | null;
  onGenerate: () => void;
  onStartResearch: (question: Question) => void;
  onToggleSave: (question: Question) => void;
  isSaved: boolean;
  onOpenOtherSide: (question: Question) => void;
  onOpenDetails: (question: Question) => void;
  isShuffling: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  currentQuestion,
  onGenerate,
  onStartResearch,
  onToggleSave,
  isSaved,
  onOpenOtherSide,
  onOpenDetails,
  isShuffling,
}) => {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSaveClick = () => {
    if (!currentQuestion) return;
    onToggleSave(currentQuestion);
    setToastMessage(isSaved ? 'Removida das suas questões' : 'Salva nas suas questões!');
    setTimeout(() => setToastMessage(null), 2400);
  };

  return (
    <div id="generator-card" className="w-full max-w-3xl mx-auto px-4 mb-16">
      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          className="fixed bottom-6 right-6 z-50 bg-[#25232A] text-white text-xs font-medium px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-150"
        >
          <Check className="w-3.5 h-3.5 text-[#D94F87]" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="bg-white border-2 border-[#F8DCE8] rounded-2xl shadow-sm hover:shadow-md transition-all p-6 sm:p-10 relative overflow-hidden">
        {/* Subtle decorative geometric bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D94F87] via-[#F8DCE8] to-[#742A4A]" />

        {!currentQuestion ? (
          /* INITIAL STATE */
          <div className="py-12 sm:py-16 text-center">
            <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-[#FFF5F9] border border-[#F8DCE8] flex items-center justify-center text-[#D94F87]">
              <Sparkles className="w-7 h-7" />
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#25232A] mb-4">
              Qual certeza você vai questionar hoje?
            </h2>

            <p className="text-sm sm:text-base text-[#25232A]/70 max-w-md mx-auto mb-8 leading-relaxed">
              Sorteie uma questão controversa selecionada para provocar conflito intelectual e exigir fundamentação rigorosa.
            </p>

            <button
              onClick={onGenerate}
              disabled={isShuffling}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#D94F87] hover:bg-[#742A4A] active:scale-[0.98] transition-all rounded-xl shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D94F87]/30 cursor-pointer disabled:opacity-70"
            >
              <Shuffle className={`w-5 h-5 ${isShuffling ? 'animate-spin' : ''}`} />
              <span>{isShuffling ? 'Sorteando...' : 'Gerar contraponto'}</span>
            </button>
          </div>
        ) : (
          /* GENERATED QUESTION STATE */
          <div className={`transition-opacity duration-200 ${isShuffling ? 'opacity-40 scale-[0.99]' : 'opacity-100 scale-100'}`}>
            {/* Header Metadata (Clean unboxed text, no pills!) */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-6 border-b border-[#F8DCE8]/80 text-xs text-[#742A4A]">
              <div className="flex items-center gap-2 font-medium">
                <span className="uppercase tracking-wider font-semibold text-[#D94F87]">
                  {currentQuestion.category}
                </span>
                <span aria-hidden="true" className="text-[#F8DCE8]">·</span>
                <span className="text-[#25232A]/70">
                  Nível {currentQuestion.complexity}
                </span>
                <span aria-hidden="true" className="text-[#F8DCE8]">·</span>
                <span className="text-[#25232A]/50 font-mono text-[11px]">
                  #{currentQuestion.id}
                </span>
              </div>

              {/* Bookmark save toggle */}
              <button
                onClick={handleSaveClick}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                  isSaved
                    ? 'bg-[#F8DCE8] text-[#742A4A] border-[#D94F87]/40'
                    : 'bg-[#FFF5F9] text-[#25232A]/70 border-transparent hover:border-[#F8DCE8] hover:text-[#742A4A]'
                }`}
                aria-label={isSaved ? 'Remover questão dos favoritos' : 'Salvar questão nos favoritos'}
              >
                <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#D94F87] text-[#D94F87]' : ''}`} />
                <span>{isSaved ? 'Salva' : 'Favoritar'}</span>
              </button>
            </div>

            {/* Central Question Display */}
            <div className="my-6 sm:my-8">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#25232A] leading-[1.3] tracking-tight">
                “{currentQuestion.question}”
              </h2>
            </div>

            {/* Keywords inline metadata */}
            <div className="flex flex-wrap items-center gap-2 mb-8 text-xs text-[#25232A]/60">
              <span className="font-semibold text-[#742A4A]/80">Palavras-chave:</span>
              {currentQuestion.keywords.map((kw, idx) => (
                <React.Fragment key={kw}>
                  <span className="hover:text-[#25232A] transition-colors">{kw}</span>
                  {idx < currentQuestion.keywords.length - 1 && (
                    <span aria-hidden="true" className="text-[#F8DCE8]">/</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Secondary actions bar: "O outro lado" & "Explorar a questão" */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 pt-6 border-t border-[#F8DCE8]/70">
              <button
                onClick={() => onOpenOtherSide(currentQuestion)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#742A4A] bg-[#FFF5F9] hover:bg-[#F8DCE8] border border-[#F8DCE8] rounded-xl transition-all cursor-pointer group"
                aria-label="Abrir perspectiva alternativa - O outro lado"
              >
                <Eye className="w-4 h-4 text-[#D94F87] transition-transform group-hover:scale-110" />
                <span>O outro lado</span>
              </button>

              <button
                onClick={() => onOpenDetails(currentQuestion)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#742A4A] bg-[#FFF5F9] hover:bg-[#F8DCE8] border border-[#F8DCE8] rounded-xl transition-all cursor-pointer group"
                aria-label="Explorar o conflito central e caminhos de investigação"
              >
                <BookOpen className="w-4 h-4 text-[#D94F87] transition-transform group-hover:scale-110" />
                <span>Explorar a questão</span>
              </button>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
              <button
                onClick={onGenerate}
                disabled={isShuffling}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#742A4A] bg-[#F8DCE8]/50 hover:bg-[#F8DCE8] active:scale-[0.98] border border-[#F8DCE8] rounded-xl transition-all cursor-pointer disabled:opacity-60 order-2 sm:order-1"
                aria-label="Sortear outra questão contraponto"
              >
                <Shuffle className={`w-4 h-4 text-[#D94F87] ${isShuffling ? 'animate-spin' : ''}`} />
                <span>Gerar outra questão</span>
              </button>

              <button
                onClick={() => onStartResearch(currentQuestion)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-[#D94F87] hover:bg-[#742A4A] active:scale-[0.98] rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer order-1 sm:order-2 group"
                aria-label="Iniciar cronômetro de pesquisa de 10 minutos"
              >
                <Timer className="w-4 h-4 transition-transform group-hover:rotate-12" />
                <span>Iniciar pesquisa · 10 min</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
