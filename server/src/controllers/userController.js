import User from "../db/models/usermodel";

 const request = {
 getUser: async (req, res) => {
     await User.find({} )
     .then((result) => {
      return res.json(result);
    })
    .catch((error) => {
      console.log("error", error);
    });
  },
addUser: async (req, res) => {
    console.log("create user", req.body);
    await User(req.body)
      .save()
      .then((result) => {
        return res.json(result);
      })
      .catch((error) => {
        console.log("error", error);
      });
  },
  bookingByUser:async (req,res)=>{
    const { id } = req.params;
    const user = await User.findById(id).populate("Booking");

     res.send(user);
  }
};
export default request;




