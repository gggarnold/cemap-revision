import type { FlashcardState } from '../db/db'

export type Rating = 'again' | 'hard' | 'good' | 'easy'

const DAY_MS = 24 * 60 * 60 * 1000

/**
 * A simplified SM-2 spaced-repetition scheduler.
 * - "Again": reset repetitions, review again in ~10 minutes (same day).
 * - "Hard": short interval, ease factor reduced slightly.
 * - "Good": standard SM-2 progression.
 * - "Easy": longer interval, ease factor increased.
 */
export function schedule(prev: FlashcardState | undefined, rating: Rating, now = Date.now()): FlashcardState {
  const base: FlashcardState = prev ?? {
    cardId: '', easeFactor: 2.5, intervalDays: 0, repetitions: 0, dueAt: now, starred: false
  }

  let { easeFactor, intervalDays, repetitions } = base

  if (rating === 'again') {
    repetitions = 0
    intervalDays = 0
    easeFactor = Math.max(1.3, easeFactor - 0.2)
    return { ...base, easeFactor, intervalDays, repetitions, dueAt: now + 10 * 60 * 1000, lastRating: rating }
  }

  const qualityAdjust = rating === 'hard' ? -0.15 : rating === 'easy' ? 0.15 : 0
  easeFactor = Math.max(1.3, easeFactor + qualityAdjust)

  if (repetitions === 0) {
    intervalDays = rating === 'hard' ? 1 : rating === 'easy' ? 4 : 1
  } else if (repetitions === 1) {
    intervalDays = rating === 'hard' ? 2 : rating === 'easy' ? 8 : 6
  } else {
    intervalDays = Math.round(intervalDays * easeFactor)
  }

  repetitions += 1

  return { ...base, easeFactor, intervalDays, repetitions, dueAt: now + intervalDays * DAY_MS, lastRating: rating }
}

export function isDue(state: FlashcardState | undefined, now = Date.now()): boolean {
  if (!state) return true
  return state.dueAt <= now
}
