import { Category, Complexity, Question } from '../types';

export function filterQuestions(
  all: Question[],
  selectedCategories: Category[],
  complexityFilter?: Complexity | 'Todas',
  searchQuery?: string
): Question[] {
  let filtered = all;

  // Filter by categories if not empty
  if (selectedCategories && selectedCategories.length > 0) {
    const catSet = new Set(selectedCategories);
    filtered = filtered.filter((q) => catSet.has(q.category));
  }

  // Filter by complexity
  if (complexityFilter && complexityFilter !== 'Todas') {
    filtered = filtered.filter((q) => q.complexity === complexityFilter);
  }

  // Filter by search query
  if (searchQuery && searchQuery.trim() !== '') {
    const query = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(
      (q) =>
        q.question.toLowerCase().includes(query) ||
        q.category.toLowerCase().includes(query) ||
        q.context.toLowerCase().includes(query) ||
        q.counterpoint.toLowerCase().includes(query) ||
        q.keywords.some((kw) => kw.toLowerCase().includes(query)) ||
        q.investigationPaths.some((p) => p.toLowerCase().includes(query))
    );
  }

  return filtered;
}

export function selectRandomQuestion(
  pool: Question[],
  recentIds: string[] = []
): Question | null {
  if (!pool || pool.length === 0) return null;

  // Try to pick from questions not in recentIds
  const unvisited = pool.filter((q) => !recentIds.includes(q.id));

  // If all questions in pool have been recently visited, allow full pool
  const candidateList = unvisited.length > 0 ? unvisited : pool;

  const randomIndex = Math.floor(Math.random() * candidateList.length);
  return candidateList[randomIndex];
}
