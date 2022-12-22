import {createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
    name:"products",
    initialState:{
        products:[],
        isFetching:false,
        isError:false,
    },
    reducers:{
        getProductsStart(state){
            state.isFetching = true;
        },
        getProductsSuccess(state,action){
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductsFailure(state){
            state.isError = true;
        }
    }
})

export const {getProductsStart,getProductsSuccess,getProductsFailure} = productSlice.actions;

export default productSlice.reducer;