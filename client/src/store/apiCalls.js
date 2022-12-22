import { publicRequest } from "../requestMethods"
import {getProductsStart,getProductsSuccess,getProductsFailure} from "./productSlice"
export const getProducts = async(dispatch) =>{
    dispatch(getProductsStart())
    try
    {
        const res = await publicRequest.get("/products");
        dispatch(getProductsSuccess(res.data))
    }
    catch(e)
    {
        dispatch(getProductsFailure())
    }
}