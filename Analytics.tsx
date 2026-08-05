// Core content model types for the CeMAP revision app.
// Content (this file's companions in /data) is kept separate from UI code.

export type ExamKey = 'cemap1' | 'cemap2' | 'cemap3'

export interface ExamConfig {
  key: ExamKey
  label: string
  units: {
    unitKey: string
    unitLabel: string
    questionCount: number
    timeMinutes: number
    passMark: number // number of correct answers needed, NOT percentage
    passPercent: number
    /** true if figure is directly confirmed in the supplied PDFs */
    verified: boolean
    /** for CeMAP 3 style case-study exams */
    caseStudyCount?: number
    questionsPerCaseStudy?: number
  }[]
  sourceNote: string
}

export interface TopicRef {
  module: ExamKey
  unitKey: string
  topicKey: string
}

export interface Topic extends TopicRef {
  title: string
  /** Whether full lesson/flashcard/question content has been authored for this topic yet */
  status: 'complete' | 'pending'
  sourcePdf: string
  sourcePages?: string
}

export interface Unit {
  module: ExamKey
  unitKey: string
  title: string
  topics: Topic[]
}

export interface LessonSection {
  heading: string
  bullets: string[]
}

export interface Lesson extends TopicRef {
  id: string
  title: string
  intro: string
  sections: LessonSection[]
  workedExample?: { title: string; body: string[] }
  examTraps: string[]
  remember: string[]
  knowledgeCheck: { question: string; options: string[]; correctIndex: number; explanation: string }[]
  source: string
  dateSensitive?: boolean
}

export interface Flashcard extends TopicRef {
  id: string
  front: string
  back: string
  category: string
  source: string
}

export interface QuestionOption {
  text: string
}

export interface Question extends TopicRef {
  id: string
  text: string
  options: string[] // canonical order as authored; correctIndex refers to this order
  correctIndex: number[] // supports multi-answer; usually length 1
  explanation: string
  incorrectExplanations?: string[] // parallel to options, explains why each wrong option is wrong
  difficulty: 'foundation' | 'intermediate' | 'advanced'
  source: string
  origin: 'original' | 'generated' // original = taken/adapted directly from a supplied topic test
  dateSensitive?: boolean
  reviewRequired?: boolean
  calculation?: boolean
}

export interface MockExamMeta {
  id: string
  module: ExamKey
  unitKey: string
  title: string
  origin: 'original' | 'generated'
  timeMinutes: number
  passMark: number
  questionIds: string[]
  source: string
}

export interface GlossaryTerm {
  id: string
  term: string
  definition: string
  module: ExamKey[]
  relatedLessonIds?: string[]
}

export interface CalculationTopic {
  id: string
  title: string
  module: ExamKey
  formula: string
  variables: { symbol: string; meaning: string }[]
  workedExample: string[]
  commonMistakes: string[]
  source: string
}
