import express from "express";
import {request} from "../controllers/userController";

const userRoute = express.Router();

userRoute.get('/getuser', request.GetAllUser)
userRoute.post('/adduser',request.AddUser)

export default useRouter;
