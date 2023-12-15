import './Signin.css'

import { NavLink } from 'react-router-dom'
const Signin = () => {

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <section className="signin">
      <div className="container">
        <form className='form'>
          <h2 className='signin__title'>Войдите в аккаунт</h2>
          <input className='form__input' placeholder='Введите логин'/>
          <input className='form__input' placeholder='Введите пароль'/>
          <button className='form__input form__btn' onClick={handleClick}>Войти!</button>
          <p className='redirect-reg'>Нет аккаунта? <strong><NavLink to='/signup'>Зарегистрируйтесь!</NavLink></strong></p>
        </form>
      </div>
    </section>
  )
}

export default Signin