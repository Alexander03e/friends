import './Profile.css'
import Card from '../../components/Card/Card'
import { useEffect, useState } from 'react';
import axios from 'axios'
const Profile = ({user_profile}) => {
  let user;
  const [role, setRole] = useState()
  const [modal, setModal] = useState(false)
  const [shifts, setShifts] = useState('')
  const [roles, setRoles] = useState('')
  const [r,setR] = useState(0)
  user_profile ? user = user_profile : user = JSON.parse(localStorage.getItem('user')) 
  useEffect(() => {
    setRole(JSON.parse(localStorage.getItem('user')).role.name)
    axios
      .get('http://127.0.0.1:8000/api/shifts/')
      // .then((res) => setShifts(res.data))
      .then(res => setShifts(res.data))
      axios
        .get("http://127.0.0.1:8000/api/user-roles/")
        .then((res) => setRoles(res.data))
    }, [r])
  console.log(user_profile)
  console.log(role)
  
  const form_styles = {
    textAlign:'right',
    padding: '1.3em',
    
    backgroundColor:'gray',
    position:'absolute',
    borderRadius:'2em',
    right:'0'
    // // display:'flex'
  }
  const shift_styles ={
    textAlign:'right',
    // textDecoration:'underline',
    position:'absolute',
    right:'0',
    
  }
  
  const addShift = () =>{
    setModal(!modal) 
  }
  const changeRole = (el) => {
    axios
      .patch(user?.url, {role: el?.url})
      // .then((res) => setR(r+1))
    window.location.reload()
  }
  return (
    <section className='profile'>
      <div className="container">
        <div className="profile__wrapper">
          
          <div className="profile__header">
            {(role=='moderator' && user_profile) ? <div style={form_styles}><h3>Уровень доступа: </h3>
            {/* <p className='role_current'>{user?.role?.name}</p> */}
            {roles != '' ? roles?.map((el) => {
              return (
                <p className={el?.name == user?.role?.name ? 'role__current' : 'role__change' } onClick={()=>changeRole(el)}>{el?.name}</p>
              )
            })
            : ''}
            </div> 
            : 
            ''}
            <div className="profile__logo-wrapper">
              <img className="profile__logo-img" src={user?.avatar} alt="profile photo" />
            </div>
            <h2>{user?.full_name}</h2>
            {(role=='moderator' && user_profile)? <div style={{color:'gray'}}><p>Роль: {user?.role?.name}</p></div> : ''}
            <h3 className='profile__work-title'>Смены, на которых вы побывали: </h3>
            {(role=='moderator' && user_profile)? <div style={shift_styles}>
              <h3 onClick={addShift} style={{cursor:'pointer', textDecoration:'underline'}}>Добавить смену: </h3>
              {modal && 
                <div style={{display:'flex', flexDirection:'column', textAlign:'left'}}>
                  {shifts?.map((shift)=> {
                    
                    console.log(shift)
                    return (
                      <p style={{color:'darkblue', cursor:'pointer'}}>{shift?.title}</p>
                    )
                  
                  })}
                </div>}
            </div> : ''}

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