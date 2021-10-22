import React from 'react'
import '../../styles/components/Cards.css'
import Button from './Button'
function Cards({img,heading,content,}) {
  
  return (
    <div className='card'>
      <div className='card_img'>
<img src={img} alt=''/>
      </div>
      <div className='Card_content'>
        <p style={{fontWeight:'600'}}>Introducing  {heading}</p>
        <p style={{color:'gray'}}>{content}...</p>
      </div>
      <div className='Card_Bottom'>
      <Button label='Explore More' btnType='Primary'/>
      </div>
    </div>
  )
}

export default Cards
