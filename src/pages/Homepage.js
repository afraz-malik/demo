import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import LoginPage from './LoginPage/LoginPage'
import RegisterPage from './RegisterPage/RegisterPage'

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <RegisterPage />
      <LoginPage />
    </div>
  )
}

export default Homepage
