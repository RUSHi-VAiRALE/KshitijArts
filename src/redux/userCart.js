import { createSlice } from "@reduxjs/toolkit";
import { useSelector,useDispatch } from "react-redux";



export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        products:[]
    },
    reducers:{
        setProducts:(state,action)=>{
            state.products = action.payload
        },
        logoutProducts:(state)=>{
            state.products = []
        }
    }
});

export const {setProducts,logoutProducts} = cartSlice.actions;
export default cartSlice.reducer;