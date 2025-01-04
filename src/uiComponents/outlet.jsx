import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

function Outlet({children}) {
  return (
    <div className='main'>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default Outlet