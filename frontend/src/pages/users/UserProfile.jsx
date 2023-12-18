import Profile from '../profile/Profile'
import './Users.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'

const UserProfile = () => {

  const {userid} = useParams() 
  const [user, setUser] = useState([])

  const getUserById = async () => {
    try {
      axios
        .get(`http://127.0.0.1:8000/api/users/${userid}/`)
        .then((res) => setUser(res.data))
    }catch (e) {
      console.log(e)
    }
    console.log(user)
  }
  useEffect(() => {
    getUserById()
  },[])

  return (
    <section className="user__profile">
      <div className="container">
        <div className="user__profile-wrapper">
          <Profile user_profile={user}/>
        </div>
      </div>
    </section>
  )
}

export default UserProfile