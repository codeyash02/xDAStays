import React from 'react'
import '../../styles/components/ImageCard.css'

function ImageCard({label,Image}) {
  return (
    <div className='img_card'>
      <div className='card_content' style={{backgroundImage:`${Image}`}}>
        <h3>{label}</h3>
      </div>
      
    </div>
  )
}

export default ImageCard
