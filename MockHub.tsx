import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TopBar from '../components/TopBar'
import { mockExams } from '../data/mockExams'
import { getQuestionById } from '../data/allQuestions'
import { shuffleQuestion, isCorrectAnswer, type ShuffledQuestion } from '../lib/quiz'
import { db } from '../db/db'

export default function MockExamRunner() {
  const { examId } = useParams()
  const navigate = useNavigate()
  const exam = mockExams.find(e => e.id === examId)

  const shuffled: ShuffledQuestion[] = useMemo(() => {
    if (!exam) return []
    return exam.questionIds
      .map(id => getQuestionById(id))
      .filter((q): q is NonNullable<typeof q> => !!q)
      .map(q => shuffleQuestion(q, hashSeed(q.id)))
  }, [exam])

  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number[]>>({})
  const [flagged, setFlagged] = useState<Set<string>>(new Set())
  const [secondsLeft, setSecondsLeft] = useState((exam?.timeMinutes ?? 60) * 60)
  const [showNav, setShowNav] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const startedAt = useRef(Date.now())
  const submittedRef = useRef(false)

  useEffect(() => {
    const t = setInterval(() => setSecondsLeft(s => Math.max(0, s - 1)), 1000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    if (secondsLeft === 0 && !submittedRef.current) submit()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft])

  if (!exam) return <div className="page"><TopBar title="Mock exam" back /><p>Exam not found.</p></div>
  if (!shuffled.length) return <div className="page"><TopBar title="Mock exam" back /><p>Loading…</p></div>

  const current = shuffled[index]
  const unansweredCount = shuffled.filter(q => !answers[q.id]?.length).length

  function toggleOption(i: number) {
    const isMulti = current.correctIndex.length > 1
    setAnswers(a => {
      const existing = a[current.id] ?? []
      if (isMulti) {
        const next = existing.includes(i) ? existing.filter(x => x !== i) : [...existing, i]
        return { ...a, [current.id]: next }
      }
      return { ...a, [current.id]: [i] }
    })
  }

  function toggleFlag() {
    setFlagged(f => {
      const n = new Set(f)
      if (n.has(current.id)) n.delete(current.id); else n.add(current.id)
      return n
    })
  }

  async function submit() {
    if (submittedRef.current || !exam) return
    submittedRef.current = true
    let correctCount = 0
    for (const q of shuffled) {
      const sel = answers[q.id] ?? []
      if (isCorrectAnswer(q, sel)) correctCount += 1
    }
    const scorePct = Math.round((correctCount / shuffled.length) * 100)
    const passed = correctCount >= exam.passMark
    const id = await db.mockAttempts.add({
      examId: exam.id, startedAt: startedAt.current, finishedAt: Date.now(),
      answers, flagged: [...flagged], score: scorePct, passed
    })
    navigate(`/mock/${exam.id}/results/${id}`)
  }

  const mm = String(Math.floor(secondsLeft / 60)).padStart(2, '0')
  const ss = String(secondsLeft % 60).padStart(2, '0')
  const lowTime = secondsLeft < 300

  return (
    <div className="page">
      <div className="topbar">
        <span style={{ fontWeight: 700 }}>{exam.title}</span>
        <span style={{ marginLeft: 'auto' }} className={`timer-pill pill ${lowTime ? 'pill-warning' : ''}`}>{mm}:{ss}</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '16px 0 8px' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)' }}>Question {index + 1} of {shuffled.length}</span>
        <button className="pill" onClick={() => setShowNav(s => !s)}>{unansweredCount} unanswered</button>
      </div>

      {showNav && (
        <div className="card" style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: 6 }}>
          {shuffled.map((q, i) => {
            const isAnswered = !!answers[q.id]?.length
            const isFlagged = flagged.has(q.id)
            return (
              <button key={q.id} onClick={() => { setIndex(i); setShowNav(false) }}
                style={{
                  minHeight: 36, borderRadius: 8, fontSize: '0.72rem', fontWeight: 700,
                  border: i === index ? '2px solid var(--accent)' : '1px solid var(--card-border)',
                  background: isFlagged ? 'color-mix(in srgb, var(--warning) 20%, var(--card))' : isAnswered ? 'color-mix(in srgb, var(--success) 15%, var(--card))' : 'var(--card)',
                  color: 'var(--text)'
                }}>
                {i + 1}
              </button>
            )
          })}
        </div>
      )}

      <div className="card">
        <p style={{ fontWeight: 600, marginTop: 0 }}>{current.text}</p>
        {current.displayOptions.map((opt, i) => {
          const isSelected = (answers[current.id] ?? []).includes(i)
          return (
            <button key={i} className={`option-btn ${isSelected ? 'selected' : ''}`} onClick={() => toggleOption(i)}>
              <span className="letter">{String.fromCharCode(65 + i)}</span>
              <span>{opt}</span>
            </button>
          )
        })}
      </div>

      <button className="btn btn-secondary" onClick={toggleFlag}>
        {flagged.has(current.id) ? '🚩 Unflag this question' : '🚩 Flag for review'}
      </button>

      <div className="grid-2" style={{ marginTop: 12 }}>
        <button className="btn btn-secondary" disabled={index === 0} onClick={() => setIndex(i => Math.max(0, i - 1))}>‹ Previous</button>
        {index < shuffled.length - 1
          ? <button className="btn btn-primary" onClick={() => setIndex(i => i + 1)}>Next ›</button>
          : <button className="btn btn-primary" onClick={() => setShowConfirm(true)}>Submit exam</button>}
      </div>

      {index === shuffled.length - 1 && (
        <button className="btn btn-secondary" style={{ marginTop: 10 }} onClick={() => setShowConfirm(true)}>Review & submit early</button>
      )}

      {showConfirm && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
          <div className="card" style={{ maxWidth: 320, margin: 16 }}>
            <strong>Submit this exam?</strong>
            <p style={{ fontSize: '0.85rem' }}>
              {unansweredCount > 0 ? `You have ${unansweredCount} unanswered question(s). ` : 'All questions answered. '}
              You won\u2019t be able to change your answers after submitting.
            </p>
            <div className="grid-2" style={{ gap: 8 }}>
              <button className="btn btn-secondary" onClick={() => setShowConfirm(false)}>Keep working</button>
              <button className="btn btn-primary" onClick={submit}>Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function hashSeed(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}
