import React from 'react'
import '../Home/Home.css'
import Footer from '../Home/Footer/Footer'
import Profile from './Profile/Profile'

export default function () {
  return (
    <div className='home-container'>
        
        <Profile />
        <Footer />

    </div>
  )
}
