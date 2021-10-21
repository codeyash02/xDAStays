import React from "react";
import Avatar from "react-avatar";
import "../../styles/components/Review.css";
import ReactStars from "react-rating-stars-component";

function Reviews({ reviewList }) {


  return (
    <div className="Container">
      {reviewList.map((d) => (
        
        <div className="review_card">
          <div className="card_top">
            <Avatar
              name={d.name}
              size="50"
              className="avatar"
              color='#02223c'
            />
            <ReactStars
              // count={5}
              value={d.rating}
              // onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              edit={false}
            />
          </div>
          <div className="card_body">
            <p>{d.content}</p>
          </div>
          <div className="card_bottom">
            <p>
              {d.name} ,{d.place}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
