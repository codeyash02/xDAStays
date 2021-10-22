import React from 'react'
import '../../styles/components/ImageCard.css'

function ImageCard({label,Image}) {
  return (
    
      <div className='card_content' style={{backgroundImage:`url(${Image})`}}>
        <p>{label}</p>
      </div>
      
   
  )
}

export default ImageCard
