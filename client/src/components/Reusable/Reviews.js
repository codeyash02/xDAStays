import React from "react";
import Avatar from "react-avatar";
import "../../styles/components/Review.css";
import ReactStars from "react-rating-stars-component";

function Reviews({ reviewList }) {
  const colorArray = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ff3333",
    "#ffff00",
    "#ff6600",
  ];
  var random_color = colorArray[Math.floor(Math.random() * colorArray.length)];
  return (
    <div className="container">
      {reviewList.map((d) => (
        
        <div className="review_card">
          <div className="card_top">
            <Avatar
              name={d.name}
              size="50"
              className="avatar"
              color={random_color}
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
