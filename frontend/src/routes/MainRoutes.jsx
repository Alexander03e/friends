import React from 'react'
import Profile from '../pages/profile/Profile'
import {useRoutes} from 'react-router-dom'
import { MAIN_URL, NEWS_URL, PROFILE_URL, SIGNIN_URL, SIGNUP_URL, CONTACTS_URL, INFO_URL } from './config'


const MainRoutes = ({isAuth}) => {

  const baseRoutes = [
    {path: '/'}
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