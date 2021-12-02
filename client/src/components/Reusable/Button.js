import React from 'react'
import '../../styles/components/Button.css'
function Button({label,btnType}) {
 const  handleSubmit=(e)=>{
  e.preventDefault()
  console.log('button console>>>')
  }
  return (
    <div className='Button'>
      <form  onSubmit={handleSubmit}>
      <button type='submit' className={btnType==='Primary'?'btn_primary':'btn_secondary'}  >{label}</button>

      </form>
      
    </div>
  )
}

export default Button
