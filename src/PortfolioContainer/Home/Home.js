import React from 'react'
import '../Home/Home.css'
import Footer from '../Home/Footer/Footer'
import Profile from './Profile/Profile';
import Header from './Header/Header';

export default function () {
  return (
    <div className='home-container'>
        
        <Header />
        <Profile />
        <Footer />

    </div>
  )
}
