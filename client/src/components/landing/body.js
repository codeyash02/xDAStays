import React, { useState, useEffect } from "react";
import Carousel from "../Reusable/Carousel";
import Card from "../Reusable/Cards";
import "../../styles/components/Body.css";
import Review from "../Reusable/Reviews";
import fetchFunction from "../../fetch/index";
const reviewData = [
  {
    name: "Yash",
    rating: 5,
    content:
      "Zostel has always been on top of my stay list. Bir Zostel was a very pleasant stay. The staff is super friendly and makes you feel like a part of the family. Great place to meet travelers and collect some amazing stories from them.If you are in Barot, Zostel is the place to be in.",
    place: "xDA -Barot",
  },
  {
    name: "Rohit",
    rating: 4.5,
    content:
      "Zostel has always been on top of my stay list. Bir Zostel was a very pleasant stay. The staff is super friendly and makes you feel like a part of the family. Great place to meet travelers and collect some amazing stories from them.If you are in Barot, Zostel is the place to be in.",
    place: "xDA -Bandla",
  },
  {
    name: "Sahil",
    rating: 5,
    content:
      "Zostel has always been on top of my stay list. Bir Zostel was a very pleasant stay. The staff is super friendly and makes you feel like a part of the family. Great place to meet travelers and collect some amazing stories from them.If you are in Barot, Zostel is the place to be in.",
    place: "xDA -Jibhi",
  },
  {
    name: "Ashish",
    rating: 5,
    content:
      "Zostel has always been on top of my stay list. Bir Zostel was a very pleasant stay. The staff is super friendly and makes you feel like a part of the family. Great place to meet travelers and collect some amazing stories from them.If you are in Barot, Zostel is the place to be in.",
    place: "xDA -Peo",
  },
];
function Body() {
  const [placesList, setPlacesList] = useState([]);

  useEffect(() => {
    getPlaceList();
  }, []);

  const getPlaceList = async () => {
    await fetchFunction("get", "places/getplaces")
      .then((data) => setPlacesList(data.data))
      .catch((error) => console.log(error));
  };
 
  return (
    <div className="landing_body">
      <div className="carousel">
        <Carousel />
      </div>
      <div className="body_bottom">
        <div className="bottom_heading">
          <h3>xDA Destination</h3>
        </div>
        <div className="bottom_content">
          {placesList.map((place) => (
            <div className="bottom_content_row">
              <Card
                img={place?.Photos?.map((d) => d.img)}
                heading={place.Name}
                content={place.Title.substring(0, 200)}
              />
            </div>
          ))}
        </div>
        <div className="review_section">
          <h3>Guest Reviews</h3>
        </div>
        <div className="reviews">
          <Review reviewList={reviewData} />
        </div>
      </div>
    </div>
  );
}

export default Body;
