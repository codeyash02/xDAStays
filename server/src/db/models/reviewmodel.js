import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  Rating: {
    type: String,
    required: true,
  },
  Review: {
    type: String,
    required: true,
  },
  
  Place:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Places"
  },
  Publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  
},
{ timestamps: true }
);

const Review  = mongoose.model("Reviews", reviewSchema);
export default Review