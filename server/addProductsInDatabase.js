
import products from "./constants/productsData.js";
import ProductDetails from "./models/productDetails.js";

export const addAllProductsToDatabase = async() =>{
    try
    {
        await ProductDetails.deleteMany({})
        const allProducts = await ProductDetails.insertMany(products)
    //     console.log(allProducts);
     }
    catch(e)
    {
        console.log(e);
    }
}