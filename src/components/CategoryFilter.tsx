import React from 'react';
import { ALL_CATEGORIES } from '../data/categories';
import { Category } from '../types';
import { Check, Layers } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategories: Category[];
  onToggleCategory: (category: Category) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
  categoryCounts: Record<Category, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategories,
  onToggleCategory,
  onSelectAll,
  onClearAll,
  categoryCounts,
}) => {
  const isAllSelected = selectedCategories.length === 0 || selectedCategories.length === ALL_CATEGORIES.length;

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mb-8">
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#D94F87]" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#742A4A]">
            Filtrar por áreas ({isAllSelected ? 'Todas selecionadas' : `${selectedCategories.length} selecionadas`})
          </span>
        </div>
        {!isAllSelected && (
          <button
            onClick={onSelectAll}
            className="text-xs text-[#D94F87] hover:text-[#742A4A] font-medium underline underline-offset-2 transition-colors cursor-pointer"
          >
            Selecionar todas
          </button>
        )}
      </div>

      {/* Horizontal scroll container with pleasant scrollbar & touch dragging */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar scroll-smooth" tabIndex={0} aria-label="Filtro de categorias horizontais">
        {/* "Todas" button */}
        <button
          onClick={onSelectAll}
          className={`shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer border ${
            isAllSelected
              ? 'bg-[#742A4A] text-white border-[#742A4A] shadow-xs'
              : 'bg-white text-[#25232A]/80 border-[#F8DCE8] hover:border-[#D94F87] hover:text-[#742A4A]'
          }`}
          aria-pressed={isAllSelected}
        >
          {isAllSelected && <Check className="w-3.5 h-3.5 text-white" />}
          <span>Todas ({Object.values(categoryCounts).reduce((a, b) => a + b, 0)})</span>
        </button>

        {/* 21 Categories */}
        {ALL_CATEGORIES.map((cat) => {
          const isSelected = !isAllSelected && selectedCategories.includes(cat);
          const count = categoryCounts[cat] || 0;

          return (
            <button
              key={cat}
              onClick={() => onToggleCategory(cat)}
              className={`shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer border ${
                isSelected
                  ? 'bg-[#D94F87] text-white border-[#D94F87] shadow-xs'
                  : 'bg-white text-[#25232A]/80 border-[#F8DCE8] hover:border-[#D94F87] hover:text-[#742A4A]'
              }`}
              aria-pressed={isSelected}
            >
              {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
              <span>{cat}</span>
              <span
                className={`text-[10px] ml-0.5 px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-white/25 text-white' : 'bg-[#FFF5F9] text-[#742A4A]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
