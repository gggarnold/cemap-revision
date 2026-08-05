import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import { mockExams } from '../data/mockExams'
import { examConfigs } from '../data/examConfig'
import { db } from '../db/db'
import type { MockAttempt } from '../db/db'

export default function MockHub() {
  const navigate = useNavigate()
  const [history, setHistory] = useState<MockAttempt[]>([])

  useEffect(() => {
    db.mockAttempts.orderBy('startedAt').reverse().toArray().then(setHistory)
  }, [])

  return (
    <div className="page">
      <TopBar title="Mock Exams" />

      <div className="section-title">Available original mock exams</div>
      {mockExams.map(exam => (
        <button key={exam.id} className="card card-tap" style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--card)', border: '1px solid var(--card-border)' }}
          onClick={() => navigate(`/mock/${exam.id}`)}>
          <div>
            <div style={{ fontWeight: 600 }}>{exam.title}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-faint)' }}>
              {exam.questionIds.length} questions · {exam.timeMinutes} min · pass mark {exam.passMark}
            </div>
          </div>
          <span className="pill pill-success">Start</span>
        </button>
      ))}

      <div className="section-title">Exam format reference (verified)</div>
      {examConfigs.map(cfg => (
        <div className="card" key={cfg.key}>
          <strong>{cfg.label}</strong>
          {cfg.units.map(u => (
            <div key={u.unitKey} style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginTop: 6 }}>
              {u.unitLabel}: {u.questionCount} questions, {u.timeMinutes} min, pass mark {u.passMark}/{u.questionCount} ({u.passPercent}%)
              {u.caseStudyCount && ` — ${u.caseStudyCount} case studies × ${u.questionsPerCaseStudy} questions`}
            </div>
          ))}
          <p style={{ fontSize: '0.7rem', color: 'var(--text-faint)', marginTop: 6, marginBottom: 0 }}>{cfg.sourceNote}</p>
        </div>
      ))}

      <div className="section-title">Your attempt history</div>
      {history.length === 0 && <div className="card empty-state">No mock exams sat yet.</div>}
      {history.map(h => {
        const exam = mockExams.find(e => e.id === h.examId)
        return (
          <div className="card" key={h.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{exam?.title ?? h.examId} — {new Date(h.startedAt).toLocaleDateString()}</span>
            {typeof h.score === 'number'
              ? <span className={`pill ${h.passed ? 'pill-success' : 'pill-warning'}`}>{h.score}%</span>
              : <span className="pill pill-pending">In progress</span>}
          </div>
        )
      })}
    </div>
  )
}
