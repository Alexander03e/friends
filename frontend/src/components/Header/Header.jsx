import { NavLink } from 'react-router-dom'
import './Header.css'
import UserOutlined from '@ant-design/icons'
import SearchOutlined from '@ant-design/icons'
import React from 'react'
import { initialNews } from '../../App'
const Header = ({isAuth, newsReducer}) => {
  const {news, setNews} = newsReducer
  const [searched, setSearched] = React.useState('')
  
  const onChangeInput = (e) => {
    let value = e.target.value
    setSearched(value)
    console.log(searched)
    let filtered = initialNews.filter((el) => {
      return(
        el.text.toLowerCase().includes(value.toLowerCase())
      )
    })

    console.log(filtered)
    setNews(filtered)
  }

  return (
    <header>
      <div className="header__wrapper">
        <div className="header__content">
          <div style={{position:'relative'}} className="header__search-wrapper">
            <img style={{ width:'2em', position: 'absolute', left: '0.6em', top:'5px'}} src="public/lupa.png" alt="no photo" />
            <input type="text" onChange={onChangeInput} value={searched} className="header__search" placeholder='' />
          </div>
          <div className="header__nav">
            <h1 className='header__logo'>Дружите.ру</h1>
            <div className="header__menu">
                <NavLink to='/news' className="header__link news-link">НОВОСТИ</NavLink>
                <NavLink to='/contacts' className="header__link contact-link">КОНТАКТЫ</NavLink>
            </div>
          </div>
          <div className="header__profile">
            {!isAuth ? <NavLink to='/profile'><img style={{filter:'invert(1)', width:'2em'}} src="public/profile.png" alt="no photo" /></NavLink>: <NavLink to='/signin'>ВОЙТИ</NavLink>}</div> 
        </div>
      </div>
    </header>
  )
}

export default Header