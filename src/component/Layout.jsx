import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/footer'
import Header from './Header/header'

const Layout = () => {
  return (
   <>
   <Header/>
    <Outlet/>
   <Footer/>
   </>
  )
}

export default Layout
