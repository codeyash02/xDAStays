import React from 'react'
import '../../styles/components/Navbar.css'
import {Pages} from './Pages'
function navbar() {
  return (
    <div className='Navbar'>
      <div className='navbar_main' >
<div className='nav_logo'>
  <h2>xDAStays</h2>
</div>
<div className='nav_content'>
  {
    Pages?.map((item)=>(
<span >{item?.path}</span>
    ))
  }



</div>
      </div>
    
    </div>
  )
}

export default navbar
