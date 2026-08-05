import { questions } from './questions'
import { caseStudy2, caseStudy3, caseStudy4, caseStudy5, caseStudy6, caseStudy7 } from './caseStudies2to7'
import type { Question } from './types'

// Case Study 1 lives inline in questions.ts (it was the first one authored) — pull it out here
// by ID prefix so mockExams.ts has one consistent place to import all 7 case studies from.
export const caseStudy1: Question[] = questions.filter(q => q.id.startsWith('c3-u1-t1-q'))

export { caseStudy2, caseStudy3, caseStudy4, caseStudy5, caseStudy6, caseStudy7 }
