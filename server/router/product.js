import express from "express"
import ProductDetails from "../models/productDetails.js";
const router = express.Router()


//fetch all products
router.get("/",async(req,res)=>{
    try
    {
        const products = await ProductDetails.find();
        res.status(200).json(products)
    }
    catch(e)
    {
        res.send(402).json({message:"Error while fetching products"});
        console.log(e);
    }
})


//get a single product
router.get("/product/:id",async(req,res)=>{
    try
    {
        const product = await ProductDetails.findOne({_id:req.params.id});
        res.status(200).json(product)
        console.log(product)
    }
    catch(e)
    {
        res.send(402).json({message:"Error while fetching product"});
        console.log(e);
    }
})




export default router;
