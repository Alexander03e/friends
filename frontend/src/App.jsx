import { useState } from 'react'
import Header from './components/Header/Header'
import MainRoutes from './routes/MainRoutes'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import React from 'react'
import './styles/style.css'

export const initialNews = [
  {name: 'Name1', time: '11119999', text: 'Приглашаем на акустический вечер от Дружите.ру. Самая ламповая и уютная атмосфера, песни под гитару, хор голосов, мастера, воспоминания о лете...Мы давно не собирались вместе. Поэтому приглашаем на событие, чтобы классно провести время с друзьями и обменяться планами на будущее лето', img: 'public/image 8.png'},
  {name: 'Name2', time: '11119999', text: 'sdstext', img: ''},
  {name: 'Name3', time: '11119999', text: 'text', img: ''}
]



function App() {
  const [news, setNews] = React.useState(initialNews)
  const [isAuth, setIsAuth] = useState(true)
  const newsReducer = {
    news, setNews
  }
  return (
    <BrowserRouter>
      <div className="app">
        <Header newsReducer={newsReducer} isAuth={isAuth}/>
        <main>
          <MainRoutes news={news} isAuth={isAuth} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
