import type { ExamConfig } from './types'

// All figures below are taken directly from the "INTRODUCTION / Format of the Exam"
// sections of the two supplied PDFs (CeMAP 1 Delegate 2026, CeMAP 2&3 Delegate 2026).
// Nothing here has been invented. If LIBF changes exam format after your course
// materials were printed, verify against libf.ac.uk before relying on these numbers.
export const examConfigs: ExamConfig[] = [
  {
    key: 'cemap1',
    label: 'CeMAP 1 — Financial Services, Regulation & Ethics',
    sourceNote: 'CeMAP_1__Delegate_2026.pdf, Introduction (p.6)',
    units: [
      {
        unitKey: 'unit1',
        unitLabel: 'Unit 1 — Regulation, Legislation & Key Parties (FRE1)',
        questionCount: 40,
        timeMinutes: 60,
        passMark: 28,
        passPercent: 70,
        verified: true
      },
      {
        unitKey: 'unit2',
        unitLabel: 'Unit 2 — Advisers, Clients and Ethics (FRE2)',
        questionCount: 40,
        timeMinutes: 60,
        passMark: 28,
        passPercent: 70,
        verified: true
      }
    ]
  },
  {
    key: 'cemap2',
    label: 'CeMAP 2 — Mortgage Law, Practice, Products & Applications',
    sourceNote: 'CeMAP_2-3__Delegate_2026.pdf, Introduction — "CeMAP 2 – Format of the Exam"',
    units: [
      {
        unitKey: 'unit1',
        unitLabel: 'Unit 1 — Mortgage Law, Practice & Application (MRT1)',
        questionCount: 50,
        timeMinutes: 60,
        passMark: 35,
        passPercent: 70,
        verified: true
      },
      {
        unitKey: 'unit2',
        unitLabel: 'Unit 2 — Mortgage Products and Post Completion (MRT2)',
        questionCount: 40,
        timeMinutes: 60,
        passMark: 28,
        passPercent: 70,
        verified: true
      }
    ]
  },
  {
    key: 'cemap3',
    label: 'CeMAP 3 — Protection Issues (case-study based)',
    sourceNote: 'CeMAP_2-3__Delegate_2026.pdf, Introduction — "CeMAP 3 – Format of the Exam"',
    units: [
      {
        unitKey: 'unit1',
        unitLabel: 'CeMAP 3 Exam — 6 case studies',
        questionCount: 60,
        timeMinutes: 120,
        passMark: 42,
        passPercent: 70,
        verified: true,
        caseStudyCount: 6,
        questionsPerCaseStudy: 10
      }
    ]
  }
]

// CONFIG VALUES REQUIRING YOUR CONFIRMATION:
// None of the above required guessing — all pass marks, question counts and time
// allowances are stated explicitly in your PDFs' introduction sections. If LIBF has
// since updated the format, edit the numbers above; nothing else in the app needs to change.
