import express from "express";
import request from "../controllers/reviewsController";
const reviewroute = express.Router();

reviewroute.get("/getreviews", request.getReview);
reviewroute.post("/addreview", request.addReview);

export default reviewroute;
