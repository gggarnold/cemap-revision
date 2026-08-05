import { useNavigate } from 'react-router-dom'

export default function TopBar({ title, back }: { title: string; back?: boolean }) {
  const navigate = useNavigate()
  return (
    <header className="topbar">
      {back && (
        <button className="back" onClick={() => navigate(-1)} aria-label="Back">‹</button>
      )}
      <h1>{title}</h1>
    </header>
  )
}
