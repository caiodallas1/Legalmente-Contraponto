const FAVORITES_STORAGE_KEY = 'legalmente_contraponto_favorites';
const RECENT_IDS_KEY = 'legalmente_contraponto_recent_ids';
const CHALLENGES_STATS_KEY = 'legalmente_contraponto_stats';

export function getSavedQuestionIds(): string[] {
  try {
    const raw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveQuestionId(id: string): string[] {
  try {
    const current = getSavedQuestionIds();
    if (!current.includes(id)) {
      const updated = [id, ...current];
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updated));
      return updated;
    }
    return current;
  } catch {
    return [];
  }
}

export function removeSavedQuestionId(id: string): string[] {
  try {
    const current = getSavedQuestionIds();
    const updated = current.filter((item) => item !== id);
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export function toggleSaveQuestionId(id: string): { isSaved: boolean; list: string[] } {
  const current = getSavedQuestionIds();
  if (current.includes(id)) {
    const next = removeSavedQuestionId(id);
    return { isSaved: false, list: next };
  } else {
    const next = saveQuestionId(id);
    return { isSaved: true, list: next };
  }
}

export function getRecentQuestionIds(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_IDS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addRecentQuestionId(id: string, maxRecent: number = 20): string[] {
  try {
    const current = getRecentQuestionIds().filter((i) => i !== id);
    const updated = [id, ...current].slice(0, maxRecent);
    localStorage.setItem(RECENT_IDS_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export interface ChallengeStats {
  completedDebates: number;
  totalResearchSeconds: number;
  totalArgumentSeconds: number;
}

export function getChallengeStats(): ChallengeStats {
  try {
    const raw = localStorage.getItem(CHALLENGES_STATS_KEY);
    return raw
      ? JSON.parse(raw)
      : { completedDebates: 0, totalResearchSeconds: 0, totalArgumentSeconds: 0 };
  } catch {
    return { completedDebates: 0, totalResearchSeconds: 0, totalArgumentSeconds: 0 };
  }
}

export function recordCompletedChallenge(researchSeconds: number, argumentSeconds: number): ChallengeStats {
  try {
    const stats = getChallengeStats();
    const updated: ChallengeStats = {
      completedDebates: stats.completedDebates + 1,
      totalResearchSeconds: stats.totalResearchSeconds + researchSeconds,
      totalArgumentSeconds: stats.totalArgumentSeconds + argumentSeconds,
    };
    localStorage.setItem(CHALLENGES_STATS_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return { completedDebates: 1, totalResearchSeconds: researchSeconds, totalArgumentSeconds: argumentSeconds };
  }
}
