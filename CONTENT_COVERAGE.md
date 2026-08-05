import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TopBar from '../components/TopBar'
import ProgressRing from '../components/ProgressRing'
import { mockExams } from '../data/mockExams'
import { getQuestionById } from '../data/allQuestions'
import { db } from '../db/db'
import type { MockAttempt } from '../db/db'
import { shuffleQuestion } from '../lib/quiz'

export default function MockResults() {
  const { examId, attemptId } = useParams()
  const navigate = useNavigate()
  const exam = mockExams.find(e => e.id === examId)
  const [attempt, setAttempt] = useState<MockAttempt | null>(null)
  const [showReview, setShowReview] = useState(false)

  useEffect(() => {
    if (attemptId) db.mockAttempts.get(Number(attemptId)).then(a => setAttempt(a ?? null))
  }, [attemptId])

  if (!exam || !attempt) return <div className="page"><TopBar title="Results" back /><p>Loading…</p></div>

  const questions = exam.questionIds.map(id => getQuestionById(id)).filter((q): q is NonNullable<typeof q> => !!q)

  const byTopic = new Map<string, { correct: number; total: number }>()
  for (const q of questions) {
    const key = q.topicKey
    const sq = shuffleQuestion(q, hashSeed(q.id))
    const sel = attempt.answers[q.id] ?? []
    const correct = sel.length > 0 && [...sel].sort().join(',') === [...sq.displayCorrectIndex].sort().join(',')
    const entry = byTopic.get(key) ?? { correct: 0, total: 0 }
    entry.total += 1
    if (correct) entry.correct += 1
    byTopic.set(key, entry)
  }

  return (
    <div className="page">
      <TopBar title="Results" back />

      <div className="card" style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
        <ProgressRing percent={attempt.score ?? 0} label={attempt.passed ? 'PASS' : 'FAIL'} />
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>{attempt.passed ? 'You passed! 🎉' : 'Not a pass this time'}</div>
          <div style={{ color: 'var(--text-dim)', fontSize: '0.85rem', marginTop: 4 }}>
            Pass mark: {exam.passMark}/{questions.length}. Your score: {Math.round(((attempt.score ?? 0) / 100) * questions.length)}/{questions.length}.
          </div>
        </div>
      </div>

      <div className="section-title">Topic-by-topic performance</div>
      {[...byTopic.entries()].map(([topic, stat]) => (
        <div className="card" key={topic} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{topic}</span>
          <span className="pill">{stat.correct}/{stat.total}</span>
        </div>
      ))}

      <div className="grid-2" style={{ marginTop: 16 }}>
        <button className="btn btn-secondary" onClick={() => setShowReview(s => !s)}>{showReview ? 'Hide review' : 'Review all answers'}</button>
        <button className="btn btn-primary" onClick={() => navigate(`/mock/${exam.id}`)}>Retake exam</button>
      </div>
      <button className="btn btn-secondary" style={{ marginTop: 10 }} onClick={() => navigate('/mock')}>Back to Mock Exams</button>

      {showReview && questions.map((q, i) => {
        const sq = shuffleQuestion(q, hashSeed(q.id))
        const sel = attempt.answers[q.id] ?? []
        const wasFlagged = attempt.flagged?.includes(q.id)
        return (
          <div className="card" key={q.id}>
            <p style={{ fontWeight: 600, marginTop: 0 }}>{i + 1}. {q.text} {wasFlagged && <span className="pill pill-warning">Flagged</span>}</p>
            {sq.displayOptions.map((opt, oi) => {
              const isCorrectOpt = sq.displayCorrectIndex.includes(oi)
              const wasSelected = sel.includes(oi)
              let cls = 'option-btn'
              if (isCorrectOpt) cls += ' correct'
              else if (wasSelected) cls += ' incorrect'
              return <div key={oi} className={cls}><span className="letter">{String.fromCharCode(65 + oi)}</span><span>{opt}</span></div>
            })}
            <p style={{ fontSize: '0.85rem' }}>{q.explanation}</p>
          </div>
        )
      })}
    </div>
  )
}

function hashSeed(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0
  return Math.abs(h)
}
