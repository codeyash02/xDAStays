import Booking from "../db/models/bookingmodel";
import User from "../db/models/usermodel";
const request = {
  getBooking: async (req, res) => {
    await Booking.find({})
      .then((data) => {
        return res.json(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  },
  addBooking: async (req, res) => {
    const booking = await Booking.create(req.body);
    booking.save();
    
    const bookingById = await User.findById(booking.User);
    const bookingId = booking._id;
    bookingById.Booking.push(bookingId);
    await bookingById.save();
    return res.send(bookingById);
    return booking
  },
 userDetails:async (req,res)=>{
    const { id } = req.params;
    const booking = await Booking.findById(id).populate("User");

     res.send(booking.User);
  }

};
export default request;
