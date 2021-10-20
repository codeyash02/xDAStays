import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const connectDB = () => {
  return new Promise((resolve, reject)=>{
    mongoose.connect(process.env.DB_CONNECTION).then(()=>{
      resolve("db connected succesfully")
    }).catch((err)=>{
      reject("db connection failed " , err)
    })
  })
}

export default connectDB;