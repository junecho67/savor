import './BottomNav.css'

const imgFrame1 = '/savor/images-2.jpeg'
const imgHomeInactive = '/savor/home.svg'
const imgHomeActive = '/savor/home.svg'
const imgForestInactive = '/savor/forest.svg'
const imgForestActive = '/savor/forest.svg'
const imgAddInactive = '/savor/addrecipe.svg'
const imgAddActive = '/savor/addrecipe.svg'
const imgLeaderboardInactive = '/savor/leaderboard.svg'
const imgLeaderboardActive = '/savor/leaderboard.svg'

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'forest', label: 'Forest' },
  { id: 'add', label: 'Add Recipe' },
  { id: 'leaderboard', label: 'Leaderboard' },
  { id: 'profile', label: 'Profile' },
]

function getIconSource(id, isActive) {
  if (id === 'home') return isActive ? imgHomeActive : imgHomeInactive
  if (id === 'forest') return isActive ? imgForestActive : imgForestInactive
  if (id === 'add') return isActive ? imgAddActive : imgAddInactive
  if (id === 'leaderboard') return isActive ? imgLeaderboardActive : imgLeaderboardInactive
  return imgFrame1
}

function BottomNav({ activeId = 'home', onChange }) {
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      <ul className="bottom-nav-list">
        {NAV_ITEMS.map(({ id, label }) => {
          const isActive = activeId === id
          const iconSrc = getIconSource(id, isActive)
          return (
            <li key={id} className="bottom-nav-list-item">
              <button
                type="button"
                className={`bottom-nav-item ${isActive ? 'bottom-nav-item--active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
                onClick={() => onChange && onChange(id)}
              >
                <span className="bottom-nav-icon">
                  {id === 'profile' ? (
                    <img src={iconSrc} alt="" className="bottom-nav-profile-image" />
                  ) : (
                    <img
                      src={iconSrc}
                      alt=""
                      className={`bottom-nav-icon-image ${id === 'add' ? 'bottom-nav-icon-image--add' : ''} ${isActive ? 'is-active' : ''}`}
                    />
                  )}
                </span>
                <span className="bottom-nav-label">{label}</span>
              </button>
            </li>
          )
        })}
      </ul>
      <div className="bottom-nav-gesture" aria-hidden>
        <div className="bottom-nav-gesture-pill" />
      </div>
    </nav>
  )
}

export default BottomNav
