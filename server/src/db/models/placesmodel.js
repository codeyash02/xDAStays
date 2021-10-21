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
});
const Places = mongoose.model("Place", placeSchema);

export default Places;
