import React from "react";
import "../../styles/components/LongStaysBody.css";
import Heart from "../../assets/heart.png";
import ImageCard from "../Reusable/ImageCard";
import Unwind from "../../assets/unwind.jpg";
import Meal from "../../assets/meals.jpg";
import work0 from "../../assets/work0.jpg";
import work1 from "../../assets/work1.jpg";
import leave from "../../assets/leave.jpg";
import fun from "../../assets/destination.jpg";

const CardData =[ {
  label:'Unwind with a View',
  Image:Unwind
},
{  label:'Fullfilling Meals',
Image:Meal

},
{
  label:'Work Uninterrupted',
  Image:work0
},
{
  label:'Explore Destinations',
  Image:fun
},
{
  label:'Work Friendly Space',
  Image:work1
},
{
  label:' Leave Responsibilities',
  Image:leave
}]
function Body() {
  return (
    <div className="longStays_body">
      <div className="body_container">
        <div className="container_heading">
          <h2>
            <span>#MoveIn </span> with xDA
          </h2>
          <p>
            Live where your heart belongs
            <img alt="" src={Heart} />
          </p>
        </div>
        <div className="container_img"></div>
        <div className="container_card">
          <div className="card_heading">
            <h3>Features</h3>
          </div>
          <div className="img_card">
            {
              CardData.map((data)=>(
                <ImageCard label={data.label} Image={data.Image}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
