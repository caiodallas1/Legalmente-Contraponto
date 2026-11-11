import React from 'react';
import { Question } from '../types';
import { BookOpen, X, Timer, Bookmark, Compass, CheckCircle2 } from 'lucide-react';

interface QuestionDetailsModalProps {
  question: Question;
  onClose: () => void;
  onStartResearch: (question: Question) => void;
  onToggleSave: (question: Question) => void;
  isSaved: boolean;
}

export const QuestionDetailsModal: React.FC<QuestionDetailsModalProps> = ({
  question,
  onClose,
  onStartResearch,
  onToggleSave,
  isSaved,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-[#25232A]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="details-modal-title"
    >
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#F8DCE8] p-6 sm:p-10 relative my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#25232A]/50 hover:text-[#25232A] hover:bg-[#F8DCE8]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94F87] cursor-pointer"
          aria-label="Fechar painel de exploração da questão"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & ID Header */}
        <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-wider text-[#D94F87]">
          <span>{question.category}</span>
          <span aria-hidden="true" className="text-[#F8DCE8]">·</span>
          <span className="text-[#25232A]/60">Nível {question.complexity}</span>
          <span aria-hidden="true" className="text-[#F8DCE8]">·</span>
          <span className="text-[#25232A]/40 font-mono">#{question.id}</span>
        </div>

        {/* Main Question */}
        <h2 id="details-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-[#25232A] mb-8 leading-snug">
          “{question.question}”
        </h2>

        {/* SECTION 1: O conflito central */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#742A4A]">
            <Compass className="w-4 h-4 text-[#D94F87]" />
            <span>O conflito central</span>
          </div>
          <div className="bg-[#FFF5F9] border-l-3 border-[#D94F87] p-4 rounded-r-xl">
            <p className="text-sm sm:text-base text-[#25232A]/85 leading-relaxed">
              {question.context}
            </p>
          </div>
        </div>

        {/* SECTION 2: Caminhos para investigar (3 pontos de pesquisa) */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-wider text-[#742A4A]">
            <BookOpen className="w-4 h-4 text-[#D94F87]" />
            <span>Caminhos para investigar</span>
          </div>
          <ul className="space-y-2.5">
            {question.investigationPaths.map((path, index) => (
              <li
                key={index}
                className="flex items-start gap-3 p-3 bg-white border border-[#F8DCE8] rounded-xl text-xs sm:text-sm text-[#25232A]/90 hover:border-[#D94F87]/60 transition-colors"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-[#F8DCE8] text-[#742A4A] font-bold text-xs flex items-center justify-center mt-0.5">
                  {index + 1}
                </span>
                <span className="leading-snug pt-0.5">{path}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* SECTION 3: O contraponto */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#742A4A]">
            <CheckCircle2 className="w-4 h-4 text-[#D94F87]" />
            <span>O contraponto</span>
          </div>
          <div className="bg-[#FFF5F9] border border-[#F8DCE8] p-4 rounded-xl">
            <p className="font-serif text-sm sm:text-base font-semibold text-[#742A4A] italic leading-relaxed">
              “{question.counterpoint}”
            </p>
          </div>
        </div>

        {/* Actions bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-[#F8DCE8]/70">
          <button
            onClick={() => onToggleSave(question)}
            className={`inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-semibold transition-colors cursor-pointer border ${
              isSaved
                ? 'bg-[#F8DCE8] text-[#742A4A] border-[#D94F87]/40'
                : 'bg-white text-[#25232A]/70 border-[#F8DCE8] hover:border-[#D94F87] hover:text-[#742A4A]'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#D94F87] text-[#D94F87]' : ''}`} />
            <span>{isSaved ? 'Remover dos favoritos' : 'Salvar questão'}</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onStartResearch(question);
            }}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 text-xs font-bold text-white bg-[#D94F87] hover:bg-[#742A4A] rounded-xl shadow-md transition-all active:scale-[0.98] cursor-pointer"
          >
            <Timer className="w-4 h-4" />
            <span>Iniciar desafio de 10 min</span>
          </button>
        </div>
      </div>
    </div>
  );
};
