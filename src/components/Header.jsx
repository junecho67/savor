import './Header.css'

function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        <span className="header-logo-text">savor</span>
        <span className="header-logo-leaf" aria-hidden>
          <LeafIcon />
        </span>
      </div>
      <button type="button" className="header-notifications" aria-label="Notifications">
        <BellIcon />
      </button>
    </div>
  )
}

function LeafIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3C7 8 5 14 5 20c4-2 8-2 12 0 0-6-2-12-7-17-1 0-2 0-3 0z" fill="#6B8E23" stroke="#6B8E23" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  )
}

export default Header
