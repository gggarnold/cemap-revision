import type { Flashcard } from './types'

let n = 0
function fc(module: 'cemap1'|'cemap2'|'cemap3', unitKey: string, topicKey: string, category: string, front: string, back: string, source: string): Flashcard {
  n += 1
  return { id: `fc-${n}`, module, unitKey, topicKey, category, front, back, source }
}

export const flashcards: Flashcard[] = [
  // CeMAP 1 Unit 1 Topic 1
  fc('cemap1','unit1','t1','Definitions','What are the two core functions of money?', 'A unit of account and a medium of exchange.', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Definitions','Name the 4 main asset classes.', 'Cash, fixed interest securities & money market instruments, and equities (with property often added as a fourth in practice).', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Processes','What is "maturity transformation"?', 'Taking short-term deposits and using them to fund longer-term loans (e.g. instant-access savings funding 25-year mortgages).', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Regulations','What body sits inside the Bank of England since the 2016 Act?', 'The Prudential Regulation Authority (PRA).', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Processes','Since when has the MPC been responsible for setting the Bank of England Base Rate?', 'May 1997.', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Regulations','What is the main UK anti-money laundering statute?', 'The Proceeds of Crime Act 2002.', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Common exam traps','Is cash truly "risk free"?', 'Its nominal value cannot fall, but inflation erodes its real (purchasing power) value — so it carries inflation risk.', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Definitions','What replaced LIBOR as the interbank benchmark rate, and why?', 'SONIA (Sterling Overnight Index Average) — because LIBOR was self-declared by banks and had been manipulated; SONIA is based on actual overnight borrowing transactions.', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Regulations','What % of their total liabilities can building societies raise from the wholesale market?', 'Up to 50% (the Treasury could raise this to 75%, but hasn\u2019t).', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Regulations','What did the Financial Services (Banking Reform) Act 2013 introduce?', 'UK retail ring-fencing — keeping customer deposits separate from a bank\u2019s investment banking activities.', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Definitions','What is "disintermediation"?', 'Funds passing directly between lender and borrower with no financial intermediary involved — e.g. a company issuing shares directly to the public.', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Definitions','What are the Payment Systems Regulator\u2019s 3 statutory objectives?', 'Promote competition, encourage innovation, ensure payment systems serve users\u2019 interests.', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Definitions','What does an S&P bond rating of C or D indicate?', 'The issuer has already defaulted on some or all of its financial obligations.', 'CeMAP 1, Unit 1 Topic 1'),
  fc('cemap1','unit1','t1','Definitions','What\u2019s the difference between a primary and secondary market?', 'Primary: raises brand-new capital (e.g. a new share issue). Secondary: existing shares/bonds traded between investors — most day-to-day trading is secondary market activity.', 'CeMAP 1, Unit 1 Topic 1'),

  // CeMAP 1 Unit 1 Topic 2a
  fc('cemap1','unit1','t2a','Definitions','What is fiscal policy?', 'Government decisions on taxation and public spending.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Definitions','What is monetary policy?', 'Interest rate policy, set by the Bank of England\u2019s MPC.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Regulations','What inflation target does the MPC aim for, and using which index?', '2%, measured by the Consumer Prices Index (CPI).', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Regulations','What must the Bank\u2019s Governor do if inflation is more than 1% off target?', 'Write an open letter to the Chancellor of the Exchequer explaining why, and what action will be taken.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Common exam traps','What is the key difference between an EU Regulation and an EU Directive?', 'A Regulation is binding in its entirety; a Directive binds states to an outcome but leaves the method up to each state.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Calculations','How do you estimate the real interest rate?', 'Real rate ≈ nominal interest rate − inflation rate.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Definitions','What is disinflation, as distinct from deflation?', 'Disinflation is prices still rising, but more slowly than before. Deflation is a general fall in prices.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Definitions','What does "full employment" generally mean in macroeconomic terms?', 'Fewer than 3-5% of the working-age population out of work — not literally 100% employment.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Processes','What is the government\u2019s first response to a current account deficit?', 'Use its foreign currency reserves — only borrowing foreign currency once those reserves are used up.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Processes','Name three ways to correct a balance of payments deficit.', 'Import tariffs, raising interest rates (to encourage overseas investment), and exchange controls.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),
  fc('cemap1','unit1','t2a','Definitions','What\u2019s the difference between RPI and CPI?', 'RPI is weighted differently and includes some mortgage/housing costs; CPI is the official inflation-target measure and doesn\u2019t include those housing costs.', 'CeMAP 1, Unit 1 Topic 2 Part 1'),

  // CeMAP 1 Unit 1 Topic 2b - Taxation
  fc('cemap1','unit1','t2b','Regulations','How many days in a tax year make someone automatically UK tax resident?', '183 days or more.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Definitions','What is the difference between earned and unearned income?', 'Earned = employment/self-employment/pension income. Unearned = savings interest, dividends, rental and trust income.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Processes','What is PAYE?', '"Pay As You Earn" — the system where employers deduct income tax at source and pay it to HMRC on the employee\u2019s behalf.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Regulations','Which NIC class applies to the self-employed on their annual profits?', 'Class 4 (paid alongside income tax via self-assessment).', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Common exam traps','What CGT deduction trap is commonly tested?', 'Repair/maintenance costs are NOT deductible, but improvement (enhancement) costs ARE.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Regulations','When must CGT on UK residential property gains be paid?', 'Within 60 days of completion (rather than the usual 31 January following the tax year).', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Regulations','How long must a donor survive a gift for it to become fully exempt from IHT (a PET)?', '7 years.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Common exam traps','Can the IHT annual gift exemption be carried forward more than one year?', 'No — it can only be carried forward one year if unused, not accumulated indefinitely.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Regulations','Who is liable for IHT on a person\u2019s death?', 'The deceased\u2019s estate, administered by the personal representatives.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Products','Name three assets that are exempt from CGT.', 'Any three of: main residence, gilts/most corporate bonds, cars for normal use, chattels below the threshold, ISAs/NS&I/Premium Bonds, personal-use foreign currency, original owner\u2019s life assurance gains.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Calculations','What is the IHT taper relief rate if death occurs 4-5 years after a gift?', '24% (60% of the full 40% death rate).', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Regulations','What happens to an unused nil rate band when the first spouse dies?', 'The unused proportion transfers to the surviving spouse — e.g. if 100% is unused (everything left to the spouse), their own nil rate band doubles to £650,000.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Regulations','What is the Residence Nil Rate Band (RNRB), and what condition must be met to claim it?', 'A further £175,000 IHT exemption — but only where a residence the deceased lived in passes to a direct descendant.', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Calculations','At what immediate rate is a Chargeable Lifetime Transfer taxed on the excess over the nil rate band?', '20% (half the 40% death rate).', 'CeMAP 1, Unit 1 Topic 2 Part 2'),
  fc('cemap1','unit1','t2b','Products','What is Business Asset Disposal Relief?', 'A relief letting qualifying business owners pay a lower CGT rate on gains from selling their business (formerly called Entrepreneurs\u2019 Relief).', 'CeMAP 1, Unit 1 Topic 2 Part 2'),

  // CeMAP 2 Unit 2 Topic 1 — Mortgage Repayment Methods
  fc('cemap2','unit2','t1','Products','What are the only two mortgage repayment methods?', 'Capital (repayment) and interest-only.', 'CeMAP 2&3, MRT2 Topic 1'),
  fc('cemap2','unit2','t1','Common exam traps','Are early or late repayment mortgage payments mostly interest?', 'EARLY payments are mostly interest; payments shift to being mostly capital LATER in the term.', 'CeMAP 2&3, MRT2 Topic 1'),
  fc('cemap2','unit2','t1','Regulations','What repayment strategies are NOT acceptable for an interest-only mortgage?', 'Speculative strategies such as relying on house price inflation or a hoped-for inheritance.', 'CeMAP 2&3, MRT2 Topic 1'),
  fc('cemap2','unit2','t1','Processes','Which interest calculation method is most common today, and why do borrowers like it?', 'Daily rest — because overpayments reduce the balance (and interest charged) immediately.', 'CeMAP 2&3, MRT2 Topic 1'),
  fc('cemap2','unit2','t1','Processes','Which interest method neither rewards early payment nor penalises late payment within the year?', 'Annual rest.', 'CeMAP 2&3, MRT2 Topic 1'),
  fc('cemap2','unit2','t1','Common exam traps','Name two costs EXCLUDED from the APRC calculation.', 'Any two of: early repayment charges, life assurance premiums, default charges.', 'CeMAP 2&3, MRT2 Topic 1'),
  fc('cemap2','unit2','t1','Calculations','How do you work out capital repaid in year one on an annual-rest repayment mortgage?', 'Annual (capital+interest) payment minus (loan amount × interest rate) = capital repaid.', 'CeMAP 2&3, MRT2 Topic 1'),
  fc('cemap2','unit2','t1','Processes','What is the usual maximum annual overpayment allowed without an early repayment charge?', 'Up to 10% of the outstanding balance per year (varies by lender).', 'CeMAP 2&3, MRT2 Topic 1'),

  // CeMAP 3 Protection
  fc('cemap3','unit1','t1','Products','Which type of term assurance is cheapest and matches a repayment mortgage?', 'Decreasing term assurance (its cover reduces in line with the falling mortgage balance).', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Products','Which term assurance type suits an interest-only mortgage, where the debt doesn\u2019t reduce?', 'Level term assurance (level sum assured, level premiums).', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Products','What makes convertible term assurance different — and why is it more expensive?', 'It can be converted to an endowment or whole-of-life plan later without new medical evidence — the flexibility makes it the most expensive term assurance type.', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Products','How does critical illness cover differ from income protection insurance?', 'CIC pays a one-off tax-free lump sum on diagnosis of a specified illness. IPI pays an ongoing replacement income while unable to work.', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Common exam traps','How many times can a standard (non-combined) CIC policy pay out?', 'Once only — the policy ceases once the sum assured is paid.', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Processes','What is a "deferred period" on an income protection policy?', 'The waiting period before benefit payments start after a claim — the longer it is, the cheaper the premium.', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Customer circumstances','What is the typical maximum income protection benefit as a % of pre-illness income?', 'Around 50-65%.', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Regulations','What is the legal difference between "assignment" and "deposit" of a life policy to a lender?', 'Assignment transfers legal ownership to the lender; deposit only gives the lender an equitable right to the proceeds.', 'CeMAP 2&3, CeMAP 3 Protection'),
  fc('cemap3','unit1','t1','Products','Does whole of life assurance guarantee a payout?', 'Yes — since death is certain to occur eventually, a claim is guaranteed (unlike term assurance, which can simply expire).', 'CeMAP 2&3, CeMAP 3 Protection'),

  // CeMAP 1 Unit 1 Topic 3 — State Benefits
  fc('cemap1','unit1','t3','Regulations','Which six legacy benefits did Universal Credit replace for new claims?', 'Income Support, income-based JSA, income-related ESA, Working Tax Credit, Child Tax Credit, and Housing Benefit.', 'CeMAP 1, Unit 1 Topic 3'),
  fc('cemap1','unit1','t3','Calculations','How many qualifying NIC years give the maximum new state pension, and how few give none?', '35 years for the maximum; fewer than 10 years gives no state pension at all.', 'CeMAP 1, Unit 1 Topic 3'),
  fc('cemap1','unit1','t3','Common exam traps','Is Child Benefit means-tested?', 'No — it isn\u2019t means-tested for eligibility, but a tax charge can claw it back if a partner\u2019s income exceeds the threshold.', 'CeMAP 1, Unit 1 Topic 3'),
  fc('cemap1','unit1','t3','Products','What is the "triple lock" for the state pension?', 'Annual uprating by the highest of average earnings growth, 2.5%, or CPI inflation.', 'CeMAP 1, Unit 1 Topic 3'),
  fc('cemap1','unit1','t3','Regulations','How long is new style JSA payable, maximum?', '6 months.', 'CeMAP 1, Unit 1 Topic 3'),

  // CeMAP 1 Unit 1 Topic 4a — Protection
  fc('cemap1','unit1','t4a','Regulations','Is there insurable interest between a parent and child?', 'No — there is no automatic insurable interest between parents and children in either direction.', 'CeMAP 1, Unit 1 Topic 4 Part 1'),
  fc('cemap1','unit1','t4a','Common exam traps','Can an insurer cancel an income protection policy if the policyholder claims often?', 'No — IPI cannot be cancelled by the insurer as long as premiums are paid, regardless of claims. ASU (a different product) CAN be cancelled, being annually renewable.', 'CeMAP 1, Unit 1 Topic 4 Part 1'),
  fc('cemap1','unit1','t4a','Processes','What is the hierarchy of financial needs, in order?', 'Living for today, protection, income protection, pension, savings, investment.', 'CeMAP 1, Unit 1 Topic 4 Part 1'),
  fc('cemap1','unit1','t4a','Products','When is a joint-life second-death policy typically used?', 'Almost exclusively for inheritance tax planning, since it only pays out on the second death.', 'CeMAP 1, Unit 1 Topic 4 Part 1'),
  fc('cemap1','unit1','t4a','Products','How many times can a standard critical illness policy pay out?', 'Once only — the policy ceases once a claim is paid.', 'CeMAP 1, Unit 1 Topic 4 Part 1'),
  fc('cemap1','unit1','t4a','Products','How does partnership protection insurance work?', 'Each partner takes out life assurance in trust for the others — on death, the survivors receive a lump sum via the trust to buy out the deceased partner\u2019s share, rather than being forced to accept the beneficiaries as new partners.', 'CeMAP 1, Unit 1 Topic 4 Part 1'),
  fc('cemap1','unit1','t4a','Definitions','What\u2019s the technical difference between "insurance" and "assurance"?', 'Insurance covers an uncertain event (may or may not happen); assurance covers a certain event (will definitely happen eventually) — e.g. whole-of-life ASSURANCE pays out when, not if, death occurs.', 'CeMAP 1, Unit 1 Topic 4 Part 1'),
  fc('cemap1','unit1','t4a','Definitions','What is an "averaging clause" in general insurance?', 'Where a policyholder has under-insured an asset, the insurer reduces the claim payment in proportion to the degree of under-insurance.', 'CeMAP 1, Unit 1 Topic 4 Part 1'),
  fc('cemap1','unit1','t4a','Products','Name the standard risks covered by a buildings insurance policy.', 'Fire/smoke, lightning/earthquake/explosion, storm and flood, subsidence/heave, impact damage, theft, riot/strike/civil disturbance, and escape of water/oil — accidental damage is usually an optional extra.', 'CeMAP 1, Unit 1 Topic 4 Part 1'),

  // CeMAP 1 Unit 1 Topic 4b — Savings & Investments
  fc('cemap1','unit1','t4b','Common exam traps','Are unit trusts single-priced or dual-priced?', 'Dual-priced (offer price to buy, bid price to sell) — OEICs are typically single-priced instead.', 'CeMAP 1, Unit 1 Topic 4 Part 2'),
  fc('cemap1','unit1','t4b','Products','Which collective investment structure can "gear" (borrow to invest)?', 'Investment trusts — being close-ended companies, uniquely among the three main collective structures.', 'CeMAP 1, Unit 1 Topic 4 Part 2'),
  fc('cemap1','unit1','t4b','Calculations','If market interest rates rise above a bond\u2019s fixed coupon, what happens to its resale price?', 'It falls, since new buyers can get a better rate elsewhere and will only buy at a discount.', 'CeMAP 1, Unit 1 Topic 4 Part 2'),
  fc('cemap1','unit1','t4b','Regulations','What minimum % of income must an investment trust distribute as dividends?', '85%.', 'CeMAP 1, Unit 1 Topic 4 Part 2'),
  fc('cemap1','unit1','t4b','Products','What tax relief do VCTs and EIS both offer?', '30% income tax relief on the qualifying investment (clawed back if sold too early — 5 years for VCTs, 3 years for EIS).', 'CeMAP 1, Unit 1 Topic 4 Part 2'),
  fc('cemap1','unit1','t4b','Calculations','Does buying a bond below face value give a higher or lower running yield?', 'Higher — you still receive interest based on the face value, but paid less to buy it.', 'CeMAP 1, Unit 1 Topic 4 Part 2'),
  fc('cemap1','unit1','t4b','Definitions','What\u2019s the difference between a "non-equity" and "equity" fund for tax purposes?', 'Non-equity fund (60%+ in interest-bearing assets): taxed under savings rules. Equity fund (under 60% in fixed interest/cash): taxed as dividends.', 'CeMAP 1, Unit 1 Topic 4 Part 2'),

  // CeMAP 1 Unit 1 Topic 4c — Retirement & Borrowing
  fc('cemap1','unit1','t4c','Regulations','What is the auto-enrolment minimum contribution split?', '4% employee, 3% employer, 1% government tax relief (8% total).', 'CeMAP 1, Unit 1 Topic 4 Part 3'),
  fc('cemap1','unit1','t4c','Regulations','What is the personal pension tax relief contribution limit?', 'The greater of £3,600 or earned income, subject to the annual allowance.', 'CeMAP 1, Unit 1 Topic 4 Part 3'),
  fc('cemap1','unit1','t4c','Common exam traps','Which sector now mostly has Defined Benefit schemes, and which mostly has Defined Contribution?', 'Defined Benefit is now mainly public sector; Defined Contribution now dominates the private sector.', 'CeMAP 1, Unit 1 Topic 4 Part 3'),
  fc('cemap1','unit1','t4c','Regulations','How is mortgage charge priority on a property determined?', 'By the order of registration at the Land Registry, not by who claims first.', 'CeMAP 1, Unit 1 Topic 4 Part 3'),
  fc('cemap1','unit1','t4c','Regulations','Which sourcebook regulates secured lending, and which regulates unsecured lending?', 'MCOB for secured lending; CONC for unsecured lending.', 'CeMAP 1, Unit 1 Topic 4 Part 3'),

  // CeMAP 1 Unit 1 Topic 5 — Legal Principles
  fc('cemap1','unit1','t5','Common exam traps','Does an Ordinary Power of Attorney remain valid if the donor loses mental capacity?', 'No — it automatically ends. A Lasting Power of Attorney is specifically designed to remain (or take) effect after loss of capacity.', 'CeMAP 1, Unit 1 Topic 5'),
  fc('cemap1','unit1','t5','Regulations','How long does bankruptcy last in the UK?', '1 year, since the Enterprise Act 2002 (both England/Wales and Scotland).', 'CeMAP 1, Unit 1 Topic 5'),
  fc('cemap1','unit1','t5','Regulations','What debt threshold lets a creditor petition for someone\u2019s bankruptcy?', '£5,000 (an individual can petition for their own bankruptcy at any debt level).', 'CeMAP 1, Unit 1 Topic 5'),
  fc('cemap1','unit1','t5','Processes','What is the Consumer Insurance Act 2012\u2019s "reasonable care" test outcome if misrepresentation is careless but the insurer would still have covered the risk (at a higher premium)?', 'The claim is paid, but proportionately reduced to reflect the careless misrepresentation.', 'CeMAP 1, Unit 1 Topic 5'),
  fc('cemap1','unit1','t5','Definitions','What is the difference between "actual authority" and "apparent authority" in agency law?', 'Actual authority is power genuinely granted; apparent authority is where the principal\u2019s conduct would lead a reasonable person to believe authority was granted, even without an explicit grant.', 'CeMAP 1, Unit 1 Topic 5'),
  fc('cemap1','unit1','t5','Definitions','What is the key difference between a joint tenancy and a tenancy in common?', 'Joint tenancy: no defined share, passes automatically to survivor. Tenancy in common: defined share, passes via will/intestacy.', 'CeMAP 1, Unit 1 Topic 5'),
  fc('cemap1','unit1','t5','Definitions','What is the difference between "realty" and "personalty"?', 'Realty is land and everything attached to it. Personalty is any property that is NOT land (e.g. a wine collection).', 'CeMAP 1, Unit 1 Topic 5'),
  fc('cemap1','unit1','t5','Regulations','How far back can a trustee in bankruptcy normally "attack" suspicious transactions, and when can this extend?', '2 years normally; extends to 5 years if the person was insolvent at the time of that earlier transaction.', 'CeMAP 1, Unit 1 Topic 5'),
  fc('cemap1','unit1','t5','Regulations','What documents do Executors and Administrators need before distributing an estate?', 'Executors (valid will): Grant of Probate. Administrators (no valid will): Grant of Letters of Administration.', 'CeMAP 1, Unit 1 Topic 5'),

  // CeMAP 1 Unit 1 Topic 6 — Wills, Intestacy & Trusts
  fc('cemap1','unit1','t6','Regulations','How many days must a spouse survive the deceased to inherit under intestacy?', '28 days.', 'CeMAP 1, Unit 1 Topic 6'),
  fc('cemap1','unit1','t6','Common exam traps','What happens if a beneficiary (or their spouse) witnesses the will that benefits them?', 'They forfeit their gift, but the will itself remains valid.', 'CeMAP 1, Unit 1 Topic 6'),
  fc('cemap1','unit1','t6','Processes','Within how long of death must a Deed of Variation be made, and who must agree to it?', 'Within 2 years of death; only beneficiaries adversely affected by the change need to agree.', 'CeMAP 1, Unit 1 Topic 6'),
  fc('cemap1','unit1','t6','Products','What\u2019s the key difference between a lifetime IIP trust and an immediate post-death interest trust for IHT?', 'A lifetime gift into an IIP trust is a Chargeable Lifetime Transfer (20% charge on the excess); a post-death interest trust created by will is taxed as a normal legacy instead.', 'CeMAP 1, Unit 1 Topic 6'),
  fc('cemap1','unit1','t6','Common exam traps','Does divorce revoke a will?', 'No — unlike marriage, divorce doesn\u2019t revoke a will, but the ex-spouse is treated as having predeceased the testator by default.', 'CeMAP 1, Unit 1 Topic 6'),
  fc('cemap1','unit1','t6','Products','What automatically creates a Married Women\u2019s Property Act (1882) trust?', 'Taking out a life policy on your own life specifically for the benefit of a spouse/civil partner or children.', 'CeMAP 1, Unit 1 Topic 6'),
  fc('cemap1','unit1','t6','Definitions','What is a "gift with reservation", and why does it matter for IHT?', 'A gift where the giver keeps some benefit (e.g. giving away a house but living in it rent-free) — it stays IN their estate for IHT; paying market rent would remove the problem.', 'CeMAP 1, Unit 1 Topic 6'),
  fc('cemap1','unit1','t6','Products','How does a "split trust" work with a combined life and critical illness policy?', 'The critical illness element stays outside the trust (so the insured gets a living claim directly); the life cover element is held in trust.', 'CeMAP 1, Unit 1 Topic 6'),
  fc('cemap1','unit1','t6','Products','What is a "designated account", and how does its tax treatment depend on who funds it?', 'A simple account/investment held in an adult\u2019s name with a child\u2019s initials added. If a parent funds it, income over £100/year is taxed as the parent\u2019s; if funded by someone else (e.g. a grandparent), income/gains belong to the child.', 'CeMAP 1, Unit 1 Topic 6'),

  // CeMAP 1 Unit 1 Topic 7 — Development of UK Regulation
  fc('cemap1','unit1','t7','Regulations','What is the UK financial services regulatory timeline?', 'Banking regulated 1998 → most services Dec 2001 (FSMA) → mortgages Oct 2004 → insurance Jan 2005 → twin peaks (PRA/FCA) April 2013.', 'CeMAP 1, Unit 1 Topic 7'),
  fc('cemap1','unit1','t7','Regulations','What was the "tripartite system" and why was it replaced?', 'Bank of England, FSA and Treasury sharing regulatory responsibility — criticised after the 2007-08 crisis (esp. Northern Rock) for unclear accountability, leading to the twin peaks model.', 'CeMAP 1, Unit 1 Topic 7'),
  fc('cemap1','unit1','t7','Processes','Where does an occupational pension scheme complaint go first, and where next if unresolved?', 'The scheme trustees (via the IDRP, 4 months to respond), then the Pensions Ombudsman.', 'CeMAP 1, Unit 1 Topic 7'),
  fc('cemap1','unit1','t7','Common exam traps','Is the Pensions Regulator responsible for pension mis-selling complaints?', 'No — that\u2019s a common trap; it oversees scheme administration, security and governance, not mis-selling or underperformance.', 'CeMAP 1, Unit 1 Topic 7'),
  fc('cemap1','unit1','t7','Regulations','What does the Information Commissioner\u2019s Office enforce?', 'The Data Protection Act 2018 and the Freedom of Information Act 2000.', 'CeMAP 1, Unit 1 Topic 7'),
  fc('cemap1','unit1','t7','Regulations','What is the FCA\u2019s legal status, and who appoints its board?', 'It\u2019s a limited company (not a government department or part of the Bank of England) — its board is appointed by HM Treasury.', 'CeMAP 1, Unit 1 Topic 7'),
  fc('cemap1','unit1','t7','Definitions','What is "macroprudential supervision", and who\u2019s responsible for it?', 'Identifying and acting on systemic risks to the whole financial system — the Financial Policy Committee\u2019s responsibility, chaired by the Bank of England Governor.', 'CeMAP 1, Unit 1 Topic 7'),
  fc('cemap1','unit1','t7','Regulations','Name 3 of the "threshold conditions" a firm must meet for authorisation.', 'Any 3 of: legal status, office location, adequate resources, adequate capital/liquidity, suitability of firm/staff, business model, effective supervision.', 'CeMAP 1, Unit 1 Topic 7'),

  // CeMAP 1 Unit 1 Topic 8a — PRA & FCA Approach (Part 1)
  fc('cemap1','unit1','t8a','Regulations','What are the PRA\u2019s 4 statutory objectives?', 'Promote safety/soundness of firms; protect insurance policyholders; facilitate effective competition; facilitate UK international competitiveness.', 'CeMAP 1, Unit 1 Topic 8 Part 1'),
  fc('cemap1','unit1','t8a','Regulations','How many strategic objectives does the FCA have, and how many operational objectives?', 'One strategic objective (markets function well), supported by three operational objectives.', 'CeMAP 1, Unit 1 Topic 8 Part 1'),
  fc('cemap1','unit1','t8a','Processes','What are the FCA\u2019s three supervision pillars?', 'Proactive, Reactive, Thematic.', 'CeMAP 1, Unit 1 Topic 8 Part 1'),
  fc('cemap1','unit1','t8a','Common exam traps','Which FCA enforcement actions need a court order, and which don\u2019t?', 'Need court: injunction, restitution, redress. Don\u2019t need court: varying permissions, withdrawing approval, disciplinary action.', 'CeMAP 1, Unit 1 Topic 8 Part 1'),
  fc('cemap1','unit1','t8a','Regulations','What do MCOB, ICOB and BCOB stand for/cover?', 'Conduct of Business Sourcebooks for mortgages (MCOB), insurance (ICOB) and banking (BCOB).', 'CeMAP 1, Unit 1 Topic 8 Part 1'),
  fc('cemap1','unit1','t8a','Definitions','What is the "solvency ratio" in capital adequacy regulation?', 'A firm\u2019s own capital held as a proportion of its assets (risk-weighted) — ensures losses fall on shareholders, not depositors.', 'CeMAP 1, Unit 1 Topic 8 Part 1'),
  fc('cemap1','unit1','t8a','Regulations','What does the PRA\u2019s Proactive Intervention Framework (PIF) do?', 'Helps the PRA identify early risks to a firm\u2019s viability so remedial action can be prompted before problems worsen.', 'CeMAP 1, Unit 1 Topic 8 Part 1'),

  // CeMAP 1 Unit 1 Topic 8b — PRA & FCA Approach (Part 2)
  fc('cemap1','unit1','t8b','Regulations','What is the de minimis threshold for dormant client money before a firm must attempt contact before paying it away?', '£25 for retail clients, £100 for other clients.', 'CeMAP 1, Unit 1 Topic 8 Part 2'),
  fc('cemap1','unit1','t8b','Common exam traps','Who certifies fitness and propriety under the Certification Regime vs the Senior Managers Regime?', 'Certification Regime: the firm itself certifies (annually). Senior Managers Regime: the FCA/PRA personally vet and approve.', 'CeMAP 1, Unit 1 Topic 8 Part 2'),
  fc('cemap1','unit1','t8b','Regulations','What are the 3 SM&CR firm categories?', 'Limited scope, Core, Enhanced.', 'CeMAP 1, Unit 1 Topic 8 Part 2'),
  fc('cemap1','unit1','t8b','Regulations','Who is exempt from the Code of Conduct rules?', 'Only purely ancillary staff — security, IT support, reception, transport.', 'CeMAP 1, Unit 1 Topic 8 Part 2'),
  fc('cemap1','unit1','t8b','Regulations','What are the three components of the fit and proper test?', 'Honesty/integrity/reputation, competence/capability, and financial soundness.', 'CeMAP 1, Unit 1 Topic 8 Part 2'),
  fc('cemap1','unit1','t8b','Regulations','For a sole trader firm, when is SMF16 (compliance oversight) required in addition to SMF29?', 'Once the firm\u2019s turnover exceeds £1m — though the same person can hold both SMF29 and SMF16.', 'CeMAP 1, Unit 1 Topic 8 Part 2'),
  fc('cemap1','unit1','t8b','Regulations','What extra qualification do equity release advisers need on top of CeMAP?', 'An additional Level 3 qualification specific to equity release.', 'CeMAP 1, Unit 1 Topic 8 Part 2'),

  // CeMAP 1 Unit 2 Topic 1 — Advice Process & Adviser Skills
  fc('cemap1','unit2','t1','Definitions','What\u2019s the difference between "attitude to risk" and "capacity for loss"?', 'Attitude to risk is subjective willingness to accept risk; capacity for loss is the factual ability to absorb a loss without harming standard of living.', 'CeMAP 1, Unit 2 Topic 1'),
  fc('cemap1','unit2','t1','Regulations','When is a Key Information Document (KID) required, and what\u2019s the one notable exception?', 'Required for PRIIPs (unit trusts, OEICs, investment trusts, insurance-based investments, structured products, VCTs) — but NOT personal pensions.', 'CeMAP 1, Unit 2 Topic 1'),
  fc('cemap1','unit2','t1','Regulations','What are the three different suitability report deadlines?', 'Life policies: before conclusion. Pensions: within 14 days of conclusion. Unit trusts/OEICs/investment trusts: as soon as possible after execution.', 'CeMAP 1, Unit 2 Topic 1'),
  fc('cemap1','unit2','t1','Processes','What must happen for an execution-only sale of a complex product (e.g. futures, options, structured products)?', 'An "appropriateness test" — checking the client has the knowledge/experience to understand the risks.', 'CeMAP 1, Unit 2 Topic 1'),
  fc('cemap1','unit2','t1','Regulations','How long must records be kept for: pension transfers, life policies, and mortgages?', 'Pension transfers/opt-outs/FSAVCs: indefinitely. Life policies/investment bonds/MiFID business: 5 years. Other products (inc. mortgages): 3 years.', 'CeMAP 1, Unit 2 Topic 1'),
  fc('cemap1','unit2','t1','Definitions','What did Mehrabian find about how feelings/attitudes are communicated?', 'Only 7% from the words themselves — 38% from tone of voice, 55% from facial expression.', 'CeMAP 1, Unit 2 Topic 1'),

  // CeMAP 1 Unit 2 Topic 2a — Consumer Rights & Ethical Outcomes
  fc('cemap1','unit2','t2a','Processes','Which ADR method\u2019s decision can be appealed through the courts?', 'Adjudication — unlike arbitration, whose decision is legally binding and final.', 'CeMAP 1, Unit 2 Topic 2 Part 1'),
  fc('cemap1','unit2','t2a','Regulations','What are the FCA\u2019s 12th Principle for Businesses (Consumer Duty) and its 3 cross-cutting obligations?', '"A firm must act to deliver good outcomes for retail customers" — obligations: act in good faith, avoid foreseeable harm, enable/support customers\u2019 objectives.', 'CeMAP 1, Unit 2 Topic 2 Part 1'),
  fc('cemap1','unit2','t2a','Regulations','Name the 4 designated bodies that can make super-complaints to the FCA.', 'Which?, Citizens Advice, Federation of Small Businesses, Consumer Council for Northern Ireland.', 'CeMAP 1, Unit 2 Topic 2 Part 1'),
  fc('cemap1','unit2','t2a','Definitions','What\u2019s the difference between insider dealing and market manipulation?', 'Insider dealing = trading on non-public information. Market manipulation = spreading false/misleading information to move a price.', 'CeMAP 1, Unit 2 Topic 2 Part 1'),

  // CeMAP 1 Unit 2 Topic 2b — Money Laundering, Data & Complaints
  fc('cemap1','unit2','t2b','Regulations','What are the AML customer ID verification thresholds?', '€15,000 for an individual, €10,000 for a business "occasional transaction", €1,000/€2,500 for life assurance premiums.', 'CeMAP 1, Unit 2 Topic 2 Part 2'),
  fc('cemap1','unit2','t2b','Regulations','What is the FSCS deposit protection limit, and how can it be extended?', '£85,000 per person per firm (£170,000 joint) — extendable to £1m for 6 months for a "temporary high balance" (e.g. house sale, inheritance).', 'CeMAP 1, Unit 2 Topic 2 Part 2'),
  fc('cemap1','unit2','t2b','Common exam traps','Which insurance products get 100% FSCS protection vs 90%?', '100%: pure protection (term, CIC, income protection), long-term care, annuities, compulsory insurances. 90%: most other insurance types.', 'CeMAP 1, Unit 2 Topic 2 Part 2'),
  fc('cemap1','unit2','t2b','Regulations','Who handles a pension mis-selling complaint vs a scheme administration complaint?', 'Mis-selling: Financial Ombudsman Service. Scheme administration/running: Pensions Ombudsman (after the trustees\u2019 IDRP).', 'CeMAP 1, Unit 2 Topic 2 Part 2'),
  fc('cemap1','unit2','t2b','Regulations','What are the maximum sentences for money laundering offences?', 'Concealing/arranging/acquiring: up to 14 years. Failure to disclose/tipping off: up to 5 years.', 'CeMAP 1, Unit 2 Topic 2 Part 2'),
  fc('cemap1','unit2','t2b','Regulations','Name 4 of the 7 data protection principles.', 'Any 4 of: processed fairly/lawfully, specified purpose only, adequate not excessive, accurate/up to date, not kept too long, processed securely, controller responsible for compliance.', 'CeMAP 1, Unit 2 Topic 2 Part 2'),

  // CeMAP 1 Unit 2 Topic 3 — Regulatory Advice Framework
  fc('cemap1','unit2','t3','Definitions','Rank the 3 client categories by level of protection, lowest to highest.', 'Eligible counterparty (lowest) → professional client → retail client (highest).', 'CeMAP 1, Unit 2 Topic 3'),
  fc('cemap1','unit2','t3','Definitions','What are the FCA\u2019s 4 drivers of vulnerability?', 'Health, life events, resilience, capability.', 'CeMAP 1, Unit 2 Topic 3'),
  fc('cemap1','unit2','t3','Common exam traps','Is cold calling allowed for mortgages?', 'No — unsolicited cold calls are banned for mortgages and higher-risk investments, but allowed for packaged products like life assurance and pensions.', 'CeMAP 1, Unit 2 Topic 3'),
  fc('cemap1','unit2','t3','Regulations','What are the two cooling-off periods, and which products get which?', '30 days: life/pension/pure protection products. 14 days: investments, ISAs, general insurance.', 'CeMAP 1, Unit 2 Topic 3'),
  fc('cemap1','unit2','t3','Definitions','What\u2019s the minimum past-performance period required in a financial promotion?', '5 years (or the product\u2019s life if shorter, but never less than 1 year).', 'CeMAP 1, Unit 2 Topic 3'),
  fc('cemap1','unit2','t3','Definitions','Name the 4 key fiduciary duties an adviser owes a client.', 'Duty of care, confidentiality, integrity, and putting the customer\u2019s interests first.', 'CeMAP 1, Unit 2 Topic 3'),
  fc('cemap1','unit2','t3','Regulations','What are the 3 elements that make advice "regulated (investment) advice"?', 'A recommendation is made; it relates to buying/selling/retaining/subscribing to an investment; it\u2019s presented as both suitable AND affordable for that person.', 'CeMAP 1, Unit 2 Topic 3'),
  fc('cemap1','unit2','t3','Definitions','What is "basic advice", and how does it differ from focused/simplified advice?', 'A pre-scripted-question sales process used specifically for stakeholder products — a separate category from focused/simplified advice.', 'CeMAP 1, Unit 2 Topic 3'),

  // CeMAP 1 Unit 2 Topic 4 — Ethical Principles
  fc('cemap1','unit2','t4','Definitions','What are the three categories of ethical theory, in one line each?', 'Consequentialist: ends justify the means. Deontological: rule-based, regardless of outcome. Virtue: character-based — what a virtuous person would do.', 'CeMAP 1, Unit 2 Topic 4'),
  fc('cemap1','unit2','t4','Regulations','What qualification level and deadline apply to mortgage advisers vs financial advisers?', 'Mortgage advisers: Level 3 (e.g. CeMAP). Financial advisers: Level 4. Both within 48 months of first advising under supervision.', 'CeMAP 1, Unit 2 Topic 4'),
  fc('cemap1','unit2','t4','Common exam traps','Does changing employer reset the 48-month qualification clock?', 'No — the clock runs from when the individual first began advising under supervision, regardless of employer changes.', 'CeMAP 1, Unit 2 Topic 4'),
  fc('cemap1','unit2','t4','Regulations','What is the annual CPD requirement for a competent adviser?', '35 hours total per year, of which at least 21 hours must be "structured" (defined learning outcome).', 'CeMAP 1, Unit 2 Topic 4'),
  fc('cemap1','unit2','t4','Common exam traps','Must an adviser show their Statement of Professional Standing (SPS) to a customer?', 'No — it is not a requirement, though the adviser may choose to.', 'CeMAP 1, Unit 2 Topic 4'),
  fc('cemap1','unit2','t4','Definitions','What is "meta-ethics", and how does it differ from normative ethics?', 'Meta-ethics examines the NATURE of moral judgements (is there really a "good" and "bad"?) rather than judging whether specific actions are right or wrong — that judging is normative ethics\u2019 job.', 'CeMAP 1, Unit 2 Topic 4'),
  fc('cemap1','unit2','t4','Regulations','What is the FCA\u2019s "regulatory sandbox"?', 'A controlled environment letting firms trial new products/ideas without the usual fear of regulatory sanction.', 'CeMAP 1, Unit 2 Topic 4'),

  // CeMAP 2 Unit 1 Topic 1 — Property and Mortgage Markets
  fc('cemap2','unit1','t1','Definitions','What is "securitisation" and how did it contribute to the credit crunch?', 'Bundling mortgages (including subprime) together and selling them to investors worldwide — when defaults rose, losses spread globally through these bundles.', 'CeMAP 2&3, Unit 1 Topic 1'),
  fc('cemap2','unit1','t1','Definitions','What is SONIA and why did it replace the old interbank rate benchmark?', 'The Sterling Overnight Index Average — based on actual transactions, making it harder to manipulate than the old interbank rate.', 'CeMAP 2&3, Unit 1 Topic 1'),
  fc('cemap2','unit1','t1','Regulations','What minimum % of lending must building societies devote to residential property?', '75%.', 'CeMAP 2&3, Unit 1 Topic 1'),
  fc('cemap2','unit1','t1','Products','How do specialist mortgage houses/challenger banks typically fund their lending?', 'From the wholesale market, operating on a centralised (call centre) basis rather than a branch network.', 'CeMAP 2&3, Unit 1 Topic 1'),

  // CeMAP 2 Unit 1 Topics 2&3 — Mortgage Regulation & Types of Borrower
  fc('cemap2','unit1','t2_3','Regulations','What are the 4 conditions for a mortgage to be MCOB/MCD regulated?', 'Individual/trustee borrower + UK land + secured by legal charge + at least 40% used as a dwelling.', 'CeMAP 2&3, Unit 1 Topics 2&3'),
  fc('cemap2','unit1','t2_3','Common exam traps','Is an LLP mortgage regulated the same way as a business partnership mortgage?', 'No — an LLP is a separate legal entity (like a company) so its mortgage is unregulated; an ordinary partnership has no separate legal personality, so its mortgage CAN be regulated.', 'CeMAP 2&3, Unit 1 Topics 2&3'),
  fc('cemap2','unit1','t2_3','Products','What is a Consumer Buy-to-Let (CBTL) mortgage, and give an example.', 'A BTL mortgage brought into MCD regulation for "accidental landlords" — e.g. inheriting a property to rent out, or "let-to-buy".', 'CeMAP 2&3, Unit 1 Topics 2&3'),
  fc('cemap2','unit1','t2_3','Regulations','How long does bankruptcy last, and how long does it show on a credit file?', '12 months\u2019 duration; shows on the Insolvency Register for 3 months post-discharge and on the credit file for 6 years from the bankruptcy declaration.', 'CeMAP 2&3, Unit 1 Topics 2&3'),
  fc('cemap2','unit1','t2_3','Common exam traps','Does an IVA prevent someone from getting a mortgage?', 'No — unlike undischarged bankruptcy, an IVA does not legally prevent a new mortgage.', 'CeMAP 2&3, Unit 1 Topics 2&3'),

  // CeMAP 2 Unit 1 Topic 4 — Principles of Mortgage and Property Law
  fc('cemap2','unit1','t4','Definitions','What\u2019s the difference between joint tenancy and tenancy in common for mortgage purposes?', 'Joint tenancy: no defined share, automatic survivorship. Tenancy in common: defined equitable share passing by will, though legal title still passes to the survivor.', 'CeMAP 2&3, Unit 1 Topic 4'),
  fc('cemap2','unit1','t4','Regulations','How many years remaining on a lease do lenders typically require, relative to the mortgage term?', '30-40 years remaining AFTER the mortgage term ends.', 'CeMAP 2&3, Unit 1 Topic 4'),
  fc('cemap2','unit1','t4','Common exam traps','What is the new standard lease extension term under the Leasehold and Freehold Reform Act 2024?', '990 years (up from 90 years).', 'CeMAP 2&3, Unit 1 Topic 4'),
  fc('cemap2','unit1','t4','Products','What happens on "forfeiture" of a lease, and how does a lender protect against it?', 'The lease terminates and the property reverts to the freeholder — lenders protect via a mortgage deed clause or (more reliably) forfeiture insurance.', 'CeMAP 2&3, Unit 1 Topic 4'),

  // CeMAP 2 Unit 1 Topic 5 — Property and Mortgage Law
  fc('cemap2','unit1','t5','Definitions','What are HM Land Registry\u2019s three registers, and what does each hold?', 'Property Register (description/plan/beneficial easements), Proprietorship Register (owner/class of title), Charges Register (mortgages/adverse easements/spousal interest).', 'CeMAP 2&3, Unit 1 Topic 5'),
  fc('cemap2','unit1','t5','Common exam traps','Do positive or restrictive covenants "run with the land"?', 'Restrictive covenants run with the land (bind future owners); positive covenants do not.', 'CeMAP 2&3, Unit 1 Topic 5'),
  fc('cemap2','unit1','t5','Regulations','How long must someone occupy land undisputed to upgrade Possessory title to Absolute?', '10 years for registered land, 12 years for unregistered land ("squatters\u2019 rights").', 'CeMAP 2&3, Unit 1 Topic 5'),
  fc('cemap2','unit1','t5','Common exam traps','Is there a borrower covenant to comply with "the terms of the freehold"?', 'No — freehold ownership has no superior landlord imposing such terms, unlike leasehold.', 'CeMAP 2&3, Unit 1 Topic 5'),

  // CeMAP 2 Unit 1 Topic 6 — Buying a Property: An Overview
  fc('cemap2','unit1','t6','Definitions','What is "gazumping"?', 'A vendor accepting a higher offer from another buyer after already accepting an earlier offer — unethical, but legal.', 'CeMAP 2&3, Unit 1 Topic 6'),
  fc('cemap2','unit1','t6','Regulations','From what point must buildings insurance be in place, and why?', 'From exchange of contracts — the buyer is technically liable for damage from that point, even before legally owning the property.', 'CeMAP 2&3, Unit 1 Topic 6'),
  fc('cemap2','unit1','t6','Common exam traps','What\u2019s the key difference between a traditional auction and the Modern Method of Auction?', 'Traditional: 10% deposit, same-day exchange. Modern Method: 5% non-refundable reservation fee (not part of the price), 28 days to exchange.', 'CeMAP 2&3, Unit 1 Topic 6'),
  fc('cemap2','unit1','t6','Products','Rank the estate agent fee structures from typically cheapest to most expensive.', 'Sole agency (cheapest) → joint sole agency → multiple agency (typically most expensive, reflecting agents\u2019 competitive risk).', 'CeMAP 2&3, Unit 1 Topic 6'),

  // CeMAP 2 Unit 1 Topics 7&8 — Legal Side of Purchase & Buying Process
  fc('cemap2','unit1','t7_8','Regulations','What is the high-net-worth execution-only threshold, and does it apply jointly or individually?', '£300,000 net annual income OR £3m net assets — applies to at least ONE applicant individually, even on a joint application.', 'CeMAP 2&3, Unit 1 Topics 7&8'),
  fc('cemap2','unit1','t7_8','Definitions','What\u2019s the key difference between an ESIS and a KFI?', 'ESIS (post-March 2016): has a 7-day reflection period, uses "APRC". KFI (pre-2016 mortgages being varied): no reflection period, uses "APR".', 'CeMAP 2&3, Unit 1 Topics 7&8'),
  fc('cemap2','unit1','t7_8','Regulations','When must non-real-time promotion records be kept, and for how long?', 'For 12 months from when the promotion was last used.', 'CeMAP 2&3, Unit 1 Topics 7&8'),
  fc('cemap2','unit1','t7_8','Regulations','Which types of customer can go execution-only even with interactive dialogue?', 'High net worth, professional (12+ months in home finance), and business customers.', 'CeMAP 2&3, Unit 1 Topics 7&8'),

  // CeMAP 2 Unit 1 Topics 9&10 — Role of the Adviser & Financial Status
  fc('cemap2','unit1','t9_10','Calculations','What is the Profit & Loss calculation chain for self-employed affordability?', 'Turnover − Variable Costs = Gross Profit; Gross Profit − Routine Expenses = Net Profit before tax (the figure lenders use).', 'CeMAP 2&3, Unit 1 Topics 9&10'),
  fc('cemap2','unit1','t9_10','Common exam traps','When does the interest rate stress test NOT need to be applied?', 'When the mortgage is fixed for 5 years or more — only variable rates and fixes under 5 years need stress testing.', 'CeMAP 2&3, Unit 1 Topics 9&10'),
  fc('cemap2','unit1','t9_10','Regulations','What is the minimum stress test addition, even if market expectations suggest less?', '+1% — even if market/FPC expectations suggest a smaller rise.', 'CeMAP 2&3, Unit 1 Topics 9&10'),
  fc('cemap2','unit1','t9_10','Regulations','What is the PRA\u2019s Loan-to-Income (LTI) flow limit?', 'Max 15% of a lender\u2019s new mortgages can exceed 4.5× the borrower\u2019s income.', 'CeMAP 2&3, Unit 1 Topics 9&10'),

  // CeMAP 2 Unit 1 Topics 11&12 — Credit Status & Suitability
  fc('cemap2','unit1','t11_12','Definitions','Full guarantee vs limited guarantee — what\u2019s the difference?', 'Full: guarantor liable for the whole debt. Limited: guarantor liable only for an agreed percentage.', 'CeMAP 2&3, Unit 1 Topics 11&12'),
  fc('cemap2','unit1','t11_12','Common exam traps','Does an IVA prevent a mortgage application? Does undischarged bankruptcy?', 'IVA: does NOT legally prevent one (though seen as risky). Undischarged bankruptcy: DOES legally prevent a new mortgage.', 'CeMAP 2&3, Unit 1 Topics 11&12'),
  fc('cemap2','unit1','t11_12','Products','What credible interest-only repayment strategies are acceptable under MCOB?', 'Defined investments, downsizing, using bonuses to repay capital — NOT speculative strategies like house price inflation or inheritance.', 'CeMAP 2&3, Unit 1 Topics 11&12'),
  fc('cemap2','unit1','t11_12','Regulations','How long does a default stay on a credit record, even if later paid off?', '6 years.', 'CeMAP 2&3, Unit 1 Topics 11&12'),

  // CeMAP 2 Unit 1 Topics 13&14 — Property Assessment, Valuations & Surveys
  fc('cemap2','unit1','t13_14','Regulations','At what lease length does "marriage value" kick in, and who gets the benefit?', 'Below 80 years remaining — the freeholder is entitled to 50% of the value uplift from extending.', 'CeMAP 2&3, Unit 1 Topics 13&14'),
  fc('cemap2','unit1','t13_14','Definitions','Whose contract is a basic valuation vs a RICS Level 2/3 survey?', 'Basic valuation: lender and valuer (borrower just pays). RICS Level 2/3: surveyor and the applicant/borrower directly.', 'CeMAP 2&3, Unit 1 Topics 13&14'),
  fc('cemap2','unit1','t13_14','Calculations','How do you calculate gross yield vs net yield on a BTL property?', 'Gross yield = rent ÷ purchase price × 100. Net yield = (rent − running costs) ÷ purchase price × 100 (the more accurate figure).', 'CeMAP 2&3, Unit 1 Topics 13&14'),
  fc('cemap2','unit1','t13_14','Products', 'What\u2019s the difference between an Undertaking and a Retention?', 'Undertaking: minor/cosmetic issue, borrower promises to fix within 3-6 months. Retention: serious/structural issue, lender withholds funds until fixed.', 'CeMAP 2&3, Unit 1 Topics 13&14'),

  // CeMAP 2 Unit 1 Topic 15 — Other Factors Affecting the Lending Decision
  fc('cemap2','unit1','t15','Calculations','How do you calculate LTV, and what\u2019s the typical maximum first-charge lenders allow?', 'LTV = (Loan ÷ Value) × 100. Lenders rarely exceed 90-95% LTV.', 'CeMAP 2&3, Unit 1 Topic 15'),
  fc('cemap2','unit1','t15','Common exam traps','Does a Mortgage Indemnity Guarantee (MIG) protect the borrower?', 'No — it protects only the LENDER; the insurer can even sue the borrower via subrogation for what it paid out.', 'CeMAP 2&3, Unit 1 Topic 15'),
  fc('cemap2','unit1','t15','Regulations','What is the SDLT "major interest" threshold for the additional-property surcharge?', 'A joint owner\u2019s own share of another property must exceed £40,000 to count as a "major interest" and trigger the 5% surcharge.', 'CeMAP 2&3, Unit 1 Topic 15'),
  fc('cemap2','unit1','t15','Regulations','Within how many days of completion must SDLT be paid?', '14 days.', 'CeMAP 2&3, Unit 1 Topic 15'),

  // CeMAP 2 Unit 2 Topic 2 — Repayment Vehicles for Interest-Only Mortgages
  fc('cemap2','unit2','t2','Products','What\u2019s the GSA on a Full endowment vs a Low-Cost endowment?', 'Full: GSA equals the full mortgage amount (guaranteed). Low-Cost: GSA starts around half the mortgage, relying on bonuses for the rest.', 'CeMAP 2&3, MRT2 Topic 2'),
  fc('cemap2','unit2','t2','Common exam traps','Which endowment type has a flexible maturity date?', 'Only Unit-Linked — all With-Profits types (Full, Low-Cost, Unitised) have a FIXED maturity date and payments.', 'CeMAP 2&3, MRT2 Topic 2'),
  fc('cemap2','unit2','t2','Regulations','What is the Lifetime ISA bonus, contribution limit, and age window?', '25% government bonus (max £4,000/year contribution, max £1,000 bonus/year), ages 18-39 to open, bonus available until age 50.', 'CeMAP 2&3, MRT2 Topic 2'),
  fc('cemap2','unit2','t2','Calculations','How big does a pension fund need to be for the 25% tax-free cash alone to clear the mortgage?', 'Roughly 4× the mortgage balance.', 'CeMAP 2&3, MRT2 Topic 2'),

  // CeMAP 2 Unit 2 Topic 3 — Interest Rate Options
  fc('cemap2','unit2','t3','Definitions','What\u2019s the difference between a capped rate and a collared rate?', 'Capped: a ceiling the rate can\u2019t exceed. Collared: a floor the rate can\u2019t fall below — some products have both.', 'CeMAP 2&3, MRT2 Topic 3'),
  fc('cemap2','unit2','t3','Calculations','How is interest calculated on an offset mortgage?', 'On the net balance only: mortgage balance minus linked savings balance.', 'CeMAP 2&3, MRT2 Topic 3'),
  fc('cemap2','unit2','t3','Common exam traps','Does a Base Rate Tracker protect against Bank Rate rises?', 'No — it moves WITH the Bank Rate; it only protects against arbitrary SVR increases imposed at the lender\u2019s own discretion.', 'CeMAP 2&3, MRT2 Topic 3'),

  // CeMAP 2 Unit 2 Topics 4&5 — Mortgage Products and Schemes
  fc('cemap2','unit2','t4_5','Definitions','What\u2019s the key difference between Ijara and Murabaha Sharia-compliant mortgages?', 'Ijara: lender stays registered owner, customer pays rent + capital. Murabaha: customer owns immediately, lender resells at a markup, ~20% deposit.', 'CeMAP 2&3, MRT2 Topics 4&5'),
  fc('cemap2','unit2','t4_5','Calculations','What is the typical BTL Interest Coverage Ratio (ICR)?', '125-145% of the mortgage payment.', 'CeMAP 2&3, MRT2 Topics 4&5'),
  fc('cemap2','unit2','t4_5','Regulations','What is the Right to Buy discount repayment sliding scale?', '100% (year 1), 80% (year 2), 60% (year 3), 40% (year 4), 20% (year 5), 0% (after year 5).', 'CeMAP 2&3, MRT2 Topics 4&5'),

  // CeMAP 2 Unit 2 Topic 6 — Raising Additional Funds for Property
  fc('cemap2','unit2','t6','Definitions','Open bridging vs closed bridging — what\u2019s the difference?', 'Open: no buyer yet for the existing property (higher risk, more expensive). Closed: a buyer is already secured (lower risk).', 'CeMAP 2&3, MRT2 Topic 6'),
  fc('cemap2','unit2','t6','Common exam traps','Is home reversion a type of mortgage?', 'No — no interest is charged because ownership of the sold share actually transfers to the provider; it isn\u2019t a loan.', 'CeMAP 2&3, MRT2 Topic 6'),
  fc('cemap2','unit2','t6','Regulations','What LTV range applies to lifetime mortgages, and why does age matter?', '25-55% — the younger the applicant, the lower the LTV allowed (since interest has longer to compound).', 'CeMAP 2&3, MRT2 Topic 6'),
  fc('cemap2','unit2','t6','Common exam traps','Does a Retirement Interest-Only (RIO) mortgage need an affordability check?', 'Yes — unlike a roll-up lifetime mortgage, a RIO requires monthly interest payments, so normal affordability assessment applies.', 'CeMAP 2&3, MRT2 Topic 6'),

  // CeMAP 2 Unit 2 Topic 7 — Transferring Mortgages
  fc('cemap2','unit2','t7','Common exam traps','Does a product switch (same lender) need a full affordability check?', 'No — not if borrowing doesn\u2019t increase. A re-mortgage (new lender) generally does need one, unless the amount is unchanged.', 'CeMAP 2&3, MRT2 Topic 7'),
  fc('cemap2','unit2','t7','Regulations','What triggers the IVA "equity clause" re-mortgage requirement?', 'The debtor\u2019s equity share exceeding £5,000 in the IVA\u2019s final year — capped at 85% LTV and 50% of the normal IVA payment.', 'CeMAP 2&3, MRT2 Topic 7'),
  fc('cemap2','unit2','t7','Regulations','Is removing a joint owner via divorce subject to SDLT?', 'No — transfers on divorce/dissolution are specifically SDLT-exempt.', 'CeMAP 2&3, MRT2 Topic 7'),

  // CeMAP 2 Unit 2 Topics 8&9 — Arrears and Lenders' Legal Rights
  fc('cemap2','unit2','t8_9','Regulations','Within how many business days must a lender send an arrears warning letter, and from when?', '15 business days from when the lender BECOMES AWARE of the arrears (not the missed payment date).', 'CeMAP 2&3, MRT2 Topics 8&9'),
  fc('cemap2','unit2','t8_9','Common exam traps','Who does a Law of Property Act Receiver act as agent for?', 'The BORROWER — even though the lender appoints them and they could be a lender employee.', 'CeMAP 2&3, MRT2 Topics 8&9'),
  fc('cemap2','unit2','t8_9','Regulations','What are the SMI waiting periods by benefit type?', '3 months (Universal Credit), 39 weeks (Income Support/JSA/ESA), nil (Pension Credit).', 'CeMAP 2&3, MRT2 Topics 8&9'),
  fc('cemap2','unit2','t8_9','Regulations','After a repossession sale, in what order is any surplus distributed?', 'Any second (or subsequent) mortgagee first, then the borrower — or paid into court if the borrower can\u2019t be found.', 'CeMAP 2&3, MRT2 Topics 8&9'),

  // CeMAP 3 Case Study Practice
  fc('cemap3','unit1','t2','Processes','What\u2019s the recommended reading order for a CeMAP 3 case study?', 'Read the whole scenario first for the big picture, then read the 10 questions to identify which specific facts each one needs, then re-check those details carefully.', 'CeMAP 2&3, CeMAP 3 Case Study Practice'),
  fc('cemap3','unit1','t2','Common exam traps','Is a generally "good" product automatically the suitable answer in a CeMAP 3 case study?', 'No — suitability is always scenario-specific, judged against the client\u2019s stated needs, circumstances and existing arrangements in that case study.', 'CeMAP 2&3, CeMAP 3 Case Study Practice'),
  fc('cemap3','unit1','t2','Calculations','What\u2019s the safest approach to a CeMAP 3 calculation question?', 'Write out the formula first, then substitute the case study\u2019s exact figures — this catches wrong-figure errors before they happen.', 'CeMAP 2&3, CeMAP 3 Case Study Practice')
]
