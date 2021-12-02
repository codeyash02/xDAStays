import express from "express";
import cors from "cors";
import dbConnection from "./db/connection/index";
import userRoute from './routes/userRoute'
import bookingRoute from "./routes/bookingRoute";
import placeroute from "./routes/placeRoute";
import reviewroute from "./routes/reviewRoute";
const startServer = async () => {

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/user',userRoute)
  app.use('/booking',bookingRoute)
  app.use('/places',placeroute)
  app.use('/reviews',reviewroute)

  dbConnection().then((data) => {
    console.log(data)
    app.listen(4000, () => {
      console.log(`🚀 Server ready at ws://localhost:4000`);
    });
  })

};
startServer();
