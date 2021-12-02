import React, { useState, useEffect } from "react";
import Carousel from "../Reusable/Carousel";
import Card from "../Reusable/Cards";
import "../../styles/components/Body.css";
import Review from "../Reusable/Reviews";
import fetchFunction from "../../fetch/index";
function Body() {
  const [placesList, setPlacesList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

  console.log(reviewList);
  useEffect(() => {
    getPlaceList();
    reviewListData();
  }, []);

  const getPlaceList = async () => {
    await fetchFunction("get", "places/getplaces")
      .then((data) => setPlacesList(data.data))
      .catch((error) => console.log(error));
  };
  const reviewListData = async () => {
    await fetchFunction("get", "reviews/getreviews")
      .then((data) => setReviewList(data.data))
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
          <Review reviewList={reviewList} />
        </div>
      </div>
    </div>
  );
}

export default Body;
