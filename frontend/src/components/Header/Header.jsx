import { NavLink } from 'react-router-dom'
import './Header.css'
import UserOutlined from '@ant-design/icons'
import SearchOutlined from '@ant-design/icons'
const Header = () => {
  
  return (
    <header>
      <div className="header__wrapper">
        <div className="header__content">
          <div style={{position:'relative'}} className="header__search-wrapper">
            <img style={{ width:'2em', position: 'absolute', left: '0.6em', top:'5px'}} src="public/lupa.png" alt="no photo" />
            <input type="text" className="header__search" placeholder='' />
          </div>
          <div className="header__nav">
            <h1 className='header__logo'>Дружите.ру</h1>
            <div className="header__menu">
                <NavLink className="menu__link">НОВОСТИ</NavLink>
                <NavLink className="contacts__link">КОНТАКТЫ</NavLink>
            </div>
          </div>
          <div className="header__profile"><NavLink to='/profile'><img style={{filter:'invert(1)', width:'2em'}} src="public/profile.png" alt="no photo" /></NavLink></div>
        </div>
      </div>
    </header>
  )
}

export default Header