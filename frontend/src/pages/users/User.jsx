import './Users.css'
import axios from 'axios'
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'

const User = ({user}) => {
  // const [users,setUsers] = React.useState([])

  // const getUsers = async () => {
  //   try {
  //     axios
  //       .get('http://127.0.0.1:8000/api/users/')
  //       .then((res) => setUsers(res.data))
  //   }
  // }

  // React.useEffect(()=>{
  // }, [])
  const {userid} = useParams()

  return (
    <section className="user">
      <div className="container">
        <div className="user__wrapper">
          <div className="user-cont">
            <h1>{user?.full_name}</h1>
            <NavLink to={`/user/${user.id}/profile`}>Открыть профиль пользователя</NavLink>
          </div>
          <div className="new__img-container user-avatar">
            <img src={user?.avatar} alt="no-photo" className="new-img" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default User