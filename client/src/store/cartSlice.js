import {createSlice,current} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        carts:[],
        quantity:0,
        totalPrice:0,
    },
    reducers:{
        addProduct(state,action)
        {
            const item = action.payload.product;
            const isItemExists = state.carts.find(eachItem=>eachItem.prod._id === item._id)
            // console.log(item)
             if(isItemExists)
               {
                // console.log(isItemExists)
                state.carts.forEach(elem=>{
                    if(elem.prod._id === item._id) elem.quantity+=action.payload.quantity;
                })
               }
               else
               {
                state.carts.push({prod:action.payload.product,amount:action.payload.amount,quantity:action.payload.quantity})
                
                }
                state.quantity+=action.payload.quantity;
                const total = state.carts.reduce((acc,prod)=>acc+(prod.amount * prod.quantity),0);
                state.totalPrice = total;
        }
        ,removeProduct(state,action)
        {
            const item = action.payload.product;
            const isItemExists = state.carts.find(eachItem=>eachItem.prod._id === item._id)
            console.log(item)
             if(isItemExists)
               {
                
                state.carts.forEach(elem=>{
                    if(elem.prod._id === item._id && elem.quantity>0) 
                    {
                        
                        elem.quantity+=action.payload.quantity;
                        state.quantity+=action.payload.quantity;
                    // const total = state.carts.reduce((acc,prod)=>acc+(prod.amount * prod.quantity),0);
                        
                        // console.log(elem.amount)
                        state.totalPrice -= elem.prod.price.mrp;
                        if(elem.quantity === 0)
                            {
                                // console.log("Hi")
                                elem.amount -= elem.prod.price.mrp;
                                const newCart = state.carts.filter(c=>c.prod._id !== item._id);
                                state.carts = newCart;
                            }
                    }
                })
               }
                
        }
    }
})

export const {addProduct,removeProduct} = cartSlice.actions

export default cartSlice.reducer