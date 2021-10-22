import React from 'react'
import '../../styles/components/Button.css'
function Button({label,btnType}) {
  return (
    <div className='Button'>
      <button type='submit' className={btnType==='Primary'?'btn_primary':'btn_secondary'}  >{label}</button>
      
    </div>
  )
}

export default Button
