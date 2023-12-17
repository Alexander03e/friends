import './News.css'
import React, { useEffect, useState } from 'react'
import New from './New/New'
import axios from 'axios'

const News = ({news, setInitialNews, initialNews, setNews}) => {
  const [articles, setArticles] = useState([])

  const getArticles = async () => {
    await axios
      .get('http://127.0.0.1:8000/api/articles/')
      .then(res => {
        setArticles(res.data)
      })  
  }

  useEffect(()=>{
    getArticles()
    console.log(JSON.parse(window.localStorage.getItem('user')).role)
  }, [])



  return (
    <section className="news">
      <div className="container">
        { JSON.parse(window.localStorage.getItem('user')).role.name === 'Администратор' ?
          <button>Создать пост</button> :''
        }
        <div className="news__wrapper">
          {articles!='' ? articles.map(item => <New key={item.id} item = {item} /> ) : ''}
        </div>
      </div>
    </section>
  )
}

export default News