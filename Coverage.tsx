import { db } from '../db/db'
import { allTopics } from '../data/curriculum'
import { lessons } from '../data/lessons'
import { getQuestionById } from '../data/allQuestions'
import { getStreak } from '../db/db'
import type { ExamKey } from '../data/types'

export interface TopicAccuracy {
  module: ExamKey
  unitKey: string
  topicKey: string
  attempts: number
  correct: number
  accuracy: number
}

export async function getLessonCompletion(): Promise<{ completed: number; total: number }> {
  const authored = lessons.length
  const progress = await db.lessonProgress.toArray()
  const completed = progress.filter(p => p.completed).length
  return { completed, total: authored }
}

export async function getModuleProgress(module: ExamKey): Promise<{ completedTopics: number; totalTopics: number; authoredTopics: number }> {
  const topics = allTopics().filter(t => t.module === module)
  const authoredTopics = topics.filter(t => t.status === 'complete').length
  const progress = await db.lessonProgress.toArray()
  const completedIds = new Set(progress.filter(p => p.completed).map(p => p.lessonId))
  const relevantLessons = lessons.filter(l => l.module === module)
  const completedTopics = relevantLessons.filter(l => completedIds.has(l.id)).length
  return { completedTopics, totalTopics: topics.length, authoredTopics }
}

export async function getAccuracyByTopic(): Promise<TopicAccuracy[]> {
  const attempts = await db.questionAttempts.toArray()
  const byKey = new Map<string, TopicAccuracy>()
  for (const a of attempts) {
    const question = getQuestionById(a.questionId)
    if (!question) continue
    const { module, unitKey, topicKey } = question
    const key = `${module}-${unitKey}-${topicKey}`
    const existing = byKey.get(key) ?? { module, unitKey, topicKey, attempts: 0, correct: 0, accuracy: 0 }
    existing.attempts += 1
    if (a.correct) existing.correct += 1
    byKey.set(key, existing)
  }
  const result = Array.from(byKey.values())
  result.forEach(r => { r.accuracy = r.attempts ? Math.round((r.correct / r.attempts) * 100) : 0 })
  return result
}

export async function getOverallAccuracy(): Promise<{ answered: number; correct: number; accuracy: number }> {
  const attempts = await db.questionAttempts.toArray()
  const answered = attempts.length
  const correct = attempts.filter(a => a.correct).length
  return { answered, correct, accuracy: answered ? Math.round((correct / answered) * 100) : 0 }
}

export async function getRecentQuizScores(limit = 5): Promise<{ date: string; accuracy: number; quizType: string }[]> {
  const attempts = await db.questionAttempts.orderBy('timestamp').reverse().toArray()
  // group into "sessions" by quizType + close timestamps (within 30 min)
  const sessions: { date: string; accuracy: number; quizType: string; ts: number }[] = []
  let bucket: typeof attempts = []
  const flush = () => {
    if (!bucket.length) return
    const correct = bucket.filter(b => b.correct).length
    sessions.push({
      date: new Date(bucket[0].timestamp).toLocaleDateString(),
      accuracy: Math.round((correct / bucket.length) * 100),
      quizType: bucket[0].quizType,
      ts: bucket[0].timestamp
    })
    bucket = []
  }
  let lastTs = 0
  for (const a of attempts) {
    if (bucket.length && (lastTs - a.timestamp) > 30 * 60 * 1000) flush()
    bucket.push(a)
    lastTs = a.timestamp
  }
  flush()
  return sessions.slice(0, limit)
}

export async function getMockExamStats(): Promise<{ average: number; attempts: number }> {
  const attempts = await db.mockAttempts.where('score').above(-1).toArray()
  const finished = attempts.filter(a => a.finishedAt && typeof a.score === 'number')
  const average = finished.length ? Math.round(finished.reduce((s, a) => s + (a.score ?? 0), 0) / finished.length) : 0
  return { average, attempts: finished.length }
}

export async function getFlashcardsDue(totalCards: number): Promise<number> {
  const states = await db.flashcardState.toArray()
  const now = Date.now()
  const dueExisting = states.filter(s => s.dueAt <= now).length
  const newCards = totalCards - states.length
  return dueExisting + Math.max(0, newCards)
}

/**
 * Readiness estimate: a simple, transparently-explained blend of lesson completion,
 * question accuracy and mock exam performance. This is NOT a predictive/official score —
 * it is only a rough indicator of study activity and recent performance.
 */
export async function getReadinessEstimate(): Promise<number> {
  const lessonStats = await getLessonCompletion()
  const overall = await getOverallAccuracy()
  const mock = await getMockExamStats()

  const lessonScore = lessonStats.total ? (lessonStats.completed / lessonStats.total) * 100 : 0
  const questionScore = overall.accuracy
  const mockScore = mock.attempts ? mock.average : 0

  const weights = { lesson: 0.25, question: 0.35, mock: 0.4 }
  const usableMock = mock.attempts > 0
  const total = usableMock
    ? lessonScore * weights.lesson + questionScore * weights.question + mockScore * weights.mock
    : lessonScore * 0.4 + questionScore * 0.6

  // Round to nearest 5 to avoid misleading false precision
  return Math.round(total / 5) * 5
}

export { getStreak }
