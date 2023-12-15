import './Footer.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {

  return (
    <footer className='footer'>
      <div className="header__wrapper">
        <div className="footer__wrapper">
          <div className="footer__company">
            <h3>Компания</h3>
            <NavLink to='/news'>Новости</NavLink><br />
            <NavLink to='/contacts'>Контакты</NavLink>
          </div>
          <div className="footer__info">
            <h3>Компания</h3>
            <NavLink to='/policy'>Политика конфиденциальности</NavLink>
          </div>
          <div className="footer__contacts">
            <h3>Связаться с нами:</h3>
            <h3><NavLink className='number' to='#'>8 (985) 073-83-50</NavLink></h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer