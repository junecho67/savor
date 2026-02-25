import './SearchBar.css'

const SEARCH_ICON = 'http://localhost:3845/assets/de66a21ef8862ea235ee5b85b7a442f82e72a24d.svg'
const MIC_ICON = 'http://localhost:3845/assets/f081b2aae6d5cad56960fbab7de31ddb971e6c68.svg'

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
