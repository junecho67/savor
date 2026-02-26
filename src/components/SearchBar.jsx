import './SearchBar.css'

const SEARCH_ICON = '/savor/Frame 70.svg'
const MIC_ICON = '/savor/Microphone.svg'

function SearchBar() {
  return (
    <div className="search-bar">
      <span className="search-bar-icon" aria-hidden>
        <img src={SEARCH_ICON} alt="" />
      </span>
      <input
        type="search"
        className="search-bar-input"
        placeholder="Search recipes or families."
        aria-label="Search recipes or families"
      />
      <button type="button" className="search-bar-mic" aria-label="Voice search">
        <img src={MIC_ICON} alt="" />
      </button>
    </div>
  )
}

export default SearchBar
