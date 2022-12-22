import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
import fs from "fs"
import path from "path"
import { addAllProductsToDatabase } from "./addProductsInDatabase.js"
const __dirname = path.resolve();
dotenv.config({path:"./.env"})
const PORT = process.env.PORT || 4000;
const app=express();
app.use(cors())
app.use(express.json())
app.use(cookieParser())
import("./database/connection.js")
import productRoutes from "./router/product.js"

app.use("/products",productRoutes)


app.listen(PORT,()=>{
    console.log("Server is running")
})

addAllProductsToDatabase()