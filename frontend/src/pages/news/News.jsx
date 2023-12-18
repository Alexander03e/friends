import './News.css'
import React, { useEffect, useState } from 'react'
import New from './New/New'
import axios from 'axios'

const News = ({news, setInitialNews, initialNews, setNews}) => {
  const [articles, setArticles] = useState([])
  const [value, setValue] = useState('')
  const [rerender, setRerender] = useState('')
  const [moderator, setModerator] = useState(false)
  const getArticles = async () => {
    await axios
      .get('http://127.0.0.1:8000/api/articles/')
      .then(res => {
        setArticles(res.data)
        setInitialNews(res.data)
        setNews(res.data)
      })  
  }
  const user =  JSON.parse(window.localStorage.getItem('user'))

  useEffect(()=>{
    getArticles()
    console.log(JSON.parse(window.localStorage.getItem('user'))?.role)
    user?.role?.name === 'moderator' ? setModerator(true) : setModerator(false)
  }, [rerender])

  const postForm = (e) => {
    setValue(e.target.value)
    
  }
  const addPost = (e) => {
    e.preventDefault()
    axios
      .post('http://127.0.0.1:8000/api/articles/',{
        text: value,
        user: user?.url,
      })
      .then((res)=>{setInitialNews([...initialNews, res.data])})
    setValue('')
  }
  
  return (
    <section className="news">
      <div className="container">
        {user?.role?.name === 'moderator' ?
          <form className='post-form'>
            <input onChange={postForm} type="text" className='form__input' placeholder='Введите текст' value={value}/>
            <button onClick={addPost}>Создать пост</button> 
          </form>
          : ''
        }
        <div className="news__wrapper">
          {initialNews!='' ? initialNews.map(item => <New initialNews={initialNews} setInitialNews={setInitialNews} setRerender={setRerender} moderator={moderator} key={item?.id} item = {item} /> ) : ''}
        </div>
      </div>
    </section>
  )
}

export default News