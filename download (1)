import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import TopBar from '../components/TopBar'
import { flashcards } from '../data/flashcards'
import { db } from '../db/db'
import type { FlashcardState } from '../db/db'
import { schedule, isDue, type Rating } from '../lib/srs'
import { getAccuracyByTopic } from '../lib/progress'

export default function FlashcardStudy() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const filter = params.get('filter') ?? 'due'
  const moduleParam = params.get('module')
  const unitParam = params.get('unit')
  const topicParam = params.get('topic')

  const [states, setStates] = useState<Map<string, FlashcardState>>(new Map())
  const [deck, setDeck] = useState<typeof flashcards>([])
  const [index, setIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const all = await db.flashcardState.toArray()
      const map = new Map(all.map(s => [s.cardId, s]))
      setStates(map)

      let list = flashcards
      if (moduleParam) list = list.filter(c => c.module === moduleParam)
      if (unitParam) list = list.filter(c => c.unitKey === unitParam)
      if (topicParam) list = list.filter(c => c.topicKey === topicParam)

      if (filter === 'due') list = list.filter(c => isDue(map.get(c.id)))
      if (filter === 'starred') list = list.filter(c => map.get(c.id)?.starred)
      if (filter === 'weak') {
        const weakTopics = (await getAccuracyByTopic()).filter(t => t.attempts >= 3 && t.accuracy < 60)
        const weakKeys = new Set(weakTopics.map(t => `${t.module}-${t.unitKey}-${t.topicKey}`))
        list = list.filter(c => weakKeys.has(`${c.module}-${c.unitKey}-${c.topicKey}`))
      }
      setDeck(list)
      setLoading(false)
    })()
  }, [filter, moduleParam, unitParam, topicParam])

  const current = deck[index]

  async function rate(rating: Rating) {
    if (!current) return
    const prev = states.get(current.id)
    const next = schedule(prev, rating)
    next.cardId = current.id
    next.starred = prev?.starred ?? false
    await db.flashcardState.put(next)
    setStates(m => new Map(m).set(current.id, next))
    setRevealed(false)
    setIndex(i => i + 1)
  }

  async function toggleStar() {
    if (!current) return
    const prev = states.get(current.id) ?? { cardId: current.id, easeFactor: 2.5, intervalDays: 0, repetitions: 0, dueAt: Date.now(), starred: false }
    const next = { ...prev, starred: !prev.starred }
    await db.flashcardState.put(next)
    setStates(m => new Map(m).set(current.id, next))
  }

  const progressPct = deck.length ? Math.round((Math.min(index, deck.length) / deck.length) * 100) : 0

  if (loading) return <div className="page"><TopBar title="Flashcards" back /><p>Loading…</p></div>

  if (!deck.length) {
    return (
      <div className="page">
        <TopBar title="Flashcards" back />
        <div className="card empty-state" style={{ marginTop: 16 }}>
          No cards match this filter right now — nice work, or try a different deck.
        </div>
        <button className="btn btn-secondary" style={{ marginTop: 12 }} onClick={() => navigate('/flashcards')}>Back to decks</button>
      </div>
    )
  }

  if (index >= deck.length) {
    return (
      <div className="page">
        <TopBar title="Session complete" back />
        <div className="card" style={{ marginTop: 16, textAlign: 'center' }}>
          <div style={{ fontSize: '2rem' }}>🎉</div>
          <p>You reviewed {deck.length} card{deck.length === 1 ? '' : 's'}.</p>
        </div>
        <button className="btn btn-primary" style={{ marginTop: 12 }} onClick={() => navigate('/flashcards')}>Back to decks</button>
      </div>
    )
  }

  const isStarred = states.get(current.id)?.starred

  return (
    <div className="page">
      <TopBar title={`Card ${index + 1} of ${deck.length}`} back />
      <div className="progress-track" style={{ marginTop: 12 }}><div className="progress-fill" style={{ width: `${progressPct}%` }} /></div>

      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '12px 0' }}>
        <span className="pill">{current.category}</span>
        <button className="pill" onClick={toggleStar}>{isStarred ? '⭐ Starred' : '☆ Star'}</button>
      </div>

      <div className="flashcard" onClick={() => setRevealed(r => !r)}>
        <div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-faint)', marginBottom: 10 }}>{revealed ? 'ANSWER' : 'TAP TO REVEAL'}</div>
          <div>{revealed ? current.back : current.front}</div>
        </div>
      </div>

      <p style={{ fontSize: '0.72rem', color: 'var(--text-faint)', textAlign: 'center' }}>Source: {current.source}</p>

      {!revealed && (
        <button className="btn btn-primary" onClick={() => setRevealed(true)}>Reveal answer</button>
      )}

      {revealed && (
        <div className="grid-2" style={{ gap: 8, marginTop: 4 }}>
          <button className="btn btn-danger btn-sm" onClick={() => rate('again')}>Again</button>
          <button className="btn btn-secondary btn-sm" onClick={() => rate('hard')}>Hard</button>
          <button className="btn btn-secondary btn-sm" onClick={() => rate('good')}>Good</button>
          <button className="btn btn-primary btn-sm" onClick={() => rate('easy')}>Easy</button>
        </div>
      )}

      <div className="grid-2" style={{ marginTop: 16 }}>
        <button className="btn btn-secondary" disabled={index === 0} onClick={() => { setIndex(i => Math.max(0, i - 1)); setRevealed(false) }}>‹ Previous</button>
        <button className="btn btn-secondary" onClick={() => { setIndex(i => Math.min(deck.length, i + 1)); setRevealed(false) }}>Skip ›</button>
      </div>
    </div>
  )
}
