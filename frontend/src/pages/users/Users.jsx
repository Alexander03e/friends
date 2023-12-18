import './Users.css'
import axios from 'axios'
import React from 'react'
import User from './User'

const Users = () => {
  const [users,setUsers] = React.useState([])

  const getUsers = async () => {
    try {
      axios
        .get('http://127.0.0.1:8000/api/users/')
        .then((res) => setUsers(res.data))
    }catch(e) {
      console.log(e)
    }
  }

  React.useEffect(()=>{
    getUsers()
  }, [])

  return (
    <section className="users">
      <div className="container">
        <div className="users__wrapper">
          <h1>Список зарегистрированных пользователей:</h1>
          
          {users?.map((user) => {
            return (
              <User user={user}/>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Users