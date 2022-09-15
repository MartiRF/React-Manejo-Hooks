import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { AboutPages } from './AboutPage'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserProvider'
export const MainApp = () => {
  return (
    <UserProvider>
        <h1>MainApp</h1>
        <Navbar />
        <hr />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/home' element={<HomePage />}/>
        <Route path='login' element={<LoginPage />}/>
        <Route path='about' element={<AboutPages />}/>

        {/* <Route path='/*' element={<LoginPage />} /> */}
        <Route path='/*' element={<Navigate to={"/about"} />} />

      </Routes>        
    </UserProvider>
  )
}
