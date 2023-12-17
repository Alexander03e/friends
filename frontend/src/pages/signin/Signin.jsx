import './Signin.css'

import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'

const Signin = () => {
  const [state, setState] = useState({
    login: '',
    password: '',
  })
  const handleClick = async (e) => {
    e.preventDefault()
    await axios
      .post('http://127.0.0.1:8000/api/users/login/', {
        email: state.login,
        password: state.password
      })
      .then(res => window.localStorage.setItem('user', JSON.stringify(res.data)))
      .catch(err => console.log(err))
  }

  return (
    <section className="signin">
      <div className="container">
        <form className='form'>
          <h2 className='signin__title'>Войдите в аккаунт</h2>
          <input name='login' value={state.login} onChange={(e) => setState({...state, [e.target.name]: e.target.value})} className='form__input' placeholder='Введите логин'/>
          <input name='password' value={state.password} onChange={(e) => setState({...state, [e.target.name]: e.target.value})} className='form__input' placeholder='Введите пароль'/>
          <button className='form__input form__btn' onClick={handleClick}>Войти!</button>
          <p className='redirect-reg'>Нет аккаунта? <strong><NavLink to='/signup'>Зарегистрируйтесь!</NavLink></strong></p>
        </form>
      </div>
    </section>
  )
}

export default Signin