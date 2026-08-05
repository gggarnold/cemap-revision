import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import BottomNav from './components/BottomNav'
import Dashboard from './pages/Dashboard'
import Learn from './pages/Learn'
import LessonView from './pages/LessonView'
import Flashcards from './pages/Flashcards'
import FlashcardStudy from './pages/FlashcardStudy'
import Practice from './pages/Practice'
import QuizRunner from './pages/QuizRunner'
import MockHub from './pages/MockHub'
import MockExamRunner from './pages/MockExamRunner'
import MockResults from './pages/MockResults'
import More from './pages/More'
import Calculations from './pages/Calculations'
import Glossary from './pages/Glossary'
import Planner from './pages/Planner'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import Coverage from './pages/Coverage'
import { getSettings } from './db/db'

export default function App() {
  const [ready, setReady] = useState(false)
  const [storageError, setStorageError] = useState(false)

  useEffect(() => {
    let cancelled = false

    // Failsafe: if IndexedDB hangs or never resolves for any reason, don't leave
    // the user stuck on a splash screen forever — proceed with app defaults after 4s.
    const timeout = setTimeout(() => {
      if (!cancelled) {
        applyTheme('system')
        setReady(true)
      }
    }, 4000)

    ;(async () => {
      try {
        const s = await getSettings()
        if (cancelled) return
        applyTheme(s.theme)
        document.documentElement.setAttribute('data-textsize', s.textSize)
      } catch (err) {
        // Storage unavailable (e.g. private browsing) — fall back to sensible
        // defaults rather than hanging indefinitely. Progress won't persist this
        // session, but the app itself remains fully usable.
        console.error('Failed to load settings from local storage:', err)
        if (cancelled) return
        applyTheme('system')
        setStorageError(true)
      } finally {
        if (!cancelled) {
          clearTimeout(timeout)
          setReady(true)
        }
      }
    })()

    return () => { cancelled = true; clearTimeout(timeout) }
  }, [])

  if (!ready) return <SplashScreen />

  return (
    <div className="app-shell">
      {storageError && (
        <div style={{
          background: 'var(--warning)', color: '#1a1400', fontSize: '0.75rem',
          padding: '8px 16px', textAlign: 'center', paddingTop: 'calc(env(safe-area-inset-top, 0px) + 8px)'
        }}>
          Local storage isn’t available right now (e.g. private browsing) — the app works, but progress won’t be saved this session.
        </div>
      )}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:module/:unit/:topic" element={<LessonView />} />
        <Route path="/flashcards" element={<Flashcards />} />
        <Route path="/flashcards/study" element={<FlashcardStudy />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/practice/quiz" element={<QuizRunner />} />
        <Route path="/mock" element={<MockHub />} />
        <Route path="/mock/:examId" element={<MockExamRunner />} />
        <Route path="/mock/:examId/results/:attemptId" element={<MockResults />} />
        <Route path="/calculations" element={<Calculations />} />
        <Route path="/glossary" element={<Glossary />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings onThemeChange={applyTheme} />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/more" element={<More />} />
      </Routes>
      <BottomNav />
    </div>
  )
}

function SplashScreen() {
  return (
    <div className="app-shell" style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', marginBottom: 8 }}>📘</div>
        <div style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.02em' }}>CeMAP Revision</div>
        <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginTop: 6 }}>Loading your progress…</div>
      </div>
    </div>
  )
}

export function applyTheme(theme: 'light' | 'dark' | 'system') {
  let resolved = theme
  if (theme === 'system') {
    resolved = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  }
  document.documentElement.setAttribute('data-theme', resolved)
}
