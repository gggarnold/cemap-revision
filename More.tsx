import { useEffect, useState } from 'react'
import TopBar from '../components/TopBar'
import { getAccuracyByTopic, getOverallAccuracy, getReadinessEstimate, getMockExamStats, getFlashcardsDue } from '../lib/progress'
import { getStreak, db } from '../db/db'
import { flashcards } from '../data/flashcards'

function BarRow({ label, value, max = 100 }: { label: string; value: number; max?: number }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: 4 }}>
        <span>{label}</span><span>{value}%</span>
      </div>
      <div className="progress-track"><div className="progress-fill" style={{ width: `${Math.min(100, (value / max) * 100)}%` }} /></div>
    </div>
  )
}

export default function Analytics() {
  const [data, setData] = useState<null | {
    byTopic: { key: string; accuracy: number; attempts: number }[]
    overall: { answered: number; correct: number; accuracy: number }
    readiness: number
    mock: { average: number; attempts: number }
    streak: number
    due: number
    studyMinutes: { date: string; minutes: number }[]
  }>(null)

  useEffect(() => {
    (async () => {
      const byTopicRaw = await getAccuracyByTopic()
      const overall = await getOverallAccuracy()
      const readiness = await getReadinessEstimate()
      const mock = await getMockExamStats()
      const streak = await getStreak()
      const due = await getFlashcardsDue(flashcards.length)
      const sessions = await db.studySessions.orderBy('date').reverse().limit(7).toArray()
      setData({
        byTopic: byTopicRaw.map(t => ({ key: `${t.module.toUpperCase()} ${t.topicKey}`, accuracy: t.accuracy, attempts: t.attempts })),
        overall, readiness, mock, streak, due,
        studyMinutes: sessions.reverse().map(s => ({ date: s.date, minutes: s.minutes }))
      })
    })()
  }, [])

  if (!data) return <div className="page"><TopBar title="Analytics" back /></div>

  const maxMinutes = Math.max(1, ...data.studyMinutes.map(s => s.minutes))

  return (
    <div className="page">
      <TopBar title="Analytics" back />

      <div className="grid-2" style={{ marginTop: 16 }}>
        <div className="stat"><div className="value">{data.overall.accuracy}%</div><div className="label">Overall accuracy</div></div>
        <div className="stat"><div className="value">{data.overall.answered}</div><div className="label">Questions answered</div></div>
        <div className="stat"><div className="value">{data.streak}🔥</div><div className="label">Day streak</div></div>
        <div className="stat"><div className="value">{data.due}</div><div className="label">Flashcards due</div></div>
      </div>

      <div className="section-title">Study time — last 7 days</div>
      <div className="card" style={{ display: 'flex', alignItems: 'flex-end', gap: 8, height: 120 }}>
        {data.studyMinutes.length === 0 && <div className="empty-state" style={{ width: '100%' }}>No study sessions logged yet.</div>}
        {data.studyMinutes.map((s, i) => (
          <div key={i} style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ height: `${(s.minutes / maxMinutes) * 80}px`, background: 'var(--accent)', borderRadius: 4, minHeight: 4 }} />
            <div style={{ fontSize: '0.6rem', color: 'var(--text-faint)', marginTop: 4 }}>{s.date.slice(5)}</div>
          </div>
        ))}
      </div>

      <div className="section-title">Accuracy by topic</div>
      <div className="card">
        {data.byTopic.length === 0 && <div className="empty-state">Answer some practice questions to see topic accuracy.</div>}
        {data.byTopic.map((t, i) => <BarRow key={i} label={`${t.key} (${t.attempts})`} value={t.accuracy} />)}
      </div>

      <div className="section-title">Readiness estimate</div>
      <div className="card">
        <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>{data.readiness}%</div>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          This is a rough activity-based estimate — a blend of lesson completion, question accuracy and mock exam scores.
          It is not an official or predictive score; treat it as a guide to where more revision may help.
        </p>
      </div>
    </div>
  )
}
