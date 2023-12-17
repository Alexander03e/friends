import './Profile.css'
import Card from '../../components/Card/Card'

const Profile = () => {
  const user = localStorage.getItem('user') 
  console.log(JSON.stringify(user))
  return (
    <section className='profile'>
      <div className="container">
        <div className="profile__wrapper">
          <div className="profile__header">
            <div className="profile__logo-wrapper">
              <img className="profile__logo-img" src="public/image 6.png" alt="profile photo" />
            </div>
            <h2>{user['full_name']}</h2>
            <h3 className='profile__work-title'>Смены, на которых вы побывали: </h3>
          </div>
          <div className="profile__body">
              
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile