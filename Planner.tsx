import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import ProgressRing from '../components/ProgressRing'
import {
  getLessonCompletion, getModuleProgress, getOverallAccuracy,
  getRecentQuizScores, getMockExamStats, getReadinessEstimate, getAccuracyByTopic
} from '../lib/progress'
import { getStreak } from '../db/db'
import { lessons } from '../data/lessons'
import { curriculum } from '../data/curriculum'

function emptyStats() {
  return {
    lessonCompletion: { completed: 0, total: lessons.length },
    accuracy: { answered: 0, correct: 0, accuracy: 0 },
    recent: [],
    mock: { average: 0, attempts: 0 },
    readiness: 0,
    streak: 0,
    weakest: [],
    perModule: {
      cemap1: { completedTopics: 0, totalTopics: 0, authoredTopics: 0 },
      cemap2: { completedTopics: 0, totalTopics: 0, authoredTopics: 0 },
      cemap3: { completedTopics: 0, totalTopics: 0, authoredTopics: 0 }
    }
  }
}

export default function Dashboard() {
  const navigate = useNavigate()
  const [stats, setStats] = useState<null | {
    lessonCompletion: { completed: number; total: number }
    accuracy: { answered: number; correct: number; accuracy: number }
    recent: { date: string; accuracy: number; quizType: string }[]
    mock: { average: number; attempts: number }
    readiness: number
    streak: number
    weakest: { module: string; topicKey: string; accuracy: number }[]
    perModule: Record<string, { completedTopics: number; totalTopics: number; authoredTopics: number }>
  }>(null)

  useEffect(() => {
    let cancelled = false

    // Failsafe: never leave the dashboard stuck on "Loading" if storage queries
    // hang or fail — fall back to empty/zeroed stats so the page still renders.
    const timeout = setTimeout(() => {
      if (!cancelled) setStats(s => s ?? emptyStats())
    }, 4000)

    ;(async () => {
      try {
        const [lessonCompletion, accuracy, recent, mock, readiness, streak, byTopic, cemap1, cemap2, cemap3] = await Promise.all([
          getLessonCompletion(), getOverallAccuracy(), getRecentQuizScores(3), getMockExamStats(),
          getReadinessEstimate(), getStreak(), getAccuracyByTopic(),
          getModuleProgress('cemap1'), getModuleProgress('cemap2'), getModuleProgress('cemap3')
        ])
        if (cancelled) return
        const weakest = byTopic.filter(t => t.attempts >= 3).sort((a, b) => a.accuracy - b.accuracy).slice(0, 3)
          .map(t => ({ module: t.module, topicKey: t.topicKey, accuracy: t.accuracy }))
        setStats({
          lessonCompletion, accuracy, recent, mock, readiness, streak, weakest,
          perModule: { cemap1, cemap2, cemap3 }
        })
      } catch (err) {
        console.error('Failed to load dashboard stats from local storage:', err)
        if (!cancelled) setStats(emptyStats())
      } finally {
        if (!cancelled) clearTimeout(timeout)
      }
    })()

    return () => { cancelled = true; clearTimeout(timeout) }
  }, [])

  const authoredTotal = lessons.length
  const totalTopics = curriculum.flatMap(u => u.topics).length

  if (!stats) {
    return (
      <div className="page">
        <TopBar title="CeMAP Revision" />
        <div className="empty-state" style={{ marginTop: 24 }}>Loading your progress…</div>
      </div>
    )
  }

  return (
    <div className="page">
      <TopBar title="CeMAP Revision" />

      <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 16 }}>
        <ProgressRing percent={stats.readiness} label="readiness" />
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>Estimated exam readiness</div>
          <div style={{ color: 'var(--text-dim)', fontSize: '0.82rem', marginTop: 4 }}>
            A rough estimate from your lesson completion, quiz accuracy and mock scores — not an official prediction.
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ marginTop: 12 }}>
        <div className="stat"><div className="value">{stats.streak}🔥</div><div className="label">Day streak</div></div>
        <div className="stat"><div className="value">{stats.accuracy.answered}</div><div className="label">Questions answered</div></div>
        <div className="stat"><div className="value">{stats.accuracy.accuracy}%</div><div className="label">Accuracy</div></div>
        <div className="stat"><div className="value">{stats.mock.attempts ? `${stats.mock.average}%` : '—'}</div><div className="label">Avg mock score ({stats.mock.attempts} sat)</div></div>
      </div>

      <button className="btn btn-primary" style={{ marginTop: 16 }} onClick={() => navigate('/learn')}>Continue Revision</button>
      <div className="grid-2" style={{ marginTop: 10 }}>
        <button className="btn btn-secondary" onClick={() => navigate('/practice?quick=1')}>Quick 10 Questions</button>
        <button className="btn btn-secondary" onClick={() => navigate('/mock')}>Start Mock Exam</button>
      </div>

      <div className="section-title">Progress by qualification</div>
      {(['cemap1', 'cemap2', 'cemap3'] as const).map(m => {
        const p = stats.perModule[m]
        const pct = p.totalTopics ? Math.round((p.completedTopics / p.totalTopics) * 100) : 0
        const label = m === 'cemap1' ? 'CeMAP 1' : m === 'cemap2' ? 'CeMAP 2' : 'CeMAP 3'
        return (
          <div className="card" key={m}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <strong>{label}</strong>
              <span style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>{p.completedTopics}/{p.totalTopics} topics studied</span>
            </div>
            <div className="progress-track"><div className="progress-fill" style={{ width: `${pct}%` }} /></div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-faint)', marginTop: 6 }}>
              {p.authoredTopics}/{p.totalTopics} topics have full lesson content authored so far.
            </div>
          </div>
        )
      })}

      <div className="section-title">Weakest topics</div>
      {stats.weakest.length === 0 && <div className="card empty-state">Answer a few more questions to see your weakest topics here.</div>}
      {stats.weakest.map((w, i) => (
        <div className="card" key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{w.module.toUpperCase()} — {w.topicKey}</span>
          <span className="pill pill-warning">{w.accuracy}%</span>
        </div>
      ))}

      <div className="section-title">Recent quiz scores</div>
      {stats.recent.length === 0 && <div className="card empty-state">No quizzes taken yet — try Quick 10 Questions above.</div>}
      {stats.recent.map((r, i) => (
        <div className="card" key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{r.date} · {r.quizType}</span>
          <span className="pill">{r.accuracy}%</span>
        </div>
      ))}

      <div className="section-title">Content coverage</div>
      <button className="card card-tap" onClick={() => navigate('/coverage')} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: '1px solid var(--card-border)' }}>
        <span>{authoredTotal} of {totalTopics} topics fully authored — see the full coverage report</span>
        <span>›</span>
      </button>
    </div>
  )
}
