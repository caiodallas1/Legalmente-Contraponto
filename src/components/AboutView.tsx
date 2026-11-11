import React from 'react';
import { Sparkles, ArrowLeft, Instagram, BookOpen, Clock, Mic, CheckCircle } from 'lucide-react';

interface AboutViewProps {
  onBackToHome: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onBackToHome }) => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 animate-in fade-in duration-200">
      {/* Top back navigation */}
      <div className="mb-6">
        <button
          onClick={onBackToHome}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#742A4A] hover:text-[#D94F87] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Voltar ao gerador principal</span>
        </button>
      </div>

      {/* Header */}
      <div className="pb-8 mb-10 border-b border-[#F8DCE8]">
        <div className="flex items-center gap-2 text-[#D94F87] mb-3 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Manifesto & Método</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#25232A] mb-4 leading-tight">
          Onde o pensamento encontra o contraditório.
        </h1>
        <p className="text-base sm:text-lg text-[#25232A]/80 leading-relaxed font-normal">
          O Legalmente Contraponto é uma extensão do projeto <strong>Legalmente</strong>, voltada para estudantes de Direito e operadores jurídicos que buscam ampliar repertório intelectual, desafiar o pensamento automático e dominar a oratória fundamentada.
        </p>
      </div>

      {/* Philosophy Section */}
      <div className="bg-white border border-[#F8DCE8] rounded-3xl p-6 sm:p-10 mb-10 shadow-xs">
        <h2 className="font-serif text-2xl font-bold text-[#742A4A] mb-4">
          Não é um aplicativo de concurso. É uma ferramenta de rigor intelectual.
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-[#25232A]/85 leading-relaxed">
          <p>
            O Direito não é a memorização fria de artigos de lei, nem a repetição automática de decisões judiciais. O verdadeiro pensamento jurídico vive na tensão entre premissas concorrentes, no conflito entre valores fundamentais igualmente legítimos e na capacidade de enxergar a coerência da tese adversária.
          </p>
          <p>
            Criamos o <strong>Legalmente Contraponto</strong> para afastar a superficialidade das redes sociais e restaurar a tradição dialética do debate: investigar com profundidade, sintetizar em tempo recorde e defender ideias com clareza e elegância verbal.
          </p>
        </div>
      </div>

      {/* The 10 + 2 Method */}
      <div className="mb-12">
        <h2 className="font-serif text-2xl font-bold text-[#25232A] mb-6 text-center">
          O Método 10 + 2
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 10 Minutos */}
          <div className="bg-white border-2 border-[#F8DCE8] rounded-2xl p-6 hover:border-[#D94F87] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#FFF5F9] border border-[#F8DCE8] flex items-center justify-center text-[#D94F87] mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#25232A] mb-2">
              10 minutos para investigar
            </h3>
            <p className="text-xs sm:text-sm text-[#25232A]/75 leading-relaxed">
              Consulte livremente artigos doutrinários, jurisprudência de tribunais superiores, precedentes internacionais e teorias filosóficas. Identifique as premissas fortes de ambos os lados e estruture sua linha de raciocínio.
            </p>
          </div>

          {/* 2 Minutos */}
          <div className="bg-white border-2 border-[#F8DCE8] rounded-2xl p-6 hover:border-[#D94F87] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#FFF5F9] border border-[#F8DCE8] flex items-center justify-center text-[#742A4A] mb-4">
              <Mic className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#25232A] mb-2">
              2 minutos para argumentar
            </h3>
            <p className="text-xs sm:text-sm text-[#25232A]/75 leading-relaxed">
              Fale em voz alta. Organize tese, sustentação probatória e antecipação de objeções dentro do limite estrito de dois minutos. Treine a oratória sem depender de leitura passiva de resumos.
            </p>
          </div>
        </div>
      </div>

      {/* Principles */}
      <div className="bg-[#FFF5F9] border border-[#F8DCE8] rounded-3xl p-6 sm:p-10 mb-12">
        <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#742A4A] mb-6">
          Princípios do Contraponto
        </h2>
        <ul className="space-y-4 text-xs sm:text-sm text-[#25232A]/85">
          <li className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-[#D94F87] shrink-0 mt-0.5" />
            <span><strong>Princípio da Caridade Epistêmica:</strong> Interprete o argumento do seu adversário em sua versão mais forte e inteligente antes de tentar refutá-lo.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-[#D94F87] shrink-0 mt-0.5" />
            <span><strong>Antidogmatismo:</strong> Toda certeza jurídica que você considera inquestionável merece ser submetida ao contraditório para testar sua solidez.</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle className="w-4 h-4 text-[#D94F87] shrink-0 mt-0.5" />
            <span><strong>Síntese e Oratória:</strong> Saber muito não basta se você não conseguir expressar com precisão cirúrgica em poucos minutos diante de uma banca ou tribunal.</span>
          </li>
        </ul>
      </div>

      {/* Instagram Banner */}
      <div className="bg-gradient-to-r from-[#D94F87] to-[#742A4A] text-white rounded-3xl p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#F8DCE8]">
            Comunidade Legalmente
          </span>
          <h3 className="font-serif text-2xl font-bold mt-1 mb-2">
            Acompanhe reflexões diárias no Instagram
          </h3>
          <p className="text-xs sm:text-sm text-white/90 max-w-md">
            Siga o perfil oficial para análises, provocações intelectuais, dicas de oratória e debates com a comunidade.
          </p>
        </div>

        <a
          href="https://instagram.com/legalmentege"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#742A4A] hover:bg-[#F8DCE8] text-xs font-bold rounded-xl shadow-xs transition-colors shrink-0"
        >
          <Instagram className="w-4 h-4" />
          <span>Seguir @legalmentege</span>
        </a>
      </div>
    </div>
  );
};
