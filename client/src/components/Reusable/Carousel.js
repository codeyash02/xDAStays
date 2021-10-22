import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import one from "../../assets/Image6.jpg";
import two from "../../assets/Image7.jpg";
import three from "../../assets/Image8.jpg";
import four from "../../assets/Image9.jpg";
import "../../styles/components/Carousel.css";
function Carousl() {
  return (
    <div className="carousel">
      <Carousel
        autoPlay={true}
        showThumbs={false}
        interval={2000}
        infiniteLoop={true}
      >
        <div className="carousel_content">
          <img src={four} alt="" />
          <div className="text_div">
            <p className="div_headlight">Live Young</p>
          </div>
        </div>
        <div className="carousel_content">
          <img src={two} alt="" />
        </div>
        <div className="carousel_content">
          <img src={three} alt="" />
        </div>
        <div className="carousel_content">
          <img src={one} alt="" />
        </div>
      </Carousel>
    </div>
  );
}

export default Carousl;
