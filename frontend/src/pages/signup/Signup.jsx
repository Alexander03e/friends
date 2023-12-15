import './Signup.css'

import { NavLink } from 'react-router-dom'
const Signup = () => {

  const handleClick = (e) => {
    e.preventDefault()
  }

  return (
    <section className="signin">
      <div className="container">
        <form className='form'>
          <h2 className='signin__title'>Создайте аккаунт</h2>
          <p style={{margin: '0 0 1em -7.7em', width: '170%', fontSize: '1.4em', letterSpacing: '0.1em'}}>Зарегистрируйтесь и начните следить за нашими новостями!</p>
          <input className='form__input' placeholder='Фамилия Имя'/>
          <input className='form__input' placeholder='Почта'/>
          <input className='form__input' placeholder='Пароль'/>
          <input className='form__input' placeholder='Повторите пароль'/>
          <p className='politicy'>Нажимая “Начать”, Вы соглашаетесь с <strong>Политикой конфиденциальности</strong> и <strong>Условиями обслуживания</strong></p>
          <button className='form__input form__btn' onClick={handleClick}>Начать!</button>
          <p className='redirect-reg'>Уже есть аккаунт? <strong><NavLink to='/signin'>Войдите!</NavLink></strong></p>
        </form>
      </div>
    </section>
  )
}

export default Signup