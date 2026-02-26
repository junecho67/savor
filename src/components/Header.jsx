import './Header.css'

const SAVOR_LOGO = '/savor/SavorlogoFINAL 1.png'
const BELL_ICON = '/savor/notification.svg'

function Header() {
  return (
    <div className="header">
      <img src={SAVOR_LOGO} alt="Savor" className="header-logo-image" />
      <button type="button" className="header-notifications" aria-label="Notifications">
        <img src={BELL_ICON} alt="" />
      </button>
    </div>
  )
}

export default Header
