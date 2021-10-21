import express from "express";
import request from "../controllers/bookingController";

const bookingRoute = express.Router();

bookingRoute.get("/getBooking", request.getBooking);
bookingRoute.get("/getuserdetails/:id",request.userDetails)
bookingRoute.post("/addBooking", request.addBooking);

export default bookingRoute;
