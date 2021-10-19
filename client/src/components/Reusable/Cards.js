import React from 'react'
import '../../styles/components/Cards.css'

function Cards({img,heading,content,color}) {
  
  return (
    <div className='card'>
      <div className='card_img'>
<img src={img} alt=''/>
      </div>
      <div className='card_content'>
        <p style={{fontWeight:'600'}}>{heading}</p>
        <p style={{color:'gray'}}>{content}</p>
      </div>
    </div>
  )
}

export default Cards
