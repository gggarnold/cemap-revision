import type { Question } from './types'

// CeMAP 3's own Case Studies 2-7, reproduced as ORIGINAL supplied mock exams.
// Answers verified against CeMAP_2-3__Delegate_2026.pdf's answer-key pages
// ("CeMAP 3 – CASE STUDY 2" through "CASE STUDY 7").

function sq(caseNum: number, n: number, text: string, options: string[], correctIndex: number, explanation: string, calculation?: boolean): Question {
  return {
    id: `c3-u1-cs${caseNum}-q${n}`, module: 'cemap3', unitKey: 'unit1', topicKey: `case-study-${caseNum}`,
    text, options, correctIndex: [correctIndex], explanation,
    difficulty: 'intermediate', source: `CeMAP 3, Case Study ${caseNum}`, origin: 'original', calculation
  }
}

// ================= Case Study 2 — Nathan and Louise =================
export const caseStudy2: Question[] = [
  sq(2, 1, 'Island Building Society\u2019s method of initially assessing affordability means Nathan and Louise will NOT need to provide detailed evidence of:',
    ['Basic essential expenditure', 'Committed expenditure', 'Credit agreements', 'Income from employment'],0,
    'Since the lender uses ONS statistical data for basic essential/quality-of-life expenditure (rather than exact figures), detailed evidence for this category isn\u2019t needed — committed expenditure and income still require exact evidence.'),
  sq(2, 2, 'If Nathan and Louise\u2019s monthly free disposable income is £850, the maximum monthly mortgage payment they could afford under the lender\u2019s 80% criteria is:',
    ['£680', '£722.50', '£1,000', '£1,062.50'],0,
    '£850 × 80% = £680.', true),
  sq(2, 3, 'In respect of the undertaking to complete essential external decoration, when must this be done?',
    ['Before exchange of contracts', 'After exchange of contracts but before completion', 'Within a specified time following completion', 'Before the end of the mortgage term'],2,
    'An undertaking allows the borrower to complete minor/cosmetic work within a specified timescale AFTER completion, typically 3-6 months.'),
  sq(2, 4, 'To comply with MCOB, the adviser must ensure Nathan and Louise are aware of:',
    ['How he is remunerated', 'How their credit score will be calculated', 'The procuration fee that will apply', 'The range of products that he can recommend'],3,
    'Initial disclosure requires the customer to be told the range/scope of products the adviser can recommend from (unlimited, limited, or single lender).'),
  sq(2, 5, 'Island Building Society must keep details of the illustration issued for their application for a minimum of:',
    ['Six months', 'One year', 'Three years', 'Twenty-five years'],1,
    'Illustration records must be kept for 1 year from the date of the application.'),
  sq(2, 6, 'Which product most closely matches Nathan and Louise\u2019s requirement to protect against rate rises until Lorna finishes university (in 3 years)?',
    ['Standard variable rate currently 4.49%', 'Three-year base rate tracker at 3.29%', 'Three-year fixed rate at 4.00%', 'Two-year discounted rate at 3.59%'],2,
    'A 3-year fixed rate exactly matches their stated 3-year protection need, unlike a variable-rate tracker (still exposed to rises) or a 2-year discount (too short).'),
  sq(2, 7, 'Which life assurance product(s) would be most suitable for Nathan and Louise, given their requirements?',
    ['A level term assurance policy in joint names for £120,000', 'A mortgage protection policy in joint names for £120,000', 'Level term assurance policies for £60,000 each', 'Mortgage protection policies for £60,000 each'],1,
    'A joint-life mortgage protection (decreasing term) policy is the cheapest option and matches their repayment mortgage\u2019s falling balance, as they requested.'),
  sq(2, 8, 'What feature would give Nathan the income protection he requires at the lowest cost?',
    ['Underwriting based on his occupation', 'A term matched to his retirement age', 'A deferred period of 13 weeks', 'Benefits paid for a maximum of one or two years'],3,
    'A shorter maximum benefit payment period (1-2 years, more like an ASU-style structure) reduces the cost compared with full-term income protection.'),
  sq(2, 9, 'In assessing the property as security, the building society is most likely to:',
    ['Accept Louise\u2019s brother\u2019s findings', 'Insist on a Building Survey', 'Rely on Land Registry averages for the area', 'Require an independent valuation'],3,
    'A lender will always require its own independent valuation for security purposes, regardless of any informal survey already obtained.'),
  sq(2, 10, 'What other issue will the building society most likely require before agreeing the mortgage?',
    ['That Ethan signs a consent to mortgage form', 'That Nathan and Louise take out a mortgage protection policy', 'That Lorna signs a consent to mortgage form', 'That Nathan and Louise commission a RICS Level 3 Report'],2,
    'Lorna, an adult (20) living in the property but not party to the mortgage, needs to sign a consent to mortgage form — Ethan, at 16, is still a minor.')
]

// ================= Case Study 3 — Alec and Clare =================
export const caseStudy3: Question[] = [
  sq(3, 1, 'If an HLC applies (property valued at the agreed price, £45,000 deposit), which is true of the additional security required?',
    ['The borrower must be encouraged to seek independent legal advice', 'It may be possible to add the necessary charge to the advance', 'Its primary purpose is to protect Alec and Clare\u2019s interests', 'The policy must be assigned to the bank'],1,
    'A higher lending charge can typically be added to the mortgage advance rather than paid upfront.'),
  sq(3, 2, 'Assuming they meet affordability criteria and the property is valued at the agreed price (£248,000), the maximum they could borrow (90% LTV) is:',
    ['£198,400', '£203,200', '£223,200', '£228,600'],2,
    '90% of £248,000 (£254,000 minus the £6,000 reduction) = £223,200.', true),
  sq(3, 3, 'How much SDLT would be saved by the lower agreed price, given a first-time buyer nil rate threshold of £300,000?',
    ['Nil', '£240', '£3,990', '£7,740'],0,
    'Since £248,000 is below the £300,000 first-time buyer nil rate threshold either way, no SDLT is due at either price — so no saving arises.'),
  sq(3, 4, 'With regard to the freehold of the flat, what factor would prevent its purchase under current legislation?',
    ['The floor area of the flat', 'The number of flats in the block', 'The remaining term of the lease', 'The purchase price of the property'],1,
    'The Qualifying Building Test requires 2+ flats in the building — a single flat above a shop fails this test, preventing a collective freehold purchase.'),
  sq(3, 5, 'If Alec and Clare proceed with their preferred (cheapest) valuation scheme, what will this confirm?',
    ['Any structural defects in the property', 'The correct market price for the property', 'If the electrical system meets current standards', 'The amount for which the property should be insured'],3,
    'A basic valuation confirms the mortgage valuation and the insurance reinstatement (rebuild cost) value.'),
  sq(3, 6, 'Which mortgage product would be MOST suitable for Alec and Clare, wanting a known maximum payment for 2 years until Alec\u2019s pay rise?',
    ['A Bank of England base rate tracker', 'A standard variable rate, currently 5.2%', 'A discounted rate of 1.0% below SVR for five years', 'A variable rate, currently 5.2%, capped at 5.4% for two years'],3,
    'A 2-year cap matches their stated need exactly, giving certainty of a maximum payment while still benefiting from any rate falls.'),
  sq(3, 7, 'Compared to a similar-sized flat in a purpose-built block in the same area, their intended flat (above a shop) is likely to be:',
    ['Valued at a slightly higher price', 'Valued at a lower price', 'Valued at a similar price', 'Valued at a much higher price'],1,
    'Mixed-use properties (flats above commercial premises) typically value lower than equivalent purpose-built residential flats.'),
  sq(3, 8, 'Regarding the ISA repayment vehicle and the lender\u2019s protection requirement, what should Alec and Clare be aware of?',
    ['They should consider cover with a targeted, guaranteed maturity value', 'Their chosen repayment vehicle automatically includes life cover', 'Combining their vehicle with decreasing term assurance guarantees full repayment on death', 'Their protection product should cover the loan amount independently of their repayment vehicle'],3,
    'An ISA has no built-in life cover, so separate protection must be arranged to cover the full loan amount independently.'),
  sq(3, 9, 'Which would NOT be a benefit of the type of repayment vehicle (ISA) being considered?',
    ['The maturity date is fixed to coincide with the end of the mortgage term', 'The mortgage loan may be able to be repaid early', 'There is a wide choice of funds in which premiums can be invested', 'The proceeds are payable free of capital gains tax'],0,
    'An ISA has NO fixed maturity date — this is a benefit of endowments (or a drawback), not a feature of an ISA, which is flexible.'),
  sq(3, 10, 'What specific information about the most suitable mortgage product must be included in the illustration before they apply?',
    ['A description of alternative interest rates that may be available', 'An explanation of how to switch to a different product', 'What happens if they do not want their mortgage any more', 'That the rate will be fixed throughout the entire term'],2,
    'The ESIS must explain the implications (e.g. early repayment charges) if the customer no longer wants the mortgage.')
]

// ================= Case Study 4 — Paul and Kelly =================
export const caseStudy4: Question[] = [
  sq(4, 1, 'Which will NOT be required for the bank to assess Paul\u2019s (self-employed) application?',
    ['Bank reference and/or statements', 'Memorandum and Articles of Association', 'Profit and loss account', 'Balance Sheet'],1,
    'Memorandum and Articles of Association apply to limited companies, not a self-employed sole trader like Paul.'),
  sq(4, 2, 'Paul\u2019s father was subject to a bankruptcy petition. This means he had unpaid debts of at least:',
    ['£5,000', '£750', '£1,000', '£500'],0,
    'A creditor can only petition for someone\u2019s bankruptcy if owed at least £5,000.'),
  sq(4, 3, 'Where would information about Paul\u2019s personal drawings be found?',
    ['Balance sheet', 'Cash flow forecast', 'Profit and loss account', 'Director\u2019s loan account'],0,
    'Personal drawings from a self-employed business are recorded in the balance sheet\u2019s capital account.'),
  sq(4, 4, 'Based on the figures quoted (85% affordability rule, £490/month payment), the lender needs Paul and Kelly\u2019s free monthly disposable income to be at least:',
    ['£416.50', '£490.00', '£577.00', '£563.50'],2,
    '£490 ÷ 85% = £576.47, rounding to £577.00.', true),
  sq(4, 5, 'What is the most appropriate report for Paul and Kelly to arrange, given the 1940-built house and their wish to identify defects?',
    ['A basic valuation', 'RICS Home Survey Level 1 Report', 'RICS Home Survey Level 2 Report', 'RICS Home Survey Level 3 Report'],3,
    'A thorough Level 3 report is most appropriate for an older property where identifying defects is a stated priority.'),
  sq(4, 6, 'Which is INCORRECT regarding the existing unit-linked endowment repayment vehicle?',
    ['Life assurance cover is provided within the policy', 'Premiums buy units in the with-profits fund', 'Unit values may rise or fall in line with the underlying fund', 'Units are initially bought at the prevailing offer price'],1,
    'Unit-linked endowments do NOT have a with-profits fund — premiums buy units directly linked to the market, unlike With-Profits variants.'),
  sq(4, 7, 'Under MCOB rules, which does Marsh Bank\u2019s adviser NOT need to provide?',
    ['Whether overpayments can be made on their selected mortgage', 'An explanation of whether their terms can continue if they move house', 'Details of the exact amount of any procuration fee', 'Details of any insurances required as part of the mortgage'],2,
    'The exact procuration fee amount is not a required disclosure to the customer in the same way as the other product features.'),
  sq(4, 8, 'Under Paul and Kelly\u2019s preferred (capped) mortgage product, the interest rate will:',
    ['Not rise above the stated level for the first three years', 'Not change for the first three years', 'Only change when the SVR increases', 'Only change if the SVR decreases'],0,
    'A capped rate sets a ceiling the rate cannot exceed, while still allowing it to move (including falling) within that cap.'),
  sq(4, 9, 'Which of Paul and Kelly\u2019s expenditures is most likely an example of basic essential expenditure?',
    ['A golf club membership for Kelly', 'Paul\u2019s outstanding car finance', 'Council tax bill', 'Paul\u2019s gym membership costs'],2,
    'Council tax is a basic essential household cost, unlike discretionary memberships or a specific committed credit agreement (car finance).'),
  sq(4, 10, 'What higher lending charge will Paul and Kelly pay, assuming the property is valued at the agreed price (£136,000, 8% HLC above 80% LTV, total borrowing £111,800)?',
    ['£1,936.00', '£2,176.00', '£240.00', '£3,000.00'],2,
    '80% of £136,000 = £108,800 threshold. £111,800 − £108,800 = £3,000 excess × 8% = £240.', true)
]

// ================= Case Study 5 — Greg and Cheryl =================
export const caseStudy5: Question[] = [
  sq(5, 1, 'How will the personal loan arrangement (with Kenton Finance) affect Greg and Cheryl\u2019s further advance application?',
    ['Payments will be taken into account when assessing their ability to repay', 'The Building Society will apply the principle of consolidation', 'The loan will have to be repaid as a condition of the further advance', 'The property valuation will be reduced by the amount of the loan outstanding'],0,
    'The existing loan repayments will be included as committed expenditure in the affordability assessment.'),
  sq(5, 2, 'Which is true of Greg and Cheryl\u2019s existing (unit-linked) repayment vehicle?',
    ['It does not guarantee to fully repay the loan either on death or maturity', 'It features tax relief on the premiums', 'It guarantees to fully repay the loan on death, provided premiums are up to date', 'It is guaranteed to provide a tax-free surplus on maturity'],2,
    'Unit-linked endowments have a guaranteed death benefit (sum assured) built in, even though the maturity value itself is not guaranteed.'),
  sq(5, 3, 'Which may the Society require when processing their application for a loft conversion?',
    ['Consent of the MIG insurer', 'Consent to the plans from Kenton Finance', 'Evidence planning permission has been granted or is not required', 'Evidence the extension design is in keeping with the neighbourhood'],2,
    'Lenders require confirmation of planning permission (or that it isn\u2019t required) before funding home improvement work.'),
  sq(5, 4, 'The term of the further advance offered by Brunswick is most likely to be:',
    ['No longer than the date Greg and Cheryl intend to retire', '5 years', 'The residual term of the existing policy', 'The residual term of the existing mortgage'],3,
    'A further advance is typically taken over the remaining term of the existing mortgage.'),
  sq(5, 5, 'In relation to the further advance, when might \u2018tacking\u2019 be required?',
    ['If it is consolidated with the original loan', 'If Kenton Finance does not agree with the further advance', 'If the original mortgage deed does not oblige Brunswick to make further advances', 'If the society postpones its prior charge'],2,
    'Without an obligation to lend further already registered in the original deed, a new further advance ranking ahead of any intervening charge would need "tacking" via a Deed of Postponement.'),
  sq(5, 6, 'How are Greg and Cheryl\u2019s payments to Kenton Finance likely to be treated in Brunswick\u2019s affordability assessment?',
    ['They are unlikely to be included', 'As basic essential expenditure', 'As committed expenditure', 'As a basic quality of living cost'],2,
    'Loan repayments are a contractual commitment, classed as committed expenditure requiring an exact figure.'),
  sq(5, 7, 'Which condition is the society likely to impose on the further advance offer?',
    ['None', 'Assignment of the existing endowment policy', 'A higher lending charge', 'Mortgage payment protection insurance for both of them'],0,
    'Since the new total LTV (£124,000 ÷ £172,000 ≈ 72%) stays below the 80% HLC threshold, no higher lending charge or other special condition is imposed.', true),
  sq(5, 8, 'In the event of Greg predeceasing Cheryl (joint tenancy), his portion of the property will:',
    ['Be shared between Cheryl and Joanne only', 'Pass as directed by his will', 'Pass as a life interest to Joanne and to the children on her death', 'Vest automatically in Cheryl'],3,
    'Under a joint tenancy, the "right of survivorship" means Greg\u2019s share passes automatically to Cheryl, regardless of any will.'),
  sq(5, 9, 'As a result of the further advance and rearrangement, Greg and Cheryl should:',
    ['Arrange a mortgage protection policy to cover the further advance', 'Arrange either a mortgage protection policy or level term assurance for the full mortgage', 'Arrange level term assurance to cover the further advance', 'Increase their endowment to cover the further advance'],0,
    'Since the existing endowment and any associated cover already addresses the original loan, a new mortgage protection (decreasing term) policy specifically for the further advance is the appropriate addition.'),
  sq(5, 10, 'Which will NOT be required in connection with Greg and Cheryl\u2019s application?',
    ['An updated credit search', 'Confirmation of Cheryl\u2019s earnings', 'Details of the outstanding personal loan', 'A consent to mortgage form'],3,
    'No new adult occupant is joining the mortgage or moving in, so a consent to mortgage form isn\u2019t needed — Michael (15) is a minor.')
]

// ================= Case Study 6 — Carol and Harry =================
export const caseStudy6: Question[] = [
  sq(6, 1, 'If Harry becomes joint mortgagor, which action would be most suitable to deal with the arrears situation?',
    ['Extend the mortgage term', 'Clear the arrears over a specified period of time', 'Surrender the endowment policy', 'Extend the term of the mortgage (duplicate)'],1,
    'With Harry\u2019s income now available to help, rescheduling the arrears to be cleared over an agreed period is the most suitable remedy.'),
  sq(6, 2, 'If Carol\u2019s SMI claim succeeds, in respect of the £90,000 interest payable:',
    ['50% of her interest will be eligible after 39 weeks', '100% of her interest will be eligible after either 3 months or 39 weeks, depending on the benefit claimed', '50% of her interest will have been paid from the end of month three', '75% of her interest will have been paid from the end of month three'],1,
    'SMI covers 100% of interest on the qualifying mortgage amount once the relevant waiting period (3 months for Universal Credit, 39 weeks for other qualifying benefits) has passed.'),
  sq(6, 3, 'Which benefit, if Carol were receiving it, would result in her SMI application being declined?',
    ['New style Jobseeker\u2019s Allowance', 'Income-based Jobseeker\u2019s Allowance', 'Income Support', 'Universal Credit'],0,
    'New style (contribution-based) JSA is not one of the qualifying benefits for SMI.'),
  sq(6, 4, 'Which gives Carol\u2019s lender the right to surrender her endowment policy to help clear arrears?',
    ['Beneficial security', 'The policy being held in trust', 'Assignment of the policy', 'Equitable deposit'],2,
    'Since the policy was assigned (giving the lender legal ownership), the lender has the right to take action such as surrender, unlike a simple deposit (equitable right only).'),
  sq(6, 5, 'Before becoming joint owner, Harry must:',
    ['Gain the existing lender\u2019s agreement', 'Clear all the mortgage arrears', 'Wait at least 2 years', 'Be added to the endowment policy'],0,
    'A transfer of equity (adding a joint owner/borrower) always requires the lender\u2019s consent.'),
  sq(6, 6, 'Regarding their proposal to rent the spare room to a lodger, the adviser should point out that:',
    ['Any occupant should undergo standard status enquiries', 'The building society will collect the rent to offset the arrears', 'This will extend Carol\u2019s exclusion period for SMI', 'No rights of occupation should be created'],3,
    'A lodger must not be given a formal tenancy that could create an occupation right overriding the lender\u2019s security.'),
  sq(6, 7, 'If the lender capitalises the arrears with an additional £7/month payment, what should the lender be aware of?',
    ['This would be regarded as a material change', 'A cooling-off period of 7 days would apply', 'Spreading the arrears must be for no longer than 5 years', 'They must review the situation in 3 months\u2019 time'],0,
    'A monthly payment increase of £1 or more (here, £7) meets MCOB\u2019s definition of a "material" change, meaning automatic capitalisation without proper process isn\u2019t permitted.'),
  sq(6, 8, 'To minimise problems with the endowment\u2019s maturity value shortfall, what action should the adviser discuss?',
    ['Converting part of the mortgage to a repayment basis', 'Converting the endowment to a unitised endowment', 'Adding Harry to the policy as a joint life assured', 'Extending the mortgage term'],0,
    'Switching the shortfall portion of the mortgage to a repayment basis guarantees that part will be cleared, directly addressing the projected shortfall.'),
  sq(6, 9, 'If Harry is added as a joint mortgagor, the lender must provide him with a:',
    ['ESIS for the whole mortgage', 'ESIS for his share of the mortgage', 'Suitability report to confirm the arrangement', 'Copy of the original mortgage to confirm his commitment'],0,
    'A new party joining a mortgage must receive an ESIS covering the WHOLE loan amount, not just their notional share.'),
  sq(6, 10, 'If Carol died during the term of her unit-linked endowment, the amount paid out on death would be:',
    ['A fixed sum of £75,000 (the amount originally borrowed)', 'The sum assured under the policy, or the value of the units, whichever is greater', 'The amount outstanding on her mortgage at the time of death', 'An amount equivalent to the projected maturity value at the time of death'],1,
    'Unit-linked endowments typically pay the higher of the guaranteed sum assured or the actual unit value on death.')
]

// ================= Case Study 7 — Stewart =================
export const caseStudy7: Question[] = [
  sq(7, 1, 'Regarding the bridging finance Stewart requires:',
    ['It is likely to take several weeks for funds to be made available', 'Lenders always consider higher risk lending', 'Stewart will be required to provide a personal guarantee as additional security', 'The interest rate will be lower than on a conventional mortgage'],1,
    'Bridging finance is inherently regarded by lenders as a higher-risk category of lending, reflected in its higher cost.'),
  sq(7, 2, 'If Stewart obtains bridging finance from either quoted lender (3-month term, roll-up interest), it is likely to be a:',
    ['MCD exempt bridging loan', 'MCD regulated mortgage contract', 'Unregulated commercial loan', 'Loan regulated under the Consumer Credit Act 2006 only'],0,
    'A bridging loan repayable within 12 months, used as a temporary financing solution while transitioning between properties, is MCD exempt.'),
  sq(7, 3, 'If the finance is secured on Stewart\u2019s existing property (which already has a first-charge interest-only mortgage), the bridging is likely to be a:',
    ['Non-regulated mortgage', 'First charge bridging loan', 'Further advance on his existing first charge mortgage', 'Second charge bridging loan'],3,
    'Since his existing mortgage already holds the first charge, new bridging finance secured on the same property would rank as a second charge.'),
  sq(7, 4, 'Regarding the need to assess whether Stewart can afford the bridging finance, which is true?',
    ['It is always required for bridging finance', 'It will not be required if the finance is provided on the roll-up terms indicated', 'It will only be required if Stewart has poor credit history', 'It will only be required if Stewart needs to extend the initial term'],1,
    'MCOB does not require an affordability assessment for bridging finance provided on an interest roll-up basis, since no monthly payment is due.'),
  sq(7, 5, 'If Stewart uses his personal pension (£380,000) as indicated, what maximum amount would automatically be tax-free?',
    ['Nil', '£380,000', '£76,000', '£95,000'],3,
    '25% of £380,000 = £95,000, the maximum Pension Commencement Lump Sum available tax-free.', true),
  sq(7, 6, 'If Stewart purchases the bungalow before his house sale completes, regarding SDLT:',
    ['An SDLT surcharge will apply and is non-refundable', 'He can apply for a refund if he sells his existing house within a maximum of 18 months', 'He can apply for a refund if he sells his existing house within a maximum of 36 months', 'No SDLT surcharge will apply'],2,
    'Buying a new main residence before selling the old one triggers the surcharge initially, but it can be reclaimed if the old property sells within 36 months.'),
  sq(7, 7, 'In relation to the property transaction and bridging finance, Stewart should be aware that:',
    ['The interest on the bridging loan can be paid in full when his current property is sold', 'He will incur a fee for a valuation of the house he is selling', 'No legal costs are likely in respect of the bridging finance', 'The arrangement fee for the bridging finance must always be paid upfront'],0,
    'Since both lenders offered to roll up interest, the total accrued interest is settled in one go when the existing property is sold.'),
  sq(7, 8, 'When should Stewart commence buildings insurance on the bungalow?',
    ['Completion takes place', 'Once contracts are exchanged', 'He physically moves into the property', 'His offer is accepted'],1,
    'Buildings insurance should be in place from exchange of contracts, since the buyer becomes technically liable for the property from that point.'),
  sq(7, 9, 'The buildings insurance Stewart puts in place should be equivalent to the:',
    ['Forced sale value', 'Open market value', 'Purchase price', 'Reinstatement value'],3,
    'Buildings insurance should be based on the reinstatement (rebuild) value, not the market/purchase price.'),
  sq(7, 10, 'Having taken his maximum tax-free cash, Stewart decides to take a further lump sum from his pension. What are the tax implications?',
    ['He would always need to buy an annuity, which would be taxable', 'Any further amounts drawn from his pension are taxable at his marginal rate', 'He can opt for flexi-access drawdown, which is tax-free', 'He is unable to take any further amounts given his age'],1,
    'Beyond the 25% tax-free PCLS, any further withdrawals are taxed as income at the individual\u2019s marginal rate.')
]

export const allCaseStudies2to7: Question[] = [
  ...caseStudy2, ...caseStudy3, ...caseStudy4, ...caseStudy5, ...caseStudy6, ...caseStudy7
]
