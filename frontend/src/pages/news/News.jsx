import './News.css'
import React, { useEffect } from 'react'
import New from './New/New'
import axios from 'axios'

const News = ({news, setInitialNews, initialNews, setNews}) => {

  const getArticles = async () => {
    const {data} = await axios
      .get('http://127.0.0.1:8000/api/articles/')
    setNews(data)
    setInitialNews(news)

  }

  useEffect(()=>{
    getArticles()
  }, [])



  return (
    <section className="news">
      <div className="container">
        <div className="news__wrapper">
          {initialNews!='' ? initialNews.map(item => <New key={item.id} item = {item} /> ) : ''}
        </div>
      </div>
    </section>
  )
}

export default News