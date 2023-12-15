import { useState } from 'react'
import Header from './components/Header/Header'
import MainRoutes from './routes/MainRoutes'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import './styles/style.css'


function App() {
  const [isAuth, setIsAuth] = useState(true)
  return (
    <BrowserRouter>
      <div className="app">
        <Header isAuth={isAuth}/>
        <main>
          <MainRoutes isAuth={isAuth} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
