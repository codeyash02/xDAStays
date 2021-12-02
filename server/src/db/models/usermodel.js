import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
   
    Email: {
      type: String,
    },
   
    Number: {
      type: Number,
    },
    Booking: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking",
      },
    ],
    Review:[
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reviews",
      },
    ]
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
