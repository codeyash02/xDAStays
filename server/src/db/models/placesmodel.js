import mongoose from "mongoose";

const placeSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Title: {
    type: String,
  },
  Photos: [
    {
      img: String
    },
  ],
  Review:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reviews",
    },
  ]
});
const Places = mongoose.model("Places", placeSchema);

export default Places;
