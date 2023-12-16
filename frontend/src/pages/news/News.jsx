import './News.css'
import React from 'react'
import New from './New/New'

const News = () => {
  const news = [
    {name: 'Name1', time: '11119999', text: 'Приглашаем на акустический вечер от Дружите.ру. Самая ламповая и уютная атмосфера, песни под гитару, хор голосов, мастера, воспоминания о лете...Мы давно не собирались вместе. Поэтому приглашаем на событие, чтобы классно провести время с друзьями и обменяться планами на будущее лето', img: 'public/image 8.png'},
    {name: 'Name2', time: '11119999', text: 'sdstext', img: ''},
    {name: 'Name3', time: '11119999', text: 'text', img: ''}
  ]
  return (
    <section className="news">
      <div className="container">
        <div className="news__wrapper">
          {news.map(item => <New item = {item}/> )}
        </div>
      </div>
    </section>
  )
}

export default News