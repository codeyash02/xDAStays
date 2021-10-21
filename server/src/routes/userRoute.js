import express from "express";
import request from "../controllers/userController";

const userRoute = express.Router();

userRoute.get('/getuser', request.getUser)
userRoute.get('/getuser/:id',request.bookingByUser)
userRoute.post('/adduser',request.addUser)

export default userRoute;

