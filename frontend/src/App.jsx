import { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import MainRoutes from './routes/MainRoutes'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import React from 'react'
import './styles/style.css'
import axios from 'axios'


function App() {
  
  const [news, setNews] = React.useState('')
  const [isAuth, setIsAuth] = useState(false)
  const [initialNews, setInitialNews] = React.useState('')
  const newsReducer = {
    news, setNews, initialNews, setInitialNews
  }
  useEffect(() => {
    if(localStorage.getItem('user')){
      if(localStorage.getItem('user')!='"Invalid login"'|''){
        console.log(localStorage.getItem('user'))
        setIsAuth(true);
      }
    }
  }, [])
  
  // const getArticles = async () => {
  //   const {data} = await axios
  //     .get('http://127.0.0.1:8000/api/articles/')
  //   setInitialNews(data)
  //   setNews(initialNews)
  //   console.log(initialNews )
  // }

  // useEffect(()=>{
  //   getArticles()
  // })

  // console.log(initialNews)

  return (
    <BrowserRouter>
      <div className="app">
        <Header newsReducer={newsReducer} isAuth={isAuth} setAuth={setIsAuth}/>
        <main>
          <MainRoutes news={news} initialNews={initialNews} setNews={setNews} setInitialNews={setInitialNews} isAuth={isAuth} setAuth={setIsAuth} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
