import type { MockExamMeta } from './types'
import { specimenPaperA } from './specimenPaperA'
import { specimenPaperB } from './specimenPaperB'
import { specimenPaperC } from './specimenPaperC'
import { unit2SpecimenPaperA } from './unit2SpecimenPaperA'
import { unit2SpecimenPaperB } from './unit2SpecimenPaperB'
import { unit2SpecimenPaperC } from './unit2SpecimenPaperC'
import { caseStudy1, caseStudy2, caseStudy3, caseStudy4, caseStudy5, caseStudy6, caseStudy7 } from './caseStudyExports'

// Every paper below is one of your PDFs' own supplied specimen papers or case studies,
// reproduced in full with every answer verified against that PDF's own answer key.
// None of these questions were freshly generated — they are all `origin: 'original'`.

export const mockExams: MockExamMeta[] = [
  {
    id: 'c1-u1-specimen-a',
    module: 'cemap1',
    unitKey: 'unit1',
    title: 'Unit 1 — Specimen Paper A (Original)',
    origin: 'original',
    timeMinutes: 60,
    passMark: 28,
    questionIds: specimenPaperA.map(q => q.id),
    source: 'CeMAP 1, Unit 1 Specimen Paper A, p.203-216 — supplied exam paper, reproduced in full with verified answers.'
  },
  {
    id: 'c1-u1-specimen-b',
    module: 'cemap1',
    unitKey: 'unit1',
    title: 'Unit 1 — Specimen Paper B (Original)',
    origin: 'original',
    timeMinutes: 60,
    passMark: 28,
    questionIds: specimenPaperB.map(q => q.id),
    source: 'CeMAP 1, Unit 1 Specimen Paper B — supplied exam paper, reproduced in full with verified answers.'
  },
  {
    id: 'c1-u1-specimen-c',
    module: 'cemap1',
    unitKey: 'unit1',
    title: 'Unit 1 — Specimen Paper C (Original)',
    origin: 'original',
    timeMinutes: 60,
    passMark: 28,
    questionIds: specimenPaperC.map(q => q.id),
    source: 'CeMAP 1, Unit 1 Specimen Paper C — supplied exam paper, reproduced in full with verified answers.'
  },
  {
    id: 'c1-u2-specimen-a',
    module: 'cemap1',
    unitKey: 'unit2',
    title: 'Unit 2 — Specimen Paper A (Original)',
    origin: 'original',
    timeMinutes: 60,
    passMark: 28,
    questionIds: unit2SpecimenPaperA.map(q => q.id),
    source: 'CeMAP 1, Unit 2 Specimen Paper A — supplied exam paper, reproduced in full with verified answers.'
  },
  {
    id: 'c1-u2-specimen-b',
    module: 'cemap1',
    unitKey: 'unit2',
    title: 'Unit 2 — Specimen Paper B (Original)',
    origin: 'original',
    timeMinutes: 60,
    passMark: 28,
    questionIds: unit2SpecimenPaperB.map(q => q.id),
    source: 'CeMAP 1, Unit 2 Specimen Paper B — supplied exam paper, reproduced in full with verified answers.'
  },
  {
    id: 'c1-u2-specimen-c',
    module: 'cemap1',
    unitKey: 'unit2',
    title: 'Unit 2 — Specimen Paper C (Original)',
    origin: 'original',
    timeMinutes: 60,
    passMark: 28,
    questionIds: unit2SpecimenPaperC.map(q => q.id),
    source: 'CeMAP 1, Unit 2 Specimen Paper C — supplied exam paper, reproduced in full with verified answers.'
  },
  {
    id: 'c3-case-study-1',
    module: 'cemap3',
    unitKey: 'unit1',
    title: 'Case Study 1 — Luke & Jessica (Original)',
    origin: 'original',
    timeMinutes: 20,
    passMark: 7,
    questionIds: caseStudy1.map(q => q.id),
    source: 'CeMAP 2&3, CeMAP 3 Case Study 1, p.237-240 — supplied paper, verified answers.'
  },
  {
    id: 'c3-case-study-2',
    module: 'cemap3',
    unitKey: 'unit1',
    title: 'Case Study 2 — Nathan & Louise (Original)',
    origin: 'original',
    timeMinutes: 20,
    passMark: 7,
    questionIds: caseStudy2.map(q => q.id),
    source: 'CeMAP 2&3, CeMAP 3 Case Study 2 — supplied paper, verified answers.'
  },
  {
    id: 'c3-case-study-3',
    module: 'cemap3',
    unitKey: 'unit1',
    title: 'Case Study 3 — Alec & Clare (Original)',
    origin: 'original',
    timeMinutes: 20,
    passMark: 7,
    questionIds: caseStudy3.map(q => q.id),
    source: 'CeMAP 2&3, CeMAP 3 Case Study 3 — supplied paper, verified answers.'
  },
  {
    id: 'c3-case-study-4',
    module: 'cemap3',
    unitKey: 'unit1',
    title: 'Case Study 4 — Paul & Kelly (Original)',
    origin: 'original',
    timeMinutes: 20,
    passMark: 7,
    questionIds: caseStudy4.map(q => q.id),
    source: 'CeMAP 2&3, CeMAP 3 Case Study 4 — supplied paper, verified answers.'
  },
  {
    id: 'c3-case-study-5',
    module: 'cemap3',
    unitKey: 'unit1',
    title: 'Case Study 5 — Greg & Cheryl (Original)',
    origin: 'original',
    timeMinutes: 20,
    passMark: 7,
    questionIds: caseStudy5.map(q => q.id),
    source: 'CeMAP 2&3, CeMAP 3 Case Study 5 — supplied paper, verified answers.'
  },
  {
    id: 'c3-case-study-6',
    module: 'cemap3',
    unitKey: 'unit1',
    title: 'Case Study 6 — Carol & Harry (Original)',
    origin: 'original',
    timeMinutes: 20,
    passMark: 7,
    questionIds: caseStudy6.map(q => q.id),
    source: 'CeMAP 2&3, CeMAP 3 Case Study 6 — supplied paper, verified answers.'
  },
  {
    id: 'c3-case-study-7',
    module: 'cemap3',
    unitKey: 'unit1',
    title: 'Case Study 7 — Stewart (Original)',
    origin: 'original',
    timeMinutes: 20,
    passMark: 7,
    questionIds: caseStudy7.map(q => q.id),
    source: 'CeMAP 2&3, CeMAP 3 Case Study 7 — supplied paper, verified answers.'
  },
  {
    id: 'c3-full-mock',
    module: 'cemap3',
    unitKey: 'unit1',
    title: 'Full CeMAP 3 Mock Exam — 6 Case Studies (Original)',
    origin: 'original',
    timeMinutes: 120,
    passMark: 42,
    questionIds: [
      ...caseStudy1.map(q => q.id), ...caseStudy2.map(q => q.id), ...caseStudy3.map(q => q.id),
      ...caseStudy4.map(q => q.id), ...caseStudy5.map(q => q.id), ...caseStudy6.map(q => q.id)
    ],
    source: 'CeMAP 2&3, CeMAP 3 Case Studies 1-6 combined — matches the real exam format of 6 case studies × 10 questions, 120 minutes, pass mark 42/60 (70%).'
  }
]
