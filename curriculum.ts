import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './styles/global.css'

// HashRouter (not BrowserRouter) is used deliberately: GitHub Pages serves static files
// with no server-side rewrite support, so a path like /flashcards/study would 404 on
// refresh with BrowserRouter. HashRouter (#/flashcards/study) works everywhere — GitHub
// Pages, Netlify, Vercel, a plain file server — with zero extra configuration.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
