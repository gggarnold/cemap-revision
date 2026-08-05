:root {
  --bg: #0b1220;
  --bg-elevated: #111a2e;
  --card: #16213a;
  --card-border: #223055;
  --text: #f1f5f9;
  --text-dim: #94a3b8;
  --text-faint: #64748b;
  --accent: #38bdf8;
  --accent-2: #22d3ee;
  --success: #34d399;
  --warning: #fbbf24;
  --danger: #f87171;
  --radius: 16px;
  --radius-sm: 10px;
  --nav-height: 64px;
  --font-scale: 1;
}

[data-theme='light'] {
  --bg: #f4f6fb;
  --bg-elevated: #ffffff;
  --card: #ffffff;
  --card-border: #e2e8f0;
  --text: #0f172a;
  --text-dim: #475569;
  --text-faint: #94a3b8;
}

[data-textsize='large'] { --font-scale: 1.125; }
[data-textsize='xlarge'] { --font-scale: 1.25; }

* { box-sizing: border-box; }

html, body, #root {
  height: 100%;
  margin: 0;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: calc(16px * var(--font-scale));
  -webkit-font-smoothing: antialiased;
  overscroll-behavior-y: none;
}

button, input, select, textarea { font-family: inherit; font-size: inherit; color: inherit; }
button { cursor: pointer; }
a { color: inherit; text-decoration: none; }

.app-shell {
  max-width: 560px;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg);
}

.page {
  flex: 1;
  padding: calc(env(safe-area-inset-top, 0px) + 20px) 16px calc(var(--nav-height) + env(safe-area-inset-bottom, 0px) + 24px);
  width: 100%;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  padding: calc(env(safe-area-inset-top, 0px) + 14px) 16px 14px;
  background: color-mix(in srgb, var(--bg) 88%, transparent);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 1px solid var(--card-border);
}

.topbar h1 { font-size: 1.15rem; margin: 0; font-weight: 700; }
.topbar .back { font-size: 1.4rem; padding: 4px 8px; margin-left: -8px; border-radius: 8px; background: none; border: none; color: var(--text); }

.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 560px;
  height: calc(var(--nav-height) + env(safe-area-inset-bottom, 0px));
  padding-bottom: env(safe-area-inset-bottom, 0px);
  background: color-mix(in srgb, var(--bg-elevated) 92%, transparent);
  backdrop-filter: blur(14px);
  border-top: 1px solid var(--card-border);
  display: flex;
  z-index: 50;
}

.bottom-nav a {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-size: 0.68rem;
  color: var(--text-faint);
  min-height: 44px;
}

.bottom-nav a.active { color: var(--accent); }
.bottom-nav .icon { font-size: 1.3rem; line-height: 1; }

.card {
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: var(--radius);
  padding: 16px;
}

.card + .card { margin-top: 12px; }

.card-tap {
  display: block;
  width: 100%;
  text-align: left;
  min-height: 44px;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.stat {
  background: var(--card);
  border: 1px solid var(--card-border);
  border-radius: var(--radius-sm);
  padding: 12px;
}

.stat .value { font-size: 1.4rem; font-weight: 700; }
.stat .label { font-size: 0.72rem; color: var(--text-dim); margin-top: 2px; }

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  padding: 12px 18px;
  border-radius: var(--radius-sm);
  border: none;
  font-weight: 600;
  font-size: 0.95rem;
  width: 100%;
}

.btn-primary { background: linear-gradient(135deg, var(--accent), var(--accent-2)); color: #041018; }
.btn-secondary { background: var(--card); border: 1px solid var(--card-border); color: var(--text); }
.btn-danger { background: color-mix(in srgb, var(--danger) 18%, transparent); color: var(--danger); border: 1px solid color-mix(in srgb, var(--danger) 35%, transparent); }
.btn-sm { min-height: 38px; padding: 8px 14px; font-size: 0.85rem; }

.pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 600;
  background: var(--card);
  border: 1px solid var(--card-border);
  color: var(--text-dim);
}

.pill-success { color: var(--success); border-color: color-mix(in srgb, var(--success) 40%, transparent); background: color-mix(in srgb, var(--success) 12%, transparent); }
.pill-warning { color: var(--warning); border-color: color-mix(in srgb, var(--warning) 40%, transparent); background: color-mix(in srgb, var(--warning) 12%, transparent); }
.pill-pending { color: var(--text-faint); }

.section-title {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--text-dim);
  margin: 20px 0 8px;
  font-weight: 700;
}

.progress-track {
  height: 8px;
  background: var(--card-border);
  border-radius: 999px;
  overflow: hidden;
}
.progress-fill { height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent-2)); border-radius: 999px; }

.option-btn {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
  text-align: left;
  padding: 14px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--card-border);
  background: var(--card);
  min-height: 48px;
  margin-bottom: 10px;
  font-size: 0.92rem;
}
.option-btn .letter {
  flex-shrink: 0;
  width: 24px; height: 24px;
  border-radius: 50%;
  background: var(--card-border);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 700;
}
.option-btn.selected { border-color: var(--accent); }
.option-btn.correct { border-color: var(--success); background: color-mix(in srgb, var(--success) 12%, var(--card)); }
.option-btn.incorrect { border-color: var(--danger); background: color-mix(in srgb, var(--danger) 12%, var(--card)); }

.flashcard {
  min-height: 240px;
  border-radius: var(--radius);
  background: var(--card);
  border: 1px solid var(--card-border);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 24px;
  font-size: 1.05rem;
  position: relative;
}

.datesensitive-banner {
  background: color-mix(in srgb, var(--warning) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--warning) 40%, transparent);
  color: var(--warning);
  border-radius: var(--radius-sm);
  padding: 10px 12px;
  font-size: 0.8rem;
  margin-bottom: 12px;
}

.empty-state {
  text-align: center;
  padding: 32px 16px;
  color: var(--text-dim);
}

.timer-pill {
  font-variant-numeric: tabular-nums;
  font-weight: 700;
}

::-webkit-scrollbar { display: none; }
