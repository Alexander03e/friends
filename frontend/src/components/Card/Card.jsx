import axios from 'axios'
import './Card.css'
import {useEffect, useState} from 'react'
import moment from 'moment'
import "moment/locale/ru"
const Card = ({item}) => {
  moment.locale("ru")
  const [shift, setShift] = useState()
  useEffect(() => {
    axios
      .get(item)
      .then((res)=> setShift(res.data))
  },[])
  return (
    <div className='card'>
      <div className="card__img-wrapper">
        <img src={shift?.cover} alt="картинка" className="card__img" />
      </div>
      <div className="card__text">
        <div className="title">
          <p className='card__title'>{shift?.title}</p>
        </div>
        <p><strong>{moment(shift?.start_date).format('D MMM')} - {moment(shift?.end_date).format('D MMM')}</strong></p>
        <p className='card__category'>{shift?.location}</p>
      </div>
    </div>
  )
}

export default Card