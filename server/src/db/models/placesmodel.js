import monggoose from 'mongoose'

const placeSchema =new monggoose.Schema({

  Name:{
    type:String
  },
  Title:{
    type:String
  },
  Photos:[
    {
      type:String
    }
  ],
  
})
const Places = mongoose.model("Places",placeSchema)

export default Places