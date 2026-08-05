import type { Question } from '../data/types'

export interface ShuffledQuestion extends Question {
  displayOptions: string[]
  displayCorrectIndex: number[]
  // maps a display index back to the original option index, for explanation lookups
  originalIndexOf: number[]
}

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr]
  let s = seed
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280
    const j = Math.floor((s / 233280) * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Randomises option order for display while preserving the correct answer mapping. */
export function shuffleQuestion(question: Question, seed?: number): ShuffledQuestion {
  const s = seed ?? Math.floor(Math.random() * 1_000_000)
  const indices = question.options.map((_, i) => i)
  const shuffled = seededShuffle(indices, s)
  const displayOptions = shuffled.map(i => question.options[i])
  const displayCorrectIndex = question.correctIndex.map(ci => shuffled.indexOf(ci))
  return { ...question, displayOptions, displayCorrectIndex, originalIndexOf: shuffled }
}

export function isCorrectAnswer(sq: ShuffledQuestion, selected: number[]): boolean {
  const a = [...selected].sort()
  const b = [...sq.displayCorrectIndex].sort()
  return a.length === b.length && a.every((v, i) => v === b[i])
}
