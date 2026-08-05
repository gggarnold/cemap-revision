import type { Lesson } from './types'

// All lessons below are original revision text written from the concepts in the supplied
// PDFs — not copied passages. Each cites the source topic/page range it was derived from.
// Figures that change year-to-year (tax rates, allowances) are flagged dateSensitive: true.

export const lessons: Lesson[] = [
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t1',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't1',
    title: 'The Role and Structure of Financial Markets',
    intro: 'Before you can understand regulation, you need the basic map of the financial system: what money is, the main asset classes, who the Bank of England is and what it does, and how banks actually make money moving cash from savers to borrowers.',
    sections: [
      {
        heading: 'What money is for',
        bullets: [
          'Money does two core jobs: it is a unit of account (a way of pricing things) and a medium of exchange (something people will accept in payment).',
          'To work as a medium of exchange, money must be acceptable to everyone, available in enough quantity, divisible into small units, and portable.',
          'Money also stores value over time — but inflation erodes that stored value, so cash is never truly "risk free" in real terms even though its face value never falls.'
        ]
      },
      {
        heading: 'The four main asset classes',
        bullets: [
          'Cash — liquid and accessible, nominal value can\u2019t fall, but purchasing power is eroded by inflation.',
          'Fixed interest securities (bonds) — loans to governments or companies, usually 5–30 years, paying a fixed coupon and returning the par value at redemption.',
          'Money market instruments — short-term (up to 12 months) wholesale loans such as commercial paper, certificates of deposit and Treasury bills.',
          'Equities (shares) — represent part-ownership of a company, never mature, and can pay dividends and/or grow in capital value.',
          'Property (residential and commercial) sits alongside these — returns come from rent plus potential capital growth, but it is illiquid.'
        ]
      },
      {
        heading: 'The Bank of England\u2019s roles',
        bullets: [
          'Banker to the banks and banker/adviser to the government.',
          'Sole issuer of banknotes in England and Wales.',
          'Sets the Bank of England Base Rate through its Monetary Policy Committee (MPC), which has held this responsibility since May 1997.',
          'Lender of last resort — steps in to keep confidence in the banking system (e.g. Northern Rock, 2007).',
          'Maintains economic stability — its Financial Policy Committee (FPC) looks at the economy broadly to spot risks to overall stability, distinct from the MPC\u2019s interest-rate role.',
          'Manages the UK\u2019s foreign currency and gold reserves.',
          'Since the Bank of England and Financial Services Act 2016, the Prudential Regulation Authority (PRA) sits inside the Bank of England.'
        ]
      },
      {
        heading: 'How markets are structured',
        bullets: [
          'Equilibrium: prices rise when demand exceeds supply and fall when supply exceeds demand — the "equilibrium price" is where supply and demand are balanced.',
          'Primary vs secondary markets: a primary market raises brand-new capital (e.g. a company issuing new shares); a secondary market is where existing shares/bonds are subsequently traded between investors. Most day-to-day trading is secondary market activity, and a healthy secondary market is what makes people willing to buy in the primary market in the first place.',
          'The London Stock Exchange (LSE) is the UK\u2019s main securities marketplace, comprising both primary (new flotations/IPOs, rights issues) and secondary market activity. UK investors can also access major overseas exchanges: Dow Jones and NASDAQ (USA), Nikkei (Japan), DAX (Germany), CAC (France).',
          'Bond credit ratings (e.g. S&P Global) run from AAA (highest quality, lowest risk) down through BB-D ("junk bonds", higher default risk) — a C or D rating means the issuer has already defaulted on some/all obligations.',
          'The foreign exchange market exchanges one currency for another, mainly for: international trade, short-term investment, and long-term investment.',
          'Insurance transfers risk from individuals/companies to insurers for a premium; the reinsurance market lets insurers then spread pieces of their own accepted risk on to other insurers, so a single large loss is shared across many players rather than falling on just one.'
        ]
      },
      {
        heading: 'Wholesale funding, ring-fencing and the interbank market',
        bullets: [
          'Wholesale funding: banks/building societies borrow from each other (the "interbank market") for terms typically under 3 months, then lend on to the public retail at a margin.',
          'The interbank benchmark rate used to be LIBOR (a self-declared rate, since discredited by a rate-rigging scandal uncovered in 2012) — it has been replaced by SONIA (Sterling Overnight Index Average), based on banks\u2019 actual overnight borrowing costs rather than self-declaration; control of SONIA passed to the Bank of England in 2021.',
          'Building societies can raise up to 50% of their total liabilities from the wholesale market (the rest must come from savers\u2019 deposits) — the Treasury has the power to raise this to 75% but has not yet done so.',
          'The Financial Services (Banking Reform) Act 2013 introduced UK retail ring-fencing — requiring banks/building societies to keep customer deposits in a ring-fenced entity, separate from the firm\u2019s riskier investment banking activities.'
        ]
      },
      {
        heading: 'Intermediation, disintermediation, and market ownership structures',
        bullets: [
          'A financial intermediary (e.g. a bank) borrows from the "surplus sector" (cash-rich savers) and lends to the "deficit sector" (borrowers), profiting from the difference between the two rates.',
          '"Disintermediation" is where funds pass directly between lender and borrower with no intermediary in between — e.g. a company raising money by issuing shares directly to the public.',
          'Financial intermediaries solve 3 core problems: aggregation (pooling many small deposits into fewer, larger loans), maturity transformation (turning short-term deposits into long-term loans), and risk transformation (spreading default risk across many borrowers rather than one).',
          'Proprietary organisation: a limited company owned by shareholders (e.g. RBS, HSBC). Mutual organisation: no shareholders, owned by its own members (who are its savers/borrowers) — building societies are the classic example, alongside friendly societies and credit unions. A credit union is a not-for-profit mutual whose members share a common bond (e.g. workplace, area), offering simple savings and loans.',
          'The Payment Systems Regulator (PSR) is an independent subsidiary of the FCA (its own governance, managing director and board) regulating UK payment systems, with 3 statutory objectives: promote competition, encourage innovation, and ensure payment systems operate in the interests of service users.'
        ]
      },
      {
        heading: 'How banks make money: retail lending',
        bullets: [
          'Retail banking: financial services provided to the public/companies via branches, call centres and internet banking — as distinct from wholesale banking (dealing between institutions).',
          'Secured lending (e.g. a mortgage) gives the lender rights over an asset if the borrower defaults; unsecured lending is riskier for the lender because there is no asset to fall back on — which is why secured borrowing is generally cheaper than unsecured.'
        ]
      },
      {
        heading: 'Financial crime basics',
        bullets: [
          'Fraud offences: Fraud Act 2006 and Theft Act 1968.',
          'Anti-money laundering: Proceeds of Crime Act 2002 is the main piece of legislation.',
          'Bribery and corruption: Bribery Act 2010 — the FCA acts against firms that pay or fail to prevent bribes.',
          'FATF (Financial Action Task Force), created in 1989, is the international body coordinating the fight against money laundering.'
        ]
      }
    ],
    workedExample: {
      title: 'Spotting maturity transformation in an exam question',
      body: [
        'If a question describes a bank taking many small, easy-access deposits and using them to fund a small number of large, long-term loans, that is maturity transformation — not just "aggregation" (aggregation is only about combining deposits, not about the mismatch in term length).'
      ]
    },
    examTraps: [
      'Don\u2019t confuse the PRA (prudential regulation — financial soundness) with the FCA (conduct regulation) — Topic 1 only needs you to know the PRA sits inside the Bank of England since 2016.',
      'The MPC sets the Bank Rate to hit the government\u2019s inflation target — it does not set fiscal policy (tax and spending), which is a government/Treasury responsibility.',
      'Cash is not "risk free" in real terms — its nominal value is protected, but inflation risk remains.',
      'Building societies\u2019 50% wholesale funding limit (Topic 1) is a DIFFERENT rule from the separate requirement (seen elsewhere in the syllabus) that societies devote a minimum of 75% of lending to residential property — don\u2019t merge the two 50%/75% figures together.',
      'LIBOR was replaced by SONIA specifically because LIBOR was self-declared by banks (and was manipulated) — SONIA is instead based on banks\u2019 actual overnight borrowing transactions.'
    ],
    remember: [
      'Bank of England: issuer of notes, banker to banks and government, sets Bank Rate via the MPC, lender of last resort, houses the PRA and FPC.',
      '4 asset classes: cash, fixed interest securities, money market instruments, equities (plus property as a further asset class in practice).',
      'Maturity transformation = short-term deposits funding long-term loans; aggregation = pooling small deposits; risk transformation = spreading default risk.',
      'Bond ratings: AAA = highest quality; BB-D = "junk"; C/D = already in default.',
      'PSR: independent FCA subsidiary, 3 objectives — competition, innovation, service users\u2019 interests.'
    ],
    knowledgeCheck: [
      {
        question: 'A bank takes thousands of instant-access savings deposits and uses them to fund 25-year mortgages. This is best described as:',
        options: ['Aggregation only', 'Maturity transformation', 'Disintermediation', 'Risk transformation'],
        correctIndex: 1,
        explanation: 'Turning short-term deposits into long-term lending is maturity transformation — the defining function (and risk) of banking.'
      },
      {
        question: 'Which body sits within the Bank of England following the Bank of England and Financial Services Act 2016?',
        options: ['The FCA', 'The PRA', 'The Financial Ombudsman Service', 'The Payment Systems Regulator'],
        correctIndex: 1,
        explanation: 'The Prudential Regulation Authority (PRA) was fully integrated into the Bank of England by this Act.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 1, p.7-20'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t2a',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't2a',
    title: 'The Role of Government',
    intro: 'The government manages the economy using fiscal policy (tax and spending) and, via the Bank of England, monetary policy (interest rates). You need to recognise which tool does what, and the key vocabulary examiners like to test.',
    sections: [
      {
        heading: 'The economic cycle and macroeconomic objectives',
        bullets: [
          'Economies move through four phases: recovery/expansion, boom, contraction/slowdown, recession.',
          'GDP (Gross Domestic Product) measures the value of goods and services produced in a country over a period — a recession is technically defined as GDP declining for two successive quarters.',
          'Government objectives: price stability (low inflation), low unemployment, balance of payments equilibrium, and satisfactory economic growth — note "100% employment" is NOT a realistic objective; "full employment" is generally considered to mean fewer than 3-5% of the working-age population out of work, since a small amount of unemployment/job movement is considered healthy (it helps avoid inflation and gives workers flexibility to change jobs).'
        ]
      },
      {
        heading: 'The current account and balance of payments',
        bullets: [
          'The government current account records UK trade in goods/services with other countries — credits (exports/sales) minus debits (imports/spending) gives the balance; more credits than debits = surplus, more debits than credits = deficit.',
          'A current account deficit is typically covered first by drawing on the UK\u2019s foreign currency reserves (like an individual\u2019s savings) — once reserves are used up, the government may need to borrow foreign currency instead.',
          'The balance of payments is the wider record of the UK\u2019s trade with the rest of the world (calculated in sterling). A deficit can be corrected by discouraging imports/encouraging exports — e.g. import tariffs, raising interest rates (to encourage overseas investment), or exchange controls (to manage currency value).'
        ]
      },
      {
        heading: 'Fiscal policy',
        bullets: [
          'Fiscal policy = government taxation and spending decisions.',
          'Three possible budget outcomes: balanced budget, budget surplus (tax revenue > spending), budget deficit (spending > tax revenue).',
          'A budget deficit creates the Public Sector Net Cash Requirement (PSNCR), funded by government borrowing (gilts, Treasury bills) rather than politically unpopular tax rises.',
          'Expansionary fiscal policy (cut taxes/raise spending) stimulates growth but risks inflation; contractionary fiscal policy (raise taxes/cut spending) cools an overheating, high-inflation economy.'
        ]
      },
      {
        heading: 'Monetary policy',
        bullets: [
          'Monetary policy = interest rate policy, set by the Bank of England\u2019s Monetary Policy Committee (MPC) to target 2% CPI inflation.',
          'If inflation is running more than 1% above or below target, the Bank\u2019s Governor must write an open letter to the Chancellor explaining why and what will be done.',
          'Raising the Bank Rate: makes borrowing dearer and saving more attractive, cools spending, reduces inflationary pressure. Cutting the Bank Rate does the opposite.',
          'Quantitative easing (QE) — the Bank effectively creates money to stimulate spending and investment when demand is weak; the trade-off is a risk of higher-than-planned inflation.'
        ]
      },
      {
        heading: 'Money supply, inflation & real returns',
        bullets: [
          'M0 ("narrow money") = notes and coins in circulation. M4 ("broad money") = bank/building society deposits plus money created through lending — rapid M4 growth is a classic inflation warning sign.',
          'Inflation = rising general prices / falling purchasing power. Disinflation = prices still rising but more slowly than before. Deflation = a general fall in prices. Stagflation = slow growth + high unemployment + inflation together.',
          'Price indices: CPI (Consumer Prices Index) is the official government inflation-target measure, based on a "basket of goods and services". RPI (Retail Prices Index) is similar but weighted differently and includes some mortgage/housing costs — no longer the official measure but still widely used. RPIX is RPI excluding mortgage interest payments. AWE (Average Weekly Earnings) measures the rate of change in earnings.',
          'The nominal interest rate is the rate actually paid/charged (before adjusting for inflation); the real interest rate adjusts for inflation. Real interest rate ≈ nominal interest rate minus inflation — a favourite calculation-style question.'
        ]
      },
      {
        heading: 'UK regulation: the four tiers, and EU law post-Brexit',
        bullets: [
          '1st tier: Acts of Parliament. 2nd tier: UK regulators (PRA and FCA). 3rd tier: individual firms\u2019 own compliance policies. 4th tier: ombudsman/arbitration rulings.',
          'EU Regulations are directly binding in their entirety on member states. EU Directives set the required outcome but leave each state to choose how to achieve it — a state cannot simply opt out of either without a specific dispensation.',
          'Passporting (automatic EU market access for UK firms) ended with Brexit. Equivalence can let firms access another market where regulatory standards are judged broadly similar — but it does not cover everything, notably deposit-taking and retail investment business.',
          'Although the UK has fully left the EU, many EU laws remain part of UK domestic law as "onshored" (retained) EU legislation, with the Retained EU Law Bill allowing this retained law to be amended over time.'
        ]
      }
    ],
    workedExample: {
      title: 'Real interest rate calculation',
      body: [
        'Nominal rate 5%, inflation 3% → approximate real rate = 5% − 3% = 2%.',
        'Exam variant: compare several nominal/inflation pairs and pick the highest real rate — just subtract each pair and compare.'
      ]
    },
    examTraps: [
      'A Directive is NOT binding in its entirety — only the outcome is fixed, the method is for each state to choose. A Regulation IS binding in its entirety. Mixing these two up is a classic wrong-answer trap.',
      '"100% employment" is a distractor answer — it is never a genuine macroeconomic objective.',
      'Don\u2019t mix up fiscal policy (interest rates are NOT part of fiscal policy — that\u2019s monetary policy) with monetary policy.'
    ],
    remember: [
      'Fiscal = tax & spend (government/Treasury). Monetary = interest rates (Bank of England MPC).',
      'Inflation target: 2%, measured by CPI. Letter to Chancellor required if more than 1% off target.',
      'Regulation binding in entirety; Directive binding as to outcome only.'
    ],
    knowledgeCheck: [
      {
        question: 'Prices rose 3% this month, having risen 4% last month. This is best described as:',
        options: ['Reflation', 'Deflation', 'Disinflation', 'Stagflation'],
        correctIndex: 2,
        explanation: 'Prices are still rising (not falling), just more slowly than before — that is disinflation, not deflation.'
      },
      {
        question: 'The European Union issues a new Directive. Each member state must:',
        options: [
          'Implement it in its entirety within a set timescale',
          'Choose whether or not to adopt it',
          'Achieve the required outcome, but can choose the method',
          'Only implement it if part of the Eurozone'
        ],
        correctIndex: 2,
        explanation: 'Directives bind states to an outcome, not a method — unlike Regulations, which are binding in their entirety.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 2 Part 1, p.21-29'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t2b',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't2b',
    title: 'Taxation',
    intro: 'CeMAP tests the principles of UK taxation, not the exact current-year rates and bands — those change every Budget. Focus on who pays what, on which type of income or gain, and the key exemptions and deadlines.',
    dateSensitive: true,
    sections: [
      {
        heading: 'Residence and the basics of income tax',
        bullets: [
          'A person present in the UK for 183 days or more in a tax year is automatically UK tax resident, and is then taxed on worldwide earned and unearned income.',
          'The tax year runs 6 April to 5 April. Double taxation treaties prevent UK residents being taxed twice on the same income/gains in two countries.',
          'Earned income = employment/self-employment/pension income. Unearned income = savings interest, dividends, rental and trust income.',
          'PAYE: employers deduct tax at source for employees. Self-assessment: the self-employed (and anyone with untaxed income) report and pay tax themselves.',
          'Income tax is charged in bands above the personal allowance: basic rate, then higher rate, then additional rate — an individual\u2019s income can span more than one band at once.',
          'Savings interest is paid gross but potentially taxable via self-assessment: a 0% starting rate applies to an initial slice of savings income for low earners, plus a Personal Savings Allowance (larger for basic-rate taxpayers, smaller for higher-rate taxpayers).'
        ]
      },
      {
        heading: 'National Insurance Contributions (NICs)',
        bullets: [
          'NI is an additional tax on employment/self-employment income only — not charged on investment or rental income.',
          'Class 1: paid by employees (above the primary threshold) and employers.',
          'Class 3: flat-rate voluntary contributions to fill gaps in an NI record (e.g. career break) to protect entitlement to benefits like the state pension.',
          'Class 4: additional NICs paid by the self-employed on annual profits, alongside income tax via self-assessment.',
          'Class 2 NICs (flat-rate, self-employed) were abolished from April 2024 — a good example of why CeMAP asks about principles, not fixed figures.'
        ]
      },
      {
        heading: 'Capital Gains Tax (CGT)',
        bullets: [
          'CGT applies to UK residents\u2019 gains on disposal of assets such as shares, most investments, and property other than the main home.',
          'Key exemptions: main residence (principal private residence relief), gilts and most corporate bonds, cars for normal use, chattels below a set value, life assurance gains for the original owner, ISAs/NS&I/Premium Bonds/lottery winnings, personal-use foreign currency, items of national interest gifted to the nation.',
          'Business Asset Disposal Relief (formerly Entrepreneurs\u2019 Relief) lets qualifying business owners pay a lower CGT rate on gains from selling their business.',
          'The annual exempt amount lets an individual realise gains up to a threshold each tax year tax-free.',
          'Losses must first be offset against gains in the same tax year; any unused loss carries forward (but not back).',
          'Allowable deductions from a gain: acquisition costs, enhancement (improvement) costs, disposal costs — but NOT routine repair/maintenance costs.',
          'CGT is normally due by 31 January after the tax year of disposal — except UK residential property gains, which must be reported and paid within 60 days of completion.',
          'No CGT is charged on death, but there is a deemed disposal at market value for the deceased\u2019s estate.'
        ]
      },
      {
        heading: 'Inheritance Tax (IHT) essentials',
        bullets: [
          'IHT is charged against the deceased\u2019s estate (not against individual beneficiaries directly) at 40% on the value above the nil rate band (currently £325,000 — a figure used directly in exam questions, so worth knowing even though it can change).',
          'If UK domiciled (or deemed domiciled) at death, IHT applies to worldwide assets, not just UK ones.',
          'Gifts to a spouse/civil partner living together, and gifts to charity, are exempt with no upper limit, provided the receiving spouse is UK domiciled.',
          'Transferable nil rate band: any UNUSED proportion of a deceased spouse\u2019s nil rate band can be added to the surviving spouse\u2019s own nil rate band. E.g. if the first spouse left everything to the survivor (spouse exemption, so 0% of their NRB was used), the survivor\u2019s own nil rate band doubles to £650,000.',
          'Residence Nil Rate Band (RNRB): a further £175,000 exemption where a residence the deceased lived in is left to a direct descendant — like the standard NRB, any unused RNRB transfers to a surviving spouse too. Together, a married couple\u2019s combined NRB + RNRB can shelter up to £1m from IHT (2 × £325,000 + 2 × £175,000).',
          'Lifetime gifts to individuals are usually Potentially Exempt Transfers (PETs) — no IHT at the time of the gift, and fully exempt if the donor survives 7 years. If death occurs within 7 years, taper relief reduces the rate charged on the excess over the nil rate band: 100% of the 40% rate (0-3 years), 80% i.e. 32% (3-4 years), 60% i.e. 24% (4-5 years), 40% i.e. 16% (5-6 years), 20% i.e. 8% (6-7 years).',
          'A Chargeable Lifetime Transfer (e.g. most gifts into trust) is taxed immediately at half the death rate — 20% — on the value above the available nil rate band; if the donor then dies within 7 years, the balance up to the full 40% (less any taper relief) becomes due.',
          'The annual gift exemption (currently £3,000) can be carried forward one year only if unused — it is not cumulative beyond that.',
          'Funeral expenses and outstanding debts are deducted from the estate before calculating IHT.'
        ]
      },
      {
        heading: 'Corporation tax, Stamp Duty and SDLT',
        bullets: [
          'Corporation tax is paid by limited companies on profits. Partnerships, LLPs and sole traders pay income tax instead.',
          'UK-resident companies pay corporation tax on worldwide profits; non-UK-resident companies pay only on UK business profits.',
          'Stamp Duty / Stamp Duty Reserve Tax (SDRT) applies to share transfers; SDRT is deducted automatically for electronic (CREST) transactions.',
          'Stamp Duty Land Tax (SDLT) is paid by the property buyer in England/Northern Ireland (Scotland and Wales use their own land transaction taxes). First-time buyers benefit from a higher SDLT-free threshold.'
        ]
      }
    ],
    workedExample: {
      title: 'Simple CGT calculation',
      body: [
        'Alan (higher-rate taxpayer) bought shares for £50,000 and sold them for £80,000 → gain of £30,000.',
        'He also sold other shares for £10,000 that cost £12,000 → a £2,000 loss.',
        'The loss is offset against the gain in the same tax year: £30,000 − £2,000 = £28,000 net gain, before the annual exempt amount is applied.'
      ]
    },
    examTraps: [
      'CGT exemptions are commonly tested with a "which of these is exempt" question — remember gilts, ISAs, main home, and ordinary vehicles are exempt; a second/holiday home and most shares are NOT.',
      'Repair and maintenance costs cannot be deducted for CGT — but improvement (enhancement) costs can. This distinction is a classic trap.',
      'Residential property CGT has a 60-day payment deadline, not the usual 31 January date — a frequently tested exception.',
      'IHT taper relief only reduces the RATE charged on a failed PET — it does not reduce the value of the gift itself, and there is no relief at all if death occurs within the first 3 years (full 40% applies).',
      'The Residence Nil Rate Band only applies where a residence passes to a DIRECT DESCENDANT — leaving the home to a sibling, friend, or unrelated party does not qualify.'
    ],
    remember: [
      '183 days = automatic UK tax residence.',
      'CGT loss: offset in the same year first, then carry forward (never back).',
      'IHT is a charge on the estate; PETs become exempt after 7 years; annual exemption carries forward one year only.',
      'IHT taper relief bands (years since gift → rate): 0-3 = 40%, 3-4 = 32%, 4-5 = 24%, 5-6 = 16%, 6-7 = 8%.',
      'A married couple can shelter up to £1m from IHT: 2 × £325,000 nil rate band + 2 × £175,000 residence nil rate band (assuming both fully transferable and a home passing to a direct descendant).'
    ],
    knowledgeCheck: [
      {
        question: 'Which of the following is normally exempt from Capital Gains Tax on disposal?',
        options: ['A holiday home', 'Shares in a UK company', 'An individual\u2019s main residence', 'A valuable painting sold at a profit'],
        correctIndex: 2,
        explanation: 'Principal private residence relief exempts an individual\u2019s main home from CGT; the other options are all potentially chargeable.'
      },
      {
        question: 'A capital loss made on disposal of an asset must first be:',
        options: [
          'Carried back to the previous tax year',
          'Offset against gains made in the same tax year it occurred',
          'Ignored for CGT purposes',
          'Carried forward automatically without being used first'
        ],
        correctIndex: 1,
        explanation: 'A loss must be set against gains in the same tax year first; only any unused balance is carried forward to future years.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 2 Part 2, p.30-40. Rates/allowances change each Budget — verify current figures before your exam sitting.'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u2-t1',
    module: 'cemap2', unitKey: 'unit2', topicKey: 't1',
    title: 'Mortgage Repayment Methods',
    intro: 'There are only two mortgage repayment methods: capital (repayment) and interest-only. Understanding how each behaves over time — and how lenders calculate interest — is the foundation for the calculation-style questions in this topic.',
    sections: [
      {
        heading: 'Capital (repayment) mortgages',
        bullets: [
          'Also called capital & interest or repayment mortgages — each monthly payment includes both interest and capital.',
          'Early in the term, most of the payment is interest; this gradually shifts so that, later in the term, most of the payment is capital.',
          'If every payment is made, the loan is guaranteed to be repaid in full by the end of the term.',
          'Downside: no built-in life cover — borrowers typically add decreasing term assurance separately, since the outstanding debt reduces over time.'
        ]
      },
      {
        heading: 'Interest-only mortgages',
        bullets: [
          'The borrower pays only interest each month; none of the capital is repaid during the term.',
          'Capital must be repaid at the end of the term via a separate repayment vehicle (e.g. ISA, pension) or another credible strategy such as downsizing.',
          'Speculative repayment strategies — relying on house price inflation or a hoped-for inheritance — are not considered acceptable under current rules.',
          'Once the mortgage has started, the lender must contact the borrower at least once during the term to check the repayment strategy is still on track.',
          '"Pure" interest-only (no dedicated repayment vehicle at all) is only allowed in narrow circumstances, e.g. very low loan-to-value, or for a high-net-worth borrower, or on a business buy-to-let mortgage.'
        ]
      },
      {
        heading: 'Overpayments',
        bullets: [
          'Most lenders allow overpayments up to 10% of the outstanding balance per year without triggering an early repayment charge.',
          'On a capital repayment mortgage, an overpayment can shorten the term or reduce the monthly payment.',
          'On an interest-only mortgage, an overpayment reduces the capital debt (and therefore the monthly interest charged) but does not change the agreed term.'
        ]
      },
      {
        heading: 'How lenders calculate interest',
        bullets: [
          'Annual rest (least common): a full year\u2019s interest is calculated and debited up front. Doesn\u2019t reward early repayment or penalise late payment within the year.',
          'Monthly rest: interest debited monthly — borrowers benefit the following month from any capital repaid.',
          'Daily rest (most common today): interest is calculated daily — this is the most responsive to overpayments (benefits borrowers) but also the quickest to penalise a late payment. It is the least profitable method for the lender of the three.'
        ]
      },
      {
        heading: 'APRC (Annual Percentage Rate of Charge)',
        bullets: [
          'APRC replaced APR following the Mortgage Credit Directive.',
          'Included: total interest payable, arrangement/admin fees, valuation fees, related conveyancing fees, higher lending charges, linked insurance premiums.',
          'Excluded: early repayment charges, life assurance premiums, default charges.',
          'A second APRC must be shown for variable-rate regulated mortgages, illustrating the impact of a potential rate rise.'
        ]
      }
    ],
    workedExample: {
      title: 'Capital repaid in year one (annual rest)',
      body: [
        'Bob borrows £60,000 over 20 years at 5%, with a quoted rate of £7.30 per £1,000 borrowed.',
        'Step 1 — total annual payment: £7.30 × 60 = £438.00/month × 12 = £5,256.',
        'Step 2 — annual interest: £60,000 × 5% = £3,000.',
        'Step 3 — capital repaid = £5,256 − £3,000 = £2,256 in the first year.',
        'The higher the interest rate, the smaller the capital repaid in the early years — because more of the fixed monthly payment is absorbed by interest.'
      ]
    },
    examTraps: [
      'Don\u2019t reverse the early/late-term balance: EARLY payments are mostly interest; LATE payments are mostly capital — the opposite is a very common wrong-answer distractor.',
      'Life assurance premiums and early repayment charges are excluded from APRC — a frequently tested exclusion.',
      'A speculative repayment strategy (house price inflation, inheritance) is not acceptable evidence of a credible interest-only repayment plan.'
    ],
    remember: [
      'Only 2 repayment methods exist: capital (repayment) and interest-only.',
      'Daily rest = most common, most overpayment-friendly, least profitable to lender.',
      'APRC includes fees and charges linked to the mortgage; excludes ERCs and life cover premiums.'
    ],
    knowledgeCheck: [
      {
        question: 'Which interest calculation method is most common today and most responsive to overpayments?',
        options: ['Annual rest', 'Monthly rest', 'Daily rest', 'Fixed rest'],
        correctIndex: 2,
        explanation: 'Daily rest recalculates interest every day, so an overpayment reduces the balance — and the interest charged — immediately.'
      },
      {
        question: 'On a capital repayment mortgage, in the final years of the term, monthly payments are mostly made up of:',
        options: ['Interest', 'Capital', 'An even 50/50 split throughout', 'Arrangement fees'],
        correctIndex: 1,
        explanation: 'The interest/capital balance flips over the term — early payments are mostly interest, later payments are mostly capital.'
      }
    ],
    source: 'CeMAP 2&3, Unit 2 (MRT2) Topic 1, p.135-141'
  },
  // ---------------------------------------------------------------
  {
    id: 'c3-u1-t1',
    module: 'cemap3', unitKey: 'unit1', topicKey: 't1',
    title: 'Protection Needs & Financial Protection Products',
    intro: 'CeMAP 3 tests your ability to apply protection product knowledge to realistic client scenarios. Know the differences between the life assurance types and between critical illness cover and income protection — these distinctions drive most case-study questions.',
    sections: [
      {
        heading: 'Term assurance — the family',
        bullets: [
          'Decreasing term assurance (mortgage protection assurance): sum assured reduces over time to mirror a reducing repayment mortgage balance. The cheapest type of life cover.',
          'Level term assurance: sum assured and premiums both stay level throughout — suits an interest-only mortgage where the debt doesn\u2019t reduce. Costs slightly more than decreasing term.',
          'Convertible term assurance: level term with the option to convert to an endowment or whole-of-life plan later, without new medical evidence — the most expensive type of term assurance (around 10-15% more).',
          'All term assurance has no surrender value if the policyholder survives the term — it is pure protection, no investment element.'
        ]
      },
      {
        heading: 'Whole of life assurance',
        bullets: [
          'Pays out whenever death occurs — a guaranteed claim, unlike term assurance which can simply expire with no payout.',
          'Commonly used for family protection and to cover an expected inheritance tax bill on the estate.',
          'Generally too expensive to use as a mortgage repayment vehicle compared with a term policy.'
        ]
      },
      {
        heading: 'Critical illness cover (CIC)',
        bullets: [
          'Pays a tax-free lump sum on diagnosis of a specified serious illness — the illness need not be terminal.',
          'A survival period (commonly 14-28 days) must be survived following diagnosis before payment is made.',
          'ABI minimum-standard "core" conditions include heart attack, stroke and cancer (each subject to a minimum severity definition) — full policy wording still varies between insurers.',
          'Can be arranged level, decreasing or increasing, and stand-alone or combined with life cover — a combined ("first claim basis") policy typically ends life cover once a CIC claim is paid.',
          'The policy pays out only once — it cannot be claimed against again after payment.'
        ]
      },
      {
        heading: 'Income protection insurance (IPI)',
        bullets: [
          'Pays a long-term replacement income (typically 50-65% of pre-illness income) if the policyholder cannot work due to accident or sickness, potentially up to state retirement age.',
          'Requires a chosen deferred period (e.g. 4, 8, 13, 26 or 52 weeks) before payments start — the longer the deferred period, the cheaper the premium.',
          '"Own occupation" cover is more generous (pays if unable to do your specific job) than "any occupation" cover (pays only if unable to do any job you are suited to).',
          'The insurer cannot cancel a guaranteed-premium policy regardless of the number of claims made.'
        ]
      },
      {
        heading: 'Assignment vs deposit of a policy to a lender',
        bullets: [
          'Assignment: the policyholder signs a deed transferring legal ownership of the policy to the lender.',
          'Deposit: the policy document is simply lodged with the lender, giving them an equitable (not legal) right to the proceeds — a lighter-touch alternative to assignment.'
        ]
      }
    ],
    examTraps: [
      'Critical illness cover pays a lump sum on diagnosis; income protection pays a replacement income over time — case studies often test whether you\u2019ve matched the right product to the client\u2019s stated need (e.g. "wants ongoing income if unable to work" = income protection, not CIC).',
      'A pension plan cannot normally be used sensibly as a mortgage repayment vehicle by someone who is not yet close to retirement age or in the right tax position — watch for scenario questions probing this.',
      'Decreasing term assurance suits a repayment mortgage; level term suits interest-only — matching the wrong cover type to the wrong mortgage structure is a common distractor.'
    ],
    remember: [
      'Decreasing term = cheapest, matches a reducing (repayment) mortgage balance.',
      'CIC = lump sum on diagnosis of specified illness, one claim only. IPI = ongoing replacement income, deferred period applies.',
      'Assignment = legal ownership transferred to lender; deposit = equitable right only.'
    ],
    knowledgeCheck: [
      {
        question: 'A client wants an ongoing replacement income if they are unable to work long-term due to illness. Which product best fits this need?',
        options: ['Critical illness cover', 'Income protection insurance', 'Decreasing term assurance', 'Whole of life assurance'],
        correctIndex: 1,
        explanation: 'Income protection insurance is specifically designed to replace lost income over an extended period, unlike the one-off lump sum paid by CIC.'
      },
      {
        question: 'Which type of term assurance is generally the cheapest, and best suits a repayment mortgage?',
        options: ['Level term assurance', 'Convertible term assurance', 'Decreasing term assurance', 'Whole of life assurance'],
        correctIndex: 2,
        explanation: 'Decreasing term assurance\u2019s sum assured falls in line with a reducing repayment mortgage balance, and is the cheapest form of term cover.'
      }
    ],
    source: 'CeMAP 2&3, CeMAP 3 — Protection Issues, p.224-232'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t3',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't3',
    title: 'State Benefits',
    intro: 'State benefits interact with financial planning in two ways: they provide a safety-net floor, and means-testing can mean a "successful" financial plan actually reduces a client\u2019s entitlement. Know which benefits are means-tested, which are based on National Insurance contributions, and the key numbers examiners like to test.',
    sections: [
      {
        heading: 'Universal Credit',
        bullets: [
          'A means-tested benefit for working-age people on low/no income, replacing six "legacy" benefits for new claims: Income Support, income-based Jobseeker\u2019s Allowance, income-related Employment and Support Allowance, Working Tax Credit, Child Tax Credit, and Housing Benefit.',
          'Claimants must commit to looking for work (subject to circumstances) or face reduced/withdrawn benefit; carers, single parents of under-1s, and those with limited capability for work are not expected to.',
          'A claimant\u2019s earnings up to a set amount (the "earnings disregard") are ignored — couples with children get a higher disregard than couples without; above that, entitlement tapers down as earnings rise.',
          'A benefit cap (for those aged 16 to state pension age) limits the total state benefits a person/family can receive, broadly to the level of average UK earnings.',
          'Support for Mortgage Interest (SMI) is available to Universal Credit/Pension Credit recipients, paying interest (up to a set mortgage amount, at a standard rate, direct to the lender) — it does not cover capital repayment, arrears, or insurance premiums, and is now a loan secured as a second charge on the property, repaid when the property is sold.'
        ]
      },
      {
        heading: 'Benefits outside Universal Credit',
        bullets: [
          'New style Jobseeker\u2019s Allowance (JSA): based on Class 1 NICs, paid at a fixed rate regardless of income/savings, taxable, paid for a maximum of 6 months.',
          'Statutory Maternity Pay (SMP): requires 26 weeks with the same employer (including the qualifying week, 15 weeks before the due date), paid by the employer, maximum 39 weeks, taxable.',
          'Maternity Allowance: for those who can\u2019t claim SMP (e.g. self-employed), maximum 39 weeks, paid by DWP, tax-free, lower rate than SMP.',
          'Child Benefit: tax-free, payable to age 16 (19 if in full-time non-advanced education), not based on NICs — but subject to a High Income Child Benefit tax charge if a partner\u2019s income exceeds a threshold (the benefit itself is still claimable regardless of the number of eligible children).',
          'Statutory Sick Pay (SSP): for employees off sick 4+ days, paid via payroll, taxable, maximum 28 weeks.',
          'New style Employment and Support Allowance (ESA): for those under state pension age unable to work through illness/disability, based on NICs, taxable, not means-tested.',
          'Attendance Allowance and Personal Independence Payment (PIP): both tax-free, not based on NICs, not means-tested — AA is for those at/over state pension age, PIP for disabilities starting between 16 and state pension age (can continue after). PIP has a care element and a mobility element — a claimant may qualify for either or both.',
          'Carer\u2019s Allowance: for carers aged 16+, not in full-time education or studying 21+ hours/week, giving 35+ hours/week care to someone on qualifying benefits; not means-tested, not based on NICs, but is taxable, with possible additions for a partner/dependent children.'
        ]
      },
      {
        heading: 'State Pension',
        bullets: [
          'The "new" state pension (for those reaching state pension age on/after 6 April 2016) is a single flat-rate benefit based purely on NIC record — no spousal-based element.',
          'Maximum benefit requires 35 qualifying years of NICs; fewer than 10 years gives no state pension at all.',
          'Carers are credited with NICs for time spent caring — this can still lead to a full pension despite career breaks.',
          'The "triple lock" increases the state pension each year by the highest of: average earnings growth, 2.5%, or CPI inflation.',
          'Pension Credit tops up pension income to a guaranteed minimum (Guarantee Credit); a Savings Credit element exists for those who reached state pension age before April 2016. Both are tax-free.'
        ]
      }
    ],
    examTraps: [
      'Child Benefit is NOT means-tested in terms of eligibility — high earners can still claim it, but face a tax charge that can cancel it out. Don\u2019t confuse "claimable" with "keeps all of it".',
      'New style JSA and new style ESA are both based on NICs and are taxable — but JSA has a hard 6-month cut-off, while ESA does not.',
      'Full-time non-advanced education (like A-levels) still counts for Child Benefit purposes up to a later age than just 16 — don\u2019t assume it stops at 16.'
    ],
    remember: [
      'Universal Credit replaced 6 legacy means-tested benefits: Income Support, income-based JSA, income-related ESA, Working Tax Credit, Child Tax Credit, Housing Benefit.',
      'New state pension: 35 years NICs for maximum, under 10 years = nothing, triple lock uprating.',
      'AA, PIP and Carer\u2019s Allowance are not means-tested and not based on NICs (though Carer\u2019s Allowance is taxable).'
    ],
    knowledgeCheck: [
      {
        question: 'Which of these benefits has NOT been replaced by Universal Credit?',
        options: ['Income Support', 'Income-based Jobseeker\u2019s Allowance', 'Working Tax Credit', 'Attendance Allowance'],
        correctIndex: 3,
        explanation: 'Attendance Allowance sits outside Universal Credit entirely — it\u2019s for those at/over state pension age needing care and isn\u2019t one of the six legacy benefits replaced.'
      },
      {
        question: 'How many qualifying years of NICs are needed for the maximum new state pension?',
        options: ['10 years', '25 years', '30 years', '35 years'],
        correctIndex: 3,
        explanation: 'The new state pension requires 35 qualifying years for the maximum amount, and fewer than 10 years gives no pension at all.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 3, p.41-49'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t4a',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't4a',
    title: 'Protection',
    intro: 'This topic covers meeting customer protection needs across the financial life cycle, insurable interest, the main life assurance structures, and the ill-health protection products (CIC, IPI, ASU) — a heavily tested area given how easily the product types get confused with each other.',
    sections: [
      {
        heading: 'The financial life cycle and hierarchy of needs',
        bullets: [
          'Needs shift by life stage: youngsters/teenagers have little surplus income (small NS&I savings, then borrowing to fund college/university); young adults (21-30) save toward a house deposit via easy-access savings; young families (30-40) take on major borrowing and need income protection for the main breadwinner; established families (40-50) balance protection, retirement funding and capital building as expenses peak; mature households (50-60) often see the biggest inheritances and shift focus to IHT and retirement planning as protection needs reduce; retirees convert capital into income and may be "asset rich, income poor", considering downsizing or equity release.',
          'The hierarchy of financial needs (in order): living for today, protection, income (protecting family income if unable to work), pension, savings, investment — there\u2019s little point addressing later needs if earlier ones aren\u2019t met.',
          'The Consumer Duty (from July 2024, following the earlier 2010 Treating Customers Fairly initiative) has three cross-cutting obligations: acting in good faith, avoiding foreseeable harm, and enabling/supporting customers to pursue their financial objectives — plus four outcomes: consumer understanding, products and services, customer service, and price and value.'
        ]
      },
      {
        heading: 'Business protection needs',
        bullets: [
          'Sole trader needs: business banking, loans/mortgages, business protection (life cover to protect business loans), insurance for premises/equipment/goods, and pensions for any employees.',
          'Partnership protection: if a partner dies, the surviving partners may be unable to afford to buy out the deceased\u2019s share from their beneficiaries, and may not want the beneficiaries as new partners. The solution is each partner taking out life assurance written in trust for the others — on death, the survivors receive a lump sum via the trust to buy out the deceased\u2019s share.',
          'Limited company needs: business banking, business loans/mortgages, business protection (loan protection, director and shareholder protection), staff benefits and premises insurance.'
        ]
      },
      {
        heading: 'Insurable interest',
        bullets: [
          'Insurable interest means the applicant would suffer directly and financially from the insured event — a principle from the Life Assurance Act 1774.',
          'Individuals have unlimited insurable interest in their own life; spouses/civil partners have unlimited insurable interest in each other.',
          'There is NO insurable interest between parents and children (in either direction).',
          'A creditor has insurable interest in a debtor up to the debt value; an employer in an employee up to the value of their services; business partners in each other up to their buy-out value.'
        ]
      },
      {
        heading: 'Life cover structures and term assurance types',
        bullets: [
          'Life cover can be arranged single life own benefit, life of another, joint-life first death, or joint-life second death (used almost exclusively for IHT planning, since it pays only on the second death).',
          'Term assurance: cheapest life cover, no cash value, pays only on death within the term. Level term suits fixed debts (interest-only mortgages); decreasing term (mortgage protection) suits reducing debts (repayment mortgages) and is cheaper than level term as the insurer\u2019s risk falls over time.',
          'Family income benefit (FIB) is a form of decreasing term that pays a tax-free income (not a lump sum) from death until the end of the term.',
          'Whole of life assurance pays out whenever death occurs — guaranteed, not "if" but "when" — making it unsuitable for covering a fixed-term debt (too expensive relative to term assurance) but well suited to IHT and legacy planning. Most whole-of-life plans have an investment element (with-profits or unit-linked) — on investment-linked plans, an early surrender value may be payable, but it\u2019s typically small and less than premiums paid.'
        ]
      },
      {
        heading: '"Insurance" vs "Assurance"',
        bullets: [
          'Insurance covers an uncertain event — something that may or may not happen (e.g. a car accident, or term assurance where death within the term isn\u2019t certain).',
          'Assurance covers a certain event — something that will definitely happen eventually. In a life cover context this describes whole-of-life assurance, which pays out WHEN (not if) the insured dies, however long that takes.'
        ]
      },
      {
        heading: 'General insurance basics',
        bullets: [
          'General insurance (non-life-based cover) operates on the principle of indemnity — a claim aims to restore the claimant to their pre-loss financial position (via repair, replacement or compensation), not to profit them.',
          'An "averaging clause" applies where a policyholder has under-insured (insured for less than the true replacement cost) — the insurer reduces the claim payment in proportion to the degree of under-insurance.',
          'Most policies carry an excess — a compulsory amount the insured pays toward any claim, sometimes with the option of an additional voluntary excess to reduce the premium.',
          'Buildings insurance standard risks: fire/smoke, lightning/earthquake/explosion, storm and flood, subsidence and heave, impact damage, theft/attempted theft, riot/strike/civil disturbance, escape of water (burst/frozen pipes) and oil. Accidental damage is usually an optional extra. Cover for some risks (e.g. theft, burst pipes, riot) can be excluded if the property is left unoccupied beyond 30-60 days.',
          'Contents insurance covers items you\u2019d take with you if you moved. All Risks insurance (extended contents cover) additionally covers items regularly taken outside the home (e.g. jewellery, watches) — unspecified items below a set value limit are automatically covered, but specified items above that limit must be individually listed and valued.'
        ]
      },
      {
        heading: 'Ill-health protection products',
        bullets: [
          'Critical illness cover (CIC): tax-free lump sum on diagnosis of a specified serious illness (survival period applies for standalone plans); does not require inability to work; a standard policy pays out once only.',
          'Income protection insurance (IPI): replacement income (typically 50-65% of pre-disability income) until recovery, end of term, or death; cannot be cancelled by the insurer if premiums are paid; deferred periods from 4 to 104 weeks — the longer the deferred period, the lower the premium.',
          'Accident, Sickness and Unemployment insurance (ASU): similar to IPI but an annually renewable contract (can be cancelled by the insurer), benefit usually 60-65% of income, deferred period typically 30 days, benefits usually cease after 1-2 years.',
          'Mortgage payment protection insurance (MPPI) is a form of ASU limited to mortgage payments (plus limited related costs).'
        ]
      }
    ],
    examTraps: [
      'IPI cannot be cancelled by the insurer while premiums are paid, regardless of claims — ASU is an annually renewable contract that CAN be cancelled by the insurer. This distinction is frequently tested.',
      'There is no insurable interest between parents and children — a common wrong-answer trap assumes family relationships always create insurable interest.',
      'Joint-life second death policies are used almost exclusively for IHT planning — not general family protection, since nothing is paid on the first death.'
    ],
    remember: [
      'Hierarchy of needs: living today → protection → income protection → pension → savings → investment.',
      'Decreasing term = cheapest, matches reducing debt. Level term = fixed debt. Whole of life = guaranteed payout, used for IHT/legacy, not fixed-term debt.',
      'CIC = lump sum, one claim only. IPI = ongoing income, insurer can\u2019t cancel. ASU = ongoing income, insurer CAN cancel, shorter benefit period.'
    ],
    knowledgeCheck: [
      {
        question: 'Which of these arrangements does NOT represent a valid insurable interest?',
        options: [
          'A person taking a policy on the life of someone who owes them money',
          'A person taking a policy on their spouse\u2019s life',
          'A person taking a policy on their parent\u2019s life',
          'A business partner taking a policy on their co-partner\u2019s life'
        ],
        correctIndex: 2,
        explanation: 'There is no automatic insurable interest between parents and children — the other three examples all involve a recognised, quantifiable financial interest.'
      },
      {
        question: 'What is the key difference between income protection insurance and ASU (accident, sickness and unemployment) insurance?',
        options: [
          'ASU provides a lump sum, IPI provides an income',
          'IPI is annually renewable and can be cancelled by the insurer, ASU cannot',
          'ASU is annually renewable and can be cancelled by the insurer, IPI cannot',
          'There is no meaningful difference between the two'
        ],
        correctIndex: 2,
        explanation: 'IPI cannot be cancelled by the insurer as long as premiums are paid; ASU is an annually renewable contract that the insurer can choose not to renew or can cancel.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 4 Part 1, p.50-63'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t4b',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't4b',
    title: 'Savings & Investments',
    intro: 'This topic covers the main savings and investment vehicles clients use, how bond pricing and yields move with interest rates, and the collective investment structures (unit trusts, OEICs, investment trusts) — a common source of "which price is which" and "who can borrow/gear" style questions.',
    sections: [
      {
        heading: 'Deposits, gilts and bonds',
        bullets: [
          'Savings accounts: capital not at risk (beyond inflation erosion), interest paid gross but potentially taxable, up to £85,000 per person per institution protected by the FSCS.',
          'Structured deposits: return linked to an index (e.g. FTSE 100), fixed term (typically 3-5 years), initial capital normally guaranteed back — but with lower potential reward than direct equity investment.',
          'Gilts (UK government bonds) and corporate bonds pay a fixed coupon and return face value at redemption. Corporate bonds carry more default risk than gilts (which have never defaulted), so typically pay higher rates. Newly issued gilts run for terms up to around 30 years.',
          'Bond prices move inversely to prevailing interest rates: if market rates rise above a bond\u2019s coupon, its resale price falls (and vice versa) — because buyers can get a better rate elsewhere, so they\u2019ll only buy the bond at a discount.',
          'Running yield = the investor\u2019s annual return on the price actually paid. Buying below face value (e.g. £18,000 for £20,000-worth of bonds, still receiving interest on £20,000) gives a HIGHER yield; buying above face value gives a LOWER yield.'
        ]
      },
      {
        heading: 'Shares (equities)',
        bullets: [
          'Shareholders have no liability for company debts beyond their investment, and receive the residual "equity" if the company winds up after debts are settled.',
          'Dividends aren\u2019t guaranteed. Share prices can be volatile short-term; shares are best seen as a longer-term holding.',
          'Diversification (spreading investment across companies/sectors/countries) reduces company-specific risk, but cannot protect against a general market-wide fall.',
          'Dividends are subject to income tax at dividend rates; gains on sale are subject to CGT.'
        ]
      },
      {
        heading: 'Collective investments: unit trusts, OEICs, investment trusts',
        bullets: [
          'Unit trusts: dual-priced — offer price (what you pay to buy) and bid price (what you get selling back), the gap being the "bid-offer spread". A cancellation price (below the bid price) is rarely used, mainly in falling markets. Open-ended: the manager creates/cancels units in response to demand and must buy back on request.',
          'OEICs: typically single-priced (buy and sell at the same price), with charges often taken separately as an initial charge; also open-ended.',
          'Investment trusts: NOT trusts — actually listed companies. Shares trade at a single price. Close-ended (fixed number of shares) and uniquely allowed to "gear" (borrow to invest), which amplifies both gains and losses. At least 85% of income must be passed to shareholders as dividends.',
          'All three (unit trusts, OEICs, investment trusts) have a 14-day cooling-off/cancellation period, and investors are potentially liable to CGT only when they actually sell and realise a gain — the FUND MANAGER, by contrast, is exempt from corporation tax on gains made within the fund.',
          'Non-equity funds (60%+ invested in interest-bearing assets like gilts/corporate bonds/cash) are taxed under savings rules; equity funds (under 60% in fixed interest/cash) are taxed as dividends instead.',
          'OEIC charges can include a "dilution levy" — an extra charge applied when there\u2019s heavy selling of shares, on top of the initial charge and annual management charge.',
          'Collectives suit the average investor better than direct share investment because of: spread of risk, economies of scale on charges, and professional management.'
        ]
      },
      {
        heading: 'Tax wrappers: ISAs, VCTs and EIS',
        bullets: [
          'ISAs: tax-free growth/income, an annual subscription limit but no cap on total value held; cash ISAs, stocks & shares ISAs, Junior ISAs (under 18), Lifetime ISAs (age 18-40, for a first home or later life). Joint ISAs don\u2019t exist.',
          'Venture Capital Trusts (VCT): high-risk, invests in listed VCT companies which then fund start-ups; 30% income tax relief (clawed back if sold within 5 years); no CGT on encashment.',
          'Enterprise Investment Schemes (EIS): direct shares in smaller high-risk companies; 30% tax relief (clawed back if sold within 3 years); CGT exemption if held 3+ years.'
        ]
      }
    ],
    workedExample: {
      title: 'Bond price movement with changing rates',
      body: [
        'You hold a bond paying a fixed 3% coupon on £100 face value.',
        'Market interest rates rise to 5% — new buyers can get 5% elsewhere, so they will only buy your 3% bond at a discount to face value.',
        'Result: your bond\u2019s resale price falls below £100, even though the coupon itself never changes.'
      ]
    },
    examTraps: [
      'Investment trusts are companies, not trusts — and they\u2019re the only one of the three collective structures that can "gear" (borrow to invest).',
      'Unit trusts are dual-priced (offer/bid); OEICs are typically single-priced — mixing these up is a classic distractor.',
      'The offer price is what you PAY to buy units; the bid price is what the manager pays when you CASH IN — "get rid at the bid" is a useful memory aid.'
    ],
    remember: [
      'Bond prices fall when market rates rise above the coupon, and rise when market rates fall below the coupon.',
      'Unit trusts/OEICs are open-ended (units created/cancelled on demand); investment trusts are close-ended (fixed share count) and can gear.',
      'All three collectives: 14-day cooling-off period; CGT only arises on an actual, realised gain.'
    ],
    knowledgeCheck: [
      {
        question: 'A bond was issued with a 3% coupon. Market interest rates have since risen to 5%. What is the most likely effect on the bond\u2019s resale price?',
        options: ['No effect — the price stays at face value', 'The price will rise above face value', 'The price will fall below face value', 'The coupon rate will automatically increase to 5%'],
        correctIndex: 2,
        explanation: 'Since new buyers can get 5% elsewhere, they will only buy the 3% bond at a discount, so its market price falls below face value.'
      },
      {
        question: 'Which of the three main collective investment structures is able to "gear" (borrow to invest)?',
        options: ['Unit trusts', 'OEICs', 'Investment trusts', 'None of them'],
        correctIndex: 2,
        explanation: 'Investment trusts, being close-ended companies rather than open-ended funds, are uniquely able to borrow to enhance returns — though this also increases risk in a falling market.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 4 Part 2, p.64-75'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t4c',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't4c',
    title: 'Retirement & Borrowing',
    intro: 'This topic covers pension basics (contribution limits, auto-enrolment, defined benefit vs defined contribution), the two mortgage repayment methods and mortgage charge priority, and estate/tax planning tools like trusts and offshore accounts.',
    sections: [
      {
        heading: 'Pension contributions and types',
        bullets: [
          'Any UK resident under 75 can get tax relief on personal pension contributions. Total contributions eligible for relief are limited to the greater of £3,600 or earned income, subject to the annual allowance.',
          'A lifetime allowance caps total pension savings before extra tax charges apply on withdrawal.',
          'Up to 25% of pension funds can normally be taken as tax-free cash; the rest provides taxable income.',
          'The Normal Minimum Pension Age (NMPA) — the earliest age benefits can be accessed — is currently 55, rising to 57 from 2028 (alongside state pension age rising to 67 by the end of 2028); going forward, NMPA is set to stay 10 years below state pension age.',
          'Defined Contribution (DC): contributions fixed, final benefit depends on investment performance — risk sits with the employee. Defined Benefit (DB): pension is a guaranteed fraction of final/career-average salary — risk sits with the employer; now mainly found in the public sector.',
          'Auto-enrolment: applies to employees aged 22+ earning over £10,000 (not sole traders without staff); minimum 8% total contribution split 4% employee / 3% employer / 1% government tax relief; employees can opt out only after being enrolled.'
        ]
      },
      {
        heading: 'Borrowing and mortgage charge priority',
        bullets: [
          'Secured loans give the lender rights over an asset (usually property) via a legal charge; unsecured loans rely purely on the borrower\u2019s promise to repay and carry higher rates as a result.',
          'Multiple mortgages can exist on one property, ranked by registration date at the Land Registry: the first-registered charge has first claim on any repossession proceeds, with surplus passed down to subsequent charges in order, and any final surplus to the borrower.',
          'Repayment mortgages are lower risk (guaranteed to clear by end of term if all payments made); interest-only mortgages are higher risk (rely on a separate investment or eventual sale to clear the capital) — a "pure" interest-only mortgage has no dedicated repayment vehicle at all.',
          'Bridging finance is short-term lending to fund a new purchase before an existing property sells.',
          'Secured lending is regulated under MCOB (Mortgages and Home Finance: Conduct of Business Sourcebook); unsecured lending under CONC (Consumer Credit sourcebook).'
        ]
      },
      {
        heading: 'Estate and tax planning tools',
        bullets: [
          'Estate planning aims to pass wealth to intended beneficiaries efficiently and minimise IHT — using exemptions, potentially exempt gifts, and trusts (which "ring fence" assets outside the settlor\u2019s estate).',
          'Where IHT can\u2019t be avoided, a whole-of-life policy (often written in trust, and on a joint-life second-death basis for couples) can fund the tax bill without itself adding to the taxable estate.',
          'Offshore accounts are savings/investments based in lower-tax jurisdictions (e.g. Channel Islands, Luxembourg, Cayman Islands) — relevant tax treatment can depend on whether someone is emigrating or immigrating relative to the UK.'
        ]
      }
    ],
    examTraps: [
      'Auto-enrolment\u2019s 8% split is 4% employee / 3% employer / 1% government — question-writers love swapping these percentages around as distractors.',
      'On a repossession with multiple charges, the surplus flows in order of registration priority, not order of who claims first — the first-charge lender is repaid in full before any surplus passes down the chain.',
      'Defined Benefit schemes now dominate in the PUBLIC sector; Defined Contribution now dominates in the PRIVATE sector — this is commonly tested in reverse.'
    ],
    remember: [
      'Personal pension tax relief limit: greater of £3,600 or earned income, subject to the annual allowance.',
      'Auto-enrolment threshold: age 22+, earning over £10,000; minimum 8% total (4% employee / 3% employer / 1% government).',
      'Mortgage charge priority follows Land Registry registration order, not claim order.'
    ],
    knowledgeCheck: [
      {
        question: 'Under automatic enrolment, what is the typical minimum total contribution split?',
        options: [
          '4% employee, 3% employer, 1% government tax relief',
          '3% employee, 4% employer, 1% government tax relief',
          '4% employee, 4% employer, no government contribution',
          '2% employee, 2% employer, 4% government tax relief'
        ],
        correctIndex: 0,
        explanation: 'The standard minimum 8% total contribution splits as 4% from the employee, 3% from the employer, and 1% government tax relief.'
      },
      {
        question: 'A property has a first and second mortgage charge. On repossession and sale, how is any surplus distributed?',
        options: [
          'Split equally between both lenders',
          'The first-charge lender is repaid in full first, with any surplus passed to the second-charge lender',
          'The second-charge lender is repaid first',
          'The surplus goes straight to the borrower regardless of charge order'
        ],
        correctIndex: 1,
        explanation: 'Charge priority follows Land Registry registration order — the first-registered charge is repaid in full before any surplus passes to subsequent charge-holders, with any final surplus going to the borrower.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 4 Part 3, p.75-86'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t5',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't5',
    title: 'Legal Principles',
    intro: 'This topic covers legal persons (companies, partnerships, LLPs, trustees), powers of attorney, the law of contract (including the Consumer Insurance Act\u2019s "reasonable care" test), the law of agency, joint property ownership, and bankruptcy/insolvency — all frequently tested through short scenario questions.',
    sections: [
      {
        heading: 'Legal persons and liability',
        bullets: [
          'Limited companies are separate legal entities — shareholders aren\u2019t personally liable for company debts. PLCs can list shares publicly; private "Ltd" companies can\u2019t.',
          'Sole traders are NOT separate legal persons — personally liable for all business debts.',
          'Partnerships are not separate legal entities; partners are "jointly and severally liable" — one partner can be pursued for all the firm\u2019s debts if others can\u2019t/won\u2019t pay.',
          'An LLP limits each partner\u2019s liability to their investment, must register with Companies House, needs at least 2 designated partners, and its partners are taxed as self-employed (income tax, not corporation tax).'
        ]
      },
      {
        heading: 'Trustees and personal representatives',
        bullets: [
          'A trust is created by the settlor, who gives up legal interest in the property (unless they are also a trustee) — it now belongs to the trust. Trustees (who must be 18+ and of sound mind) hold legal responsibility per the trust deed; if a trustee dies, the remaining trustees can appoint a replacement. Where trustees have discretion, ALL trustees must agree before exercising it.',
          'Personal representatives distribute a deceased\u2019s estate: Executors (named in a valid will) apply for a Grant of Probate; Administrators (where there\u2019s no valid will — "intestate") apply for a Grant of Letters of Administration. Neither can generally distribute assets before receiving their Grant.'
        ]
      },
      {
        heading: 'Powers of Attorney',
        bullets: [
          'An Ordinary Power of Attorney lets the attorney act while the donor still has mental capacity — it automatically ends if the donor loses capacity, dies, becomes bankrupt, or a time limit expires. It must be signed as a deed by the donor before one witness (or, if someone signs on the donor\u2019s behalf, before two witnesses) — and covers financial matters only, never personal care/medical decisions.',
          'A Lasting Power of Attorney (LPA) only comes into force once the donor loses capacity, and remains valid (unlike an ordinary PoA). LPAs must be registered with the Office of the Public Guardian and can cover finance/property AND health/personal welfare (an old-style Enduring PoA, pre-October 2007, only covered finance/property — existing EPAs remain valid, but all new arrangements must be LPAs).',
          'Without a valid LPA in place, a Court of Protection application (to appoint a deputy) is needed if someone loses capacity — slower and more costly.',
          'An LPA can be revoked by the donor at any time while they have capacity, via a deed of revocation sent to the Office of the Public Guardian.'
        ]
      },
      {
        heading: 'Contract law and the Consumer Insurance Act',
        bullets: [
          'A valid contract needs: capacity (18+ and sound mind, or 16 in Scotland with extra protection), offer and acceptance, consideration, intent to create legal relations, and legality.',
          'The Consumer Insurance (Disclosure and Representations) Act 2012 replaced pure "utmost good faith" with a duty on the customer to take reasonable care in answering the insurer\u2019s questions truthfully — not to volunteer everything unprompted.',
          'If a misrepresentation was honest and reasonable (i.e. reasonable care was taken), the insurer cannot refuse the claim.',
          'If careless (not reckless) and the insurer would have declined cover entirely had the truth been known: claim can be rejected, but premiums must be refunded.',
          'If careless and the insurer would still have covered them (at a higher premium/lower benefit): claim is paid, but proportionately reduced.',
          'If reckless: the insurer can reject the claim and keep the premiums.'
        ]
      },
      {
        heading: 'Law of agency',
        bullets: [
          'An agent acts on behalf of a principal; in law, the agent\u2019s authorised actions are treated as the principal\u2019s own.',
          '"Actual authority" is the power genuinely granted. "Apparent authority" is where the principal\u2019s conduct would lead a reasonable person to believe authority was granted, even if it wasn\u2019t explicitly.',
          '"Ratification" is where the principal accepts/approves an agent\u2019s action that exceeded their actual authority.',
          'Tied advisers act as agents of the product provider; independent financial advisers act as agents of the customer.'
        ]
      },
      {
        heading: 'Joint property ownership',
        bullets: [
          'Property is either realty (land and everything attached to it) or personalty (any property that isn\u2019t land, e.g. a wine collection or other possessions).',
          'Joint tenancy: no defined individual share; on death, the deceased\u2019s share passes automatically to survivor(s) by survivorship — a will cannot override this.',
          'Tenancy in common: each owner has a defined (not necessarily equal) beneficial share, which passes via their will/intestacy on death — but legal title is still registered as a joint tenancy (it isn\u2019t possible to register AS tenants in common), with a Land Registry restriction preventing sale by a sole surviving legal owner until a new trustee is appointed and registered. Useful for IHT planning, second marriages, or unrelated co-owners who each want their share to go to their own family.',
          'Up to 4 people can be registered as legal owners of a property.'
        ]
      },
      {
        heading: 'Insolvency and bankruptcy',
        bullets: [
          'Bankruptcy currently lasts 1 year (reduced from 3 by the Enterprise Act 2002) in both England/Wales and Scotland.',
          'An individual can petition for their own bankruptcy for any debt amount; a creditor needs at least £5,000 owed to petition.',
          'An undischarged bankrupt can only borrow nominal amounts and must disclose bankruptcy on future credit/mortgage applications even after discharge.',
          'A "trustee in bankruptcy" is appointed to recoup as much as possible for creditors (some essentials like clothing and work tools are protected) — they can "attack" (unwind) transactions from the 2 years before bankruptcy suspected of deliberately moving assets out of reach; this attack period extends to 5 years if the person was insolvent at the time of that earlier transaction.',
          'An Individual Voluntary Arrangement (IVA) needs agreement from creditors holding 75% of the debt (by value), and credit remains impaired even after it ends — a Company Voluntary Arrangement (CVA) is the equivalent for a struggling company.',
          'A Debt Relief Order (DRO) suits those with minimal disposable income/assets — debts are written off after 12 months if terms are met.'
        ]
      }
    ],
    examTraps: [
      'An Ordinary Power of Attorney ENDS if the donor loses mental capacity; a Lasting Power of Attorney is specifically designed to continue (indeed, only take effect) after loss of capacity — this is the exact opposite of what many candidates assume.',
      'Joint tenancy: legal owners cannot leave their share via a will — it always passes by survivorship. Only tenancy in common allows a share to be left by will.',
      'Careless vs reckless misrepresentation under the Consumer Insurance Act lead to very different outcomes (proportionate payment/refund of premium vs straight refusal) — read scenario questions carefully for which one applies.'
    ],
    remember: [
      'Sole trader/partnership = no separate legal personality, personal liability. Limited company/LLP = separate legal personality, limited liability.',
      'Ordinary PoA ends on loss of capacity; Lasting PoA is designed to continue (and only takes effect on loss of capacity).',
      'Bankruptcy lasts 1 year; creditor petition threshold is £5,000; IVA needs 75% creditor agreement by value.'
    ],
    knowledgeCheck: [
      {
        question: 'What is the key difference between an Ordinary Power of Attorney and a Lasting Power of Attorney?',
        options: [
          'An LPA can be revoked at any time; an ordinary PoA cannot',
          'An ordinary PoA becomes invalid if the donor loses mental capacity, whereas a Lasting PoA remains effective',
          'A Lasting PoA can be agreed verbally; an ordinary PoA must be registered',
          'An ordinary PoA remains valid after loss of capacity, whereas a Lasting PoA does not'
        ],
        correctIndex: 1,
        explanation: 'An ordinary Power of Attorney automatically ends if the donor loses mental capacity; a Lasting Power of Attorney is specifically designed to take effect and continue once that happens.'
      },
      {
        question: 'Walter and Winnie own their house as joint tenants. If Walter dies, what happens to his share?',
        options: [
          'It passes automatically to Winnie by survivorship',
          'It passes according to Walter\u2019s will',
          'Winnie must buy Walter\u2019s share from his estate',
          'It is split between Winnie and Walter\u2019s named beneficiaries'
        ],
        correctIndex: 0,
        explanation: 'Under a joint tenancy, there is no individual share to leave by will — ownership automatically passes to the surviving joint tenant(s).'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 5, p.87-100'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t6',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't6',
    title: 'Wills, Intestacy & Trusts',
    intro: 'This topic covers how to make a valid will, what happens under the intestacy rules when there isn\u2019t one, deeds of variation, and the main trust types — an area full of specific numeric rules (statutory legacy, 28-day survivorship, 2-year variation window) that examiners test directly.',
    sections: [
      {
        heading: 'Making a valid will',
        bullets: [
          'Must be 18+ in England (16 in Scotland) to make a will. Must be in writing/typed, signed by the testator, and witnessed by 2 people aged 18+ with capacity — the testator must also witness the witnesses signing.',
          'A will does NOT legally need to be dated, though undated wills can cause problems establishing which of multiple wills is the latest.',
          'A witness (or their spouse/civil partner) who is also a beneficiary forfeits their inheritance — the will itself stays valid, just that person\u2019s gift is void.',
          'Marriage automatically revokes an earlier will UNLESS it was made in contemplation of that marriage. Divorce does NOT revoke a will, but the ex-spouse is automatically treated as having predeceased the testator for inheritance purposes (unless the will says otherwise).'
        ]
      },
      {
        heading: 'Intestacy rules (dying without a valid will)',
        bullets: [
          'Spouse, no children: spouse receives the entire estate absolutely.',
          'Spouse and children: spouse receives personal chattels + a statutory legacy (a fixed first amount) absolutely, plus half of anything above that; the other half above the statutory legacy goes to the children.',
          'Children, no spouse: shared equally among the children.',
          'Neither spouse nor children: to parents, or siblings (including half-siblings) if parents are dead; ultimately to the Crown if no blood relative can be found.',
          'A surviving spouse must survive the deceased by 28 days to inherit under intestacy.',
          'Children can only inherit absolutely from age 18 — until then, assets are held in trust for them. Stepchildren/foster children have no automatic intestacy rights.',
          'Probate isn\u2019t needed for jointly-held assets (which pass automatically to the survivor) or for small estates — cash/investment accounts below £5,000.'
        ]
      },
      {
        heading: 'Wills, deeds of variation and disclaimers',
        bullets: [
          'Mirror wills: near-identical wills, typically leaving everything to each other, then to other beneficiaries. Can be freely changed by the survivor.',
          'Mutual wills: similar terms PLUS a binding agreement that the survivor cannot change their will after taking a benefit under the first death — this locks in the arrangement (e.g. prevents a surviving spouse who remarries from redirecting the estate).',
          'A Deed of Variation lets beneficiaries redirect their inheritance (often for tax reasons), within 2 years of death. Only beneficiaries who are adversely affected (losing out) need to agree — those unaffected have no say.',
          'A beneficiary can also simply reject a gift via a written disclaimer, sending it back into the estate for redistribution.'
        ]
      },
      {
        heading: 'Trusts',
        bullets: [
          'Parties: settlor (creates the trust, sets terms), trustees (legal owners, manage per the trust deed), beneficiaries (who benefit). A contingent beneficiary\u2019s entitlement depends on something happening (e.g. "to Alice if she survives me, otherwise to George" — George is contingent).',
          'Once gifted into trust (with no reservation of benefit), assets fall outside the settlor\u2019s estate for IHT after 7 years survival, and future growth is immediately outside the estate. A "gift with reservation" (e.g. giving away a house but continuing to live in it rent-free) stays IN the estate — but paying a market rent to live there removes that problem.',
          'Bare (absolute) trust: beneficiary absolutely entitled, can demand assets at 18. Gifts are PETs (exempt after 7 years).',
          'Interest in possession (IIP) trust: a "life tenant" gets income/use for life or until a contingency; "remaindermen" benefit after. Setting one up in lifetime is a Chargeable Lifetime Transfer (20% charge on any excess over the nil rate band, payable immediately).',
          'Immediate post-death interest trust: functions like an IIP trust but is created by will — since the gift happens on death (not lifetime), it\u2019s taxed as a normal legacy, NOT as a chargeable lifetime transfer.',
          'Discretionary trust: trustees choose which named/category beneficiaries benefit and by how much — useful when no single beneficiary is decided on. Also a chargeable lifetime transfer (20% on the excess over the nil rate band).',
          'Flexible (power of appointment) trust: essentially a form of discretionary trust used with life policies/IHT planning — the settlor names potential beneficiaries/categories but must also name a "default beneficiary" who receives the proceeds if trustees appoint no one else.',
          'Split trust: used with a combined life + critical illness policy — the CIC element stays OUTSIDE the trust (so the insured can receive a living claim directly), while the life cover element is held in trust.',
          'Married Women\u2019s Property Act 1882 trust: automatically created when someone takes out a life policy for the specific benefit of a spouse/civil partner/children — keeps proceeds outside the policyholder\u2019s estate and away from creditors, despite the name it can apply to anyone (including single people, if for their children\u2019s benefit).',
          'Designated accounts: a simpler alternative to a trust for investing on a child\u2019s behalf — an ordinary account/investment held in the adult\u2019s name with the child\u2019s initials added, giving the adult full control until the child turns 18. If a PARENT sets it up, income above £100/year is taxed as the parent\u2019s; if funded by someone else (e.g. a grandparent), income/gains belong to the child.'
        ]
      }
    ],
    workedExample: {
      title: 'Intestacy: spouse and children',
      body: [
        'A man dies intestate leaving a wife and children, with an estate of £522,000 (statutory legacy assumed £322,000 for this example).',
        'Wife receives: £322,000 (statutory legacy) + half of the remaining £200,000 = £322,000 + £100,000 = £422,000.',
        'Children share the other half of the excess: £100,000 between them.'
      ]
    },
    examTraps: [
      'A Chargeable Lifetime Transfer 20% charge applies to LIFETIME gifts into most trusts (IIP, discretionary) — but a gift into an "immediate post-death interest" trust made VIA A WILL is taxed as a normal legacy, not as a CLT. This distinction (lifetime vs on-death creation) is a common trap.',
      'Divorce does NOT revoke a will — it only removes the ex-spouse as a beneficiary by default. Many candidates wrongly assume divorce cancels the whole will, like marriage does.',
      'A Deed of Variation only needs agreement from beneficiaries who LOSE OUT — unaffected beneficiaries have no veto, even if they disagree in principle.'
    ],
    remember: [
      'Witness who is also a beneficiary (or their spouse) loses their gift, but the will stays valid.',
      'Surviving spouse must survive 28 days to inherit under intestacy.',
      'Deed of Variation: within 2 years of death, only adversely-affected beneficiaries need to agree.',
      'Mutual wills = binding on survivor after first death; mirror wills = not binding, can be changed freely.'
    ],
    knowledgeCheck: [
      {
        question: 'John made a will and then divorced Katrina. What happens to the will?',
        options: [
          'The will is automatically revoked, as with marriage',
          'The will remains valid, but Katrina is treated as having predeceased John unless the will says otherwise',
          'The will remains valid with no changes at all',
          'The will becomes invalid only if Katrina remarries'
        ],
        correctIndex: 1,
        explanation: 'Unlike marriage, divorce does not revoke a will — but the ex-spouse is automatically excluded from benefiting unless the will explicitly provides otherwise.'
      },
      {
        question: 'A gift is made during the settlor\u2019s lifetime into a discretionary trust, exceeding the available nil rate band. What is the immediate IHT position?',
        options: [
          'No tax is due unless the settlor dies within 7 years',
          'A 20% charge is due immediately on the excess over the nil rate band',
          'A 40% charge is due immediately on the whole gift',
          'Tax is only due if the trust is later wound up'
        ],
        correctIndex: 1,
        explanation: 'A lifetime gift into a discretionary trust is a Chargeable Lifetime Transfer, triggering an immediate 20% charge on any amount above the nil rate band.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 6, p.101-114'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t7',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't7',
    title: 'Development of UK Regulation',
    intro: 'This topic covers why financial services are regulated, the historical journey from self-regulation to the current "twin peaks" model, and the wider regulatory landscape beyond the PRA/FCA (CMA, Pensions Regulator, Information Commissioner) — mostly tested through dates, bodies, and "which regulator does what" questions.',
    sections: [
      {
        heading: 'Why regulate, and the road to today',
        bullets: [
          'Three core objectives of regulation: sustain systemic stability, protect consumers (who suffer from "asymmetric information" versus well-informed firms), and maintain the safety/soundness of institutions.',
          'Financial Services Act 1986: introduced an element of self-regulation, which proved too fragmented by the mid-1990s.',
          'Financial Services and Markets Act 2000 (FSMA): created the single-regulator Financial Services Authority (FSA). Regulatory timeline: banking regulated by FSA from June 1998; most of financial services from December 2001 (when FSMA became law); mortgages from October 2004; insurance from January 2005.',
          'The pre-2013 "tripartite system" (Bank of England, FSA, Treasury) was heavily criticised after the 2007-08 crisis (notably Northern Rock) for unclear accountability.',
          'Financial Services Act 2012: introduced the current "twin peaks" model from April 2013 — the PRA (part of the Bank of England, prudential regulation of significant firms) and the FCA (conduct regulation of all firms).',
          'Bank of England and Financial Services Act 2016: moved the PRA fully inside the Bank of England (under the new Prudential Regulation Committee) and extended the Senior Managers and Certification Regime to all financial services sectors.'
        ]
      },
      {
        heading: 'Post-Brexit regulatory framework',
        bullets: [
          'European Union (Withdrawal) Act 2018: retained EU law in the UK as it stood pre-Brexit, with powers to correct "deficiencies"; major changes still need Parliament\u2019s consent.',
          'Financial Services and Markets Act 2023: established the Future Regulatory Framework Review, repealing/replacing various retained EU rules with UK-specific ones, and gave the FCA/PRA a secondary objective to facilitate international competitiveness and growth of the UK economy.'
        ]
      },
      {
        heading: 'Oversight and authorisation',
        bullets: [
          'HM Treasury has ultimate responsibility for oversight of the UK financial system — it is not itself a regulator, but oversees the Bank of England and the FCA (whose board it appoints). The FCA itself is a limited company, not a government department or part of the Bank of England.',
          'The Financial Policy Committee (FPC), chaired by the Bank of England\u2019s Governor, is responsible for "macroprudential supervision" — identifying and acting on systemic risks to the whole UK financial system, and making recommendations to the PRA/FCA.',
          'Firms need appropriate PRA/FCA authorisation to carry out regulated activities — doing so without it is a criminal offence. Exemptions apply to the Bank of England, recognised investment exchanges (e.g. the London Stock Exchange), executors/trustees, and solicitors dealing with regulated investments as part of their normal professional duties.',
          'To be authorised, a firm must satisfy threshold conditions (both at the outset and ongoing): legal status, location of offices, adequate resources, adequate capital/liquidity, suitability of the firm and its staff, its business model, and effective supervision.'
        ]
      },
      {
        heading: 'Other regulatory and oversight bodies',
        bullets: [
          'Competition and Markets Authority (CMA): promotes competition, investigates mergers and anti-competitive behaviour, protects consumers from unfair trading — separate from FCA/PRA.',
          'The Pensions Regulator: oversees work-based pension schemes (security, value for money, good governance) — but is NOT responsible for underperformance or mis-selling of pensions. Occupational pension complaints go first to the scheme trustees under the Internal Dispute Resolution Procedure (IDRP — 4 months for a formal response, then 15 working days to notify the complainant of the decision, including advice on the Pensions Ombudsman), then to the Pensions Ombudsman if unresolved.',
          'Information Commissioner\u2019s Office: enforces the Data Protection Act 2018 and Freedom of Information Act 2000 — failing to notify the Commissioner about holding personal data, or ignoring an enforcement notice, is a criminal offence.',
          'Oversight roles: external auditors (independent review of published accounts), internal auditors (review risk management/controls from within), trustees (ensure trust property is managed per the trust deed), and compliance officers (ensure ongoing regulatory compliance within a firm).'
        ]
      }
    ],
    examTraps: [
      'The regulatory timeline dates are frequently tested directly: banking (1998) → most financial services (Dec 2001, FSMA) → mortgages (Oct 2004) → insurance (Jan 2005) → twin peaks (April 2013).',
      'The Pensions Regulator does NOT handle mis-selling or underperformance complaints — that distinction is a common trap. Pension complaints about scheme administration go to trustees (IDRP) first, then the Pensions Ombudsman.',
      'External auditors review published accounts; internal auditors review internal risk/controls — these two roles are easy to mix up in scenario questions.'
    ],
    remember: [
      'Regulatory timeline: banking 1998, most services Dec 2001 (FSMA), mortgages Oct 2004, insurance Jan 2005, twin peaks April 2013.',
      'Twin peaks: PRA (prudential, inside Bank of England) + FCA (conduct, all firms).',
      'Occupational pension complaint route: scheme trustees (IDRP, 4 months) → Pensions Ombudsman.'
    ],
    knowledgeCheck: [
      {
        question: 'Which piece of legislation led to the creation of the PRA and FCA under the "twin peaks" model?',
        options: ['Financial Services Act 1986', 'Financial Services and Markets Act 2000', 'Financial Services Act 2012', 'Bank of England and Financial Services Act 2016'],
        correctIndex: 2,
        explanation: 'The Financial Services Act 2012 introduced the twin peaks model (PRA and FCA), which took effect from April 2013.'
      },
      {
        question: 'A member of an occupational pension scheme has a complaint about how the scheme is being administered. Where should this be raised first?',
        options: ['The Pensions Ombudsman', 'The Pensions Regulator', 'The scheme trustees, under the Internal Dispute Resolution Procedure', 'The FCA'],
        correctIndex: 2,
        explanation: 'Occupational pension complaints must go to the scheme trustees first via the IDRP, with the Pensions Ombudsman only available once that process is exhausted.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 7, p.115-126'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t8a',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't8a',
    title: 'PRA & FCA Approach to Regulation (Part 1)',
    intro: 'This topic goes deeper into how the PRA and FCA actually supervise firms day-to-day: their statutory objectives, supervision categories, the FCA\u2019s 3-pillar model, enforcement powers, and the structure of the FCA Handbook.',
    sections: [
      {
        heading: 'PRA and FCA objectives',
        bullets: [
          'PRA\u2019s 4 statutory objectives: promote safety and soundness of firms; protect insurance policyholders appropriately; facilitate effective competition; facilitate UK international competitiveness.',
          'FCA\u2019s single strategic objective: ensure relevant markets function well — supported by 3 operational objectives: protect consumers, protect market integrity, promote effective competition in consumers\u2019 interests.',
          'Prudential regulation (PRA) = financial soundness/stability. Conduct regulation (FCA) = how firms market to and treat customers.',
          'Capital adequacy: firms must hold enough of their OWN capital (not customer deposits) that losses fall on shareholders, not depositors — measured via a "solvency ratio" (capital held as a proportion of assets, weighted for risk). The PRA also uses a Proactive Intervention Framework (PIF) to spot risks to a firm\u2019s viability early and prompt remedial action.'
        ]
      },
      {
        heading: 'Supervision categories and the FCA\u2019s 3 pillars',
        bullets: [
          'Fixed portfolio firms: large banking/insurance groups with huge retail customer numbers — highest supervision level, continuous assessment, a named supervisor.',
          'Flexible portfolio firms: smaller firms/most intermediaries — supervised by a general FCA team rather than a dedicated one.',
          'The FCA\u2019s 3-pillar supervision model: Pillar 1 Proactive (pre-emptive review to spot harm early), Pillar 2 Reactive (dealing with emerging/actual issues), Pillar 3 Thematic (wider diagnostic work where harm is a common theme across several firms).',
          'For firms it regulates prudentially, the FCA categorises by risk: P1 "prudentially critical" (most intense supervision), P2 "prudentially significant", P3 "prudentially non-significant".'
        ]
      },
      {
        heading: 'FCA enforcement powers',
        bullets: [
          'Varying a firm\u2019s permissions (removing a specific permission), withdrawal of an approved person\u2019s status, criminal prosecution, and disciplinary action (private warning, statement of misconduct, financial penalty) can all be done WITHOUT going to court.',
          'Seeking an injunction, restitution (forcing forfeiture of ill-gotten profit to the FCA), or redress (forcing return of gains to affected clients) all require a court application.',
          'The FCA can ban misleading financial promotions immediately, without a full enforcement process (firms retain a right of appeal).'
        ]
      },
      {
        heading: 'The FCA Handbook structure',
        bullets: [
          '"Rules" create binding obligations; "guidance" merely explains rules and isn\u2019t itself binding — but following guidance is presumed to mean the underlying rule was followed.',
          'High Level Standards: threshold conditions, Statements of Principle/Fit & Proper Test, Principles for Businesses, systems & controls, training & competence.',
          'Prudential Standards: financial soundness of solely FCA-regulated firms.',
          'Business Standards: the Conduct of Business Sourcebooks — MCOB (mortgages), ICOB (insurance), BCOB (banking) — plus the Market Conduct Sourcebook (investment markets, insider dealing).'
        ]
      }
    ],
    examTraps: [
      'Restitution and redress both need a COURT order; varying permissions, withdrawing approval, and disciplinary action do NOT — this "needs court vs doesn\u2019t" distinction is directly tested.',
      'The FCA\u2019s single STRATEGIC objective (markets function well) is often confused with its three OPERATIONAL objectives (protect consumers, protect integrity, promote competition) — know there\u2019s exactly one strategic objective.',
      'MCOB = mortgages, ICOB = insurance, BCOB = banking — mixing these sourcebook abbreviations up is a common wrong-answer trap.'
    ],
    remember: [
      'PRA: 4 objectives (safety/soundness, policyholder protection, competition, international competitiveness). FCA: 1 strategic objective (markets function well) + 3 operational objectives.',
      '3 pillars: Proactive, Reactive, Thematic.',
      'Restitution/redress need a court order; varying permissions/withdrawing approval/disciplinary action do not.'
    ],
    knowledgeCheck: [
      {
        question: 'How many primary strategic objectives does the FCA have?',
        options: ['None', 'One', 'Two', 'Three'],
        correctIndex: 1,
        explanation: 'The FCA has a single strategic objective (ensuring relevant markets function well), supported by three operational objectives.'
      },
      {
        question: 'Which FCA enforcement action requires an application to the court?',
        options: ['Varying a firm\u2019s permissions', 'Withdrawal of an approved person\u2019s status', 'Seeking restitution', 'Issuing a private warning'],
        correctIndex: 2,
        explanation: 'Restitution (and redress, and injunctions) require a court order; the other actions listed can be taken directly by the FCA.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 8 Part 1, p.127-136'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u1-t8b',
    module: 'cemap1', unitKey: 'unit1', topicKey: 't8b',
    title: 'PRA & FCA Approach to Regulation (Part 2)',
    intro: 'This topic covers training & competence requirements, client money rules (CASS), the Senior Managers and Certification Regime (SM&CR) in detail, the Code of Conduct rules, the fit and proper test, and appointed representatives — a dense, detail-heavy topic that rewards learning the specific thresholds.',
    sections: [
      {
        heading: 'Client money rules (CASS)',
        bullets: [
          'Client money must be held in a separate client account, set up as a trust, distinct from the firm\u2019s own money.',
          'Money/assets received must be used for the transaction immediately, or banked into the client account by close of business the following day.',
          'Firms may "pay away" money with no activity for 6 years (12 years for assets) to a registered charity — but must first make reasonable attempts (3 contacts) to reach the client if the balance is above the de minimis threshold (£25 retail / £100 other clients); below that, a shorter process applies.'
        ]
      },
      {
        heading: 'Senior Managers and Certification Regime (SM&CR)',
        bullets: [
          '3 firm categories: Limited scope (e.g. sole traders — exempt from baseline requirements), Core (majority of firms — must meet baseline requirements), Enhanced (large/complex firms — additional requirements).',
          'Senior Managers Regime: senior managers must be personally vetted and approved by the FCA/PRA for each senior management function (SMF) they hold, backed by a "statement of responsibilities" and a firm-wide "responsibilities map".',
          'Senior managers have a statutory "duty of responsibility" — to face action, the regulator must prove (on balance of probability) the firm breached rules, the individual was a senior manager at the time, was responsible for the relevant area, and failed to take reasonable steps to prevent the breach.',
          'Certification Regime: covers "significant harm" roles below senior management (e.g. mortgage/investment advisers, material risk takers) — the FIRM certifies fitness and propriety annually; the FCA/PRA doesn\u2019t directly vet these individuals.',
          'A sole trader themselves is not covered by the Certification Regime, though their employees may be. For limited-scope firms like sole traders: SMF29 (systems and controls oversight) applies where there are employees in senior/certified roles; SMF16 (compliance oversight) is additionally required once turnover exceeds £1m — though one person can hold both roles.',
          'Key senior management functions include Chief Executive, Chair, Executive Director, Partner, Compliance Oversight, and Money Laundering Reporting Officer.',
          'Mortgage advisers need a Level 3 qualification (e.g. CeMAP), financial advisers a Level 4 qualification (e.g. DipFA) — advisers specialising in equity release, pension transfers or long-term care need a further additional qualification on top.'
        ]
      },
      {
        heading: 'The Code of Conduct',
        bullets: [
          'Applies to all staff at authorised firms EXCEPT purely ancillary roles (security, IT support, reception, transport).',
          'Tier 1 individual conduct rules (all covered staff): act with integrity; act with skill, care and diligence; be open and cooperative with regulators; pay due regard to customers and treat them fairly; observe proper market conduct standards; act to deliver good outcomes for retail customers.',
          'Tier 2 senior manager conduct rules (additional, for senior managers only): take reasonable steps to control the business effectively; ensure regulatory compliance; ensure delegation is appropriate and overseen; disclose relevant information to the regulator.',
          'Firms must report disciplinary action against a senior manager within 7 days; for other staff, an annual report suffices.'
        ]
      },
      {
        heading: 'The fit and proper test',
        bullets: [
          'Three areas assessed: honesty/integrity/reputation (criminal record, disciplinary history, complaints, insolvency, past dismissals); competence and capability (training and competence requirements); financial soundness (current position, past bankruptcies, credit rating).',
          'Appointed representatives (ARs) undertake regulated activities as a contractual agent of an authorised "principal" firm — the AR itself is not authorised by the FCA, but the principal is ultimately responsible and accountable for the AR\u2019s activities and must assess the AR\u2019s fitness and propriety.'
        ]
      }
    ],
    examTraps: [
      'The de minimis threshold for "paying away" dormant client money to charity is £25 for retail clients (not £100 — that\u2019s the "other clients" threshold) — question-writers often swap these.',
      'The Certification Regime is FIRM-led (self-certification, annual) — the Senior Managers Regime is REGULATOR-led (FCA/PRA personally vet and approve). Mixing up who does the approving is a common trap.',
      'Only ancillary staff (security, IT, reception, transport) are exempt from the Code of Conduct — almost everyone else, including junior customer-facing staff, is covered.'
    ],
    remember: [
      'Dormant client money: pay away after 6 years (12 for assets); de minimis £25 retail / £100 other clients.',
      'SM&CR firm categories: Limited scope, Core, Enhanced.',
      'Fit and proper test: honesty/integrity/reputation, competence/capability, financial soundness.'
    ],
    knowledgeCheck: [
      {
        question: 'An adviser has identified £50 with no activity for several years in a client account. What must the firm do before "paying it away" to charity?',
        options: [
          'Nothing — the amount is below the threshold for any check',
          'Take reasonable steps to contact the client first, since £50 is above the £25 retail de minimis',
          'Wait a further 12 years before any action can be taken',
          'Transfer it directly to the FCA rather than a charity'
        ],
        correctIndex: 1,
        explanation: 'The de minimis threshold for retail clients is £25 — since £50 exceeds this, the firm must make reasonable attempts (typically three) to contact the client before paying the money away.'
      },
      {
        question: 'Under the Certification Regime, who is responsible for assessing an individual\u2019s fitness and propriety?',
        options: ['The FCA directly', 'The PRA directly', 'The employing firm', 'An independent professional body'],
        correctIndex: 2,
        explanation: 'Unlike the Senior Managers Regime (where the regulator vets and approves), under the Certification Regime it is the firm itself that certifies fitness and propriety, reassessed annually.'
      }
    ],
    source: 'CeMAP 1, Unit 1 Topic 8 Part 2, p.137-143'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u2-t1',
    module: 'cemap1', unitKey: 'unit2', topicKey: 't1',
    title: 'The Advice Process & Adviser Skills',
    intro: 'This topic covers the full advice process from initial disclosure through to product/suitability documentation, plus the softer skills (questioning, listening, risk profiling) advisers need — a topic full of specific deadlines and document names that examiners test directly.',
    sections: [
      {
        heading: 'Initial disclosure and the client agreement',
        bullets: [
          'Before any business, firms must give initial disclosure information (firm details, services, costs) in a "durable medium" (paper, email attachment, or a website if the customer has regular internet/email access).',
          'A Client Agreement is required for "designated investment business" (higher-risk assets like equities, options, futures, discretionary management) — not usually needed for packaged products like pensions/life policies.',
          'Client agreement records must be kept for the duration of the relationship, or indefinitely for pension transfers, opt-outs and FSAVCs.'
        ]
      },
      {
        heading: 'Fact-finding, risk and capacity for loss',
        bullets: [
          'The fact find uncovers hard facts (personal/financial details) and softer facts (objectives, hopes, willingness to act).',
          '"Attitude to risk" is the subjective willingness to accept risk for reward; "capacity for loss" is the more factual question of how much loss the client could actually absorb without harming their standard of living — a couple may have different attitudes to risk from each other, and this must be factored in.',
          'Risk categories run from no risk/risk averse, through low/cautious, medium/balanced, medium-to-high, up to high risk/adventurous.'
        ]
      },
      {
        heading: 'Presenting recommendations',
        bullets: [
          'Presentations should be jargon-free, cover purpose, benefits, risks/limitations, costs, and reasons for recommendation, and actively check customer understanding rather than assuming it.',
          'If the customer makes a genuinely informed decision, caveat emptor ("let the buyer beware") applies — but a complaint can succeed if they were misled or not given full information.',
          'The Consumer Insurance (Disclosure and Representations) Act 2012 requires honest, accurate answers to application questions but does NOT require volunteering unprompted information.'
        ]
      },
      {
        heading: 'Product disclosure documents',
        bullets: [
          'Key Features Document (life/pension products): product aims, key contract terms, risk factors, complaints handling, FSCS compensation info, cancellation rights, charges.',
          'Key Information Document (KID): required for PRIIPs (packaged retail and insurance-based investment products) — unit trusts, OEICs, investment trusts, insurance-based investments, structured products, VCTs. Maximum 3 sides of A4, plain language. Personal pensions are notably NOT PRIIPs requiring a KID.',
          'Suitability report required for: long-term life insurance/annuities (not pure protection), personal pensions/transfers/opt-outs, and unit trusts/investment trusts/OEICs. Timing: life policies — before the contract concludes; pensions — no later than 14 days after conclusion; unit trusts/investment trusts/OEICs — as soon as possible after execution.'
        ]
      },
      {
        heading: 'Execution-only sales and questioning skills',
        bullets: [
          'Execution-only: the customer directs the transaction themselves — no suitability assessment or full risk explanation is required, but the customer must sign to confirm the transaction is execution-only, and an "appropriateness test" applies for complex products (futures, options, unrecognised collective schemes, structured products).',
          '"Insistent customers" (who want to proceed against the adviser\u2019s advice) must sign a disclaimer confirming they are acting against advice.',
          'Closed questions get yes/no or factual answers (good for facts, but overuse feels like interrogation); open questions explore feelings/attitudes; probing questions dig deeper into an open answer; hypothetical questions get the client imagining an ideal scenario.',
          'Psychologist Albert Mehrabian found that only 7% of communicating feelings/attitudes comes from the words themselves — 38% from tone of voice, 55% from facial expression — underlining why body language and how something is said matter as much as what\u2019s said.',
          'Record keeping: pension transfers/opt-outs/FSAVCs — indefinitely; life policies/investment bonds/pension contracts — 5 years; MiFID business (e.g. shares) — 5 years; other products including mortgages — 3 years.'
        ]
      }
    ],
    examTraps: [
      'Personal pension plans are commonly (wrongly) assumed to need a KID like other packaged investments — they are specifically excluded from the PRIIPs/KID requirement in this syllabus.',
      'Suitability report timing differs by product: before conclusion (life), within 14 days (pension), as soon as possible after execution (unit trusts/OEICs/investment trusts) — these three different deadlines are a classic trap.',
      'Capacity for loss is a factual/objective measure of affordability of loss; attitude to risk is the subjective willingness to accept risk — don\u2019t conflate the two.'
    ],
    remember: [
      'Suitability report needed for: long-term life/annuities, pensions/transfers/opt-outs, unit trusts/investment trusts/OEICs.',
      'KID needed for PRIIPs (unit trusts, OEICs, investment trusts, insurance-based investments, structured products, VCTs) — NOT personal pensions.',
      'Record retention: pension transfers/opt-outs indefinitely; life/investment bonds/pensions and MiFID business 5 years; other products (inc. mortgages) 3 years.'
    ],
    knowledgeCheck: [
      {
        question: 'A client\u2019s "capacity for loss" refers to:',
        options: [
          'Their subjective attitude to taking risk',
          'The amount they could afford to lose without affecting their standard of living',
          'The minimum acceptable percentage loss on their investment',
          'The maximum shortfall they could accept at maturity'
        ],
        correctIndex: 1,
        explanation: 'Capacity for loss is the factual question of how much loss a client could genuinely absorb, distinct from their more subjective attitude to risk.'
      },
      {
        question: 'By when must a suitability report be provided for a personal pension sale?',
        options: ['Before the contract is concluded', 'No later than 14 days after the contract is concluded', 'As soon as possible after execution', 'A suitability report is not required for pensions'],
        correctIndex: 1,
        explanation: 'For pension contracts, the suitability report must be sent no later than 14 days after the contract is concluded — a different deadline from life policies (before conclusion) or unit trusts (as soon as possible after execution).'
      }
    ],
    source: 'CeMAP 1, Unit 2 Topic 1, p.144-157'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u2-t2a',
    module: 'cemap1', unitKey: 'unit2', topicKey: 't2a',
    title: 'Consumer Rights & Ethical Outcomes',
    intro: 'This topic covers general consumer protection law (the Consumer Rights Act 2015 and dispute resolution options), the FCA\u2019s 12 Principles for Businesses, Consumer Duty, and conduct/market abuse risks — a topic that blends general consumer law with FCA-specific principles.',
    sections: [
      {
        heading: 'The Consumer Rights Act 2015 and dispute resolution',
        bullets: [
          'Covers faulty goods, faulty digital content, services not matching what was agreed, and unfair contract terms — general consumer law, not specific to financial services (so occupational pension scheme complaints, for example, sit outside it).',
          'Unfair terms are not binding on the consumer (unless they choose to be bound), while the rest of the contract continues; ambiguous wording is interpreted in the consumer\u2019s favour.',
          'Alternative Dispute Resolution options: Arbitration (independent decision, legally binding, no court appeal), Mediation (helps parties agree, gives no opinion/solution), Conciliation (similar to mediation), Adjudication (independent decision on contract disputes — CAN be appealed through the courts, unlike arbitration).'
        ]
      },
      {
        heading: 'Super-complaints and consumer guidance bodies',
        bullets: [
          'A super-complaint is made by a designated consumer body (Which?, Citizens Advice, Federation of Small Businesses, Consumer Council for Northern Ireland) about market features causing significant consumer harm.',
          'MoneyHelper (from the Money and Pensions Service) has five core functions: pensions guidance, debt advice, money guidance, consumer protection, and strategy.'
        ]
      },
      {
        heading: 'The FCA\u2019s 12 Principles for Businesses',
        bullets: [
          'Integrity, skill/care/diligence, management & control, financial prudence, market conduct, customers\u2019 interests, customer communication, conflicts of interest, customers\u2019 relationship of trust (suitability), clients\u2019 assets, regulator relations, and (12th) Consumer Duty — "a firm must act to deliver good outcomes for retail customers".',
          'There is no principle requiring firms to "maintain an independent compliance function" as a standalone numbered principle — a common wrong-answer trap.'
        ]
      },
      {
        heading: 'Consumer Duty in depth',
        bullets: [
          'Three cross-cutting obligations: act in good faith, avoid foreseeable harm, enable/support customers to pursue financial objectives.',
          'Four outcomes: products/services designed to meet consumer needs, fair value pricing, consumer understanding (clear communication), and consumer support.',
          'Four key drivers the FCA identifies that can cause consumer harm through poor culture: purpose, leadership, approach to rewarding/managing people, and governance.'
        ]
      },
      {
        heading: 'Conduct risk and market abuse',
        bullets: [
          'Conduct risk = risk that a firm/staff actions or omissions harm customers or threaten market integrity — covers mis-selling, fraud, conflicts of interest, poor product design, and poor controls.',
          'Insider dealing: using non-public information for personal financial advantage.',
          'Market manipulation: giving false/misleading information intended to influence a share price.'
        ]
      }
    ],
    examTraps: [
      'Adjudication decisions CAN be appealed through the courts; arbitration decisions are legally binding and CANNOT be appealed — this distinction between two similar-sounding ADR routes is commonly tested.',
      'The Consumer Rights Act 2015 does not cover occupational pension scheme complaints — a common wrong inclusion.',
      '"Maintain an independent compliance function" is NOT one of the 12 numbered Principles for Businesses — don\u2019t assume every sensible-sounding statement is one of the 12.'
    ],
    remember: [
      '4 designated super-complaint bodies: Which?, Citizens Advice, Federation of Small Businesses, Consumer Council for Northern Ireland.',
      'Consumer Duty: 3 cross-cutting obligations (good faith, avoid harm, support objectives) + 4 outcomes (products/services, price/value, consumer understanding, consumer support).',
      'Insider dealing = trading on non-public information; market manipulation = spreading false/misleading information to move a price.'
    ],
    knowledgeCheck: [
      {
        question: 'Which alternative dispute resolution method allows a decision to be appealed through the courts?',
        options: ['Arbitration', 'Mediation', 'Adjudication', 'Conciliation'],
        correctIndex: 2,
        explanation: 'Adjudication decisions can be appealed through the courts, unlike arbitration, whose decisions are legally binding and final.'
      },
      {
        question: 'Which is NOT one of the FCA\u2019s Consumer Duty cross-cutting obligations?',
        options: ['Act in good faith', 'Avoid foreseeable harm to customers', 'Maintain an independent compliance function', 'Enable and support customers to pursue their financial objectives'],
        correctIndex: 2,
        explanation: 'The three cross-cutting obligations are acting in good faith, avoiding foreseeable harm, and supporting customers\u2019 objectives — an independent compliance function isn\u2019t one of them.'
      }
    ],
    source: 'CeMAP 1, Unit 2 Topic 2 Part 1, p.158-165'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u2-t2b',
    module: 'cemap1', unitKey: 'unit2', topicKey: 't2b',
    title: 'Money Laundering, Data & Complaints',
    intro: 'This topic covers anti-money laundering rules and customer due diligence, UK GDPR/data protection, the FCA complaints process and Financial Ombudsman Service, and the FSCS compensation limits — a dense, figure-heavy topic that rewards learning the specific thresholds precisely.',
    sections: [
      {
        heading: 'Money laundering offences and firm obligations',
        bullets: [
          'Main legislation: Proceeds of Crime Act 2002 (three offences: concealing, arranging, acquiring/using criminal property — maximum 14 years\u2019 imprisonment) plus failure to disclose and tipping off (maximum 5 years).',
          'Firms must: establish AML procedures, train staff, verify identity for transactions over €15,000 (€10,000 for a business "occasional transaction"; €1,000/€2,500 annual premium thresholds for life assurance), report suspicions, appoint a Money Laundering Reporting Officer (MLRO), and request an annual MLRO report.',
          'ID evidence: one document for name (e.g. passport, photocard licence) and a separate one for address (e.g. utility bill, council tax bill) — a provisional driving licence, credit card bill or mobile phone bill are NOT acceptable.',
          'ID evidence must be retained for at least 5 years after the relationship ends. Recklessly making a false/misleading statement about money laundering carries up to 2 years\u2019 imprisonment under the Money Laundering Regulations 2017.'
        ]
      },
      {
        heading: 'Data protection (UK GDPR)',
        bullets: [
          'Key roles: data subject (whose data it is), data controller (determines purposes of processing), data processor (processes on the controller\u2019s behalf).',
          'Special category (sensitive) data — racial origin, religious belief, political persuasion, sexual orientation, health, most criminal proceedings, biometric/genetic data — needs consent to process, though some financial-services risk pricing/court proceedings uses are allowed without it.',
          'Subject access requests are generally free of charge under UK GDPR.',
          'The 7 data protection principles: processed fairly and lawfully; obtained only for a specified purpose; adequate but not excessive; accurate and up to date; not kept longer than necessary; processed securely; and the data controller is responsible for compliance with all of this.',
          'Maximum ICO penalty: the higher of £17.5m or 4% of worldwide annual turnover.'
        ]
      },
      {
        heading: 'FCA complaints process and the Financial Ombudsman Service',
        bullets: [
          'Firms must have effective complaints procedures, make customers aware of them, aim to resolve within 8 weeks, and report to the FCA every 6 months.',
          'Complaints must be handled by someone of sufficient competence, not directly involved in the original matter.',
          'Records of complaints: at least 3 years generally; 5 years for complaints relating to collective portfolio management.',
          'FOS: free to customers, funded by firms via a levy (plus a case fee from the 4th case per year), compulsory membership for authorised firms. Complaints must go to the firm first, then to the FOS within 6 years of the event (or 3 years of when the complainant should reasonably have known about it).',
          'FOS awards are binding on firms but NOT on the complainant, who can still go to court. The Pensions Ombudsman (separate from FOS) handles the RUNNING/administration of occupational schemes — mis-selling/marketing complaints still go to the FOS.'
        ]
      },
      {
        heading: 'The Financial Services Compensation Scheme (FSCS)',
        bullets: [
          'Deposits (banks/building societies): 100% of the first £85,000 per person per firm (£170,000 for a joint account) — can extend to £1m for a "temporary high balance" (e.g. house sale, inheritance, divorce settlement) for 6 months from the deposit date.',
          'Investment/mortgage/debt management business insolvency: 100% of the first £85,000.',
          'Insurance: pure protection (term assurance, CIC, income protection), long-term care insurance, annuities, and compulsory insurances (employer\u2019s liability, motor) — 100% protected. Other insurance types — 90% protected.',
          'FSCS does not cover poor advice or poor investment performance — only firm insolvency/default.'
        ]
      }
    ],
    workedExample: {
      title: 'FSCS deposit protection with a temporary high balance',
      body: [
        'Jerry deposits £800,000 from a house sale with his bank.',
        'If the bank becomes insolvent within 6 months of the deposit, the temporary high balance rule can extend protection up to £1m — so Jerry\u2019s £800,000 would be fully covered.',
        'If the insolvency happens after that 6-month window, only the standard £85,000 limit would apply.'
      ]
    },
    examTraps: [
      'FOS awards bind the FIRM, not the complainant — the complainant can still pursue the matter in court if unhappy with the award.',
      'The Pensions Ombudsman only handles scheme administration/running complaints; mis-selling and marketing complaints about pensions still go to the FOS.',
      'Pure protection insurance (term assurance, CIC, income protection) gets 100% FSCS protection — most other insurance types only get 90%.'
    ],
    remember: [
      'AML ID verification threshold: €15,000 (individual), €10,000 (business), €1,000/€2,500 (life assurance premiums).',
      'FSCS deposits: £85,000 standard (£170,000 joint), up to £1m for 6 months for a temporary high balance.',
      'FOS: 6 years from event or 3 years from awareness, whichever is later; binding on firms, not on complainants.'
    ],
    knowledgeCheck: [
      {
        question: 'Jason\u2019s complaint about mis-sold personal pension has received a final response from the pension company. Where should he take it next?',
        options: ['The Prudential Regulation Authority', 'The Pensions Ombudsman', 'The Pensions Advisory Service', 'The Financial Ombudsman Service'],
        correctIndex: 3,
        explanation: 'Mis-selling and marketing complaints go to the FOS — the Pensions Ombudsman only handles complaints about the running/administration of occupational schemes.'
      },
      {
        question: 'A bank becomes insolvent. What is the standard FSCS protection for an individual\u2019s deposit?',
        options: ['100% of the first £50,000', '100% of the first £85,000', '90% of the total balance', '100% of the total balance regardless of amount'],
        correctIndex: 1,
        explanation: 'The standard deposit protection limit is 100% of the first £85,000 per person per firm (doubling to £170,000 for a joint account), unless a temporary high balance applies.'
      }
    ],
    source: 'CeMAP 1, Unit 2 Topic 2 Part 2, p.166-178'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u2-t3',
    module: 'cemap1', unitKey: 'unit2', topicKey: 't3',
    title: 'Regulatory Advice Framework',
    intro: 'This topic covers client categorisation (eligible counterparty/professional/retail), vulnerable client rules, independent vs restricted advice, financial promotions rules, and adviser charging/cooling-off — a broad topic tying together how firms are allowed to sell and support customers.',
    sections: [
      {
        heading: 'Client categorisation and vulnerability',
        bullets: [
          'Eligible counterparty: highly knowledgeable organisations (governments, banks, investment firms) receiving limited/no-advice services — lowest protection level.',
          'Professional client: advice IS given, includes large institutional investors — assumed to have adequate knowledge, medium protection.',
          'Retail client: the "person in the street" with little financial knowledge — highest protection level. Most customers fall here.',
          'FCA\u2019s four drivers of vulnerability: health, life events (bereavement, job loss, relationship breakdown), resilience (low ability to withstand shocks), and capability (low financial knowledge/confidence) — vulnerability can be actual (current circumstances) or potential (future risk factors).'
        ]
      },
      {
        heading: 'Fiduciary duty and advertising standards',
        bullets: [
          'A fiduciary is an agent/service provider to a client — UK law lets the customer take action if fiduciary duties are breached. Key fiduciary duties: duty of care, confidentiality (never share client info without consent — even between individual members of a couple being advised), integrity, and putting the customer\u2019s interests first.',
          'The Advertising Standards Authority (ASA) is an independent body administering the British Code of Advertising and Sales Promotion across virtually all media — requiring adverts to be legal, decent, honest and truthful, with particular care around race, religion, sex and disability.'
        ]
      },
      {
        heading: 'Independent vs restricted advice, and guidance',
        bullets: [
          'Regulated (investment) advice has 3 elements: a recommendation is made; it relates to buying, selling, retaining or subscribing to an investment; and it\u2019s presented as both SUITABLE and AFFORDABLE for that specific person.',
          'Independent advice: comprehensive, fair, unbiased analysis of a sufficiently diverse range of the whole market — not limited to the firm\u2019s own products (though a firm CAN recommend its own product if genuinely the most suitable) or a panel, provided the panel is broad/diverse and reviewed regularly with the ability to go outside it.',
          'Restricted advice: based on products from one company or a limited number — simply doesn\u2019t meet the independence bar.',
          'Guidance: information/generic help without a specific product recommendation — e.g. suggesting cash over shares generally is guidance, not regulated advice, because there\u2019s no specific product recommendation.',
          'Focused/simplified advice ("streamlined advice"): a personal recommendation limited to a specific need — simplified advice differs slightly in that the FIRM decides the scope of the service offered. Basic advice is a further, separate category used for stakeholder products, using pre-scripted questions to assess suitability.',
          'Robo-advice: automated, algorithm-based, must meet the same regulatory suitability standards as human advisers — hybrid models combine automation with human interaction.'
        ]
      },
      {
        heading: 'Financial promotions and advertising rules',
        bullets: [
          'Financial promotions must be prepared/approved by an authorised person, and be clear, fair and not misleading.',
          'Past performance: must not be the most prominent feature, must cover at least 5 years (or the product\u2019s life if shorter, minimum 1 year), and must state "past performance is not necessarily a guide to future performance".',
          'Unsolicited real-time promotions (cold calls) are allowed for packaged products (life, pensions, unit trusts) but NOT for mortgages or higher-risk investments; calls cannot be made 21:00-09:00 or on Sundays.'
        ]
      },
      {
        heading: 'Adviser charging and cooling-off',
        bullets: [
          'Investment advice must be fee-based (no commission); commission is still allowed for pure protection insurance sales (term assurance, CIC, income protection).',
          'Cooling-off/cancellation: 30 days for life/pension/pure protection products; 14 days for investments, ISAs and general insurance. A full refund applies, UNLESS it\u2019s a unit-linked lump sum investment that has fallen in value and this was explained in the contract — then the reduced value (based on the cancellation-day offer price) is refunded instead.'
        ]
      },
      {
        heading: 'Proactive vs reactive servicing',
        bullets: [
          'Proactive servicing: adviser-initiated contact, e.g. a scheduled annual review or a known future life event.',
          'Reactive servicing: client-initiated (or externally triggered) contact, e.g. following non-payment of premiums, a death claim, or the client\u2019s own request after media coverage or a life change.'
        ]
      }
    ],
    workedExample: {
      title: 'Unit trust cancellation with a falling investment value',
      body: [
        'Annette bought units at a 100p offer price, and cancels 10 days later when the offer price has fallen to 98p and the cancellation price is 92p.',
        'Since the investment has fallen in value and this risk was explained in the contract, Annette receives the CURRENT offer price (98p) — not a full refund of her original 100p, and not the lower cancellation price (92p, which only applies in specific manager-buyback circumstances, not to the customer\u2019s own cancellation refund).'
      ]
    },
    examTraps: [
      '"Personal pension is not a PRIIP" from Topic 1 combines with this topic\u2019s advice-type rules — don\u2019t confuse guidance (no specific product recommendation) with restricted advice (a specific, but narrower, recommendation).',
      'Cold calling is banned for mortgages and higher-risk investments, but allowed for packaged products like life assurance and pensions — a frequently reversed trap.',
      'On cancellation of a fallen unit-linked investment, the customer gets the current offer price, not the cancellation price nor a full refund — three different prices are in play and easy to mix up.'
    ],
    remember: [
      '3 client categories (lowest to highest protection): eligible counterparty → professional client → retail client.',
      '4 vulnerability drivers: health, life events, resilience, capability.',
      'Cooling-off: 30 days (life/pension/pure protection), 14 days (investments/ISAs/general insurance).'
    ],
    knowledgeCheck: [
      {
        question: 'Which is a key difference between an eligible counterparty and a professional client?',
        options: [
          'An eligible counterparty is always a bigger organisation',
          'A professional client is entitled to a higher level of protection',
          'Only eligible counterparties can operate on an elective basis',
          'A professional client requires only execution of transactions'
        ],
        correctIndex: 1,
        explanation: 'Professional clients receive advice and a higher level of protection than eligible counterparties, who typically receive only limited, execution-type services.'
      },
      {
        question: 'Cold calling (unsolicited real-time promotion) is NOT permitted for which of these?',
        options: ['Life assurance policies', 'Pensions', 'Unit trusts', 'Mortgages'],
        correctIndex: 3,
        explanation: 'Unsolicited cold calling is allowed for packaged products like life assurance, pensions and unit trusts, but is specifically prohibited for mortgages and higher-risk investments.'
      }
    ],
    source: 'CeMAP 1, Unit 2 Topic 3, p.179-191'
  },
  // ---------------------------------------------------------------
  {
    id: 'c1-u2-t4',
    module: 'cemap1', unitKey: 'unit2', topicKey: 't4',
    title: 'Ethical Principles',
    intro: 'This topic covers the theory of ethics (consequentialist, deontological, virtue), how ethics applies to financial services, whistleblowing, and the specific competence/qualification timelines advisers must meet — a topic that mixes philosophy with hard regulatory deadlines.',
    sections: [
      {
        heading: 'Values, morals and ethics',
        bullets: [
          'Values: subjective fundamental beliefs guiding attitudes/actions. Morals: a society\u2019s shared beliefs about right/wrong (less subjective than personal values). Ethics: often summarised as "morals are what you say, ethics is what you do" — turning belief into action.',
          'Greenwashing: publicising products/processes as environmentally friendly when the reality is otherwise.'
        ]
      },
      {
        heading: 'The three BROAD categories of ethical theory',
        bullets: [
          'Normative (prescriptive) ethics: establishes moral rules for how people/institutions SHOULD act — right vs wrong. Splits into "ethics of conduct" (the consequentialist and deontological approaches below) and "ethics of character" (virtue ethics).',
          'Meta-ethics: does NOT judge whether specific actions are right or wrong — instead it examines the nature of moral judgements themselves, and whether morality is more than just personal opinion.',
          'Applied ethics: applies ethical principles to real-life situations — the actual practical focus of business ethics.'
        ]
      },
      {
        heading: 'Within normative ethics: consequentialist, deontological and virtue',
        bullets: [
          'Consequentialist ethics: an action is right if it produces a good outcome ("the ends justify the means"). Utilitarianism (best outcome for the most people) and ethical egoism (best outcome for the individual) are sub-types. Leads to "moral relativism" — the idea that acceptable rules can change over time/circumstance.',
          'Deontological ethics: an action is right if it follows a moral rule, regardless of outcome — "the means matter more than the ends" (e.g. lying is always wrong, whatever the result).',
          'Virtue (Aristotelian) ethics: focuses on the moral character of the person/organisation — what a virtuous person would naturally do, without weighing up personal benefit.',
          'Applied ethics in practice (the real focus of business ethics) — e.g. lending to fossil-fuel-reliant industries, zero-hours contracts, tax avoidance, repossessions, executive pay, misleading disclosure (e.g. the PPI scandal), market manipulation.'
        ]
      },
      {
        heading: 'Why ethics matters in business',
        bullets: [
          '4 drivers behind the growing importance of ethical business practice: stakeholder/shareholder expectations, information transparency (social media exposure), more informed/demanding consumers, and regulatory pressure (the FCA expects firms to follow the spirit, not just the letter, of the law).',
          'Benefits of an ethical approach: trust builds customer loyalty and retention; it aids staff recruitment/retention (research shows a pay rise has only a SHORT-TERM motivational effect — feeling valued and doing meaningful work matter more); it attracts investors; and it reduces regulatory scrutiny/action.',
          'The FCA\u2019s "regulatory sandbox" lets firms trial new products/ideas in a controlled environment without the usual fear of regulatory sanction, encouraging innovation.'
        ]
      },
      {
        heading: 'Whistleblowing and stakeholders',
        bullets: [
          'Whistleblowing: reporting wrongdoing to an employer/organisation. The FCA protects whistleblowers\u2019 identity, and stresses the reporter doesn\u2019t need to prove wrongdoing — just report their concerns.',
          'Typical stakeholders in an ethics statement: shareholders, customers, employees, suppliers, the community, the environment — regulators themselves are not typically listed as a core stakeholder in this context.'
        ]
      },
      {
        heading: 'Adviser competence and qualification timelines',
        bullets: [
          'A "trainee adviser" can advise under supervision once they\u2019ve passed the relevant regulatory module (e.g. FSRE / CeMAP 1 for mortgage advisers).',
          'Mortgage advisers must pass a Level 3 qualification (e.g. CeMAP) within 48 months of starting to give advice under supervision. Financial advisers need a Level 4 qualification, also within 48 months.',
          'The 48-month clock starts from when they FIRST began giving advice under supervision — it does NOT reset if they change employer. Continuous absences over 60 days don\u2019t count towards the 48 months.',
          'Once "competent", an adviser needs an annual Statement of Professional Standing (SPS) from an accredited body, containing: name, accredited body\u2019s contact details and named signatory, expiry date, confirmation of a verified qualification, and confirmation of an annual declaration of up-to-date knowledge/ethical standards. The SPS does NOT have to be shown to the customer (though the adviser may choose to).',
          'CPD requirement: at least 35 hours per year, of which at least 21 hours must be "structured" (defined learning outcome — seminars, courses, e-learning); researching products or reading news/magazines counts as unstructured, not towards the 21-hour minimum.'
        ]
      }
    ],
    workedExample: {
      title: 'Working out an adviser\u2019s qualification deadline',
      body: [
        'Iqbal began a trainee financial adviser role (his first time giving advice under supervision) in December 2023.',
        'He later changes employer (September 2024) and role (January 2025) — but the 48-month clock keeps running from December 2023, unaffected by the employer change.',
        'Deadline: December 2023 + 48 months = December 2027.'
      ]
    },
    examTraps: [
      'Changing employer does NOT restart the 48-month qualification clock — it runs from when the individual FIRST began advising under supervision, a frequently tested trap.',
      'The Statement of Professional Standing does not need to be shown to customers — a common wrong assumption.',
      'Mortgage advisers need Level 3 (CeMAP); financial advisers (investments/pensions) need Level 4 — mixing up these levels between the two adviser types is a classic distractor.'
    ],
    remember: [
      'Consequentialist = ends justify means. Deontological = rule-based regardless of outcome. Virtue = character-based.',
      'Qualification deadlines: mortgage advisers Level 3, financial advisers Level 4 — both within 48 months of first advising under supervision, unaffected by employer changes.',
      'CPD: 35 hours/year total, at least 21 hours structured.'
    ],
    knowledgeCheck: [
      {
        question: 'Alexander believes rules must be followed regardless of the consequences. What is his ethical stance?',
        options: ['Consequentialist ethics', 'Deontological ethics', 'Virtue ethics', 'Applied ethics'],
        correctIndex: 1,
        explanation: 'Deontological ethics holds that following the correct rule matters more than the outcome it produces.'
      },
      {
        question: 'An adviser changes employer 12 months after first giving advice under supervision. How does this affect their 48-month qualification deadline?',
        options: [
          'The clock restarts from the new employer',
          'It has no effect — the clock continues running from when they first began advising under supervision',
          'They get an additional 12 months added',
          'They must immediately requalify from trainee status'
        ],
        correctIndex: 1,
        explanation: 'The 48-month qualification period is tied to when the individual first began giving advice under supervision, and is unaffected by later changes of employer.'
      }
    ],
    source: 'CeMAP 1, Unit 2 Topic 4, p.192-202'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u1-t1',
    module: 'cemap2', unitKey: 'unit1', topicKey: 't1',
    title: 'Property and Mortgage Markets',
    intro: 'This topic sets the scene for CeMAP 2: what drives the mortgage market (interest rates, inflation, the economy, supply/demand, government action) and who supplies mortgage finance — foundational context that other topics build on.',
    sections: [
      {
        heading: 'The credit crunch — cause and effect',
        bullets: [
          'Cheap credit and rising asset values in the early 2000s led lenders to relax criteria, creating "subprime" mortgages for higher-risk borrowers.',
          '"Securitisation": lenders bundled subprime and prime mortgages together and sold them on to investors worldwide, spreading the risk globally.',
          'When rates rose, defaults surged, mortgage companies failed, and banks holding securitised debt were hit hard — banks then stopped lending to each other, causing the wider "credit crunch" and a global recession (defined as two successive quarters of falling GDP).',
          'UK banks like Northern Rock and RBS needed government intervention; the market began recovering from 2013, helped by schemes like Help to Buy.'
        ]
      },
      {
        heading: 'What affects the mortgage market',
        bullets: [
          'Interest rates: the Bank of England MPC sets the Base Rate monthly to hit inflation targets. Mortgage rates are more directly linked to the interbank rate — the rate banks lend to each other, now measured by SONIA (Sterling Overnight Index Average), which replaced the more easily-manipulated old interbank rate and is typically 0.1-0.2% above Base Rate (though this gap widens in stressed markets).',
          'Inflation: ~2% CPI is considered healthy; high inflation often triggers rate rises which can cool house prices, while lower rates make mortgages more affordable and support price rises. House price inflation has historically tended to run ahead of general price inflation.',
          'The economy: low inflation + high employment + stable rates = high consumer confidence = high mortgage demand. Confidence was damaged by the 2007-09 crisis and again by the 2022+ cost-of-living crisis.',
          'Supply and demand, and government action (e.g. first-time buyer SDLT relief, Help to Buy, the SDLT surcharge on additional properties) also move the market.'
        ]
      },
      {
        heading: 'Who supplies mortgage finance',
        bullets: [
          'Banks: relatively recent mortgage market entrants (since the 1980s), attracted by low default rates and cross-selling opportunities.',
          'Building societies: major traditional suppliers; must devote at least 75% of lending to loans secured on residential property; many demutualised into banks (e.g. Halifax, Abbey National) under the Building Societies Act 1986.',
          'Specialist mortgage houses and challenger banks (e.g. Metro, Atom, Aldermore): usually subsidiaries of larger institutions, funded mainly from the wholesale market, operate centrally (few branches, call centres), often specialise in sub-prime lending.',
          'Mortgage packagers: sit between lender and broker, matching non-standard applicants (e.g. poor credit history) to the right lender, saving time for both sides.',
          '"Sale and rent back" schemes (selling below market value and renting it back, minimum 5-year tenancy) are now FCA regulated.'
        ]
      }
    ],
    examTraps: [
      'Building societies must devote a MINIMUM of 75% of lending to residential property-secured loans — a commonly tested exact figure, easily confused with other percentages in this syllabus.',
      'Specialist mortgage houses/challenger banks fund from the WHOLESALE market and operate CENTRALISED (call centre) models — the opposite of the traditional bank/building society decentralised, depositor-funded model.',
      'SONIA (the current interbank benchmark) replaced the old interbank rate specifically because it is harder to manipulate, being based on actual transactions.'
    ],
    remember: [
      'Credit crunch mechanism: relaxed lending → subprime mortgages → securitisation → rate rises → defaults → bank failures → credit freeze → recession.',
      'Building societies: minimum 75% of lending to residential property.',
      'Specialist mortgage houses/challenger banks: wholesale-funded, centralised, often specialise in sub-prime.'
    ],
    knowledgeCheck: [
      {
        question: 'How do specialist mortgage houses typically differ from banks and building societies?',
        options: ['Their loans do not attract interest relief', 'They obtain their funds from the wholesale market', 'They lend at fixed rates of interest only', 'They offer only repayment mortgages'],
        correctIndex: 1,
        explanation: 'Specialist mortgage houses and challenger banks are funded mainly from the wholesale market, unlike traditional banks/building societies which rely more on their own depositors.'
      },
      {
        question: 'What minimum proportion of their lending must building societies devote to loans secured on residential property?',
        options: ['50%', '65%', '75%', '85%'],
        correctIndex: 2,
        explanation: 'Building societies must devote a minimum of 75% of their lending activities to residential property-secured loans.'
      }
    ],
    source: 'CeMAP 2&3, Unit 1 Topic 1, p.7-12'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u1-t2_3',
    module: 'cemap2', unitKey: 'unit1', topicKey: 't2_3',
    title: 'Mortgage Regulation and Types of Borrower',
    intro: 'This topic covers exactly when a mortgage is FCA-regulated (via MCOB/MCD), the different types of borrower (personal, buy-to-let, business, corporate, and those acting for others), and who is legally unable to borrow — a heavily tested, rule-dense topic.',
    sections: [
      {
        heading: 'What makes a mortgage regulated',
        bullets: [
          'A mortgage is a secured lending contract: the lender (the "mortgagee") holds a legal charge over the property as security, while the borrower (the "mortgagor") retains ownership subject to that charge.',
          'A mortgage is regulated (MCOB/MCD) when: it\u2019s to an individual/trustees, secured by a legal charge on UK land, AND at least 40% of that land is used as a dwelling by the borrower/a related person (or beneficiary if the borrower is a trustee).',
          'Mortgages taken out before March 2016 are regulated under MCOB; from March 2016 onward the Mortgage Credit Directive (MCD) applies (effectively incorporating MCOB) — the syllabus uses "regulated" to cover both.',
          'Company/LLP borrowers, and most buy-to-let mortgages, are NOT MCOB/MCD regulated — an important default position.',
          'MCD additionally brought two previously-unregulated categories into regulation: Consumer Buy-to-Let (CBTL — "accidental landlords", e.g. inheriting a property to rent out, or "let-to-buy") and second mortgages/charges.',
          'Lifetime mortgages, home reversion plans, and retirement interest-only (RIO) mortgages are MCOB regulated but exempt from MCD, with additional qualification requirements for advisers. Home Purchase Plans (Sharia-compliant/Islamic mortgages) are also FCA regulated.'
        ]
      },
      {
        heading: 'Types of borrower',
        bullets: [
          'Personal borrowers: first-time or subsequent buyers; joint borrowers are always "jointly and severally liable" (each liable for the WHOLE debt, not just their share). Sole traders are personal borrowers, not business borrowers.',
          'Buy-to-let (BTL): jointly and severally liable like any joint mortgage; loan size usually driven by rental income via an Interest Coverage Ratio (ICR), typically 125-145% of the mortgage payment; BTL is generally NOT FCA regulated (except Consumer BTL).',
          'Business borrowers: MCOB-regulated only if secured on a residence (40%+ rule) AND for a small business (turnover under £1m) that is NOT an LLP or limited company.',
          'Business partnerships: not a separate legal entity — partners are jointly and severally liable, just like personal joint borrowers. An LLP, by contrast, IS separate — the mortgage goes to the LLP itself and lending to an LLP is not regulated (lenders may still seek personal guarantees).',
          'Corporate borrowers: a limited company is a separate legal entity, so the lender generally can\u2019t pursue shareholders directly (personal guarantees from directors are often required instead); corporate mortgages are unregulated unless the small-business exception applies. Building Societies Act 1986: max 25% of a building society\u2019s commercial assets can be loans to limited companies secured on land.'
        ]
      },
      {
        heading: 'Those acting for others, and those unable to borrow',
        bullets: [
          'Personal representatives (executors with a will/Grant of Probate, or administrators without one/Grant of Letters of Administration) can borrow to administer the estate or buy for a dependant.',
          'Attorneys act under a Power of Attorney; trustees must have Trust Deed authority to mortgage; clubs/associations borrow per their own rules.',
          'Vulnerable customers: FCA\u2019s 4 drivers are health, life events, resilience, capability — specific mortgage-context vulnerable groups include right-to-buy purchasers, sale-and-rent-back customers, equity release customers, and debt consolidators.',
          '"Mortgage prisoners": existing borrowers who can\u2019t easily switch deals due to stricter affordability rules — lenders can waive a full affordability re-assessment for a "product transfer" with no additional borrowing/term change.',
          'Minors (under 18) cannot enter mortgage contracts. Persons of unsound mind cannot create a Power of Attorney themselves — if no valid LPA exists, a Court of Protection deputy must be appointed. An ordinary Power of Attorney ends on loss of capacity; an LPA (or a pre-Oct 2007 EPA) continues.',
          'Undischarged bankrupts cannot borrow more than £500 without disclosure and cannot take out a new mortgage; bankruptcy lasts 12 months; it shows on the Insolvency Register for 3 months post-discharge and on credit files for 6 years from the bankruptcy declaration. An IVA does NOT legally prevent someone taking out a mortgage.'
        ]
      }
    ],
    workedExample: {
      title: 'Is this mortgage regulated?',
      body: [
        'Paul takes a loan to buy a UK warehouse (100% commercial use) — NOT regulated (fails the 40%+ dwelling test).',
        'Henry takes a loan to buy a holiday home in Florida — NOT regulated (not UK land).',
        'A mortgage to ABC Ltd (a limited company) to buy a residential property — NOT regulated (company borrower, regardless of dwelling use).',
        'A remortgage by an individual on an inherited property they now rent out — likely a Consumer Buy-to-Let, regulated under MCD.'
      ]
    },
    examTraps: [
      'Joint borrowers are ALWAYS "jointly and severally liable" for the WHOLE debt — not split by their individual contribution share. This applies whether they hold the property as joint tenants or tenants in common.',
      'An LLP mortgage is NOT regulated (the LLP is a separate legal entity, like a company) — but a general business PARTNERSHIP mortgage CAN be regulated if the other conditions are met, since a partnership has no separate legal personality.',
      'An ordinary Power of Attorney ends when the donor loses mental capacity — the opposite of an LPA, which is specifically designed to continue (or only take effect) after that point.'
    ],
    remember: [
      'Regulated mortgage test: individual/trustee borrower + UK land + legal charge + 40%+ dwelling use.',
      'BTL Interest Coverage Ratio: typically 125-145% of the mortgage payment.',
      'Bankruptcy: 12 months duration; Insolvency Register 3 months post-discharge; credit file 6 years from declaration.'
    ],
    knowledgeCheck: [
      {
        question: 'Which type of mortgage borrower means the lending is NOT regulated by MCOB, even if the property is used as a dwelling?',
        options: ['A sole trader', 'A business partnership', 'A limited liability partnership (LLP)', 'A personal representative'],
        correctIndex: 2,
        explanation: 'An LLP is a separate legal entity, like a company — mortgage lending to an LLP itself is not MCOB regulated, unlike lending to individual partners in an ordinary partnership.'
      },
      {
        question: 'Two friends take out a joint mortgage, contributing 70% and 30% of the payments respectively. If the mortgage falls into arrears, who is liable for the full debt?',
        options: ['Only the person who contributed 70%', 'Each person only for their own contribution share', 'Both — they are jointly and severally liable for the whole debt', 'Neither, until a court determines liability'],
        correctIndex: 2,
        explanation: 'Joint borrowers are always jointly and severally liable, meaning each can be pursued for the entire debt, regardless of their individual contribution.'
      }
    ],
    source: 'CeMAP 2&3, Unit 1 Topics 2&3, p.15-31'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u1-t4',
    module: 'cemap2', unitKey: 'unit1', topicKey: 't4',
    title: 'Principles of Mortgage and Property Law',
    intro: 'This topic covers the legal mechanics of mortgages (legal charges, joint ownership types), freehold vs leasehold tenure, lease extension/enfranchisement rights, and commonhold — a topic with several precise numeric rules around lease length and joint ownership.',
    sections: [
      {
        heading: 'Legal charges and multiple mortgages',
        bullets: [
          'A "mortgage by way of legal charge" is the only method used today: the borrower owns the property from the start, but the lender holds a registered legal charge giving strong rights until the loan is repaid.',
          'Second and subsequent charges rank behind the first in priority for repayment from sale proceeds — any surplus flows down the chain in order, with anything left over going to the borrower. Higher risk means second-charge lenders typically charge higher rates.'
        ]
      },
      {
        heading: 'Joint ownership types',
        bullets: [
          'Up to 4 people can be registered legal owners of a property.',
          'Joint tenancy (most common): no defined ownership ratio; each owns 100%; on death, "right of survivorship" passes the whole interest automatically to survivors — cannot be overridden by a will. All joint mortgages (regardless of ownership type) are "joint and several", so a survivor takes over the whole mortgage debt.',
          'Tenancy in common: legal title still passes to the survivor on death, BUT each owner has a defined equitable share which passes per their will/intestacy — a Land Registry restriction then prevents the sole survivor from selling until a second legal owner (e.g. the deceased\u2019s executor) is appointed.'
        ]
      },
      {
        heading: 'Freehold vs leasehold',
        bullets: [
          'Freehold ("fee simple"): the closest thing to absolute ownership, though still subject to local authority restrictions, covenants, easements and utility rights. Freehold flats are often unpopular with lenders due to disputed maintenance responsibilities between owners.',
          'Leasehold: a freeholder leases the land for a fixed term (often 99 or 999 years); the leaseholder pays ground rent to the freeholder (typically £50-£500/year historically) — but the Leasehold Reform (Ground Rent) Act 2022 caps ground rent at "one peppercorn" (effectively zero) on new long (21+ year) residential leases from 30 June 2022.',
          'At lease expiry, the property reverts to the freeholder (the "reversionary interest"). Lenders typically require 30-40 years remaining on a lease AFTER the mortgage term ends — so a 25-year mortgage on a leasehold property typically needs 55-65 years left on the lease at outset.',
          'Forfeiture: if the leaseholder breaches lease terms, the lease can be terminated and the property reverts to the freeholder — a disaster for the lender\u2019s security. Lenders protect against this via a mortgage deed clause allowing them to meet the leaseholder\u2019s obligations, or (more reliably) via insurance against forfeiture.'
        ]
      },
      {
        heading: 'Buying the freehold and extending the lease',
        bullets: [
          'Three tests to buy the freehold of a flat: Qualifying Tenant Test (original lease over 21 years), Qualifying Building Test (2+ flats, at least two-thirds on long leases, no more than a set % commercial use), and Majority Participation Test (at least 50% of leaseholders agree).',
          'The Leasehold and Freehold Reform Act 2024 reforms: standard lease extension increased from 90 to 990 years; the 2-year ownership requirement before extending removed; the non-residential floorspace limit for buying the freehold raised from 25% to 50%; new leasehold houses (not flats) banned in England/Wales except in limited circumstances.',
          'Commonhold: an alternative tenure where each leaseholder owns their flat\u2019s freehold plus a share of a "commonhold association" (a company) — requires unanimous agreement of all leaseholders and the freeholder to convert; rarely used in practice due to mortgage-availability and unanimous-agreement difficulties.'
        ]
      }
    ],
    examTraps: [
      'The 990-year figure (Leasehold and Freehold Reform Act 2024) replaced the old 90-year standard lease extension — a recently-changed figure that\u2019s an easy trap if using older notes.',
      'Lenders require 30-40 years remaining AFTER the mortgage term, not just 30-40 years remaining at outset — meaning a 25-year mortgage typically needs 55-65 years left on the lease.',
      'Under a tenancy in common, legal title still passes automatically to the survivor (like a joint tenancy) — it\u2019s only the EQUITABLE share that follows the deceased\u2019s will, a commonly confused point.'
    ],
    remember: [
      'Max 4 legal owners of a property. Joint tenancy = no defined share, survivorship. Tenancy in common = defined equitable share, passes by will.',
      'Lease extension: now 990 years (up from 90) under the 2024 Act.',
      'Lenders typically need 30-40 years left on a lease AFTER the mortgage term ends.'
    ],
    knowledgeCheck: [
      {
        question: 'Five sisters are buying a property together. How many of them can be registered as legal owners?',
        options: ['A maximum of three', 'A maximum of four', 'All five', 'None — only individuals can be sole legal owners'],
        correctIndex: 1,
        explanation: 'UK land law caps the number of registered legal owners of a property at four, even though there can be more beneficial/equitable owners.'
      },
      {
        question: 'Under the Leasehold and Freehold Reform Act 2024, what is the new standard lease extension term?',
        options: ['90 years', '99 years', '999 years', '990 years'],
        correctIndex: 3,
        explanation: 'The 2024 Act increased the standard lease extension from 90 years to 990 years for both houses and flats.'
      }
    ],
    source: 'CeMAP 2&3, Unit 1 Topic 4, p.32-41'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u1-t5',
    module: 'cemap2', unitKey: 'unit1', topicKey: 't5',
    title: 'Property and Mortgage Law (Land Registration & Lender/Borrower Rights)',
    intro: 'This topic covers the practical mechanics of land registration (the three HM Land Registry registers, classes of title), easements/covenants, matrimonial interests, and the specific rights and obligations set out in a mortgage deed.',
    sections: [
      {
        heading: 'Easements and covenants',
        bullets: [
          'An easement is a right held by one landowner over another\u2019s land (e.g. right of way, right to light) — it attaches to the LAND (not the owner) and the two plots must be close together. Rarely, an "easement by necessity" arises through encirclement.',
          'Positive covenants (what an owner MUST do, e.g. maintain a boundary) do NOT "run with the land". Restrictive covenants (what an owner must NOT do, e.g. run a business from the premises) DO run with the land, binding future owners.'
        ]
      },
      {
        heading: 'HM Land Registry\u2019s three registers',
        bullets: [
          'Property Register: title number, written description, plan of the property, and any BENEFICIAL easements (rights the property holds over other land).',
          'Proprietorship Register: name/address of the owner, and the class of title — Absolute (clear title, freehold or leasehold), Good Leasehold (leasehold title is fine but the freeholder\u2019s own title to grant it isn\u2019t fully certain — only applies to leases over 7 years), Possessory (deeds lost; can upgrade to Absolute after 10-12 years\u2019 undisputed occupation — "squatters\u2019 rights"), or Qualified (defects prevent Absolute/Good Leasehold status).',
          'Charges Register: details of all mortgages on the property, ADVERSE easements/restrictive covenants, and a non-owning spouse\u2019s Family Law Act 1996 interest (which blocks sale until removed).',
          'Registered land transfers must be registered within 30 days of completion; unregistered land needs a 15-year "good root of title" search and registration within 2 months of transfer.'
        ]
      },
      {
        heading: 'Matrimonial interests and title guarantee',
        bullets: [
          'A non-owning spouse/civil partner can register a Family Law Act interest, preventing sale until removed — lenders require a signed "consent to mortgage" form from any non-owning adult (in practice, anyone 17+) not party to the mortgage, waiving occupation rights.',
          'Full title guarantee: seller promises the property is free from undisclosed charges/encumbrances — many lenders insist on this as a condition of lending.',
          'Chancel repair liability: since October 2013, must be registered in the Charges Register to bind current/future owners; if unregistered before a sale post-Oct 2013, the liability can no longer attach to a new owner.'
        ]
      },
      {
        heading: 'Lender\u2019s rights and borrower\u2019s covenants in the mortgage deed',
        bullets: [
          'Lender\u2019s rights: enforce charges/legal remedies; call in the WHOLE debt on default/bankruptcy/compulsory purchase; insure the property if the borrower doesn\u2019t (charging the cost to the mortgage account); let a repossessed property; transfer the mortgage with consent; make further advances without a new deed.',
          'Borrower\u2019s covenants: make payments, maintain adequate insurance, comply with the law/local authority rules, not let the property without consent, keep it in good repair and allow inspection, comply with easements/covenants, and (if leasehold) comply with lease conditions — there is NO equivalent covenant to comply with "the terms of the freehold" since freehold ownership has no superior landlord conditions to meet.'
        ]
      }
    ],
    examTraps: [
      'Positive covenants do NOT run with the land; restrictive covenants DO — this is very frequently tested and easy to get backwards.',
      'Good Leasehold title only applies to leases OVER 7 years — a specific figure worth remembering.',
      'There is no borrower covenant to "comply with the terms of the freehold" — freehold ownership doesn\u2019t have a superior landlord imposing conditions the way leasehold does.'
    ],
    remember: [
      '3 registers: Property (description/plan/beneficial easements), Proprietorship (owner/class of title), Charges (mortgages/adverse easements/spousal interest).',
      'Possessory title can upgrade to Absolute after 10 years\u2019 (registered) or 12 years\u2019 (unregistered) undisputed occupation.',
      'Restrictive covenants run with the land; positive covenants do not.'
    ],
    knowledgeCheck: [
      {
        question: 'Which type of covenant "runs with the land", binding future owners?',
        options: ['A positive covenant', 'A restrictive covenant', 'Both equally', 'Neither'],
        correctIndex: 1,
        explanation: 'Restrictive covenants (stating what an owner must NOT do) run with the land; positive covenants (what an owner MUST do) do not.'
      },
      {
        question: 'Which HM Land Registry register would show details of a non-owning spouse\u2019s Family Law Act interest?',
        options: ['Property Register', 'Proprietorship Register', 'Charges Register', 'None — this isn\u2019t registered'],
        correctIndex: 2,
        explanation: 'A non-owning spouse\u2019s statutory interest is recorded in the Charges Register, alongside mortgages and adverse easements.'
      }
    ],
    source: 'CeMAP 2&3, Unit 1 Topic 5, p.42-50'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u1-t6',
    module: 'cemap2', unitKey: 'unit1', topicKey: 't6',
    title: 'Buying a Property: An Overview',
    intro: 'This topic walks through the property-buying process end to end: contract law basics, the estate agent\u2019s role and fee structures, making an offer, the mortgage offer of advance, and buying at auction — including the two very differently-structured auction methods.',
    sections: [
      {
        heading: 'Contract law and agency basics',
        bullets: [
          'A valid contract needs offer, acceptance, consideration (money from the buyer, the property from the vendor) and legal capacity (18+, sound mind, authority to act).',
          '"Caveat emptor" (buyer beware) is the general principle, but a vendor must answer any questions asked (e.g. on the TA6 Property Information Form) honestly — they don\u2019t have to research answers they don\u2019t know, but must say so.',
          'Estate agents act as agent for the VENDOR, not the buyer (though they can advise both where there\u2019s no conflict). "Actual authority" is what\u2019s agreed in their contract; acting beyond it can lead to "apparent authority" (if the vendor\u2019s own conduct implied wider authority) or "ratification" (vendor later accepts the agent\u2019s action).'
        ]
      },
      {
        heading: 'Estate agent fee structures',
        bullets: [
          'Sole selling rights: agent gets paid even if the vendor finds their own buyer (rare).',
          'Sole agency: agent has exclusive marketing rights but no fee if the vendor finds their own buyer — often the cheapest structure.',
          'Joint sole agency: two agents share the exclusive listing and split commission on sale — commission tends to be higher.',
          'Multiple agency: several agents compete, only the successful one gets paid — historically the highest fee structure, reflecting the agents\u2019 risk of getting nothing.',
          'An Energy Performance Certificate (EPC) must be commissioned before a property is marketed (though marketing can start once commissioned), rated A (efficient) to G (very inefficient), valid 10 years — it\u2019s illegal to let a property rated F or G without an exemption.'
        ]
      },
      {
        heading: 'Making an offer and the offer of advance',
        bullets: [
          'An accepted offer is not legally binding until contracts are exchanged ("subject to contract").',
          '"Gazumping": a vendor accepts a higher offer after already accepting an earlier one — unethical perhaps, but entirely legal.',
          'The mortgage "offer of advance" is not itself a contract — it\u2019s an invitation for the borrower to enter one — but it is usually binding on the LENDER (with some exceptions: knowingly false information, declining borrower status, a significant change in property value, or title issues).',
          'The offer typically includes applicant/property details, tenure, valuation figures, loan amount/term/rate/repayment method, special conditions, and the APRC. A 7-day reflection period applies (waivable by the borrower).',
          'Buildings insurance must be in place from EXCHANGE of contracts (before legal ownership transfers) since the buyer is technically liable for damage from that point. Failing to complete after exchange is a breach of contract.'
        ]
      },
      {
        heading: 'Buying at auction',
        bullets: [
          'Traditional auction: successful bidder pays a non-refundable 10% deposit on the day and exchanges contracts immediately; completion follows within 28 days. Withdrawing after this is a breach of contract — the deposit is lost, and the vendor can pursue the buyer for any shortfall on a lower resale price.',
          'A survey should be done BEFORE the auction (since there\u2019s no cooling-off period once a bid succeeds), and finance/mortgage should be arranged in advance.',
          'A legal pack (memorandum of sale, local/Land Registry searches, proof of title, lease copies if applicable) is usually prepared by the vendor\u2019s solicitor for bidders to review — though a buyer may still commission their own searches.',
          'The Modern Method of Auction (used for online auctions): buyer pays a non-refundable 5% reservation fee (not deducted from the purchase price), then has 28 days to exchange and a further 28 days to complete. If the sale fails due to the VENDOR, the 5% is refunded; if it fails due to the BUYER, the reservation fee is lost.'
        ]
      }
    ],
    workedExample: {
      title: 'Modern Method of Auction reservation fee',
      body: [
        'Esteban successfully bids on a property with a £130,000 guide price via the Modern Method of Auction.',
        'He must pay a non-refundable reservation fee of 5% of £130,000 = £6,500 on the day of the auction.',
        'This is separate from (not deducted from) the eventual purchase price, and he then has 28 days to exchange contracts and a further 28 days to complete.'
      ]
    },
    examTraps: [
      'Traditional auction: 10% deposit, paid AND exchanged on the day. Modern Method of Auction: 5% reservation fee, NOT deducted from the price, with 28 days to exchange — these two methods are frequently mixed up.',
      'The mortgage offer of advance is generally binding on the LENDER, not a two-way binding contract — a subtlety often reversed in exam questions.',
      'Buildings insurance responsibility starts at EXCHANGE of contracts, not completion — the buyer is at risk for the property before they legally own it.'
    ],
    remember: [
      'Estate agent fee structures, cheapest to typically priciest: sole agency → joint sole agency → multiple agency (roughly).',
      'Traditional auction: 10% deposit on the day, same-day exchange, complete within 28 days.',
      'Modern Method of Auction: 5% non-refundable reservation fee (not part of price), 28 days to exchange, 28 more to complete.'
    ],
    knowledgeCheck: [
      {
        question: 'What is the key difference between the traditional auction method and the Modern Method of Auction?',
        options: [
          'The traditional method has no deposit at all',
          'The traditional method requires a 10% deposit and same-day exchange; the modern method uses a 5% non-refundable reservation fee with 28 days to exchange',
          'They are identical, just under different names',
          'The modern method requires full payment on the auction day'
        ],
        correctIndex: 1,
        explanation: 'Traditional auctions require an immediate 10% deposit and same-day exchange of contracts; the Modern Method of Auction instead uses a 5% reservation fee (not part of the price) with a 28-day window to exchange contracts.'
      },
      {
        question: 'From what point must a buyer ensure buildings insurance is in place?',
        options: ['From when the mortgage offer is issued', 'From exchange of contracts', 'From completion', 'From when they move in'],
        correctIndex: 1,
        explanation: 'The buyer is technically at risk for the property from exchange of contracts (even though they don\u2019t yet legally own it), so insurance must be in place from that point.'
      }
    ],
    source: 'CeMAP 2&3, Unit 1 Topic 6, p.51-61'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u1-t7_8',
    module: 'cemap2', unitKey: 'unit1', topicKey: 't7_8',
    title: 'The Legal Side of Property Purchase',
    intro: 'This topic covers the conveyancing process from a legal perspective (fixtures vs fittings, exchange, completion), and the MCOB disclosure rules governing how mortgages are marketed, advised on, and disclosed at each stage — a rules-heavy topic with precise deadlines.',
    sections: [
      {
        heading: 'Contracts, fixtures and fittings, exchange and completion',
        bullets: [
          'Fixtures (permanent additions — nailed/screwed/plumbed in) are included in a sale by default; fittings (carpets, curtains, freestanding furniture) are not — always specify in the contract if in doubt.',
          'The vendor completes a "seller\u2019s property information form" and must answer honestly — false answers can lead to a later legal claim.',
          'Exchange of contracts is the point of mutual commitment (deposit usually paid here); completion (keys handed over) typically follows ~28 days later, though same-day exchange/completion is possible.',
          'The legal charge only takes effect AT completion, since that\u2019s when ownership actually transfers from vendor to purchaser.',
          'Post-completion: SDLT must be paid within 14 days; the new owner (and any new mortgage) is registered at the Land Registry; the solicitor bills the client for fees plus disbursements (search costs).'
        ]
      },
      {
        heading: 'Marketing mortgages (MCOB 3A)',
        bullets: [
          'Financial promotions split into real-time (visits, phone calls) and non-real-time (letters, adverts, TV) — pure firm-name adverts with no inducement to take a mortgage are exempt.',
          'Non-real-time promotions must: show the firm\u2019s contact details, include the wording "Your home may be repossessed if you do not keep up repayments on your mortgage", not disguise important terms, and show the APRC clearly if pricing info is included (a "representative" APRC means at least 51% of successful applicants would get at least that rate). Records must be kept for 12 months after last use.',
          'Real-time promotions: cold calling is NOT allowed (only existing customers who\u2019ve consented to future contact); no calls 21:00-09:00 or all day Sunday; caller must identify themselves/firm and stop if asked.'
        ]
      },
      {
        heading: 'Initial disclosure and advice levels',
        bullets: [
          'Three service levels: Unlimited (whole-of-market or a representative panel — must state clearly if direct-only deals are excluded), Limited (a smaller panel), Single lender (one lender only).',
          'Firms must list lenders offered if not unlimited, and state any product-range limitations clearly.',
          'The firm must disclose fees, when payable, and whether it receives third-party commission (e.g. a procuration fee) — and how that offsets any customer fee.',
          'For a further advance, the firm must mention alternatives (further advance, second charge, another lender, unsecured borrowing) without needing to assess their appropriateness. For a Retirement Interest-Only (RIO) mortgage, the firm must mention a lifetime mortgage may be available/more appropriate, again without a full suitability assessment being required.'
        ]
      },
      {
        heading: 'Advice vs execution-only',
        bullets: [
          'Advice must be given whenever there\u2019s interactive dialogue (face-to-face/phone) — UNLESS the customer is high net worth (£300k+ net annual income OR £3m+ net assets, or guaranteed by someone who is), a professional customer (12+ months in home finance), or a business customer, and elects execution-only.',
          'If no product is suitable, no recommendation should be made. If the firm recommends a MORE expensive product over a cheaper suitable one, it must explain why.',
          'Right-to-buy, debt-consolidation, and shared-equity customers, plus vulnerable customers generally, must receive advice initially — though they can still reject that advice and go execution-only afterward. The one exception: sale-and-rent-back customers who reject advice must simply be declined, not offered execution-only.',
          'Records: suitability information/reasoning kept 3 years from advice given; execution-only sale records kept 3 years from contract start.'
        ]
      },
      {
        heading: 'Pre-application and offer-stage disclosure',
        bullets: [
          'The European Standardised Information Sheet (ESIS) is the illustration given at recommendation, before application — for pre-March-2016 mortgages being varied, a Key Facts Illustration (KFI) is used instead. Key ESIS/KFI differences: ESIS has a 7-day reflection period and uses "APRC" terminology; KFI has no reflection period and uses "APR".',
          'If given by phone, the ESIS must be sent within 5 business days. Records of each illustration are kept for 1 year from the application date.',
          'At offer stage, if the offer differs from the original ESIS, a revised ESIS must be issued. The binding offer includes a minimum 7-day reflection period (waivable by the borrower) — records of the offer are kept for 1 year from issue.',
          'Before the first payment, the lender must disclose: payment amount/dates/collection method, confirmed insurances, over/underpayment options, repayment type (with an interest-only repayment-vehicle reminder if relevant), and arrears/difficulty guidance.'
        ]
      }
    ],
    workedExample: {
      title: 'High net worth execution-only eligibility',
      body: [
        'Rupinder and Pritti apply jointly for a mortgage and want to go execution-only as "high net worth" customers.',
        'The rule requires at least ONE of them individually to meet the £300,000 net annual income OR £3m net assets threshold — it is not a combined/joint test.',
        'If neither individually qualifies, even if their joint income/assets clear the threshold, they don\u2019t meet the high-net-worth definition.'
      ]
    },
    examTraps: [
      'The high-net-worth execution-only threshold (£300k net income / £3m net assets) applies to EACH APPLICANT INDIVIDUALLY on a joint application, not to their combined figures — a frequently tested trap.',
      'ESIS vs KFI: ESIS has a 7-day reflection period and uses "APRC"; KFI has NO reflection period and uses "APR" — these terminology and feature differences are directly tested.',
      'The legal charge for a mortgage only takes effect AT completion, not at exchange of contracts, since ownership hasn\u2019t transferred yet at exchange.'
    ],
    remember: [
      '3 advice levels: Unlimited, Limited, Single lender.',
      'Execution-only exceptions (with interactive dialogue): high net worth, professional customer (12+ months in home finance), business customer.',
      'Reflection period: minimum 7 days on a binding mortgage offer, waivable by the borrower.'
    ],
    knowledgeCheck: [
      {
        question: 'When arranging a mortgage, at which point does the legal charge take effect?',
        options: ['Before exchange of contracts', 'On exchange of contracts', 'On completion', 'After completion'],
        correctIndex: 2,
        explanation: 'The legal charge takes effect at completion, the point at which ownership actually transfers from vendor to purchaser.'
      },
      {
        question: 'What is the minimum net annual income (individually) for an applicant to be classed as "high net worth" for execution-only purposes?',
        options: ['£100,000', '£200,000', '£300,000', '£500,000'],
        correctIndex: 2,
        explanation: 'The high net worth threshold is £300,000 net annual income (or £3m net assets), applied to each applicant individually, even on a joint application.'
      }
    ],
    source: 'CeMAP 2&3, Unit 1 Topics 7&8, p.62-77'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u1-t9_10',
    module: 'cemap2', unitKey: 'unit1', topicKey: 't9_10',
    title: 'The Role of the Mortgage Adviser & Assessing Financial Status',
    intro: 'This topic covers the adviser\u2019s role in the advice process, ethical advice principles (TCF/Consumer Duty), and — the calculation-heavy core — how lenders assess affordability for employed and self-employed applicants, including the interest rate stress test.',
    sections: [
      {
        heading: 'The advice process and ethical advice',
        bullets: [
          'Fact-find covers purchase price, term, income/expenditure, deposit, rate attitude, protection needs, risk attitude, fees.',
          'Treating Customers Fairly (TCF) / Consumer Duty: advisers must recommend what\u2019s best for the CUSTOMER, use plain language, and explain why a more expensive (non-cheapest) mortgage was recommended if applicable.',
          'Consumer Duty (in force from 31 July 2023): one consumer principle ("act to deliver good outcomes for retail customers"), 3 cross-cutting obligations (good faith, avoid foreseeable harm, support financial objectives), and 4 outcomes (communications, products/services fit for purpose, customer service with no unreasonable barriers to switching/complaining, and fair-value pricing).'
        ]
      },
      {
        heading: 'Assessing income — employed applicants',
        bullets: [
          'At least 2 pieces of ID and a 3-year address history are usually required; illegal to discriminate on nationality/race.',
          'Income evidence: latest payslip for basic salary/guaranteed allowances; several months\u2019 payslips for overtime/commission; quarterly bonus payslips or award letters; self-assessment calculation. An acceptable employer reference must be an original, recently dated, and unambiguous about permanence and income.',
          'Additional income considered: car/location/shift allowances, overtime, commission, bonuses — lenders judge the STABILITY/LONGEVITY of this before counting it (often averaged over 3 years).',
          'Maintenance/child maintenance income is only counted if backed by a court order with a suitable remaining term (e.g. 5+ years).',
          'Self-certification (self-declared, unverified income) mortgages are no longer permitted — all income needs independent evidence.'
        ]
      },
      {
        heading: 'Assessing income — self-employed and directors',
        bullets: [
          'Self-employed (sole trader) applicants provide 2-3 years of accounts: Profit & Loss (Turnover − Variable Costs = Gross Profit; Gross Profit − Routine Expenses = Net Profit before tax) and a Balance Sheet (assets/liabilities at year-end, including capital injected/personal drawings). NET PROFIT BEFORE TAX is the figure lenders use for affordability.',
          'Partnership profits are split equally between partners unless the partnership agreement says otherwise. No P60s exist for the self-employed — HMRC tax calculations or an accountant\u2019s certificate are used to corroborate figures instead.',
          'A director owning more than 20-25% of a business is treated as self-employed for mortgage purposes. Lenders typically look at salary plus dividends (some also allow a share of retained profit) over 2-3 years. A Director\u2019s Loan Account in credit (company owes the director) is viewed favourably and allows tax-free withdrawals.'
        ]
      },
      {
        heading: 'Affordability, free disposable income, and the interest rate stress test',
        bullets: [
          'Affordability rules (from 2014) require independently-evidenced income (payslips/bank statements) — assessed against the applicant\u2019s FREE DISPOSABLE INCOME (income left after committed expenditure, basic essential expenditure, and other basic quality-of-life expenditure).',
          'Committed expenditure needs exact figures; essential/quality-of-life expenditure can use actual figures or statistical data (e.g. ONS-based figures). Some lenders cap mortgage payments at 80-85% of free disposable income.',
          'Interest rate stress test: lenders must check affordability if rates rise over the next 5 years — required for variable-rate and fixed-rate deals under 5 years (so 2 and 3-year fixes are stress-tested; a 5+ year fixed rate mortgage does NOT need stress testing).',
          'Where there\u2019s a reversion rate (e.g. SVR after a fix ends), stress testing uses the REVERSION rate as the base, not the initial fixed rate — using market expectations and the Financial Policy Committee\u2019s recommendation, with a MINIMUM +1% applied even if market expectations suggest less.',
          'Loan-to-Income (LTI) flow limit (PRA, 2014): lenders can only allow a maximum of 15% of new residential mortgages to exceed 4.5× the borrower(s)\u2019 income — applies to new first-charge mortgages, including remortgages with additional borrowing.'
        ]
      },
      {
        heading: 'Mortgage prisoners and proportionate affordability',
        bullets: [
          'Existing borrowers making no material change (same lender, no extra borrowing, same term) can have a full affordability re-assessment waived by their current lender.',
          'The FCA also allows a "proportionate affordability assessment" for switching to a NEW lender with no extra borrowing, if the borrower has been up to date for 12+ months — the new lender can then waive full income/expenditure checks and the future-rate-rise assessment (though a lender choosing to offer this must apply it consistently to all similarly-placed borrowers).'
        ]
      }
    ],
    workedExample: {
      title: 'Free disposable income and stress test calculations',
      body: [
        'Free disposable income: Stuart & Anna have £3,000 joint net monthly income, £200 committed expenditure (loan), and the lender uses £715/month (couple) + £121 per dependant (×2) = £1,157 total expenditure.',
        'Free disposable income = £3,000 − £1,157 = £1,843. At an 85% cap, maximum mortgage spend = £1,843 × 85% = £1,566/month.',
        'Stress test: if SVR is 4.5% and market expectations suggest a 2% rise, the stress rate = 4.5% + 2% = 6.5%. If market expectations suggest only 0.5%, the minimum +1% floor applies instead, giving 4.5% + 1% = 5.5%.'
      ]
    },
    examTraps: [
      'The interest rate stress test uses the REVERSION rate (e.g. SVR) as its base for short fixed-rate deals, not the initial fixed rate — a frequently reversed detail.',
      'A minimum +1% stress addition applies even if market expectations suggest a smaller rise — don\u2019t just use the raw market-implied figure if it\u2019s under 1%.',
      'Net Profit BEFORE tax (not after tax, and not turnover or drawings) is the figure lenders use for self-employed affordability.'
    ],
    remember: [
      'P&L: Turnover − Variable Costs = Gross Profit; Gross Profit − Routine Expenses = Net Profit before tax (the affordability figure).',
      'Stress test required for variable rate and fixed rates under 5 years; not required for 5+ year fixes.',
      'LTI flow limit: max 15% of new mortgages can exceed 4.5× income.'
    ],
    knowledgeCheck: [
      {
        question: 'What figure do lenders normally use when assessing a self-employed applicant\u2019s affordability?',
        options: ['Turnover', 'Personal drawings from the business', 'Net profit after tax', 'Net profit before tax'],
        correctIndex: 3,
        explanation: 'Lenders use the Net Profit BEFORE tax figure from the Profit & Loss account to assess self-employed affordability.'
      },
      {
        question: 'A borrower has a 3-year fixed rate at 3%; the SVR is 4.5% and market expectations suggest only a 0.5% rate rise. What minimum rate must the lender use for the stress test?',
        options: ['3.5%', '4.5%', '5%', '5.5%'],
        correctIndex: 3,
        explanation: 'The stress test is based on the reversion rate (4.5% SVR) plus the higher of market expectations or the 1% minimum floor: 4.5% + 1% = 5.5%.'
      }
    ],
    source: 'CeMAP 2&3, Unit 1 Topics 9&10, p.78-91'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u1-t11_12',
    module: 'cemap2', unitKey: 'unit1', topicKey: 't11_12',
    title: 'Credit Status & Suitability',
    intro: 'This topic covers how lenders assess creditworthiness (bank statements, credit searches, guarantors), the legal/insolvency issues affecting eligibility, and mortgage suitability principles (term, repayment method, attitude to risk) — combining hard rules with judgement-based suitability concepts.',
    sections: [
      {
        heading: 'Credit assessment',
        bullets: [
          'Bank statements reveal surplus/deficit, income regularity, regular payments out, overdrafts, failed direct debits, and mortgage payment history — but NOT pending court hearings or undrawn borrowings.',
          'Credit searches (Equifax, Experian) reveal defaults, CCJs, bankruptcies. A default shows on the credit record for 6 years even if later paid off. Payday loans may not always show up due to their short-term nature, but their existence signals poor money management.',
          'A CCJ stays on the credit file for 6 years unless paid in full within a month of the judgment; knowingly concealing a CCJ on an application is an offence.'
        ]
      },
      {
        heading: 'Guarantors',
        bullets: [
          'A guarantor makes a contractual commitment to repay if the borrower defaults (Statute of Frauds Act 1677) — full guarantee (liable for the whole debt) or limited guarantee (liable for a set percentage only).',
          'Lenders must advise guarantors to seek independent legal advice — failing to do so risks the guarantee being deemed invalid. Since recent MCOB updates, lenders must also assess the GUARANTOR\u2019S OWN affordability if called upon.',
          'A guarantee can be invalidated by: lack of capacity, undue influence/pressure, misrepresentation, misapprehension, mistake, or duress — though lenders will often dispute such claims.',
          'The guarantor has no property interest, no right to inspect mortgage documents, and isn\u2019t automatically told about missed payments — but MUST be informed (and can refuse consent) if the borrower requests a further advance or term extension.',
          'A guarantor mortgage often involves the guarantor depositing cash as security (still earning interest) rather than a personal guarantee alone. A "joint borrower, sole proprietor" mortgage lets a family member\u2019s income support affordability without them having any ownership stake — useful for SDLT purposes (the sole owner can still claim first-time buyer relief; the family member avoids the additional-property SDLT surcharge since they own nothing).'
        ]
      },
      {
        heading: 'Insolvency, fraud and AML',
        bullets: [
          'Undischarged bankrupts can\u2019t borrow over £500 without disclosure and are legally barred from a new mortgage; bankruptcy lasts up to 1 year. Where only one spouse is bankrupt, a forced sale can be delayed at least a year to allow alternative arrangements.',
          'An IVA does NOT legally prevent a mortgage application (though it\u2019s still seen as higher risk) — needs 75%+ of aggregate debt value agreement from creditors to set up. A CVA is the company equivalent.',
          'Debt Relief Orders (DROs): for debts up to £50,000, assets up to £2,000, disposable income up to £75/month — a 12-month protection period, after which debts are written off if terms are met. DRO holders are very unlikely to be mortgage-eligible.',
          'Mortgage fraud (Fraud Act 2006) can be prosecuted regardless of whether the mortgage was actually granted; the loan itself is then treated as proceeds of crime (Proceeds of Crime Act 2002).'
        ]
      },
      {
        heading: 'Mortgage suitability',
        bullets: [
          'No recommendation should be made if nothing is suitable. A sub-prime mortgage can only be recommended to a good-credit client if the adviser can show it doesn\u2019t disadvantage them.',
          'Term: generally the SHORTEST appropriate term, balanced against affordability of higher monthly payments and affordability into retirement.',
          'Interest-only: affordability can be assessed on an interest-only basis if there\u2019s a credible repayment vehicle (defined investments, downsizing, using bonuses) — NOT speculative strategies like house price inflation or hoped-for inheritance. Lenders must contact the borrower at least once during the term to check progress, and keep records of the repayment strategy evidence. RIO mortgages don\u2019t need a credible repayment vehicle assessed, just ongoing affordability of interest payments.',
          'Risks to flag: repayment risk (interest-only shortfall or missed payments), the home being at risk generally, interest rate risk (variable rates), fixed-rate risk (missing out if rates fall), and investment-vehicle risk (underperformance leaving a shortfall).'
        ]
      }
    ],
    examTraps: [
      'A LIMITED guarantee makes the guarantor liable only for a set PERCENTAGE of the debt — a FULL guarantee makes them liable for the WHOLE debt; these are easily confused.',
      'An IVA does NOT prevent a mortgage application (though it\u2019s a risk flag) — undischarged bankruptcy DOES legally prevent one. Don\u2019t conflate the two insolvency routes.',
      'Credible interest-only repayment strategies exclude speculative ones (house price inflation, inheritance) — a frequently tested distinction from Topic 4 Part 1 in CeMAP 1 that reappears here in a mortgage-specific context.'
    ],
    remember: [
      'Default stays on credit record 6 years even if paid off. CCJ stays 6 years unless paid within 1 month.',
      'DRO: debts ≤£50,000, assets ≤£2,000, disposable income ≤£75/month, 12-month protection.',
      'IVA needs 75%+ creditor agreement by debt value; does not prevent a mortgage application.'
    ],
    knowledgeCheck: [
      {
        question: 'What is the key difference between a full guarantee and a limited guarantee?',
        options: [
          'A full guarantee only lasts a limited time; a limited guarantee lasts forever',
          'A full guarantee makes the guarantor liable for the whole debt; a limited guarantee only for a set percentage',
          'There is no meaningful difference between them',
          'A limited guarantee requires a cash deposit; a full guarantee does not'
        ],
        correctIndex: 1,
        explanation: 'A full guarantee covers the entire debt if the borrower defaults; a limited guarantee caps the guarantor\u2019s liability at an agreed percentage.'
      },
      {
        question: 'Which of these would NOT be considered a credible repayment strategy for an interest-only mortgage?',
        options: ['Downsizing', 'A stocks and shares ISA', 'A potential future inheritance', 'Using annual bonuses to make partial capital repayments'],
        correctIndex: 2,
        explanation: 'A hoped-for inheritance is a speculative strategy, not a credible, evidenced repayment vehicle.'
      }
    ],
    source: 'CeMAP 2&3, Unit 1 Topics 11&12, p.92-104'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u1-t13_14',
    module: 'cemap2', unitKey: 'unit1', topicKey: 't13_14',
    title: 'Property Assessment, Valuations & Surveys',
    intro: 'This topic covers what affects a property\u2019s mortgageability and value (lease length, construction type, flooding, BTL yield), and the different valuation/survey options available — including the "marriage value" calculation and NHBC-style new-build warranties.',
    sections: [
      {
        heading: 'Lease length, marriage value, and construction issues',
        bullets: [
          'Lenders typically need 30-40 years remaining on a lease AFTER the mortgage term ends. If a lease has under 80 years remaining, extending it triggers a "marriage value" premium (the freeholder gets 50% of the value uplift from extension) — there is NO marriage value if 80+ years remain, so sellers are advised to extend before marketing a short-lease property.',
          'Non-traditional construction (e.g. prefabricated reinforced concrete, PRC) and former local authority high-rise flats are often declined by lenders due to durability/height concerns.',
          'Post-Grenfell, buildings with cladding concerns need an EWS1 form (valid 5 years) assessing external wall fire risk — Option A (low combustibility risk) or Option B1/B2 (combustible materials present, remedial work needed or not) — lenders use this to judge security adequacy.'
        ]
      },
      {
        heading: 'Other value factors',
        bullets: [
          'Retirement properties (age-restricted, high service charges) and mixed residential/commercial properties (e.g. flat above a shop) can be harder to mortgage or value lower due to resale difficulty/noise concerns.',
          'Vendors must disclose known neighbour disputes even if resolved — failure to do so risks later legal liability.',
          'Flood Re (2016-2039): a reinsurance scheme subsidised by an insurer levy, capping flood insurance premiums for at-risk residential properties built before January 2009 with a council tax band — insurers can still add the Flood Re premium cost and increase the excess.',
          'BTL yield: Gross yield = annual rent ÷ purchase price × 100. Net yield = (annual rent − running costs) ÷ purchase price × 100 — net yield is the more accurate return measure.'
        ]
      },
      {
        heading: 'Basic valuation',
        bullets: [
          'A superficial, lender-focused inspection (from ~£175) — the contract is between LENDER and valuer, so the borrower has very limited negligence claim rights (only if the valuation was 5-10%+ inaccurate AND either the borrower was inexperienced or the standard disclaimer was insufficiently prominent).',
          'Includes: property details, essential VISIBLE repairs, subsidence/heave evidence, mortgage valuation, insurance reinstatement value, and a disclaimer as to purchase-price reasonableness.',
          'Outcomes: Accept, Decline, reduced loan (if valued below purchase price), or Conditional Acceptance via an Undertaking (borrower promises repairs within 3-6 months, typically cosmetic — e.g. redecoration) or a Retention (lender holds back funds until a more serious/structural issue is fixed, e.g. roof repairs, dry rot).'
        ]
      },
      {
        heading: 'RICS Home Survey levels 1-3',
        bullets: [
          'Level 1 (£300-£900, "Condition Report"): for newer, conventional properties — condition-only ratings (1 = no issues, 2 = non-urgent, 3 = serious, R = documents needed) — no valuation figure included.',
          'Level 2 (£400-£1,000, "HomeBuyer Report"): mid-range — visual inspection of gas/electric/sewers (no specialist tests), can include a professional valuation and reinstatement figure — contract is between surveyor and applicant.',
          'Level 3 (£600-£1,500+, "Building Survey"): thorough inspection for older/unusual/larger properties — most likely to uncover major defects (electrical, drains, damp) — borrower has a legal claim against the surveyor if a defect is missed. Advisers should NOT recommend which survey level to choose (to avoid negligence liability) — just explain the options.'
        ]
      },
      {
        heading: 'New-build warranties',
        bullets: [
          'NHBC Buildmark: 2 years of builder-defect cover (claims to builder first, then NHBC arbitration) PLUS a further 8 years of structural-defect insurance above a Minimum Claim Value (claims direct to NHBC).',
          'Non-NHBC builders often require a supervising architect with at least £1m indemnity cover. Other schemes: Premier Guarantee, Local Authority Building Control, and the newer New Homes Quality Board (NHQB) with its New Homes Ombudsman Service — registration with NHQB is voluntary, and some builders use both NHQB and NHBC.'
        ]
      }
    ],
    workedExample: {
      title: 'Gross vs net rental yield',
      body: [
        'A BTL property costs £132,000, earns £6,916/year rent, with £600/year running costs.',
        'Gross yield = £6,916 ÷ £132,000 × 100 = 5.24%.',
        'Net yield = (£6,916 − £600) ÷ £132,000 × 100 = 4.78% — the more accurate figure for assessing true investment return.'
      ]
    },
    examTraps: [
      'Marriage value ONLY applies below 80 years remaining on a lease — above 80 years, there\u2019s no marriage value premium to extend, a specific threshold worth remembering exactly.',
      'A basic valuation contract is between the LENDER and the valuer — the borrower pays for it but has very limited standing to sue for negligence, unlike a RICS Level 2/3 survey (contract is between surveyor and applicant/borrower).',
      'An Undertaking (minor, cosmetic issues, borrower promises to fix) is very different from a Retention (serious/structural issues, lender withholds funds) — commonly mixed up.'
    ],
    remember: [
      'Marriage value: freeholder gets 50% of the uplift; only applies if lease has under 80 years remaining.',
      'RICS levels: 1 (condition only, no valuation), 2 (mid-range, optional valuation), 3 (thorough, most likely to catch major defects, borrower can sue surveyor).',
      'Net yield = (rent − running costs) ÷ purchase price × 100 — the more accurate BTL return measure.'
    ],
    knowledgeCheck: [
      {
        question: 'Byron must pay a "marriage value" to extend his lease. What does this tell us?',
        options: [
          'His lease must have at least 80 years remaining',
          'The marriage value reduces as the lease term reduces',
          'The freeholder is entitled to 50% of the marriage value',
          'The value is fixed by government tables, not negotiation'
        ],
        correctIndex: 2,
        explanation: 'Marriage value only applies below 80 years remaining, and the freeholder is entitled to 50% of the value uplift created by extending the lease.'
      },
      {
        question: 'Whose contract is created when a basic valuation is commissioned?',
        options: ['Borrower and valuer', 'Lender and valuer', 'Borrower and lender', 'Estate agent and valuer'],
        correctIndex: 1,
        explanation: 'The basic valuation contract is between the lender and the valuer, even though the borrower pays for it — this limits the borrower\u2019s ability to sue for negligence.'
      }
    ],
    source: 'CeMAP 2&3, Unit 1 Topics 13&14, p.105-120'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u1-t15',
    module: 'cemap2', unitKey: 'unit1', topicKey: 't15',
    title: 'Other Factors Affecting the Lending Decision',
    intro: 'This topic covers planning permission/building regulations, listed buildings, higher lending charges and MIG insurance, mortgage-related fees, and Stamp Duty Land Tax (SDLT) rules — a fact-and-figure-dense topic that rewards precise recall of thresholds.',
    sections: [
      {
        heading: 'Planning permission and building regulations',
        bullets: [
          '"Permitted development" (no planning permission needed) covers many standard extensions/conversions within size/height limits — e.g. single-storey rear extensions up to 8m (detached) or 6m (other properties) from the original wall.',
          'Planning permission IS typically needed for: new builds, converting/changing a building\u2019s use (e.g. barn conversion), dividing a property into separate homes, or work breaching existing permission.',
          'Building regulations cover health/safety and energy efficiency (loft conversions, extensions, wall changes, underpinning, cavity insulation) — exempt: garden walls, small detached garages/carports under 30 sq m.',
          'Listed buildings (Grade 1 exceptional, Grade 2* particularly important, Grade 2 special interest — 94% of listings) need consent to demolish or alter in ways affecting character; Grade 1/2* changes typically involve Historic England (English Heritage)/CADW in Wales.'
        ]
      },
      {
        heading: 'Higher Lending Charge (HLC) and Mortgage Indemnity Guarantee (MIG)',
        bullets: [
          'LTV = (Loan ÷ Value) × 100. Lenders rarely lend above 90-95% LTV in the first-charge market.',
          'An HLC may apply above a lender-set LTV threshold (often 80%) — calculated on the portion of the loan ABOVE that threshold, applied as a percentage charge, payable upfront or added to the loan.',
          'A MIG is a single-premium policy the LENDER buys (protecting only the lender, not the borrower) against shortfall on repossession sale. If the insurer pays the lender, it can use "subrogation" rights to sue the borrower for the amount paid — within 6 years of settling the claim. ABI guidelines allow the insurer to impose a 20% excess on any claim, which the lender can then also pursue the borrower for (informing them within 6 years of the property sale).'
        ]
      },
      {
        heading: 'Mortgage-related fees',
        bullets: [
          'Product fee: for special deals (e.g. fixed rates); may be refundable if the deal falls through beyond either party\u2019s control.',
          'Application fee: covers processing (sometimes includes a basic valuation). Broker/adviser fee: must be clearly disclosed. Procuration fee: paid by the LENDER to the broker.',
          'Legal fees BEFORE exchange (all non-refundable): Local Authority/Land Charges searches (LLC1 + CON29 — CON29 covers planning/road development/compulsory purchase issues), Land Registry search, environmental search (flooding/mining/radon), drainage search, bankruptcy search.',
          'Legal fees ON/AFTER completion: Land Registry registration fee (scales with price, e.g. ~£40 for £80,000 up to ~£910 for £1m — 50% cheaper via the online portal).'
        ]
      },
      {
        heading: 'Stamp Duty Land Tax (England & N. Ireland) — principles',
        bullets: [
          'Standard SDLT is charged in tiered bands (0% on the lowest band, rising through the price) — payable by the purchaser within 14 days of completion. Scotland and Wales have their own separate property taxes (LBTT and LTT respectively).',
          'First-time buyers get a higher 0% threshold on the lowest band, with both/all joint owners needing to qualify. A "major interest" for FTB purposes means being the person the property is intended to benefit.',
          'Buy-to-let/second homes (£40,000+) attract an extra SDLT surcharge — but a joint owner\u2019s share must itself exceed £40,000 to count as a "major interest" triggering the surcharge (so equal joint ownership of a cheap enough property can escape it).',
          'Surcharge refund: if you buy a new main home before selling your old one, you can reclaim the surcharge if the old home sells within 36 months. HMRC treats married couples/civil partners living together as ONE unit for SDLT purposes, so a spouse\u2019s separate purchase can still trigger the surcharge if the couple jointly "own" another property.'
        ]
      }
    ],
    workedExample: {
      title: 'Higher lending charge calculation',
      body: [
        'A borrower wants £144,000 on a property valued at £160,000 (purchase price £168,000); the lender charges an HLC at 4.5% above 80% LTV.',
        'Step 1 — HLC threshold: £160,000 × 80% = £128,000.',
        'Step 2 — Excess over threshold: £144,000 − £128,000 = £16,000.',
        'Step 3 — HLC charge: £16,000 × 4.5% = £720 (payable upfront or added to the loan).'
      ]
    },
    examTraps: [
      'The MIG only protects the LENDER, never the borrower — and the insurer can still pursue the borrower via subrogation for what it paid out, so a MIG is not a safety net for the borrower at all.',
      'The high-net-worth-style SDLT surcharge "major interest" threshold is that a joint owner\u2019s OWN SHARE must exceed £40,000 — an equal joint share of a property worth under £80,000 total wouldn\u2019t trigger it for either owner.',
      'The HLC is calculated only on the loan amount ABOVE the lender\u2019s LTV threshold, not on the whole loan — a common calculation-question trap.'
    ],
    remember: [
      'LTV = (Loan ÷ Value) × 100. Lenders rarely exceed 90-95% LTV.',
      'MIG protects the lender only; insurer can sue the borrower via subrogation within 6 years.',
      'SDLT payable within 14 days of completion; England/NI only — Scotland (LBTT) and Wales (LTT) differ.'
    ],
    knowledgeCheck: [
      {
        question: 'A mortgage indemnity guarantee (MIG) policy is a contract between the:',
        options: ['Borrower and the insurer', 'Borrower and the lender', 'Borrower, the lender and the insurer', 'Insurer and the lender'],
        correctIndex: 3,
        explanation: 'A MIG is purely a contract between the lender and the insurer — it protects the lender only, even though the borrower may ultimately be pursued by the insurer through subrogation.'
      },
      {
        question: 'What is the LTV on a £180,000 mortgage against a £200,000 property valuation?',
        options: ['80%', '85%', '90%', '95%'],
        correctIndex: 2,
        explanation: 'LTV = (£180,000 ÷ £200,000) × 100 = 90%.'
      }
    ],
    source: 'CeMAP 2&3, Unit 1 Topic 15, p.121-134'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u2-t2',
    module: 'cemap2', unitKey: 'unit2', topicKey: 't2',
    title: 'Repayment Vehicles for Interest-Only Mortgages',
    intro: 'This topic covers the products used to repay an interest-only mortgage: endowments (now rare but still tested), ISAs, and pension mortgages — heavy on product-type distinctions and the tax/access rules around pensions.',
    sections: [
      {
        heading: 'Endowments',
        bullets: [
          'An endowment combines life assurance (guaranteed payout on death within the term) with an investment element (targeting a maturity value to clear the mortgage) — pensions/ISAs, by contrast, need separate life cover arranged (usually level term).',
          'Full With-Profits: Guaranteed Sum Assured (GSA) equals the full mortgage amount — guaranteed to clear the debt, plus potential bonuses on top, but very expensive.',
          'Low-Cost With-Profits (LCE): GSA starts at only around half the mortgage; bonuses are needed to reach the full target by maturity — NOT guaranteed to clear the mortgage in full. As the fund grows, the "at risk" amount shrinks, so the life cover element effectively works like decreasing term assurance. A "low start" variant has premiums starting low and rising 20%/year for 5 years (doubling by year 5), making it cheaper early but MORE expensive overall from year 6.',
          'Bonuses: Reversionary/annual bonuses (not guaranteed, but once added can\u2019t be removed) and Terminal bonuses (not guaranteed, paid only on death/maturity — on an LCE, whether the terminal bonus is paid determines whether the mortgage gets fully cleared).',
          'Unit-Linked: the only endowment type that is NOT "with profits" — no guaranteed sum assured, no bonuses, premiums buy units directly, value tracks the market (higher risk AND higher potential reward). Flexible maturity date (can repay early or extend) — unlike With-Profits plans, which have a FIXED maturity date and fixed payments that cannot be changed.',
          'Unitised With-Profits: combines With-Profits security (minimum guaranteed sum assured) with the ability to switch between unit-linked funds — switches or early encashment can incur a Market Value Adjuster (MVA) penalty.',
          'Endowment shortfall actions: switch part of the mortgage to repayment ("part and part"), overpay/repay early, convert fully to repayment (guarantees clearance but raises payments significantly), build separate savings, or extend the endowment/mortgage term (needs provider AND lender permission, only possible on unit-linked policies).'
        ]
      },
      {
        heading: 'ISAs as a repayment vehicle',
        bullets: [
          'Annual ISA allowance: currently £20,000, split however you like between cash and stocks & shares (or other ISA types) — no cap on total value held. Can be used to invest in stocks/shares, bonds, unit trusts, OEICs, gilts, and life assurance-based investments.',
          'Only ONE person per ISA — joint ISAs don\u2019t exist. Must be 18+ and UK resident. A "flexible" ISA (since 2016) allows withdrawing and replacing cash in the same tax year without it counting twice against the annual limit.',
          'Help to Buy ISA: closed to new accounts since Nov 2019 (existing accounts can keep contributing until Nov 2029, claim bonus by Dec 2030) — cash-only, 25% government bonus (min £400, max £3,000 bonus), paid only on completion of a property purchase (up to £450k London / £250k elsewhere).',
          'Lifetime ISA (from April 2017): open between ages 18-39, for a first home (up to £450,000) or retirement (from age 60). 25% government bonus on contributions up to £4,000/year (max £1,000 bonus/year), available until age 50. A 25% penalty applies for withdrawals outside the permitted reasons (first home, age 60, terminal illness) — this recovers the bonus PLUS an extra 5%.',
          'ISA disadvantages as a repayment vehicle: no guarantee of sufficient value at maturity, no built-in life cover, and risk exposure equal to the underlying investment.'
        ]
      },
      {
        heading: 'Pension mortgages',
        bullets: [
          'Personal pensions/stakeholder pensions available to anyone under 75 (including children). Contributions get tax relief: basic-rate relief (20%) is added automatically (a £100 contribution costs £80); higher-rate (40%) and additional-rate (45%) taxpayers reclaim the extra relief via self-assessment.',
          'Contribution limit for tax relief: greater of £3,600 or earned income, subject to the annual allowance.',
          'Up to 25% of the fund can be taken as tax-free cash (the Pension Commencement Lump Sum, PCLS) — typically used to repay the interest-only mortgage. This means the total pension fund needs to be AT LEAST 4× the mortgage balance for the 25% tax-free cash alone to clear it.',
          'Benefits can be accessed from age 55 (rising to 57 by 2028), whether or not the person has actually retired.',
          'Flexi-access drawdown (FAD): take 25% tax-free, then draw a taxable income from the rest as needed (no min/max) — usually the most efficient way to raise extra funds beyond the 25% tax-free cash to clear a mortgage shortfall, since further withdrawals (taxed at marginal rate) can top up what\u2019s needed.',
          'Annuity: take 25% tax-free, use the rest to buy a guaranteed taxable income for life (can include a spousal/dependant continuation, e.g. 50%).',
          'Death benefits: before age 75 — fund passes to beneficiaries tax-free (lump sum, income, or annuity). After age 75 — same options, but all taxed at the beneficiary\u2019s marginal rate.',
          'Disadvantages: no guarantee of final fund value, funds locked away until at least 55, tax charges if over 25% is taken as a lump sum, contribution limits, no built-in life cover.'
        ]
      }
    ],
    workedExample: {
      title: 'Pension tax-free cash to clear a mortgage',
      body: [
        'John has a £175,000 interest-only mortgage and a £600,000 pension fund at age 55.',
        '25% PCLS = £600,000 × 25% = £150,000 tax-free.',
        'He still needs £25,000 more — he takes this via flexi-access drawdown, taxed at his marginal rate, to fully clear the £175,000 mortgage.'
      ]
    },
    examTraps: [
      'Only Unit-Linked endowments have a FLEXIBLE maturity date — all With-Profits endowments (Full, Low-Cost, Unitised) have a FIXED maturity date and fixed payments.',
      'A pension needs to be roughly 4× the mortgage balance for the 25% tax-free cash ALONE to clear it — don\u2019t assume any pension size will do.',
      'Joint ISAs do not exist — an ISA can only ever be held in one person\u2019s name, unlike a joint mortgage or joint endowment.'
    ],
    remember: [
      'GSA on Full endowment = full mortgage amount (guaranteed). GSA on Low-Cost endowment = roughly half (relies on bonuses for the rest).',
      'Lifetime ISA: 25% bonus, max £4,000/year contribution, ages 18-39 to open, use before 50 for the bonus.',
      'PCLS: up to 25% of a pension fund tax-free — fund needs to be ~4× the mortgage to clear it from tax-free cash alone.'
    ],
    knowledgeCheck: [
      {
        question: 'Which endowment type does NOT have a fixed maturity date?',
        options: ['Full With-Profits', 'Low-Cost With-Profits', 'Unit-Linked', 'Unitised With-Profits'],
        correctIndex: 2,
        explanation: 'Unit-linked endowments are the only type that isn\u2019t a "with profits" plan and offer a flexible maturity date, unlike the fixed dates/payments of all With-Profits variants.'
      },
      {
        question: 'What proportion of a pension fund can typically be taken as tax-free cash to repay a mortgage?',
        options: ['10%', '25%', '50%', '100%'],
        correctIndex: 1,
        explanation: 'Up to 25% of a pension fund can be taken as a tax-free Pension Commencement Lump Sum.'
      }
    ],
    source: 'CeMAP 2&3, MRT2 Topic 2, p.145-158'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u2-t3',
    module: 'cemap2', unitKey: 'unit2', topicKey: 't3',
    title: 'Interest Rate Options',
    intro: 'This topic covers the main mortgage rate structures (SVR, discount, fixed, capped, tracker) plus flexible and offset features — a product-comparison-heavy topic where knowing exactly which risk each structure removes (or doesn\u2019t) is key.',
    sections: [
      {
        heading: 'The main rate types',
        bullets: [
          'Standard Variable Rate (SVR): the lender\u2019s own default rate, varies at the lender\u2019s discretion (loosely tracks the base rate but not automatically); simple, usually no arrangement fee, unlikely to have an ERC, but no portability.',
          'Discounted rate: a discount off SVR for a set period (e.g. SVR −1% for 2 years) — still moves with SVR, so it\u2019s still variable; ERCs usually apply during the discount period; reverts to full SVR afterward (always an increase). Can be "stepped" (bigger discount early, smaller later).',
          'Fixed rate: rate locked for a set period (2/3/5+ years) — budgeting certainty, appeals to those expecting rate rises; usually allows up to ~10% overpayment without ERC; ERCs typically apply during the fixed period (rarely, an "overhang" ERC applies briefly after); reverts to SVR at the end.',
          'Capped rate: SVR-based but with a ceiling the rate can\u2019t exceed — benefits from SVR falls, protected against SVR rises above the cap; may also have a "collar" (a floor the rate can\u2019t fall below).',
          'Base Rate Tracker: moves directly with the Bank of England Base Rate (reviewed by the MPC, 8 times/year) at a set margin (e.g. Base Rate + 0.75% for the "lifetime" of the deal).'
        ]
      },
      {
        heading: 'Flexible and offset mortgages',
        bullets: [
          'Flexible mortgage features: overpay/underpay freely, payment holidays (usually only if previously overpaid to build "credit"), daily interest calculation, portability, sometimes a "borrow back" facility to re-draw past overpayments.',
          'Offset: a savings account linked to (but legally separate from) the mortgage — by waiving interest on savings, the saver only pays mortgage interest on the NET balance (mortgage minus savings). The borrower can choose to reduce monthly payments OR keep payments the same and shorten the term instead.',
          'Product incentives: free valuation/legal fees, free insurance for a period, cashback (may require repayment/"clawback" if redeemed early), and portability (moving the deal to a new property, usually ERC-free unless borrowing less, in which case an ERC may apply to the reduced portion).'
        ]
      }
    ],
    workedExample: {
      title: 'Offset mortgage interest calculation',
      body: [
        'A borrower has a £100,000 mortgage and £15,000 in a linked offset savings account (interest waived).',
        'Interest is charged only on the net balance: £100,000 − £15,000 = £85,000.',
        'The borrower can use the resulting payment surplus to either reduce their monthly payment or keep paying the same amount and shorten the mortgage term.'
      ]
    },
    examTraps: [
      'A Base Rate Tracker protects against arbitrary lender-driven SVR increases (since it tracks the Bank Rate directly), but does NOT protect against genuine Bank Rate rises — don\u2019t assume "tracker" means "protected from rate rises" generally.',
      'Discount and capped/collared rates are still VARIABLE — only fixed-rate mortgages guarantee the payment amount stays the same throughout the deal period.',
      'Cashback mortgages typically have a "clawback" clause requiring repayment of the cashback if redeemed early — a common trap in early-redemption scenario questions.'
    ],
    remember: [
      'Fixed = certainty, no benefit from rate falls. Capped = benefit from falls, protected from rises above the cap. Tracker = moves directly with Bank Rate.',
      'Offset: interest charged only on the NET balance (mortgage minus linked savings).',
      'Discount/capped/tracker are all still variable rate types — only "fixed" locks the payment amount completely.'
    ],
    knowledgeCheck: [
      {
        question: 'Which mortgage type could correctly be seen as an advantage of a Base Rate Tracker over a standard variable rate, from the same lender?',
        options: [
          'An arrangement fee is unlikely to be payable',
          'An early repayment charge is unlikely to apply',
          'The borrower is protected from arbitrary interest rate increases imposed by the lender',
          'The interest rate charged will not exceed a pre-determined level'
        ],
        correctIndex: 2,
        explanation: 'Since a tracker moves directly with the Bank Rate, the lender cannot raise the rate at its own discretion the way it can with SVR.'
      },
      {
        question: 'A borrower has a £150,000 offset mortgage and £15,000 in linked savings. On what amount is mortgage interest charged?',
        options: ['£150,000', '£135,000', '£15,000', '£165,000'],
        correctIndex: 1,
        explanation: 'Offset interest is charged only on the net balance: £150,000 − £15,000 = £135,000.'
      }
    ],
    source: 'CeMAP 2&3, MRT2 Topic 3, p.159-168'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u2-t4_5',
    module: 'cemap2', unitKey: 'unit2', topicKey: 't4_5',
    title: 'Mortgage Products and Schemes',
    intro: 'This topic covers specialist mortgage products (foreign currency, Sharia-compliant, sub-prime, guarantor, self-build, business BTL) and government/scheme-based routes to homeownership (shared ownership, equity share, Help to Buy, First Homes, Right to Buy) — heavy on scheme-specific rules and thresholds.',
    sections: [
      {
        heading: 'Specialist mortgage types',
        bullets: [
          'Foreign currency mortgage: secured on UK property but denominated in a foreign currency; high minimum loan (~£250,000); if sterling weakens, BOTH the capital debt and monthly payment increase in sterling terms — the ESIS must carry extra exchange-rate-risk warnings.',
          'Sharia-compliant (interest is forbidden): Ijara (lease-to-own — lender buys and remains registered owner throughout, customer pays capital + rent, more expensive, SDLT paid once) vs Murabaha (lender buys then immediately resells to the customer at a HIGHER fixed price, property registered in the customer\u2019s name immediately, usually a 20% deposit, even MORE expensive than Ijara, not available for right-to-buy purchases).',
          'Sub-prime mortgages: for adverse credit history (CCJs, IVA, bankruptcy) — higher rates, lower max LTV, higher fees to reflect risk.',
          'Business Buy-to-Let: LTV typically capped 75-80%; minimum income requirements (~£20-30k); PRA rules require rental cover of 125-145% of the mortgage payment (Interest Coverage Ratio, ICR); minimum stress test of +2% or 5.5% overall (whichever is higher) UNLESS the deal is fixed/capped for 5+ years. CPI-linked rent increases can offset stress testing, capped at 2%/year.',
          'BTL taxation: rental profit taxed as non-earned income (20/40/45%); mortgage interest is no longer a deductible expense for individuals (replaced by a 20% tax credit); CGT on sale at 18%/24%, due within 60 days. A Special Purpose Vehicle (SPV/company) can deduct mortgage interest in full and pays corporation tax instead — but still faces the SDLT surcharge, has fewer lender options, higher costs, and requires director personal guarantees.'
        ]
      },
      {
        heading: 'Self-build mortgages',
        bullets: [
          'Funds released in stages as building progresses (land purchase → footings → walls → roof → plastering, etc.), each stage usually inspected first.',
          'Lending typically up to 75% LTV of land cost, rising to potentially 90% of total build costs as stages complete. "Arrears stage payments" (paid after each stage is completed) are standard; payment IN ADVANCE of a stage is possible but at a higher rate given the increased lender risk.'
        ]
      },
      {
        heading: 'Government and shared-ownership schemes',
        bullets: [
          'Shared Ownership: buy a share (from 10% minimum initial share since April 2021, max 75% initial) of a property from a housing association, paying rent on the rest — "staircasing" lets you buy further shares (min 5% since April 2021). No SDLT up to 80% ownership; going above 80% triggers SDLT on the full amount paid to that point. Full 100% ownership is needed before the statutory right to extend the lease applies. On sale below 100% ownership, the landlord gets first refusal (8-week window) before open-market sale.',
          'Equity Share: borrower is SOLE legal owner with a normal first-charge mortgage on their share (e.g. 75%); the scheme provider takes a second charge on the rest (e.g. 25%), repayable on sale/end of term — normally no interest charged on the provider\u2019s share, but the provider benefits proportionally from any value increase.',
          'Help to Buy Equity Loan (ended for new applicants Oct 2022): 5% minimum deposit, first-time buyers only, new-build only, repayment mortgage only, government equity loan of up to 20% (40% in London) interest-free for 5 years, then a 1.75% annual fee (rising with RPI+1%) from year 6 — repayable by the end of the mortgage term, or the government keeps its 20% share if unpaid on sale.',
          'First Homes (England, from June 2021): 30-50% discount on new-build homes, developer-funded, for first-time buyers under a local income cap — the discount is preserved on all future resales to subsequent first-time buyers (though the price cap itself doesn\u2019t re-apply).',
          'Right to Buy (England/N. Ireland — not Wales/Scotland): council tenants can buy their home at a discount after a qualifying period, with the discount repayable on a sliding scale if sold quickly: 100% within year 1, 80% in year 2, 60% in year 3, 40% in year 4, 20% in year 5, nothing after year 5.'
        ]
      }
    ],
    workedExample: {
      title: 'Buy-to-let ICR calculation',
      body: [
        'A lender requires 125% ICR. If the monthly rent is £750, the maximum allowed mortgage payment = £750 ÷ 125% = £600.',
        'Conversely, if the mortgage payment is £600, the minimum required rent = £600 × 125% = £750.'
      ]
    },
    examTraps: [
      'Under Ijara, the LENDER remains the registered owner throughout the term; under Murabaha, the property is registered in the CUSTOMER\u2019s name from the start — a frequently reversed detail.',
      'Right to Buy discount clawback is a sliding scale (100/80/60/40/20/0% across years 1-5+) — not a flat rule, and commonly tested with a specific year given in the scenario.',
      'Shared ownership SDLT is triggered once staircasing exceeds 80% ownership (charged on the total paid to that point) — a specific, easily-forgotten threshold.'
    ],
    remember: [
      'Ijara: lender stays registered owner, customer pays rent + capital. Murabaha: customer owns immediately, lender resells at a markup, ~20% deposit required.',
      'BTL ICR: typically 125-145% of the mortgage payment; BTL stress test: +2% or 5.5% overall, whichever is higher (unless 5+ year fix/cap).',
      'Right to Buy discount repayment: 100/80/60/40/20/0% across years 1 through 5+.'
    ],
    knowledgeCheck: [
      {
        question: 'Under the Ijara version of a Sharia-compliant mortgage, who remains the registered owner of the property during the term?',
        options: ['The customer', 'The lender', 'A joint registration', 'Neither — it is held in trust'],
        correctIndex: 1,
        explanation: 'Under Ijara (lease-to-own), the lender remains the registered owner throughout the agreed term, with the property transferring to the customer only at the end.'
      },
      {
        question: 'A council tenant exercises Right to Buy and sells the property within year 3. What percentage of the discount must typically be repaid?',
        options: ['100%', '80%', '60%', '40%'],
        correctIndex: 2,
        explanation: 'The sliding-scale repayment rule requires 60% of the discount to be repaid if sold within year 3.'
      }
    ],
    source: 'CeMAP 2&3, MRT2 Topics 4&5, p.169-182'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u2-t6',
    module: 'cemap2', unitKey: 'unit2', topicKey: 't6',
    title: 'Raising Additional Funds for Property',
    intro: 'This topic covers further advances, second charges, bridging finance, and equity release (lifetime mortgages vs home reversion) — a topic rich in specific LTV limits, timeframes, and the Equity Release Council\u2019s protective standards.',
    sections: [
      {
        heading: 'Further advances',
        bullets: [
          'A further advance is a regulated "top up" of the existing mortgage — needs an ESIS/illustration for the FURTHER ADVANCE ONLY (showing its own APRC), plus the new total borrowing and payment.',
          'Usually taken over the remaining term (not necessarily the same term/rate as the original); typical max LTV 80-90%; existing mortgage usually needs 6+ months\u2019 history; often repayment-basis only.',
          '"Tacking": adding a further advance while POSTPONING an intervening second charge via a Deed of Postponement (the second-charge holder agrees to relegate to third place) — not needed if the original mortgage deed obliged the lender to make further advances (registered at the Land Registry) or if the first lender had no notice of the second charge when advancing funds.'
        ]
      },
      {
        heading: 'Second charges',
        bullets: [
          'Priority is chronological by registration date; a first-charge lender can restrict Land Registry registration of a second charge without their consent via a mortgage deed clause.',
          'Since March 2016, second charges follow the SAME MCOB rules as first charges — applied retrospectively even to pre-2016 second charges. Exception: MCOB only applies to BUSINESS-purpose second charges if the loan is £25,000 or less.',
          'Since second charges are commonly used for debt consolidation (historically higher default rates), lenders must either ensure existing debts are actually repaid at completion, OR include them in the affordability calculation.'
        ]
      },
      {
        heading: 'Bridging finance',
        bullets: [
          'Open bridging: buying before finding a buyer for the current property — higher risk, more expensive, usually capped around 12 months.',
          'Closed bridging: a firm buyer is already in place (usually starts at/after exchange) — lower risk, more readily available.',
          'Typical terms: minimum loan ~£30,000, LTV up to 70-75% (first charge, slightly less for second charge), usually interest-only (rolled up or paid monthly), lender focuses mainly on the property\u2019s value/exit strategy rather than income/credit history — hence quicker to arrange but more expensive (valuation, legal, application/completion, and exit fees).',
          'MCD-exempt bridging: repayable within 12 months and used as a "temporary financing solution" while moving property — MCOB affordability assessment still required UNLESS on an interest roll-up basis (though the borrower must still be told about the effect on remaining equity). Business/investment-only bridging (never to be occupied by the borrower/family) is not a regulated mortgage at all.'
        ]
      },
      {
        heading: 'Equity release: lifetime mortgages vs home reversion',
        bullets: [
          'Lifetime mortgage: available from ~55+ to those owning outright; interest usually rolls up (compounds) rather than being paid monthly, though some allow up to 10% capital repayment/year; LTV limited 25-55% (lower for younger applicants); repaid on death, move to long-term care, or sale.',
          'Equity Release Council standards (for member products): encourage independent legal advice, guarantee a "no negative equity" outcome (lender absorbs any shortfall), guarantee lifetime occupation (until second death on a joint plan), require portability (to a suitable new property), and require a facility for voluntary payments.',
          'Drawdown lifetime mortgage: funds drawn as needed, so interest only accrues on what\u2019s actually been drawn — slows debt growth compared to a lump sum roll-up.',
          'Hybrid lifetime mortgage: interest paid monthly (like a standard interest-only loan) with the OPTION to switch to roll-up later — no affordability check needed since the roll-up switch option removes the need, appealing to those nearing retirement.',
          'Home reversion: sell part/all of the property\u2019s equity for a (discounted) lump sum, remain as a lifetime tenant at nominal rent — no interest is charged (it\u2019s not a loan, ownership actually transfers), provider recovers value only on death/care/sale (minimum term 20 years), typically higher minimum age (~60) and can release MORE cash than a lifetime mortgage, but the plan holder permanently loses that share of future value growth.'
        ]
      },
      {
        heading: 'Retirement Interest-Only (RIO) mortgages',
        bullets: [
          'A genuine interest-only mortgage (not a lifetime mortgage) — interest MUST be paid monthly, so normal affordability assessment applies (unlike a roll-up lifetime mortgage). Repaid on sale, long-term care entry, or death.'
        ]
      }
    ],
    examTraps: [
      'Home reversion is NOT a mortgage — no interest is charged because ownership itself transfers to the provider; a lifetime mortgage IS a loan with interest, and ownership stays with the borrower.',
      'A RIO mortgage requires monthly interest payments and full affordability assessment — unlike a lifetime mortgage on a roll-up basis, which needs neither (this is a very common point of confusion).',
      '"Tacking" (postponing an intervening second charge) usually needs a Deed of Postponement — but NOT if the original mortgage deed already obliged the lender to make further advances, since that borrowing is treated as part of the original first charge.'
    ],
    remember: [
      'Lifetime mortgage LTV: 25-55% (younger = lower). Home reversion: provider typically wants closer to full value for the equity share, min age ~60, min term 20 years.',
      'Bridging: open (no buyer yet, riskier, ~12 month cap) vs closed (buyer secured, lower risk).',
      'RIO = genuine interest-only, needs affordability check. Lifetime mortgage roll-up = no monthly payment needed, no affordability check.'
    ],
    knowledgeCheck: [
      {
        question: 'What is a key difference between a lifetime mortgage and a home reversion scheme?',
        options: [
          'Interest rates on a home reversion scheme tend to be higher',
          'The plan holder retains property ownership with a lifetime mortgage',
          'The plan holder loses all rights to remain in the property with a reversion scheme',
          'Only a lifetime mortgage can provide a lump sum'
        ],
        correctIndex: 1,
        explanation: 'With a lifetime mortgage, the borrower retains ownership of the property throughout — with home reversion, legal ownership of the sold share actually transfers to the provider.'
      },
      {
        question: 'Which type of bridging finance is generally considered lower risk and more readily available?',
        options: ['Open bridging', 'Closed bridging', 'Both carry identical risk', 'Neither is available to individuals'],
        correctIndex: 1,
        explanation: 'Closed bridging (where a buyer for the existing property is already secured) is lower risk than open bridging, where no buyer has yet been found.'
      }
    ],
    source: 'CeMAP 2&3, MRT2 Topic 6, p.183-196'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u2-t7',
    module: 'cemap2', unitKey: 'unit2', topicKey: 't7',
    title: 'Transferring Mortgages',
    intro: 'This topic covers product switches, re-mortgaging (including debt consolidation and the IVA "equity clause"), moving home, transfers of equity, and early/partial redemption — a topic dense with specific rules on when a full affordability check is (or isn\u2019t) required.',
    sections: [
      {
        heading: 'Product switch vs re-mortgage',
        bullets: [
          'Product switch (same lender, new deal): usually no formal valuation/legal costs, quicker, NO affordability assessment required if borrowing doesn\u2019t increase (fees can even be added without one).',
          'Re-mortgage (new lender): a brand new MCD-regulated loan — full suitability/affordability rules apply UNLESS the amount is unchanged, in which case a "proportionate affordability assessment" (no full check) can apply. Needs a redemption statement from the old lender. Any existing second charge must be settled or the holder must agree to postpone, or the new loan would itself register as a second charge.'
        ]
      },
      {
        heading: 'Debt consolidation',
        bullets: [
          'Converting unsecured debt into a secured mortgage debt reduces short-term outgoings but increases the OVERALL cost and repossession risk (since more debt is now secured against the home, reducing equity).',
          'MCOB requires the lender to take reasonable steps to ensure consolidated debts are actually repaid at completion. Increasing to a higher LTV can also trigger a higher lending charge (any HLC already paid to the OLD lender is not refunded).',
          'Debt-consolidation customers cannot initially go execution-only — advice must be given first, though they can reject that advice afterward and choose execution-only.',
          'IVA "equity clause": in the IVA\u2019s final year, the debtor must attempt to re-mortgage to release funds for creditors IF their equity share exceeds £5,000. The re-mortgage can\u2019t exceed 85% of property value, and the increased mortgage cost can\u2019t exceed 50% of the normal IVA payment. If re-mortgaging isn\u2019t possible, the IVA term extends by 12 months.'
        ]
      },
      {
        heading: 'Moving home, transfers of equity, and new occupants',
        bullets: [
          'Portability: moving the existing deal to a new property, usually ERC-free if the new loan is at least the same size (an ERC can apply to any REDUCTION); affordability assessment can be waived if borrowing doesn\u2019t increase.',
          'Transfer of equity (adding/removing a party): needs lender consent from ALL parties (including guarantors); the lender assesses the remaining party\u2019s ability to pay alone (especially relevant on divorce, where maintenance obligations and fresh credit checks apply). A new illustration/ESIS for the WHOLE loan is required both when adding and removing a party.',
          'New adult occupants not party to the mortgage must sign a Consent to Mortgage form — failure risks creating an overriding occupation interest (Land Registration Act 1925, s.70) that could hinder the lender.',
          'Life policies linked to the mortgage: can be transferred/assigned between (former) partners on separation UNLESS already assigned to the lender (then the lender\u2019s consent is needed). ISAs and personal pensions are individual and CANNOT be assigned this way.'
        ]
      },
      {
        heading: 'SDLT on transfers of equity',
        bullets: [
          'Adding a joint owner: SDLT may apply based on the "consideration" given — any cash payment PLUS the new owner\u2019s share of the assumed mortgage debt. If no cash changes hands, only half the mortgage liability counts (which may fall below the SDLT threshold).',
          'Removing a joint owner (e.g. divorce): exempt from SDLT specifically for divorce/dissolution — in other cases (e.g. friends splitting), SDLT may still apply based on the payment plus the buyer\u2019s new share of the mortgage.'
        ]
      },
      {
        heading: 'Redemption',
        bullets: [
          'Borrowers can redeem after the "legal date of redemption" (usually 6 months from the mortgage start) and cannot be prevented from doing so — full release from the contract is called "vacation".',
          'Courts can set aside unreasonably heavy early redemption charges as "a clog on the equity of redemption".',
          'Partial redemption (lump sum paydown): borrower can choose to shorten the term (keep payment the same) OR reduce the monthly payment (keep the term the same). Lenders often set a minimum partial redemption amount.',
          'Mortgage Exit Fee: covers the lender\u2019s account-closing costs (deed release, Land Registry charges, admin) — disputes over an unfair exit fee can be taken to the Financial Ombudsman Service.'
        ]
      }
    ],
    workedExample: {
      title: 'SDLT on adding a joint owner',
      body: [
        'Alison owns a £550,000 house with a £180,000 mortgage (£370,000 equity) and wants to add Brian, who pays her £185,000 cash (half the equity).',
        'SDLT is calculated on: £185,000 (cash) + £90,000 (half the £180,000 mortgage) = £275,000.',
        'This is above the £125,000 threshold example used, so SDLT is due on the portion above that threshold at standard rates.'
      ]
    },
    examTraps: [
      'A product switch with the SAME lender generally needs no affordability check (if borrowing is unchanged); a re-mortgage with a NEW lender is a fresh regulated mortgage requiring full suitability/affordability rules (unless the amount is unchanged, allowing a proportionate assessment) — mixing these two up is a common trap.',
      'Removing a joint owner due to divorce/dissolution is SDLT-EXEMPT — but removing a joint owner in other circumstances (e.g. friends) can still trigger SDLT based on payment and assumed mortgage share.',
      'The IVA equity clause only applies if the debtor\u2019s equity share exceeds £5,000 — below that, there\u2019s no obligation to attempt a re-mortgage.'
    ],
    remember: [
      'IVA equity clause: triggers above £5,000 equity, re-mortgage capped at 85% LTV, increased cost capped at 50% of normal IVA payment, failure extends the IVA by 12 months.',
      'Transfer of equity needs consent from ALL parties including guarantors, plus a new whole-loan ESIS.',
      'Partial redemption: borrower chooses shorter term OR lower payment; lenders often set a minimum amount.'
    ],
    knowledgeCheck: [
      {
        question: 'A borrower wants to switch to a new deal with their existing lender, with no increase in borrowing. What is generally required?',
        options: [
          'A full affordability re-assessment, as with any new mortgage',
          'No affordability assessment is generally required',
          'Only a credit search, no income verification',
          'A full property revaluation'
        ],
        correctIndex: 1,
        explanation: 'A product switch with the same lender and no increase in borrowing typically doesn\u2019t require a fresh affordability assessment, unlike a re-mortgage with a new lender.'
      },
      {
        question: 'Under an IVA\u2019s "equity clause", at what level of equity does the debtor typically have to attempt a re-mortgage in the final year?',
        options: ['Any equity at all', 'Above £2,500', 'Above £5,000', 'Above £10,000'],
        correctIndex: 2,
        explanation: 'The equity clause only applies where the debtor\u2019s share of equity exceeds £5,000.'
      }
    ],
    source: 'CeMAP 2&3, MRT2 Topic 7, p.197-208'
  },
  // ---------------------------------------------------------------
  {
    id: 'c2-u2-t8_9',
    module: 'cemap2', unitKey: 'unit2', topicKey: 't8_9',
    title: 'Arrears and Lenders\u2019 Legal Rights and Remedies',
    intro: 'This topic covers how lenders must handle borrowers in arrears (MCOB 13), the remedies available before repossession, the legal repossession process itself, and MIG shortfall claims — a heavily procedural, deadline-driven topic.',
    sections: [
      {
        heading: 'Lender obligations to borrowers in arrears (MCOB 13)',
        bullets: [
          'Lenders must have written arrears procedures: reasonable efforts to agree repayment, liaison with advice bodies, a reasonable repayment period (sometimes spread over the remaining term), allowing payment date/method changes, and treating repossession as a last resort.',
          'Contact must be reasonable (generally 8am-9pm) and no more than 2 direct debit attempts per month where there\u2019s a shortfall. If a direct debit is refused at least once in 2 consecutive months, the lender should reconsider the payment method\u2019s suitability.',
          'A written warning letter is required within 15 BUSINESS days of the lender becoming aware of arrears, including: the MoneyHelper "Problems paying your mortgage" info sheet, a list of missed payments and the total arrears figure, the total outstanding balance (excluding redemption charges), and likely additional charges.',
          'Arrears dealings records must be kept for 3 years from the date of the dealings.'
        ]
      },
      {
        heading: 'Remedies to help the borrower',
        bullets: [
          'Repayment of arrears over a period: suits a positive change in circumstances (e.g. new job) — increased payments must be genuinely affordable, agreed in writing.',
          'Full/partial payment suspension ("holiday"): a one-off, temporary measure, suits repayment mortgages with sufficient equity — arrears from the holiday must be cleared within a set period afterward.',
          'Accepting interest-only temporarily: only suits capital & interest mortgages, and is of limited help in early years (when payments are already mostly interest).',
          'Extending the term: easy on capital & interest mortgages, harder with a fixed-maturity With-Profits endowment (would need provider consent too).',
          'Capitalising arrears: adding arrears to the mortgage balance (a "one-off" remedy) — the lender must NOT do this automatically where the effect would be "material" (increases total interest payable by £50+, or the monthly payment by £1+).',
          'Surrendering an endowment: not usually recommended (poor return relative to premiums paid) — selling on the Traded Endowment Policy (TEP) market is often better.',
          'Trading down: selling and buying a cheaper property when the commitment genuinely can\u2019t be met.',
          'The Mortgage Charter (June 2023, ~90% of lenders): help/guidance with no credit file impact; switching at the end of a fixed deal without a new affordability check (if not increasing borrowing/changing type); tailored support for struggling borrowers; no forced repossession in the first year after a missed payment without consent (barring exceptional circumstances); locking in a new deal up to 6 months ahead; switching to interest-only for 6 months — these Charter options can be offered on an EXECUTION-ONLY basis.'
        ]
      },
      {
        heading: 'Support for Mortgage Interest (SMI)',
        bullets: [
          'For those on Income Support, income-based JSA, Universal Credit, income-based ESA, or Pension Credit — NOT new-style/contribution-based JSA.',
          'Since April 2018, it\u2019s a LOAN (secured by a second charge, repaid on sale/death, or voluntarily with a min £100 payment) rather than a benefit — interest rate reviewed every 6 months.',
          'Waiting period: 3 months for Universal Credit claimants; 39 weeks for Income Support/income-based JSA/ESA claimants; NO waiting period for Pension Credit claimants.',
          'Covers interest on the first £200,000 of the mortgage (£100,000 for Pension Credit claimants only) — no time limit on payments while eligible. Excludes endowment/life/home insurance premiums.',
          '"52-week linking rule": a break in claiming SMI of up to 52 weeks doesn\u2019t require serving the waiting period again on a new claim — supports accepting short-term/seasonal work without losing entitlement.'
        ]
      },
      {
        heading: 'Legal remedies on default and the repossession process',
        bullets: [
          '5 lender remedies: sue on the personal covenant (rarely useful — borrower likely has no funds); appoint a Law of Property Act Receiver (collects rent from tenanted property — acts as the BORROWER\u2019S agent, even if a lender employee); foreclosure (never used today); repossession; sell the property.',
          'Before court action, the lender must follow the Ministry of Justice Pre-Action Protocol (first/second charge residential only, NOT buy-to-let) — encouraging pre-action agreement and checking occupancy. A 15-day notice of intended repossession is required after other reasonable attempts fail.',
          'Possession proceedings CANNOT start where: an SMI/Universal Credit/MPPI claim is pending, a payment is reasonably expected from DWP/insurer/local authority/charity, the borrower needs time for independent debt advice due to genuine difficulty, financial circumstances are expected to improve, there\u2019s a legitimate FOS complaint, or the property is actively being marketed at a fair price.',
          'Court outcomes: Outright possession (usually 28 days), Suspended possession (borrower must meet specified payments or lose the property), Suspend/Adjournment (until a set date to allow further arrangements).',
          'After taking possession: lender can require vacation (bailiffs if needed), must change locks/notify utilities/police/insurer, and owes a duty of care over any remaining belongings (fittings held on trust, sellable after a set unclaimed period). The lender has a duty to obtain the BEST PRICE REASONABLY AVAILABLE — can be sued for damages if not, and cannot unreasonably delay a sale ("nursing a property"). Property stays on the market until exchange even after a buyer is found. Surplus after sale goes to any second mortgagee first, then the borrower (or into court if the borrower can\u2019t be found).'
        ]
      },
      {
        heading: 'MIG shortfall claims',
        bullets: [
          'On a shortfall after repossession/sale, the lender can claim on its MIG policy (subject to ABI guidelines, e.g. a 20% excess).',
          'The insurer, via subrogation, can sue the borrower for what it paid the lender — within 6 years of settling the claim. The LENDER can separately sue the borrower for any remaining shortfall (e.g. the excess) — also within 6 years, notified in a durable medium.'
        ]
      }
    ],
    workedExample: {
      title: 'MIG shortfall recovery',
      body: [
        'A repossessed property sells for £60,000 against a £100,000 outstanding loan — a £40,000 shortfall.',
        'The lender\u2019s MIG policy pays out £10,000 (the insured shortfall amount) — the insurer can then sue the borrower for that £10,000 via subrogation.',
        'The lender remains £30,000 out of pocket (£40,000 − £10,000 paid by the insurer) and can separately sue the borrower for that remaining £30,000.'
      ]
    },
    examTraps: [
      'A Law of Property Act Receiver acts as the BORROWER\u2019S agent (not the lender\u2019s), even though the lender appoints them and they could even be a lender employee — a frequently reversed detail.',
      'The 15-business-day warning letter deadline runs from when the lender BECOMES AWARE of the arrears, not from the missed payment date itself.',
      'Automatic capitalisation of arrears is barred where the effect is "material" — defined precisely as £50+ extra total interest OR £1+ extra monthly payment, not vaguer thresholds.'
    ],
    remember: [
      'Warning letter: within 15 business days of the lender becoming aware of arrears.',
      'SMI waiting period: 3 months (Universal Credit), 39 weeks (Income Support/JSA/ESA), nil (Pension Credit). Covers first £200,000 (£100,000 for Pension Credit).',
      'Sale surplus order: second mortgagee first, then borrower (or court if untraceable).'
    ],
    knowledgeCheck: [
      {
        question: 'Within how many business days of becoming aware of arrears must a lender send the required warning letter?',
        options: ['5', '10', '15', '28'],
        correctIndex: 2,
        explanation: 'MCOB requires the warning letter to be sent within 15 business days of the lender becoming aware of the arrears.'
      },
      {
        question: 'Who does a Law of Property Act Receiver act as agent for?',
        options: ['The lender', 'The borrower', 'The court', 'The insurer'],
        correctIndex: 1,
        explanation: 'Despite being appointed by (and potentially employed by) the lender, an LPA Receiver legally acts as the agent of the borrower.'
      }
    ],
    source: 'CeMAP 2&3, MRT2 Topics 8&9, p.209-223'
  },
  // ---------------------------------------------------------------
  {
    id: 'c3-u1-t2',
    module: 'cemap3', unitKey: 'unit1', topicKey: 't2',
    title: 'Case Study Practice',
    intro: 'CeMAP 3 is examined entirely through case studies — 6 scenarios of 10 questions each, drawing on everything from CeMAP 1 and CeMAP 2. This topic isn\u2019t new syllabus content; it\u2019s about how to read and answer a case study efficiently and accurately, since the format itself is what trips people up.',
    sections: [
      {
        heading: 'How CeMAP 3 case studies are structured',
        bullets: [
          'Each case study presents a client (or couple\u2019s) full financial situation — income, existing mortgage/protection arrangements, objectives, and often a recommendation already given by an adviser — followed by 10 questions testing your ability to apply CeMAP 1/2 knowledge to that specific scenario.',
          'Questions typically mix: factual recall applied to the scenario (e.g. "what benefit could this client claim?"), calculations using the scenario\u2019s numbers (fees, mortgage payments, tax), and judgement questions asking you to assess whether a recommendation was suitable.',
          'Because all 10 questions share one scenario, a misread detail early on (age, income, existing cover, marital status) can cause you to get several questions wrong — reading the whole case study carefully before answering is more efficient than jumping straight to Q1.'
        ]
      },
      {
        heading: 'A reading and answering strategy',
        bullets: [
          'First pass: read the whole case study once for the big picture — who are the people, what do they want, what do they already have in place, what has an adviser already recommended (and does it look sound)?',
          'Second pass: read the 10 questions and note which specific facts each one needs — this tells you which parts of the case study to re-check carefully (e.g. exact figures for a calculation question, or exact wording for a "which product" question).',
          'For calculation questions, write out the formula first (e.g. LTV, ICR, higher lending charge, procuration fee, gross/net yield) before substituting numbers — this catches wrong-figure mistakes and matches the working style used throughout your CeMAP 2 calculations topics.',
          'For "most suitable" judgement questions, check the option against the client\u2019s STATED needs and circumstances in the case study, not against what\u2019s generally the "best" product in isolation — suitability in CeMAP 3 is always scenario-specific.',
          'Watch for scenario details that quietly rule an option out: age (e.g. too young for pension access, too old for a scheme\u2019s upper limit), existing cover that would make a recommendation duplicative, or a stated risk attitude that conflicts with an option.'
        ]
      },
      {
        heading: 'Common CeMAP 3 question themes',
        bullets: [
          'Repayment method suitability given the client\u2019s risk attitude and existing arrangements (drawing on CeMAP 2\u2019s repayment-methods and repayment-vehicles topics).',
          'Protection needs analysis — matching CIC, IPI, MPPI, term assurance types, and whole-of-life cover to a client\u2019s stated concerns (drawing on the Protection topic).',
          'Mortgage cost and fee calculations using the case study\u2019s specific figures (procuration fees, monthly payment from a "per £1,000" rate, HLC, stress-tested affordability).',
          'Regulatory/process questions applied to the scenario — e.g. stress test rates, ESIS timing, execution-only eligibility — testing whether you can apply CeMAP 1/2 rules correctly to a specific case rather than recite them abstractly.'
        ]
      }
    ],
    examTraps: [
      'Don\u2019t answer from memory of "the usual rule" without checking the case study\u2019s specific numbers — CeMAP 3 questions are built around the scenario\u2019s exact figures, and a generic answer can be technically wrong for that client.',
      'A recommendation matching a product\u2019s general strengths isn\u2019t automatically "suitable" — check it against what this specific client said they need, including any risk-attitude or circumstance detail buried mid-scenario.',
      'Re-read the exact age, employment status, and existing cover given for each family member before answering — these details commonly determine which options are actually available (e.g. pension access age, ICR income tests, first-time-buyer status).'
    ],
    remember: [
      'CeMAP 3 = 6 case studies × 10 questions, drawing on CeMAP 1 & 2 knowledge applied to a specific scenario.',
      'Read the whole case study before answering, then re-check the exact figures/wording each question needs.',
      'Suitability questions are always scenario-specific — match the recommendation to the client\u2019s stated needs, not to a product\u2019s general reputation.'
    ],
    knowledgeCheck: [
      {
        question: 'A CeMAP 3 case study asks you to calculate a procuration fee using a percentage rate and a stated minimum. What should you do first?',
        options: [
          'Guess based on typical industry fees',
          'Write out the formula (loan × fee %, compared against the stated minimum) before substituting the case study\u2019s figures',
          'Skip the calculation and answer based on general knowledge',
          'Assume the minimum fee always applies'
        ],
        correctIndex: 1,
        explanation: 'Writing the formula out first and then substituting the scenario\u2019s exact figures avoids errors and mirrors the approach used throughout the calculation-heavy CeMAP 2 topics.'
      },
      {
        question: 'A case study recommends Product X for a client. How should you assess whether this was suitable?',
        options: [
          'Check whether Product X is generally considered a strong product in the market',
          'Check the recommendation against the client\u2019s specific stated needs, circumstances and any existing arrangements in the scenario',
          'Assume it was suitable since the adviser recommended it',
          'Assume it was unsuitable since CeMAP questions usually test errors'
        ],
        correctIndex: 1,
        explanation: 'Suitability in CeMAP 3 is always judged against the specific client\u2019s stated needs and circumstances in that case study, not a product\u2019s general reputation.'
      }
    ],
    source: 'CeMAP 2&3, CeMAP 3 — Format of the Exam & Case Study Practice, p.237+'
  }
]
