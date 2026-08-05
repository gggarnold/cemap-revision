import Dexie, { type Table } from 'dexie'

export interface LessonProgress {
  lessonId: string
  completed: boolean
  lastViewedAt: number
}

export interface FlashcardState {
  cardId: string
  // Simplified SM-2 spaced repetition state
  easeFactor: number // starts at 2.5
  intervalDays: number
  repetitions: number
  dueAt: number // epoch ms
  lastRating?: 'again' | 'hard' | 'good' | 'easy'
  starred: boolean
}

export interface QuestionAttempt {
  id?: number
  questionId: string
  correct: boolean
  selectedIndices: number[]
  timestamp: number
  quizType: 'quick10' | 'custom' | 'weak-area' | 'bookmarked' | 'incorrect' | 'topic' | 'mock'
}

export interface Bookmark {
  questionId: string
  createdAt: number
}

export interface FlaggedQuestion {
  questionId: string
  reason: string
  createdAt: number
}

export interface MockAttempt {
  id?: number
  examId: string
  startedAt: number
  finishedAt?: number
  answers: Record<string, number[]> // questionId -> selected option indices
  flagged: string[]
  score?: number
  passed?: boolean
}

export interface StudySession {
  id?: number
  date: string // YYYY-MM-DD
  minutes: number
}

export interface PlannerTask {
  id?: number
  date: string // YYYY-MM-DD
  title: string
  type: 'lesson' | 'flashcards' | 'quiz' | 'mock' | 'review'
  refId?: string
  status: 'pending' | 'completed' | 'skipped'
}

export interface PlannerSettings {
  id: 'singleton'
  examDate?: string
  daysPerWeek: number
  minutesPerDay: number
  modules: string[]
  confidence: Record<string, number> // module -> 1-5
}

export interface AppSettings {
  id: 'singleton'
  theme: 'light' | 'dark' | 'system'
  textSize: 'normal' | 'large' | 'xlarge'
  soundEffects: boolean
  haptics: boolean
  dailyQuestionTarget: number
  dailyStudyMinutesTarget: number
}

class CemapDB extends Dexie {
  lessonProgress!: Table<LessonProgress, string>
  flashcardState!: Table<FlashcardState, string>
  questionAttempts!: Table<QuestionAttempt, number>
  bookmarks!: Table<Bookmark, string>
  flaggedQuestions!: Table<FlaggedQuestion, string>
  mockAttempts!: Table<MockAttempt, number>
  studySessions!: Table<StudySession, number>
  plannerTasks!: Table<PlannerTask, number>
  plannerSettings!: Table<PlannerSettings, string>
  appSettings!: Table<AppSettings, string>

  constructor() {
    super('cemap-revision-db')
    this.version(1).stores({
      lessonProgress: 'lessonId',
      flashcardState: 'cardId, dueAt',
      questionAttempts: '++id, questionId, timestamp, quizType',
      bookmarks: 'questionId',
      flaggedQuestions: 'questionId',
      mockAttempts: '++id, examId, startedAt',
      studySessions: '++id, date',
      plannerTasks: '++id, date, status',
      plannerSettings: 'id',
      appSettings: 'id'
    })
  }
}

export const db = new CemapDB()

export async function getSettings(): Promise<AppSettings> {
  const existing = await db.appSettings.get('singleton')
  if (existing) return existing
  const defaults: AppSettings = {
    id: 'singleton', theme: 'system', textSize: 'normal', soundEffects: true,
    haptics: true, dailyQuestionTarget: 10, dailyStudyMinutesTarget: 20
  }
  await db.appSettings.put(defaults)
  return defaults
}

export async function getPlannerSettings(): Promise<PlannerSettings> {
  const existing = await db.plannerSettings.get('singleton')
  if (existing) return existing
  const defaults: PlannerSettings = {
    id: 'singleton', daysPerWeek: 5, minutesPerDay: 30, modules: ['cemap1'], confidence: {}
  }
  await db.plannerSettings.put(defaults)
  return defaults
}

export async function logStudyMinutes(minutes: number) {
  const today = new Date().toISOString().slice(0, 10)
  const existing = await db.studySessions.where('date').equals(today).first()
  if (existing?.id) {
    await db.studySessions.update(existing.id, { minutes: existing.minutes + minutes })
  } else {
    await db.studySessions.add({ date: today, minutes })
  }
}

export async function getStreak(): Promise<number> {
  const sessions = await db.studySessions.toArray()
  const daysWithStudy = new Set(sessions.filter(s => s.minutes > 0).map(s => s.date))
  let streak = 0
  const d = new Date()
  for (;;) {
    const key = d.toISOString().slice(0, 10)
    if (daysWithStudy.has(key)) {
      streak += 1
      d.setDate(d.getDate() - 1)
    } else {
      break
    }
  }
  return streak
}
