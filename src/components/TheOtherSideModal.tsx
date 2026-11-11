import React from 'react';
import { Question } from '../types';
import { Eye, X, ArrowRight, BookOpen } from 'lucide-react';

interface TheOtherSideModalProps {
  question: Question;
  onClose: () => void;
  onOpenDetails: (question: Question) => void;
}

export const TheOtherSideModal: React.FC<TheOtherSideModalProps> = ({
  question,
  onClose,
  onOpenDetails,
}) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-[#25232A]/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="other-side-title"
    >
      <div className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-[#F8DCE8] p-6 sm:p-9 relative my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#25232A]/50 hover:text-[#25232A] hover:bg-[#F8DCE8]/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94F87] cursor-pointer"
          aria-label="Fechar modal do outro lado"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 mb-4 text-[#742A4A]">
          <Eye className="w-5 h-5 text-[#D94F87]" />
          <span className="text-xs uppercase tracking-widest font-bold">
            Legalmente Contraponto · O Outro Lado
          </span>
        </div>

        <h3 id="other-side-title" className="font-serif text-2xl font-bold text-[#25232A] mb-2">
          Perspectiva alternativa
        </h3>

        <p className="text-xs text-[#25232A]/70 mb-6">
          Nenhuma verdade jurídica é inquestionável. Este contraponto desafia sua primeira intuição sem induzir a uma resposta pronta.
        </p>

        {/* Primary Question Reference */}
        <div className="bg-[#FFF5F9] border-l-4 border-[#F8DCE8] p-4 rounded-r-xl mb-6">
          <span className="text-[11px] uppercase tracking-wider font-semibold text-[#742A4A]/80 block mb-1">
            Questão principal sorteada:
          </span>
          <p className="font-serif text-sm sm:text-base text-[#25232A]/90 italic font-medium">
            “{question.question}”
          </p>
        </div>

        {/* The Alternative Perspective Card */}
        <div className="bg-[#FFF5F9] border-2 border-[#D94F87]/30 rounded-2xl p-5 sm:p-6 mb-8 relative">
          <span className="inline-block px-2.5 py-0.5 text-[11px] font-bold text-white bg-[#D94F87] rounded-md uppercase tracking-wider mb-3">
            O contraponto provocativo
          </span>
          <p className="font-serif text-lg sm:text-xl font-bold text-[#742A4A] leading-relaxed">
            “{question.counterpoint}”
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <button
            onClick={() => {
              onClose();
              onOpenDetails(question);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-[#742A4A] bg-[#F8DCE8]/60 hover:bg-[#F8DCE8] rounded-xl border border-[#F8DCE8] transition-colors cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-[#D94F87]" />
            <span>Ver conflito central e caminhos</span>
          </button>

          <button
            onClick={onClose}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#D94F87] hover:bg-[#742A4A] rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <span>Retornar ao desafio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
