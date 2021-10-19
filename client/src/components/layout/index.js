import React from 'react'
import Navbar from '../layout/navbar'
import Footer from './footer'
function index({children}) {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
      
    </div>
  )
}

export default index
