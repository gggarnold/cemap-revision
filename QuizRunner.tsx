import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import TopBar from '../components/TopBar'
import { curriculum } from '../data/curriculum'
import { lessons } from '../data/lessons'
import { db, logStudyMinutes } from '../db/db'

export default function LessonView() {
  const { module, unit, topic } = useParams()
  const navigate = useNavigate()
  const [completed, setCompleted] = useState(false)
  const [checkAnswers, setCheckAnswers] = useState<Record<number, number>>({})

  const flatTopics = curriculum.flatMap(u => u.topics)
  const idx = flatTopics.findIndex(t => t.module === module && t.unitKey === unit && t.topicKey === topic)
  const current = flatTopics[idx]
  const prevTopic = idx > 0 ? flatTopics[idx - 1] : null
  const nextTopic = idx < flatTopics.length - 1 ? flatTopics[idx + 1] : null

  const lesson = lessons.find(l => l.module === module && l.unitKey === unit && l.topicKey === topic)

  useEffect(() => {
    if (!lesson) return
    db.lessonProgress.get(lesson.id).then(p => setCompleted(!!p?.completed))
    setCheckAnswers({})
    const start = Date.now()
    return () => { logStudyMinutes(Math.max(1, Math.round((Date.now() - start) / 60000))) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [module, unit, topic])

  if (!current) return <div className="page"><TopBar title="Not found" back /></div>

  async function toggleComplete() {
    if (!lesson) return
    const next = !completed
    setCompleted(next)
    await db.lessonProgress.put({ lessonId: lesson.id, completed: next, lastViewedAt: Date.now() })
  }

  function goTo(t: typeof current | null) {
    if (!t) return
    navigate(`/learn/${t.module}/${t.unitKey}/${t.topicKey}`)
  }

  return (
    <div className="page">
      <TopBar title={current.title} back />

      {!lesson && (
        <div className="card" style={{ marginTop: 16 }}>
          <div className="pill pill-pending" style={{ marginBottom: 10 }}>Content not yet authored</div>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
            This topic hasn\u2019t had its lesson, flashcards or questions written yet. It exists in your source
            material at <strong>{current.sourcePdf}, {current.sourcePages}</strong> and is queued to be added in a
            future content pass — see the Coverage report on the dashboard for the full list.
          </p>
        </div>
      )}

      {lesson && (
        <>
          {lesson.dateSensitive && (
            <div className="datesensitive-banner">
              ⚠️ Contains rates/allowances that change each Budget. Check that this information remains current for your exam sitting.
            </div>
          )}
          <p style={{ color: 'var(--text-dim)' }}>{lesson.intro}</p>

          {lesson.sections.map((s, i) => (
            <div className="card" key={i}>
              <strong>{s.heading}</strong>
              <ul style={{ margin: '8px 0 0', paddingLeft: 18 }}>
                {s.bullets.map((b, j) => <li key={j} style={{ marginBottom: 6, fontSize: '0.92rem' }}>{b}</li>)}
              </ul>
            </div>
          ))}

          {lesson.workedExample && (
            <div className="card" style={{ borderColor: 'var(--accent)' }}>
              <strong>💡 Worked example — {lesson.workedExample.title}</strong>
              <ol style={{ margin: '8px 0 0', paddingLeft: 18 }}>
                {lesson.workedExample.body.map((b, j) => <li key={j} style={{ marginBottom: 6, fontSize: '0.92rem' }}>{b}</li>)}
              </ol>
            </div>
          )}

          <div className="card" style={{ borderColor: 'var(--danger)' }}>
            <strong>⚠️ Common exam traps</strong>
            <ul style={{ margin: '8px 0 0', paddingLeft: 18 }}>
              {lesson.examTraps.map((t, j) => <li key={j} style={{ marginBottom: 6, fontSize: '0.92rem' }}>{t}</li>)}
            </ul>
          </div>

          <div className="card" style={{ borderColor: 'var(--success)' }}>
            <strong>✅ Remember this</strong>
            <ul style={{ margin: '8px 0 0', paddingLeft: 18 }}>
              {lesson.remember.map((t, j) => <li key={j} style={{ marginBottom: 6, fontSize: '0.92rem' }}>{t}</li>)}
            </ul>
          </div>

          <div className="section-title">Knowledge check</div>
          {lesson.knowledgeCheck.map((kc, qi) => {
            const chosen = checkAnswers[qi]
            return (
              <div className="card" key={qi}>
                <p style={{ fontWeight: 600, marginTop: 0 }}>{kc.question}</p>
                {kc.options.map((opt, oi) => {
                  const isChosen = chosen === oi
                  const showResult = chosen !== undefined
                  const cls = showResult
                    ? (oi === kc.correctIndex ? 'option-btn correct' : isChosen ? 'option-btn incorrect' : 'option-btn')
                    : 'option-btn'
                  return (
                    <button key={oi} className={cls} onClick={() => setCheckAnswers(a => ({ ...a, [qi]: oi }))}>
                      <span className="letter">{String.fromCharCode(65 + oi)}</span>
                      <span>{opt}</span>
                    </button>
                  )
                })}
                {chosen !== undefined && (
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: 0 }}>{kc.explanation}</p>
                )}
              </div>
            )
          })}

          <p style={{ fontSize: '0.72rem', color: 'var(--text-faint)' }}>Source: {lesson.source}</p>

          <button className="btn btn-primary" onClick={toggleComplete} style={{ marginTop: 8 }}>
            {completed ? '✓ Marked complete' : 'Mark lesson complete'}
          </button>
        </>
      )}

      <div className="grid-2" style={{ marginTop: 16 }}>
        <button className="btn btn-secondary" disabled={!prevTopic} onClick={() => goTo(prevTopic)}>‹ Previous</button>
        <button className="btn btn-secondary" disabled={!nextTopic} onClick={() => goTo(nextTopic)}>Next ›</button>
      </div>
    </div>
  )
}
