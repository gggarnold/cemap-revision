import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', icon: '🏠', label: 'Home' },
  { to: '/learn', icon: '📘', label: 'Learn' },
  { to: '/flashcards', icon: '🗂️', label: 'Cards' },
  { to: '/practice', icon: '📝', label: 'Practice' },
  { to: '/mock', icon: '⏱️', label: 'Mock' },
  { to: '/more', icon: '⋯', label: 'More' }
]

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      {items.map(item => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) => isActive ? 'active' : ''}
          end={item.to === '/'}
        >
          <span className="icon">{item.icon}</span>
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
