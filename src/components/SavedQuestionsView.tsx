import React, { useState } from 'react';
import { Question, Category } from '../types';
import { ALL_CATEGORIES } from '../data/categories';
import {
  Bookmark,
  Trash2,
  Play,
  Eye,
  BookOpen,
  Search,
  Layers,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';

interface SavedQuestionsViewProps {
  savedQuestions: Question[];
  onRemove: (id: string) => void;
  onSelectForChallenge: (question: Question) => void;
  onOpenDetails: (question: Question) => void;
  onOpenOtherSide: (question: Question) => void;
  onBackToHome: () => void;
}

export const SavedQuestionsView: React.FC<SavedQuestionsViewProps> = ({
  savedQuestions,
  onRemove,
  onSelectForChallenge,
  onOpenDetails,
  onOpenOtherSide,
  onBackToHome,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter saved list
  const filteredList = savedQuestions.filter((q) => {
    const matchesCategory =
      selectedCategory === 'Todas' || q.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Extract distinct categories from saved questions
  const availableCategories = Array.from(
    new Set(savedQuestions.map((q) => q.category))
  );

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8 animate-in fade-in duration-200">
      {/* Top back button */}
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
            <Bookmark className="w-4 h-4 fill-[#D94F87]" />
            <span>Coleção pessoal salva</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#25232A]">
            Minhas questões
          </h1>
          <p className="text-xs sm:text-sm text-[#25232A]/70 mt-1">
            Questões que você favoritou para pesquisar, praticar oratória e revisar argumentos.
          </p>
        </div>
        <div className="text-sm font-semibold text-[#742A4A] bg-[#F8DCE8]/50 px-3.5 py-1.5 rounded-lg border border-[#F8DCE8]">
          Total: {savedQuestions.length} {savedQuestions.length === 1 ? 'questão' : 'questões'}
        </div>
      </div>

      {savedQuestions.length === 0 ? (
        /* Empty State */
        <div className="text-center py-16 bg-white border border-[#F8DCE8] rounded-3xl p-8 max-w-lg mx-auto">
          <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-[#FFF5F9] border border-[#F8DCE8] flex items-center justify-center text-[#D94F87]">
            <Bookmark className="w-6 h-6" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#25232A] mb-3">
            Nenhuma questão salva ainda
          </h2>
          <p className="text-xs sm:text-sm text-[#25232A]/70 mb-6 leading-relaxed">
            Ao sortear questões no gerador ou navegar pelo catálogo, clique no botão <strong>Favoritar</strong> para montar seu repertório pessoal de debate.
          </p>
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-[#D94F87] hover:bg-[#742A4A] rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4" />
            <span>Explorar questões agora</span>
          </button>
        </div>
      ) : (
        <>
          {/* Filters & Search */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#25232A]/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por palavra-chave ou termo..."
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-[#F8DCE8] rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94F87]"
              />
            </div>

            {/* Category Dropdown Filter */}
            <div className="flex items-center gap-2 shrink-0">
              <Layers className="w-4 h-4 text-[#D94F87]" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="py-2.5 px-3 text-xs bg-white border border-[#F8DCE8] rounded-xl text-[#25232A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D94F87]"
              >
                <option value="Todas">Todas as categorias ({savedQuestions.length})</option>
                {availableCategories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* List of saved questions */}
          <div className="space-y-4">
            {filteredList.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-[#F8DCE8] text-xs text-[#25232A]/60">
                Nenhuma questão salva corresponde à busca ou categoria filtrada.
              </div>
            ) : (
              filteredList.map((q) => (
                <div
                  key={q.id}
                  className="bg-white border border-[#F8DCE8] hover:border-[#D94F87]/60 rounded-2xl p-5 sm:p-6 transition-all shadow-xs hover:shadow-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs mb-3 text-[#742A4A]">
                    <div className="flex items-center gap-2 font-medium">
                      <span className="uppercase tracking-wider font-bold text-[#D94F87]">
                        {q.category}
                      </span>
                      <span aria-hidden="true" className="text-[#F8DCE8]">·</span>
                      <span className="text-[#25232A]/60">Nível {q.complexity}</span>
                      <span aria-hidden="true" className="text-[#F8DCE8]">·</span>
                      <span className="font-mono text-[11px] text-[#25232A]/40">#{q.id}</span>
                    </div>

                    <button
                      onClick={() => onRemove(q.id)}
                      className="inline-flex items-center gap-1 text-[11px] text-[#742A4A]/70 hover:text-red-600 transition-colors cursor-pointer p-1"
                      aria-label={`Remover questão ${q.id} das salvas`}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remover</span>
                    </button>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#25232A] mb-3 leading-snug">
                    “{q.question}”
                  </h3>

                  <p className="text-xs text-[#25232A]/70 mb-4 line-clamp-2">
                    {q.context}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#F8DCE8]/60">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenOtherSide(q)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#742A4A] bg-[#FFF5F9] hover:bg-[#F8DCE8] border border-[#F8DCE8] rounded-lg transition-colors cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#D94F87]" />
                        <span>O outro lado</span>
                      </button>

                      <button
                        onClick={() => onOpenDetails(q)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#742A4A] bg-[#FFF5F9] hover:bg-[#F8DCE8] border border-[#F8DCE8] rounded-lg transition-colors cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-[#D94F87]" />
                        <span>Detalhes</span>
                      </button>
                    </div>

                    <button
                      onClick={() => onSelectForChallenge(q)}
                      className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold text-white bg-[#D94F87] hover:bg-[#742A4A] rounded-xl shadow-xs transition-colors cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Iniciar desafio (10 + 2 min)</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};
