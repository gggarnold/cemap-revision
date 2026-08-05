import { useMemo, useState } from 'react'
import TopBar from '../components/TopBar'
import { glossary } from '../data/glossary'
import type { ExamKey } from '../data/types'

export default function Glossary() {
  const [query, setQuery] = useState('')
  const [moduleFilter, setModuleFilter] = useState<ExamKey | 'all'>('all')

  const filtered = useMemo(() => {
    return glossary
      .filter(t => moduleFilter === 'all' || t.module.includes(moduleFilter))
      .filter(t => t.term.toLowerCase().includes(query.toLowerCase()) || t.definition.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => a.term.localeCompare(b.term))
  }, [query, moduleFilter])

  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>()
    for (const t of filtered) {
      const letter = t.term[0].toUpperCase()
      map.set(letter, [...(map.get(letter) ?? []), t])
    }
    return [...map.entries()]
  }, [filtered])

  return (
    <div className="page">
      <TopBar title="Glossary" back />
      <input
        placeholder="Search terms and definitions…"
        value={query} onChange={e => setQuery(e.target.value)}
        style={{ width: '100%', padding: 12, borderRadius: 10, border: '1px solid var(--card-border)', background: 'var(--card)', margin: '16px 0 10px' }}
      />
      <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
        {(['all', 'cemap1', 'cemap2', 'cemap3'] as const).map(m => (
          <button key={m} className={`pill ${moduleFilter === m ? 'pill-success' : ''}`} onClick={() => setModuleFilter(m)}>
            {m === 'all' ? 'All' : m.toUpperCase()}
          </button>
        ))}
      </div>

      {grouped.length === 0 && <div className="card empty-state">No matching terms.</div>}
      {grouped.map(([letter, terms]) => (
        <div key={letter}>
          <div className="section-title">{letter}</div>
          {terms.map(t => (
            <div className="card" key={t.id}>
              <strong>{t.term}</strong>
              <p style={{ fontSize: '0.88rem', margin: '6px 0 0' }}>{t.definition}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
