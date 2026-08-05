import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import { curriculum } from '../data/curriculum'
import type { ExamKey } from '../data/types'

const moduleLabels: Record<ExamKey, string> = { cemap1: 'CeMAP 1', cemap2: 'CeMAP 2', cemap3: 'CeMAP 3' }

export default function Learn() {
  const navigate = useNavigate()
  const [activeModule, setActiveModule] = useState<ExamKey>('cemap1')

  const units = curriculum.filter(u => u.module === activeModule)

  return (
    <div className="page">
      <TopBar title="Learn" />
      <div style={{ display: 'flex', gap: 8, margin: '16px 0' }}>
        {(['cemap1', 'cemap2', 'cemap3'] as ExamKey[]).map(m => (
          <button
            key={m}
            className={`pill ${activeModule === m ? 'pill-success' : ''}`}
            style={{ flex: 1, justifyContent: 'center', minHeight: 40 }}
            onClick={() => setActiveModule(m)}
          >
            {moduleLabels[m]}
          </button>
        ))}
      </div>

      {units.map(unit => (
        <div key={unit.unitKey} style={{ marginBottom: 20 }}>
          <div className="section-title" style={{ margin: '12px 0 8px' }}>{unit.title}</div>
          {unit.topics.map(topic => (
            <button
              key={topic.topicKey}
              className="card card-tap"
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--card)', border: '1px solid var(--card-border)', marginBottom: 8 }}
              onClick={() => navigate(`/learn/${topic.module}/${topic.unitKey}/${topic.topicKey}`)}
            >
              <div>
                <div style={{ fontWeight: 600 }}>{topic.title}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-faint)' }}>{topic.sourcePdf} · {topic.sourcePages}</div>
              </div>
              {topic.status === 'complete'
                ? <span className="pill pill-success">Ready</span>
                : <span className="pill pill-pending">Coming soon</span>}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}
