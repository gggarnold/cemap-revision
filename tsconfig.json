import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import TopBar from '../components/TopBar'
import { allQuestions } from '../data/allQuestions'
import { curriculum } from '../data/curriculum'
import { db } from '../db/db'

export default function Practice() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const [bookmarkCount, setBookmarkCount] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)

  useEffect(() => {
    if (params.get('quick') === '1') {
      navigate('/practice/quiz?mode=quick10', { replace: true })
      return
    }
    (async () => {
      const bookmarks = await db.bookmarks.toArray()
      setBookmarkCount(bookmarks.length)
      const attempts = await db.questionAttempts.toArray()
      const lastByQuestion = new Map<string, boolean>()
      for (const a of attempts.sort((x, y) => x.timestamp - y.timestamp)) {
        lastByQuestion.set(a.questionId, a.correct)
      }
      setIncorrectCount([...lastByQuestion.values()].filter(v => !v).length)
    })()
  }, [params])

  const availableTopics = curriculum.flatMap(u => u.topics).filter(t => t.status === 'complete')

  return (
    <div className="page">
      <TopBar title="Practice" />

      <button className="card card-tap" style={{ marginTop: 16, background: 'var(--card)', border: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between' }}
        onClick={() => navigate('/practice/quiz?mode=quick10')}>
        <span>⚡ Quick 10 Questions</span><span>›</span>
      </button>
      <button className="card card-tap" style={{ background: 'var(--card)', border: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between' }}
        onClick={() => navigate('/practice/quiz?mode=random')}>
        <span>🎲 Random quiz (all topics)</span><span>›</span>
      </button>
      <button className="card card-tap" style={{ background: 'var(--card)', border: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between' }}
        onClick={() => navigate('/practice/quiz?mode=weak')}>
        <span>🎯 Weak-area quiz</span><span>›</span>
      </button>
      <button className="card card-tap" style={{ background: 'var(--card)', border: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between' }}
        onClick={() => navigate('/practice/quiz?mode=bookmarked')}>
        <span>🔖 Bookmarked questions ({bookmarkCount})</span><span>›</span>
      </button>
      <button className="card card-tap" style={{ background: 'var(--card)', border: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between' }}
        onClick={() => navigate('/practice/quiz?mode=incorrect')}>
        <span>❌ Previously incorrect ({incorrectCount})</span><span>›</span>
      </button>

      <div className="section-title">By topic</div>
      {availableTopics.map(t => {
        const count = allQuestions.filter(q => q.module === t.module && q.unitKey === t.unitKey && q.topicKey === t.topicKey).length
        if (!count) return null
        return (
          <button key={`${t.module}-${t.unitKey}-${t.topicKey}`} className="card card-tap" style={{ display: 'flex', justifyContent: 'space-between', background: 'var(--card)', border: '1px solid var(--card-border)', marginBottom: 8 }}
            onClick={() => navigate(`/practice/quiz?mode=topic&module=${t.module}&unit=${t.unitKey}&topic=${t.topicKey}`)}>
            <span>{t.title}</span>
            <span className="pill">{count} Qs</span>
          </button>
        )
      })}
    </div>
  )
}
