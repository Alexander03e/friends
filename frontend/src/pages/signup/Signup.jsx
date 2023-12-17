import { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const Signup = () => {

  const navigate = useNavigate()

  const [state, setState] = useState({
    full_name: '',
    email: '',
    password1: '',
    password2: ''
  })

  const handleClick = async (e) => {
    e.preventDefault()
    await axios
      .post('http://127.0.0.1:8000/api/users/register/', {
        email: state.email,
        full_name: state.full_name,
        password1: state.password1,
        password2: state.password2,
      })
      .then(res => navigate('/signin'))
      .catch(err => console.log(err))
  }

  return (
    <section className="signin">
      <div className="container">
        <form className='form'>
          <h2 className='signin__title'>Создайте аккаунт</h2>
          <p style={{margin: '0 0 1em -7.7em', width: '170%', fontSize: '1.4em', letterSpacing: '0.1em'}}>Зарегистрируйтесь и начните следить за нашими новостями!</p>
          <input name='full_name' value={state.full_name} onChange={e => setState({...state, [e.target.name]: e.target.value})} className='form__input' placeholder='Фамилия Имя'/>
          <input name='email' value={state.email} onChange={e => setState({...state, [e.target.name]: e.target.value})} className='form__input' placeholder='Почта'/>
          <input name='password1' type='password' value={state.password1} onChange={e => setState({...state, [e.target.name]: e.target.value})} className='form__input' placeholder='Пароль'/>
          <input name='password2' type='password' value={state.password2} onChange={e => setState({...state, [e.target.name]: e.target.value})} className='form__input' placeholder='Повторите пароль'/>
          <p className='politicy'>Нажимая “Начать”, Вы соглашаетесь с <strong>Политикой конфиденциальности</strong> и <strong>Условиями обслуживания</strong></p>
          <button className='form__input form__btn' onClick={handleClick}>Начать!</button>
          <p className='redirect-reg'>Уже есть аккаунт? <strong><NavLink to='/signin'>Войдите!</NavLink></strong></p>
        </form>
      </div>
    </section>
  )
}

export default Signup