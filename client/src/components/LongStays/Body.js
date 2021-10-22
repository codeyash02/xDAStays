import React from "react";
import "../../styles/components/LongStaysBody.css";
import Heart from '../../assets/heart.png'
import ImageCard from "../Reusable/ImageCard";
import Meal from '../../assets/meals.jpg'
function Body() {
  return (
    <div className="longStays_body">
      <div className="body_container">
        <div className="container_heading">
          <h2>
          
            <span>#MoveIn </span> with Zostel
          </h2>
          <p>Live where your heart belongs<img alt="" src={Heart}/></p>
        </div>
<div className='container_img'>

</div>
<div className='container_card'>
  <div className='card_heading'>
    <h3>Features</h3>
  </div>
<ImageCard Image={Meal} label='Fullfilling Meals'/>
</div>
      </div>
    </div>
  );
}

export default Body;
