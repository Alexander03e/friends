import './News.css'
import React from 'react'
import New from './New/New'


const News = ({news, setNews}) => {

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