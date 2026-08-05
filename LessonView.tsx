import { questions } from './questions'
import { specimenPaperA } from './specimenPaperA'
import { specimenPaperB } from './specimenPaperB'
import { specimenPaperC } from './specimenPaperC'
import { unit2SpecimenPaperA } from './unit2SpecimenPaperA'
import { unit2SpecimenPaperB } from './unit2SpecimenPaperB'
import { unit2SpecimenPaperC } from './unit2SpecimenPaperC'
import { allCaseStudies2to7 } from './caseStudies2to7'
import type { Question } from './types'

export const allQuestions: Question[] = [
  ...questions,
  ...specimenPaperA, ...specimenPaperB, ...specimenPaperC,
  ...unit2SpecimenPaperA, ...unit2SpecimenPaperB, ...unit2SpecimenPaperC,
  ...allCaseStudies2to7
]

export function getQuestionById(id: string): Question | undefined {
  return allQuestions.find(q => q.id === id)
}
