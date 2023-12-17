import '../News.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './New.css'
import Gallery from './Gallery'
import moment from 'moment'
const New = ({item}) => {

  const [user, setUser] = useState('')
  const [image, setImage] = useState([])
  const imgs = []

  const formatData = moment(item?.published_at).format('D MMM HH:mm')

  const getUser = async () => {
    await axios
    .get(item?.user)
    .then((res)=>setUser(res.data))
  }
  const getImage = async () => {
    await axios
    .get('http://127.0.0.1:8000/api/article-images/')
    .then((res)=>{
      console.log(res.data)
      res.data.map((el) => {
        if (el.article === item.url){
          setImage((image)=>[...image, el.image])
          console.log(image)
        } else{
          console.log(el.article +' '+item.url)
        }
      })
    })
  }

   useEffect(() => {
    getUser()
    getImage()
  }, [])

  return (
    <div className="new">
      <div className="new__header">
        <div className="new__img-container">
          <img src={item?.user_img} alt="no-photo" className="new-img" />
        </div>
        <div className="new__name">
          <strong><p>{user.full_name}</p></strong>
          <p className="new__time">{formatData}</p>
        </div>
      </div>
      <div className="new__body">
        <p className="new__text">{item?.text}</p>
        {item?.img!= '' ?<Gallery img={image}/>: ''}
      </div>
    </div>
  )
}

export default New