import './Profile.css'
import Card from '../../components/Card/Card'
import { useEffect, useState } from 'react';

const Profile = ({user_profile}) => {
  let user;
  const [role, setRole] = useState()
  user_profile ? user = user_profile : user = JSON.parse(localStorage.getItem('user')) 
  useEffect(() => {
    setRole(JSON.parse(localStorage.getItem('user')).role.name)
  })
  console.log(role)

  const form_styles = {
    textAlign:'right'
  }
  const shift_styles ={
    textAlign:'right'
  }

  return (
    <section className='profile'>
      <div className="container">
        <div className="profile__wrapper">
          
          <div className="profile__header">
            {role=='moderator' ? <div style={form_styles}><h1>Изменить роль: </h1></div> : ''}
            <div className="profile__logo-wrapper">
              <img className="profile__logo-img" src={user?.avatar} alt="profile photo" />
            </div>
            <h2>{user?.full_name}</h2>
            {role=='moderator' ? <div style={{color:'gray'}}><p>Роль: {user?.role?.name}</p></div> : ''}
            <h3 className='profile__work-title'>Смены, на которых вы побывали: </h3>
            {role=='moderator' ? <div style={shift_styles}><h1>Добавить смену: </h1></div> : ''}

          </div>
          <div className="profile__body">
              {user?.shifts?.map((item,index)=> {
                user_profile ? item = item.url : item = item
                return (
                  <Card key={item.url} item={item}/>
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile