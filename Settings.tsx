import { useState } from 'react'
import TopBar from '../components/TopBar'
import { calculationTopics } from '../data/calculations'

export default function Calculations() {
  const [openId, setOpenId] = useState<string | null>(calculationTopics[0]?.id ?? null)

  return (
    <div className="page">
      <TopBar title="Calculations" back />
      <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: 12 }}>
        Only calculation types that appear in your supplied PDFs are included here — nothing has been invented.
      </p>

      {calculationTopics.map(calc => (
        <div className="card" key={calc.id}>
          <button className="card-tap" style={{ background: 'none', border: 'none', padding: 0, display: 'flex', justifyContent: 'space-between', width: '100%' }}
            onClick={() => setOpenId(o => o === calc.id ? null : calc.id)}>
            <strong>{calc.title}</strong>
            <span>{openId === calc.id ? '−' : '+'}</span>
          </button>

          {openId === calc.id && (
            <div style={{ marginTop: 12 }}>
              <p style={{ fontFamily: 'monospace', background: 'var(--bg)', padding: 10, borderRadius: 8, fontSize: '0.85rem' }}>{calc.formula}</p>
              <strong style={{ fontSize: '0.8rem' }}>Variables</strong>
              <ul style={{ fontSize: '0.85rem', paddingLeft: 18 }}>
                {calc.variables.map((v, i) => <li key={i}><strong>{v.symbol}</strong>: {v.meaning}</li>)}
              </ul>
              <strong style={{ fontSize: '0.8rem' }}>Worked example</strong>
              <ol style={{ fontSize: '0.85rem', paddingLeft: 18 }}>
                {calc.workedExample.map((s, i) => <li key={i}>{s}</li>)}
              </ol>

              <CalculatorFor id={calc.id} />

              <strong style={{ fontSize: '0.8rem' }}>Common mistakes</strong>
              <ul style={{ fontSize: '0.85rem', paddingLeft: 18, marginBottom: 0 }}>
                {calc.commonMistakes.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
              <p style={{ fontSize: '0.7rem', color: 'var(--text-faint)' }}>Source: {calc.source}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function NumInput({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label style={{ display: 'block', fontSize: '0.8rem', marginBottom: 8 }}>
      {label}
      <input
        type="number" inputMode="decimal" value={value} onChange={e => onChange(e.target.value)}
        style={{ display: 'block', width: '100%', marginTop: 4, padding: 10, borderRadius: 8, border: '1px solid var(--card-border)', background: 'var(--bg)' }}
      />
    </label>
  )
}

function CalculatorFor({ id }: { id: string }) {
  if (id === 'calc-real-interest-rate') {
    const [nominal, setNominal] = useState('5')
    const [inflation, setInflation] = useState('3')
    const real = (parseFloat(nominal || '0') - parseFloat(inflation || '0'))
    return (
      <div className="card" style={{ background: 'var(--bg)' }}>
        <NumInput label="Nominal rate (%)" value={nominal} onChange={setNominal} />
        <NumInput label="Inflation rate (%)" value={inflation} onChange={setInflation} />
        <div style={{ fontWeight: 700 }}>Real rate ≈ {isNaN(real) ? '—' : real.toFixed(2)}%</div>
      </div>
    )
  }
  if (id === 'calc-capital-repaid-year-one') {
    const [loan, setLoan] = useState('60000')
    const [per1000, setPer1000] = useState('7.30')
    const [rate, setRate] = useState('5')
    const l = parseFloat(loan || '0'), p = parseFloat(per1000 || '0'), r = parseFloat(rate || '0')
    const monthly = (l / 1000) * p
    const annualPayment = monthly * 12
    const annualInterest = l * (r / 100)
    const capitalRepaid = annualPayment - annualInterest
    return (
      <div className="card" style={{ background: 'var(--bg)' }}>
        <NumInput label="Loan amount (£)" value={loan} onChange={setLoan} />
        <NumInput label="Cost per £1,000 borrowed (£)" value={per1000} onChange={setPer1000} />
        <NumInput label="Interest rate (%)" value={rate} onChange={setRate} />
        <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Monthly payment: £{isFinite(monthly) ? monthly.toFixed(2) : '—'}</div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Annual interest: £{isFinite(annualInterest) ? annualInterest.toFixed(2) : '—'}</div>
        <div style={{ fontWeight: 700, marginTop: 4 }}>Capital repaid in year 1: £{isFinite(capitalRepaid) ? capitalRepaid.toFixed(2) : '—'}</div>
      </div>
    )
  }
  if (id === 'calc-procuration-fee') {
    const [loan, setLoan] = useState('96000')
    const [feePct, setFeePct] = useState('0.35')
    const [min, setMin] = useState('250')
    const l = parseFloat(loan || '0'), f = parseFloat(feePct || '0'), m = parseFloat(min || '0')
    const calcFee = l * (f / 100)
    const fee = Math.max(calcFee, m)
    return (
      <div className="card" style={{ background: 'var(--bg)' }}>
        <NumInput label="Loan amount (£)" value={loan} onChange={setLoan} />
        <NumInput label="Fee (%)" value={feePct} onChange={setFeePct} />
        <NumInput label="Minimum fee (£)" value={min} onChange={setMin} />
        <div style={{ fontWeight: 700 }}>Procuration fee: £{isFinite(fee) ? fee.toFixed(2) : '—'}</div>
      </div>
    )
  }
  if (id === 'calc-monthly-mortgage-cost') {
    const [price, setPrice] = useState('140000')
    const [deposit, setDeposit] = useState('46000')
    const [per1000, setPer1000] = useState('4.58')
    const p = parseFloat(price || '0'), d = parseFloat(deposit || '0'), r = parseFloat(per1000 || '0')
    const loan = p - d
    const monthly = (loan / 1000) * r
    return (
      <div className="card" style={{ background: 'var(--bg)' }}>
        <NumInput label="Purchase price (£)" value={price} onChange={setPrice} />
        <NumInput label="Deposit (£)" value={deposit} onChange={setDeposit} />
        <NumInput label="Cost per £1,000 borrowed (£)" value={per1000} onChange={setPer1000} />
        <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Loan amount: £{isFinite(loan) ? loan.toFixed(2) : '—'}</div>
        <div style={{ fontWeight: 700, marginTop: 4 }}>Monthly cost: £{isFinite(monthly) ? monthly.toFixed(2) : '—'}</div>
      </div>
    )
  }
  return null
}
