import React from 'react'
import Avatar from 'react-avatar';
import '../../styles/components/Review.css'
import ReactStars from "react-rating-stars-component";

 

 
function Reviews({name,rating,content,place}) {
 
  return (
    <div className='conatiner'>
      <div className='review_card'>
        <div className='card_top'>
        <Avatar name={name} size='50'className='avatar' />
        <ReactStars
    // count={5}
    value={rating}
    // onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
    edit={false}
  />
        </div>
        <div className='card_body'>
          <p>{content}</p>
        </div>
        <div className='card_bottom'>
          <p>-{name},{place}</p>
        </div>
      </div>
      
    </div>
  )
}

export default Reviews
