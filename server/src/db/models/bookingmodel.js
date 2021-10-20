import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    StartingDate: {
      type: Date,
      required: TextTrackCue,
    },
    EndingDate: {
      type: Date,
      required: TextTrackCue,
    },
    User: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);
const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
