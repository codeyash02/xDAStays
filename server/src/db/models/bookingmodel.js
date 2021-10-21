import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    Place:{
      type:String
    },
    StartingDate: {
      type: Date,

    },
    EndingDate: {
      type: Date,

    },
    User: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);
const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
