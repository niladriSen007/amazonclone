import mongoose from "mongoose"

const productDetailsSchema = mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    url:{
        type:String,
        required:true,
    },
    detailUrl:{
        type:String,
        required:true,
    },
    title:{
        shortTitle:{
            type:String
        },
        longTitle:{
            type:String
        }
    },
    price:{
        mrp:{
            type:Number,
        },
        cost:{
            type:Number,
        },
        discount:{
            type:String
        }
    },
    description:{
        type:String
    },
    discount:{
        type:String
    },
    tagline:{
        type:String
    }
})

const ProductDetails = mongoose.model("ProductDetail",productDetailsSchema)

export default ProductDetails;