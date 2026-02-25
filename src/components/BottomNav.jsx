import './BottomNav.css'

const imgFrame1 = 'http://localhost:3845/assets/9bf4d2684383732136e64955c3a44ff54bcea562.png'
const imgHomeInactive = 'http://localhost:3845/assets/b26b4fbdbf1e8ae5e34033bd7a83efc283d13912.svg'
const imgHomeActive = 'http://localhost:3845/assets/1651393406fd7c687e7b1e39bd1e2b7aff26d8c2.svg'
const imgForestInactive = 'http://localhost:3845/assets/697f47aa338ced0fb3e5886acc90e4ac32d73347.svg'
const imgForestActive = 'http://localhost:3845/assets/7791474b1a383e7f5d50d3b75a3d74b6e9eaece2.svg'
const imgAddInactive = 'http://localhost:3845/assets/b6475a8bcf006fe19ba5adf9d1736cf1f3e77fd3.svg'
const imgAddActive = 'http://localhost:3845/assets/4bc0d3219ded2c5cec0ba7d6ef7be3d2aea53c27.svg'
const imgLeaderboardInactive = 'http://localhost:3845/assets/26c10728bbe40819a74127d360e3f57e9c1f0760.svg'
const imgLeaderboardActive = 'http://localhost:3845/assets/27cb00a8741221d6e94281ee30b5db306989d671.svg'

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
                      className={`bottom-nav-icon-image ${id === 'add' ? 'bottom-nav-icon-image--add' : ''}`}
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
