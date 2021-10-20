import User from '../db/models/usermodel'

 export const request ={
  GetAllUser:async(req,res)=>{

    await User.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json(error);
    });

  },
  AddUser : async (req , res)=> {
    console.log("create blog" , req.body)
    await User(req.body).save()
    .then(result => {
      return res.json(result)
    })
    .catch((error)=>{
      console.log("error" , error)
    })
}

}
