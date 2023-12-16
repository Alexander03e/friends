import React from 'react'
import Profile from '../pages/profile/Profile'
import {useRoutes} from 'react-router-dom'
import { MAIN_URL, NEWS_URL, PROFILE_URL, SIGNIN_URL, SIGNUP_URL, CONTACTS_URL, INFO_URL } from './config'
import Signin from '../pages/signin/Signin'
import Signup from '../pages/signup/Signup'
import News from '../pages/news/News'


const MainRoutes = ({isAuth}) => {

  const baseRoutes = [
    {path: '/signin', element: <Signin />},
    {path: '/signup', element: <Signup />},
    {path: '/news', element: <News />},
    {path: '/', element: <News />}
  ]

  const authRoutes =[
    {path: '/profile', element: <Profile />}
  ]

  const resultRoutes = baseRoutes

  if(isAuth){
    resultRoutes.push(...authRoutes)
  }

  return useRoutes(resultRoutes)
}

export default MainRoutes