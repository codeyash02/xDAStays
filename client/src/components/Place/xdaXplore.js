import React from "react";
import "../../styles/components/xdaXplore.css";
import Main from "../../assets/Image1.jpeg";
import Second from "../../assets/Image3.jpg";
import Third from "../../assets/Image.jpg";

import Fourth from "../../assets/Image2.jpg";
import Fifth from "../../assets/Image5.jpg";

function xdaXplore() {
  return (
    <div className="xplore">
      <div className="xplore_body">
        <h3>xDA Bandla</h3>
        <div className="images">
          <div className="main_image">
            <img src={Main} alt="" />
          </div>

          <div className="second_column">
            <img className="secondary_image " src={Second} alt="" />

            <img className="secondary_image " src={Third} alt="" />
          </div>
          <div className="third_column">
            <img className="secondary_image " src={Fourth} alt="" />

            <div className="see_more" >
                <img className='secondary_image' src={Fifth} alt=""/>
                <button>See All Photos</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default xdaXplore;
