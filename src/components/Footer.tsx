import React from 'react';
import { Instagram, ArrowUp } from 'lucide-react';
import { ActiveView } from '../types';

interface FooterProps {
  onNavigate: (view: ActiveView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#F8DCE8] mt-20 pt-12 pb-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#F8DCE8]/80">
        {/* Brand & Signature */}
        <div>
          <div className="flex flex-col items-start text-left mb-2">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#742A4A]">
              LEGALMENTE
            </span>
            <span className="font-serif text-2xl font-bold tracking-tight text-[#25232A]">
              Contraponto<span className="text-[#D94F87]">.</span>
            </span>
          </div>
          <p className="font-serif text-sm italic text-[#742A4A] max-w-sm mb-2">
            “Onde o pensamento encontra o contraditório.”
          </p>
          <p className="text-xs text-[#25232A]/60">
            Uma iniciativa do projeto Legalmente voltada ao desenvolvimento intelectual de estudantes e operadores do Direito.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-[#25232A]/80">
          <button
            onClick={() => {
              onNavigate('home');
              scrollToTop();
            }}
            className="hover:text-[#D94F87] transition-colors cursor-pointer"
          >
            Início
          </button>
          <button
            onClick={() => {
              onNavigate('directory');
              scrollToTop();
            }}
            className="hover:text-[#D94F87] transition-colors cursor-pointer"
          >
            Explorar questões
          </button>
          <button
            onClick={() => {
              onNavigate('saved');
              scrollToTop();
            }}
            className="hover:text-[#D94F87] transition-colors cursor-pointer"
          >
            Minhas questões
          </button>
          <button
            onClick={() => {
              onNavigate('about');
              scrollToTop();
            }}
            className="hover:text-[#D94F87] transition-colors cursor-pointer"
          >
            Sobre
          </button>
          <a
            href="https://instagram.com/legalmentege"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#742A4A] hover:text-[#D94F87] font-bold transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>@legalmentege</span>
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#25232A]/50">
        <div>
          © {new Date().getFullYear()} Legalmente Contraponto. Todos os direitos reservados.
        </div>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 hover:text-[#742A4A] transition-colors cursor-pointer"
          aria-label="Rolar para o topo da página"
        >
          <span>Voltar ao topo</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
