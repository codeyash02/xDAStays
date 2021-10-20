import express from "express";
import cors from "cors";
import dbConnection from "./db/connection/index";
import userRoute from './routes/userRoute'
const startServer = async () => {

  const app = express();
  app.use(cors());
  app.use(express.json());
  // app.use(userRoute)

  dbConnection().then((data) => {
    console.log(data)
    app.listen(4000, () => {
      console.log(`🚀 Server ready at ws://localhost:4000`);
    });
  })

};
startServer();
