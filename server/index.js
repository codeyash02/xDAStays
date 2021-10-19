import express from "express";
import monoose from "mongoose";
import cors from "cors";

const startServer = async () => {
  // await dbConnection()
  //   .then((result) => console.log(result))
  //   .catch((err) => console.log(err));
  const app = express();
  app.use(cors());
  app.use(express.json());

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at ws://localhost:4000`);
  return { app };
};
startServer();
