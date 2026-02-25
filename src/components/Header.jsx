import './Header.css'

const SAVOR_LOGO = 'http://localhost:3845/assets/1f964a683dd16f65bf6b0355aef9f9fa00854a15.png'
const BELL_ICON = 'http://localhost:3845/assets/b14ad86144371d432ffb5a65c81c0cb02f4f00ed.svg'

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
