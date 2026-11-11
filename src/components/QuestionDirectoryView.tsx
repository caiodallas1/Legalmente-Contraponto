import React, { useState, useMemo } from 'react';
import { Question, Category, Complexity } from '../types';
import { ALL_CATEGORIES } from '../data/categories';
import {
  Compass,
  Search,
  Filter,
  Bookmark,
  Play,
  Eye,
  BookOpen,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface QuestionDirectoryViewProps {
  allQuestions: Question[];
  savedIds: string[];
  onToggleSave: (question: Question) => void;
  onSelectForChallenge: (question: Question) => void;
  onOpenDetails: (question: Question) => void;
  onOpenOtherSide: (question: Question) => void;
  onBackToHome: () => void;
}

const ITEMS_PER_PAGE = 12;

export const QuestionDirectoryView: React.FC<QuestionDirectoryViewProps> = ({
  allQuestions,
  savedIds,
  onToggleSave,
  onSelectForChallenge,
  onOpenDetails,
  onOpenOtherSide,
  onBackToHome,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('Todas');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return allQuestions.filter((q) => {
      const matchCat =
        selectedCategory === 'Todas' || q.category === selectedCategory;
      const matchComp =
        selectedComplexity === 'Todas' || q.complexity === selectedComplexity;
      const query = searchQuery.toLowerCase().trim();
      const matchSearch =
        query === '' ||
        q.question.toLowerCase().includes(query) ||
        q.category.toLowerCase().includes(query) ||
        q.context.toLowerCase().includes(query) ||
        q.counterpoint.toLowerCase().includes(query) ||
        q.keywords.some((kw) => kw.toLowerCase().includes(query));

      return matchCat && matchComp && matchSearch;
    });
  }, [allQuestions, selectedCategory, selectedComplexity, searchQuery]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / ITEMS_PER_PAGE));
  const paginatedList = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredQuestions.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredQuestions, currentPage]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleComplexityChange = (comp: string) => {
    setSelectedComplexity(comp);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setCurrentPage(1);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8 animate-in fade-in duration-200">
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
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-8 border-b border-[#F8DCE8]">
        <div>
          <div className="flex items-center gap-2 text-[#D94F87] mb-2 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-4 h-4" />
            <span>Catálogo Completo</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#25232A]">
            Explorar todas as questões
          </h1>
          <p className="text-xs sm:text-sm text-[#25232A]/70 mt-1">
            Pesquise no acervo com {allQuestions.length} controvérsias jurídicas e filosóficas selecionadas.
          </p>
        </div>
        <div className="text-xs sm:text-sm font-semibold text-[#742A4A] bg-[#F8DCE8]/50 px-4 py-2 rounded-xl border border-[#F8DCE8] shrink-0">
          Encontradas: {filteredQuestions.length} {filteredQuestions.length === 1 ? 'questão' : 'questões'}
        </div>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white border border-[#F8DCE8] rounded-2xl p-4 sm:p-5 mb-8 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#25232A]/40" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Buscar por termo, jurista (ex: Ferrajoli, Alexy, Kelsen) ou tema..."
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-[#FFF5F9]/50 border border-[#F8DCE8] rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94F87]"
          />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#742A4A] shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#D94F87]" />
            <span>Filtros:</span>
          </div>

          {/* Category Dropdown */}
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="py-2 px-3 text-xs bg-white border border-[#F8DCE8] rounded-xl text-[#25232A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94F87]"
          >
            <option value="Todas">Todas as áreas ({allQuestions.length})</option>
            {ALL_CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Complexity Dropdown */}
          <select
            value={selectedComplexity}
            onChange={(e) => handleComplexityChange(e.target.value)}
            className="py-2 px-3 text-xs bg-white border border-[#F8DCE8] rounded-xl text-[#25232A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94F87]"
          >
            <option value="Todas">Qualquer complexidade</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          {(selectedCategory !== 'Todas' || selectedComplexity !== 'Todas' || searchQuery !== '') && (
            <button
              onClick={() => {
                setSelectedCategory('Todas');
                setSelectedComplexity('Todas');
                setSearchQuery('');
                setCurrentPage(1);
              }}
              className="text-xs text-[#D94F87] hover:text-[#742A4A] font-medium underline underline-offset-2 ml-auto cursor-pointer"
            >
              Limpar filtros
            </button>
          )}
        </div>
      </div>

      {/* Grid of Questions */}
      {paginatedList.length === 0 ? (
        <div className="text-center py-16 bg-white border border-[#F8DCE8] rounded-3xl p-8 max-w-md mx-auto">
          <p className="font-serif text-xl font-bold text-[#25232A] mb-2">
            Nenhuma questão encontrada
          </p>
          <p className="text-xs text-[#25232A]/70 mb-4">
            Tente buscar com termos mais amplos ou redefinir os filtros selecionados.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('Todas');
              setSelectedComplexity('Todas');
              setSearchQuery('');
            }}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#D94F87] rounded-xl"
          >
            Ver todas as questões
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
          {paginatedList.map((q) => {
            const isSaved = savedIds.includes(q.id);

            return (
              <div
                key={q.id}
                className="bg-white border border-[#F8DCE8] hover:border-[#D94F87]/60 rounded-2xl p-6 flex flex-col justify-between transition-all shadow-xs hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs mb-3 text-[#742A4A]">
                    <div className="flex items-center gap-1.5 font-medium">
                      <span className="uppercase tracking-wider font-bold text-[#D94F87] text-[11px]">
                        {q.category}
                      </span>
                      <span aria-hidden="true" className="text-[#F8DCE8]">·</span>
                      <span className="text-[#25232A]/60 text-[11px]">{q.complexity}</span>
                      <span aria-hidden="true" className="text-[#F8DCE8]">·</span>
                      <span className="font-mono text-[10px] text-[#25232A]/40">#{q.id}</span>
                    </div>

                    <button
                      onClick={() => onToggleSave(q)}
                      className="p-1 text-[#25232A]/50 hover:text-[#D94F87] transition-colors cursor-pointer"
                      aria-label={isSaved ? `Remover ${q.id} dos favoritos` : `Favoritar ${q.id}`}
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#D94F87] text-[#D94F87]' : ''}`} />
                    </button>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#25232A] mb-3 leading-snug">
                    “{q.question}”
                  </h3>

                  <p className="text-xs text-[#25232A]/70 mb-4 line-clamp-2">
                    {q.context}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F8DCE8]/60 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onOpenOtherSide(q)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-semibold text-[#742A4A] bg-[#FFF5F9] hover:bg-[#F8DCE8] border border-[#F8DCE8] rounded-lg transition-colors cursor-pointer"
                    >
                      <Eye className="w-3 h-3 text-[#D94F87]" />
                      <span>Outro lado</span>
                    </button>

                    <button
                      onClick={() => onOpenDetails(q)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-semibold text-[#742A4A] bg-[#FFF5F9] hover:bg-[#F8DCE8] border border-[#F8DCE8] rounded-lg transition-colors cursor-pointer"
                    >
                      <BookOpen className="w-3 h-3 text-[#D94F87]" />
                      <span>Detalhes</span>
                    </button>
                  </div>

                  <button
                    onClick={() => onSelectForChallenge(q)}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-white bg-[#D94F87] hover:bg-[#742A4A] rounded-xl shadow-xs transition-colors cursor-pointer"
                  >
                    <Play className="w-3 h-3 fill-white" />
                    <span>Praticar</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 pt-6 border-t border-[#F8DCE8]">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold bg-white border border-[#F8DCE8] rounded-lg text-[#25232A] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FFF5F9] cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <span className="text-xs font-medium text-[#742A4A]">
            Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold bg-white border border-[#F8DCE8] rounded-lg text-[#25232A] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-[#FFF5F9] cursor-pointer"
          >
            <span>Próxima</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};
