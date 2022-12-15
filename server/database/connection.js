import mongoose from "mongoose"
import dotenv from "dotenv" 
dotenv.config({path:"../.env"})
const DB = process.env.DATABASE;
mongoose.set('strictQuery', true)
mongoose.connect(DB).then(()=>console.log("Connection Successful")).catch((e)=>console.log(e));