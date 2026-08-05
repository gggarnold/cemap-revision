import type { Unit } from './types'

// Topic titles and page ranges below are taken directly from each PDF's own
// "Course Contents" pages. `status: 'pending'` topics have NOT yet had lessons,
// flashcards or questions authored — see CONTENT_COVERAGE.md for the full report.
// This structure exists so the app is honest about what's built vs still to come,
// and so adding new topics later is just adding data, not touching UI code.

export const curriculum: Unit[] = [
  // ---------------- CeMAP 1 ----------------
  {
    module: 'cemap1',
    unitKey: 'unit1',
    title: 'Unit 1 — Regulation, Legislation & Key Parties (FRE1)',
    topics: [
      { module: 'cemap1', unitKey: 'unit1', topicKey: 't1', title: 'The Role and Structure of Financial Markets', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.7-20' },
      { module: 'cemap1', unitKey: 'unit1', topicKey: 't2a', title: 'The Role of Government', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.21-29' },
      { module: 'cemap1', unitKey: 'unit1', topicKey: 't2b', title: 'Taxation', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.30-40' },
      { module: 'cemap1', unitKey: 'unit1', topicKey: 't3', title: 'State Benefits', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.41-49' },
      { module: 'cemap1', unitKey: 'unit1', topicKey: 't4a', title: 'Protection', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.50-63' },
      { module: 'cemap1', unitKey: 'unit1', topicKey: 't4b', title: 'Savings & Investments', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.64-74' },
      { module: 'cemap1', unitKey: 'unit1', topicKey: 't4c', title: 'Retirement & Borrowing', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.75-86' },
      { module: 'cemap1', unitKey: 'unit1', topicKey: 't5', title: 'Legal Principles', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.87-100' },
      { module: 'cemap1', unitKey: 'unit1', topicKey: 't6', title: 'Wills, Intestacy & Trusts', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.101-114' },
      { module: 'cemap1', unitKey: 'unit1', topicKey: 't7', title: 'Development of UK Regulation', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.115-126' },
      { module: 'cemap1', unitKey: 'unit1', topicKey: 't8a', title: 'PRA & FCA Approach to Regulation (Part 1)', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.127-136' },
      { module: 'cemap1', unitKey: 'unit1', topicKey: 't8b', title: 'PRA & FCA Approach to Regulation (Part 2)', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.137-143' }
    ]
  },
  {
    module: 'cemap1',
    unitKey: 'unit2',
    title: 'Unit 2 — Advisers, Clients and Ethics (FRE2)',
    topics: [
      { module: 'cemap1', unitKey: 'unit2', topicKey: 't1', title: 'Advice Process & Adviser Skills', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.144-157' },
      { module: 'cemap1', unitKey: 'unit2', topicKey: 't2a', title: 'Consumer Rights & Ethical Outcomes', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.158-165' },
      { module: 'cemap1', unitKey: 'unit2', topicKey: 't2b', title: 'Money Laundering, Data & Complaints', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.166-178' },
      { module: 'cemap1', unitKey: 'unit2', topicKey: 't3', title: 'Regulatory Advice Framework', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.179-191' },
      { module: 'cemap1', unitKey: 'unit2', topicKey: 't4', title: 'Ethical Principles', status: 'complete', sourcePdf: 'CeMAP 1', sourcePages: 'p.192-202' }
    ]
  },
  // ---------------- CeMAP 2 ----------------
  {
    module: 'cemap2',
    unitKey: 'unit1',
    title: 'Unit 1 — Mortgage Law, Practice & Application (MRT1)',
    topics: [
      { module: 'cemap2', unitKey: 'unit1', topicKey: 't1', title: 'Property and Mortgage Markets', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.7-14' },
      { module: 'cemap2', unitKey: 'unit1', topicKey: 't2_3', title: 'Mortgage Regulation and Types of Borrower', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.15-31' },
      { module: 'cemap2', unitKey: 'unit1', topicKey: 't4', title: 'Principles of Mortgage and Property Law', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.32-41' },
      { module: 'cemap2', unitKey: 'unit1', topicKey: 't5', title: 'Property and Mortgage Law', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.42-50' },
      { module: 'cemap2', unitKey: 'unit1', topicKey: 't6', title: 'Buying a Property: An Overview', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.51-63' },
      { module: 'cemap2', unitKey: 'unit1', topicKey: 't7_8', title: 'The Legal Side of Property Purchase', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.64-77' },
      { module: 'cemap2', unitKey: 'unit1', topicKey: 't9_10', title: 'The Role of the Mortgage Adviser', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.78-91' },
      { module: 'cemap2', unitKey: 'unit1', topicKey: 't11_12', title: 'Credit Status & Suitability', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.92-104' },
      { module: 'cemap2', unitKey: 'unit1', topicKey: 't13_14', title: 'Property Assessment, Valuations & Surveys', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.105-120' },
      { module: 'cemap2', unitKey: 'unit1', topicKey: 't15', title: 'Other Factors Affecting the Lending Decision', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.121-134' }
    ]
  },
  {
    module: 'cemap2',
    unitKey: 'unit2',
    title: 'Unit 2 — Mortgage Products and Post Completion (MRT2)',
    topics: [
      { module: 'cemap2', unitKey: 'unit2', topicKey: 't1', title: 'Mortgage Repayment Methods', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.135-144' },
      { module: 'cemap2', unitKey: 'unit2', topicKey: 't2', title: 'Repayment Vehicles for Interest-Only Mortgages', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.145-158' },
      { module: 'cemap2', unitKey: 'unit2', topicKey: 't3', title: 'Interest Rate Options', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.159-168' },
      { module: 'cemap2', unitKey: 'unit2', topicKey: 't4_5', title: 'Mortgage Products and Schemes', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.169-182' },
      { module: 'cemap2', unitKey: 'unit2', topicKey: 't6', title: 'Raising Additional Funds for Property', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.183-196' },
      { module: 'cemap2', unitKey: 'unit2', topicKey: 't7', title: 'Transferring Mortgages', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.197-208' },
      { module: 'cemap2', unitKey: 'unit2', topicKey: 't8_9', title: 'Arrears and Lenders\u2019 Legal Rights and Remedies', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.209-223' }
    ]
  },
  // ---------------- CeMAP 3 ----------------
  {
    module: 'cemap3',
    unitKey: 'unit1',
    title: 'CeMAP 3 — Protection Issues',
    topics: [
      { module: 'cemap3', unitKey: 'unit1', topicKey: 't1', title: 'Protection Needs & Financial Protection Products', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.224-236' },
      { module: 'cemap3', unitKey: 'unit1', topicKey: 't2', title: 'Case Study Practice', status: 'complete', sourcePdf: 'CeMAP 2&3', sourcePages: 'p.237+' }
    ]
  }
]

export function topicsFor(module: string, unitKey: string) {
  return curriculum.find(u => u.module === module && u.unitKey === unitKey)?.topics ?? []
}

export function allTopics() {
  return curriculum.flatMap(u => u.topics)
}
