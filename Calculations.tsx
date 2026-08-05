import type { CalculationTopic } from './types'

export const calculationTopics: CalculationTopic[] = [
  {
    id: 'calc-real-interest-rate',
    title: 'Real Interest Rate',
    module: 'cemap1',
    formula: 'Real rate ≈ Nominal rate − Inflation rate',
    variables: [
      { symbol: 'Nominal rate', meaning: 'The stated (advertised) interest rate before adjusting for inflation' },
      { symbol: 'Inflation rate', meaning: 'The rate of change of prices, usually measured by CPI' }
    ],
    workedExample: [
      'A savings account pays a nominal rate of 5%.',
      'Inflation is running at 3%.',
      'Real rate ≈ 5% − 3% = 2%.',
      'This 2% is the approximate real growth in purchasing power the saver actually gets.'
    ],
    commonMistakes: [
      'Forgetting this is an approximation — CeMAP only requires the simple subtraction method shown here, not the compound (Fisher) formula.',
      'Mixing up which figure is nominal and which is inflation when a question gives several pairs to compare — read carefully before subtracting.'
    ],
    source: 'CeMAP 1, Unit 1 Topic 2 Part 1, p.23-24 and Specimen Paper questions'
  },
  {
    id: 'calc-capital-repaid-year-one',
    title: 'Capital Repaid in Year One (Annual Rest Repayment Mortgage)',
    module: 'cemap2',
    formula: 'Capital repaid = (Monthly payment × 12) − (Loan amount × Interest rate)',
    variables: [
      { symbol: 'Monthly payment', meaning: 'Usually given as "£X per £1,000 borrowed" — multiply by (loan amount ÷ 1,000)' },
      { symbol: 'Loan amount', meaning: 'The total mortgage borrowed' },
      { symbol: 'Interest rate', meaning: 'The annual interest rate charged, assumed fixed for the year' }
    ],
    workedExample: [
      'Bob borrows £60,000 over 20 years at 5%, quoted at £7.30 per £1,000 borrowed.',
      'Step 1: Monthly payment = £7.30 × (60,000 ÷ 1,000) = £7.30 × 60 = £438.00.',
      'Step 2: Annual payment = £438.00 × 12 = £5,256.',
      'Step 3: Annual interest = £60,000 × 5% = £3,000.',
      'Step 4: Capital repaid = £5,256 − £3,000 = £2,256.'
    ],
    commonMistakes: [
      'Forgetting to multiply the "per £1,000" rate by (loan amount ÷ 1,000) rather than by the whole loan amount.',
      'Forgetting to annualise the monthly payment (× 12) before subtracting the annual interest.',
      'Assuming a higher interest rate means MORE capital repaid in year one — it\u2019s the opposite: a higher rate leaves less of the fixed payment available to repay capital.'
    ],
    source: 'CeMAP 2&3, MRT2 Topic 1, p.136-137 and Topic 1 Test Q6'
  },
  {
    id: 'calc-procuration-fee',
    title: 'Lender Procuration Fee',
    module: 'cemap3',
    formula: 'Procuration fee = greater of (Loan amount × Fee %) or the stated minimum fee',
    variables: [
      { symbol: 'Loan amount', meaning: 'The mortgage advance on which the fee is calculated' },
      { symbol: 'Fee %', meaning: 'The percentage rate the lender pays the broker, as stated in the case study' },
      { symbol: 'Minimum fee', meaning: 'A floor amount below which the fee will not fall, even on a small loan' }
    ],
    workedExample: [
      'Loan amount: £96,000. Fee rate: 0.35%. Minimum fee: £250.',
      'Step 1: £96,000 × 0.35% = £336.',
      'Step 2: Compare to the minimum (£250) — £336 is higher, so £336 is the fee payable.'
    ],
    commonMistakes: [
      'Forgetting to compare the percentage-based figure against the stated minimum — if the percentage figure is below the minimum, the minimum applies instead.',
      'Using the purchase price instead of the loan amount when calculating the fee.'
    ],
    source: 'CeMAP 2&3, CeMAP 3 Case Study 1, Q1'
  },
  {
    id: 'calc-monthly-mortgage-cost',
    title: 'Monthly Mortgage Cost from a "Per £1,000" Rate',
    module: 'cemap3',
    formula: 'Monthly cost = (Loan amount ÷ 1,000) × Cost per £1,000',
    variables: [
      { symbol: 'Loan amount', meaning: 'Purchase price minus deposit' },
      { symbol: 'Cost per £1,000', meaning: 'The quoted monthly cost for every £1,000 borrowed' }
    ],
    workedExample: [
      'Purchase price £140,000, deposit £46,000 → loan = £94,000.',
      'Quoted cost: £4.58 per £1,000 borrowed.',
      'Monthly payment = (94,000 ÷ 1,000) × £4.58 = 94 × £4.58 = £430.52.'
    ],
    commonMistakes: [
      'Forgetting to deduct the deposit from the purchase price before calculating the loan amount.',
      'Rounding the "per £1,000" multiplier too early, which throws off the final answer by a few pounds.'
    ],
    source: 'CeMAP 2&3, CeMAP 3 Case Study 1, Q3'
  }
]
