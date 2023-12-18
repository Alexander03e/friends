import './Profile.css'
import Card from '../../components/Card/Card'

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('user')) 

  return (
    <section className='profile'>
      <div className="container">
        <div className="profile__wrapper">
          <div className="profile__header">
            <div className="profile__logo-wrapper">
              <img className="profile__logo-img" src="public/image 6.png" alt="profile photo" />
            </div>
            <h2>{user.full_name}</h2>
            <h3 className='profile__work-title'>Смены, на которых вы побывали: </h3>
          </div>
          <div className="profile__body">
              {user.shifts.map((item)=> {
                return (
                  <Card item={item}/>
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile