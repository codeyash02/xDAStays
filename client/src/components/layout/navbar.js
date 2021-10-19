import React from 'react'
import '../../styles/components/Navbar.css'
import {Pages} from './Pages'
import {Link,useHistory} from 'react-router-dom'

function Navbar() {
  const history = useHistory()
  return (
    <div className='Navbar'>
      <div className='navbar_main' >
<div className='nav_logo' onClick={()=>history.push('/')}>
  <h4 >xDAStays</h4>
</div>
<div className='nav_content'>
  {
    Pages?.map((item)=>(
<span ><Link className='navbar_link' style={{textDecoration:'none',color:'white'}} to={item.path}>{item?.label}</Link></span>
    ))
  }



</div>
      </div>
    
    </div>
  )
}

export default Navbar
