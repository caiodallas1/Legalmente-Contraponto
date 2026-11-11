/**
 * Timer utility functions for precise calculation and display
 */

export function formatTime(seconds: number): string {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const mins = Math.floor(safeSeconds / 60);
  const secs = safeSeconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

export function calculateProgressPercentage(remaining: number, total: number): number {
  if (total <= 0) return 0;
  const progress = ((total - remaining) / total) * 100;
  return Math.min(100, Math.max(0, Math.round(progress * 10) / 10));
}

export function calculateRemainingFromTimestamp(
  totalSeconds: number,
  startTimestamp: number | null,
  accumulatedMs: number
): number {
  if (!startTimestamp) {
    return Math.max(0, totalSeconds - Math.floor(accumulatedMs / 1000));
  }
  const now = Date.now();
  const currentElapsedMs = accumulatedMs + (now - startTimestamp);
  const remaining = totalSeconds - Math.floor(currentElapsedMs / 1000);
  return Math.max(0, remaining);
}
