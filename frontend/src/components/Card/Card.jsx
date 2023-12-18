import axios from 'axios'
import './Card.css'
import {useEffect, useState} from 'react'
import moment from 'moment'
import "moment/locale/ru"

const Card = ({item}) => {
  moment.locale("ru")
  return (
    <div className='card'>
      <div className="card__img-wrapper">
        <img src={item?.cover} alt="картинка" className="card__img" />
      </div>
      <div className="card__text">
        <div className="title">
          <p className='card__title'>{item?.title}</p>
        </div>
        <p><strong>{moment(item?.start_date).format('D MMM')} - {moment(item?.end_date).format('D MMM')}</strong></p>
        <p className='card__category'>{item?.location}</p>
      </div>
    </div>
  )
}

export default Card