import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  totalQuestions: number;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, totalQuestions }) => {
  return (
    <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-20 px-4 sm:px-6 text-center max-w-4xl mx-auto">
      {/* Editorial Kicker */}
      <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-wider uppercase text-[#742A4A] bg-[#F8DCE8]/80 rounded-full border border-[#D94F87]/20">
        <Sparkles className="w-3.5 h-3.5 text-[#D94F87]" />
        <span>Banco com {totalQuestions} controvérsias jurídicas originais</span>
      </div>

      {/* Main Title */}
      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#25232A] tracking-tight leading-[1.15] mb-6">
        Toda certeza merece um{' '}
        <span className="text-[#D94F87] italic font-serif">contraponto</span>.
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-[#25232A]/80 font-normal leading-relaxed max-w-2xl mx-auto mb-8">
        Questões que desafiam o óbvio, ampliam perspectivas e transformam conhecimento em argumentação oral consistente.
      </p>

      {/* Core Concept Rule */}
      <div className="inline-block py-2.5 px-5 bg-white border border-[#F8DCE8] rounded-xl shadow-xs mb-10">
        <p className="text-sm sm:text-base font-medium text-[#742A4A] tracking-wide">
          <strong className="font-bold text-[#D94F87]">10 minutos</strong> para investigar.{' '}
          <strong className="font-bold text-[#D94F87]">2 minutos</strong> para defender uma ideia.
        </p>
      </div>

      {/* Primary Action Button */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          onClick={onExploreClick}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-[#D94F87] hover:bg-[#742A4A] active:scale-[0.98] transition-all rounded-xl shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D94F87]/30 cursor-pointer"
        >
          <span>Explorar uma questão</span>
          <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
        </button>
      </div>
    </section>
  );
};
