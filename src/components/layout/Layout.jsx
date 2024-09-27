import React from 'react'
import MainNavbar from './navbar/Navbar'
import Footer from './footer/Footer'

const Layout = ({ children, metadata }) => {
  return (
    <div>
      <MainNavbar metadata={metadata} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout