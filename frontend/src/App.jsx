import { useState } from 'react'
import Header from './components/Header/Header'
import MainRoutes from './routes/MainRoutes'
import { BrowserRouter } from 'react-router-dom'
import './styles/style.css'


function App() {
  const [isAuth, setIsAuth] = useState(true)
  return (
    <BrowserRouter>
      <Header />
      <MainRoutes isAuth={isAuth} />
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
