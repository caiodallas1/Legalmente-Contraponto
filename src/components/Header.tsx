import React, { useState } from 'react';
import { ActiveView } from '../types';
import { Bookmark, Compass, BookOpen, Info, Instagram, Menu, X } from 'lucide-react';

interface HeaderProps {
  activeView: ActiveView;
  onNavigate: (view: ActiveView) => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onNavigate,
  savedCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (view: ActiveView) => {
    onNavigate(view);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FFF5F9]/95 backdrop-blur-md border-b border-[#F8DCE8]/80 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Mark */}
        <button
          onClick={() => handleNav('home')}
          className="flex flex-col items-start text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94F87] rounded-sm p-1"
          aria-label="Ir para a página inicial do Legalmente Contraponto"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#742A4A] group-hover:text-[#D94F87] transition-colors">
            LEGALMENTE
          </span>
          <span className="font-serif text-2xl font-bold tracking-tight text-[#25232A] leading-tight -mt-0.5">
            Contraponto<span className="text-[#D94F87]">.</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navegação principal">
          <button
            onClick={() => handleNav('home')}
            className={`px-3 py-2 text-sm font-medium transition-colors border-b-2 ${
              activeView === 'home'
                ? 'border-[#D94F87] text-[#742A4A]'
                : 'border-transparent text-[#25232A]/70 hover:text-[#25232A] hover:border-[#F8DCE8]'
            }`}
          >
            Início
          </button>

          <button
            onClick={() => handleNav('directory')}
            className={`px-3 py-2 text-sm font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
              activeView === 'directory'
                ? 'border-[#D94F87] text-[#742A4A]'
                : 'border-transparent text-[#25232A]/70 hover:text-[#25232A] hover:border-[#F8DCE8]'
            }`}
          >
            <Compass className="w-4 h-4 text-[#D94F87]" />
            <span>Explorar questões</span>
          </button>

          <button
            onClick={() => handleNav('saved')}
            className={`px-3 py-2 text-sm font-medium transition-colors border-b-2 flex items-center gap-1.5 ${
              activeView === 'saved'
                ? 'border-[#D94F87] text-[#742A4A]'
                : 'border-transparent text-[#25232A]/70 hover:text-[#25232A] hover:border-[#F8DCE8]'
            }`}
          >
            <Bookmark className="w-4 h-4 text-[#D94F87]" />
            <span>Minhas questões</span>
            {savedCount > 0 && (
              <span className="ml-1 text-[11px] font-semibold text-[#742A4A] bg-[#F8DCE8] px-1.5 py-0.5 rounded-full">
                {savedCount}
              </span>
            )}
          </button>

          <button
            onClick={() => handleNav('about')}
            className={`px-3 py-2 text-sm font-medium transition-colors border-b-2 ${
              activeView === 'about'
                ? 'border-[#D94F87] text-[#742A4A]'
                : 'border-transparent text-[#25232A]/70 hover:text-[#25232A] hover:border-[#F8DCE8]'
            }`}
          >
            Sobre
          </button>

          <div className="h-4 w-px bg-[#F8DCE8] mx-2" aria-hidden="true" />

          {/* Instagram link */}
          <a
            href="https://instagram.com/legalmentege"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-[#742A4A] hover:text-[#D94F87] bg-[#F8DCE8]/60 hover:bg-[#F8DCE8] px-3 py-1.5 rounded-md transition-all"
            aria-label="Acessar perfil do Instagram @legalmentege em nova aba"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@legalmentege</span>
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="https://instagram.com/legalmentege"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#742A4A] p-2 hover:text-[#D94F87]"
            aria-label="Instagram @legalmentege"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#25232A] hover:text-[#D94F87] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94F87] rounded-md"
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFF5F9] border-b border-[#F8DCE8] px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => handleNav('home')}
            className={`w-full text-left px-4 py-3 rounded-md text-base font-medium flex items-center justify-between ${
              activeView === 'home'
                ? 'bg-[#F8DCE8] text-[#742A4A] font-semibold'
                : 'text-[#25232A] hover:bg-[#F8DCE8]/50'
            }`}
          >
            <span>Início</span>
          </button>

          <button
            onClick={() => handleNav('directory')}
            className={`w-full text-left px-4 py-3 rounded-md text-base font-medium flex items-center justify-between ${
              activeView === 'directory'
                ? 'bg-[#F8DCE8] text-[#742A4A] font-semibold'
                : 'text-[#25232A] hover:bg-[#F8DCE8]/50'
            }`}
          >
            <span className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-[#D94F87]" />
              Explorar questões
            </span>
          </button>

          <button
            onClick={() => handleNav('saved')}
            className={`w-full text-left px-4 py-3 rounded-md text-base font-medium flex items-center justify-between ${
              activeView === 'saved'
                ? 'bg-[#F8DCE8] text-[#742A4A] font-semibold'
                : 'text-[#25232A] hover:bg-[#F8DCE8]/50'
            }`}
          >
            <span className="flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-[#D94F87]" />
              Minhas questões
            </span>
            {savedCount > 0 && (
              <span className="text-xs font-bold text-[#742A4A] bg-[#F8DCE8] px-2 py-0.5 rounded-full">
                {savedCount}
              </span>
            )}
          </button>

          <button
            onClick={() => handleNav('about')}
            className={`w-full text-left px-4 py-3 rounded-md text-base font-medium flex items-center justify-between ${
              activeView === 'about'
                ? 'bg-[#F8DCE8] text-[#742A4A] font-semibold'
                : 'text-[#25232A] hover:bg-[#F8DCE8]/50'
            }`}
          >
            <span className="flex items-center gap-2">
              <Info className="w-4 h-4 text-[#D94F87]" />
              Sobre o Legalmente Contraponto
            </span>
          </button>

          <div className="pt-3 border-t border-[#F8DCE8] px-4">
            <a
              href="https://instagram.com/legalmentege"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-white bg-[#D94F87] rounded-md hover:bg-[#742A4A] transition-colors shadow-xs"
            >
              <Instagram className="w-4 h-4" />
              <span>Siga @legalmentege</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
