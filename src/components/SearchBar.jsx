import './SearchBar.css'

function SearchBar() {
  return (
    <div className="search-bar">
      <span className="search-bar-icon" aria-hidden>
        <SearchIcon />
      </span>
      <input
        type="search"
        className="search-bar-input"
        placeholder="Search recipes or families."
        aria-label="Search recipes or families"
      />
      <button type="button" className="search-bar-mic" aria-label="Voice search">
        <MicIcon />
      </button>
    </div>
  )
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function MicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}

export default SearchBar
