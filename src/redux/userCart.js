import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity : 0
    },
    reducers:{
        addProduct:(state,action)=>{
            state.quantity += 1;
            state.products.push(action.payload.single);
        }
    }
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;