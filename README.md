import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import { flashcards } from '../data/flashcards'
import { db } from '../db/db'
import type { FlashcardState } from '../db/db'
import { isDue } from '../lib/srs'
import { curriculum } from '../data/curriculum'

export default function Flashcards() {
  const navigate = useNavigate()
  const [dueCount, setDueCount] = useState(0)
  const [starredCount, setStarredCount] = useState(0)

  useEffect(() => {
    (async () => {
      const states = await db.flashcardState.toArray()
      const stateMap = new Map<string, FlashcardState>(states.map(s => [s.cardId, s]))
      const due = flashcards.filter(c => isDue(stateMap.get(c.id))).length
      const starred = states.filter(s => s.starred).length
      setDueCount(due)
      setStarredCount(starred)
    })()
  }, [])

  const byModule = (['cemap1', 'cemap2', 'cemap3'] as const).map(m => ({
    module: m,
    label: m === 'cemap1' ? 'CeMAP 1' : m === 'cemap2' ? 'CeMAP 2' : 'CeMAP 3',
    count: flashcards.filter(c => c.module === m).length
  }))

  return (
    <div className="page">
      <TopBar title="Flashcards" />

      <button className="card card-tap btn-primary" style={{ marginTop: 16, textAlign: 'center', fontWeight: 700 }}
        onClick={() => navigate('/flashcards/study?filter=due')}>
        Study due cards ({dueCount})
      </button>

      <div className="grid-2" style={{ marginTop: 12 }}>
        <button className="btn btn-secondary" onClick={() => navigate('/flashcards/study?filter=all')}>All cards ({flashcards.length})</button>
        <button className="btn btn-secondary" onClick={() => navigate('/flashcards/study?filter=starred')}>Starred ({starredCount})</button>
      </div>
      <button className="btn btn-secondary" style={{ marginTop: 12 }} onClick={() => navigate('/flashcards/study?filter=weak')}>Weak-topic deck</button>

      <div className="section-title">By qualification</div>
      {byModule.map(m => (
        <button key={m.module} className="card card-tap" style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--card)', border: '1px solid var(--card-border)' }}
          onClick={() => navigate(`/flashcards/study?filter=module&module=${m.module}`)}>
          <span>{m.label}</span>
          <span className="pill">{m.count} cards</span>
        </button>
      ))}

      <div className="section-title">By topic</div>
      {curriculum.filter(u => u.topics.some(t => t.status === 'complete')).map(unit => (
        <div key={unit.unitKey} style={{ marginBottom: 10 }}>
          {unit.topics.filter(t => t.status === 'complete').map(t => {
            const count = flashcards.filter(c => c.module === t.module && c.unitKey === t.unitKey && c.topicKey === t.topicKey).length
            if (!count) return null
            return (
              <button key={t.topicKey} className="card card-tap" style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--card)', border: '1px solid var(--card-border)', marginBottom: 8 }}
                onClick={() => navigate(`/flashcards/study?filter=topic&module=${t.module}&unit=${t.unitKey}&topic=${t.topicKey}`)}>
                <span>{t.title}</span>
                <span className="pill">{count}</span>
              </button>
            )
          })}
        </div>
      ))}
    </div>
  )
}
