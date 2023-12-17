import React from 'react'
import Profile from '../pages/profile/Profile'
import {useRoutes} from 'react-router-dom'
import { MAIN_URL, NEWS_URL, PROFILE_URL, SIGNIN_URL, SIGNUP_URL, CONTACTS_URL, INFO_URL, POLICY_URL } from './config'
import Signin from '../pages/signin/Signin'
import Signup from '../pages/signup/Signup'
import News from '../pages/news/News'
import Policy from '../pages/policy/Policy'
import Contacts from '../pages/contacts/Contacts'


const MainRoutes = ({isAuth, news, setNews, initialNews, setInitialNews, setAuth}) => {


  const baseRoutes = [
    {path: SIGNIN_URL, element: <Signin setAuth={setAuth}/>},
    {path: SIGNUP_URL, element: <Signup />},
    {path: NEWS_URL, element: <News news={news} initialNews={initialNews} setNews={setNews} setInitialNews={setInitialNews}/>},
    {path: MAIN_URL, element: <News news={news} initialNews={initialNews} setNews={setNews} setInitialNews={setInitialNews}/>},
    {path: POLICY_URL, element: <Policy />},
    {path: CONTACTS_URL, element: <Contacts />}
  ]

  const authRoutes =[
    {path: PROFILE_URL , element: <Profile />}
  ]

  const resultRoutes = baseRoutes

  if(isAuth){
    resultRoutes.push(...authRoutes)
  }

  return useRoutes(resultRoutes)
}

export default MainRoutes