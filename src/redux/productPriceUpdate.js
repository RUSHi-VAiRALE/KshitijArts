import { createSlice } from "@reduxjs/toolkit";
import { cartSlice } from "./userCart";
import { useSelector } from "react-redux";


// const AssignProduct = () =>{
//     const Products = useSelector((state)=>state.cart.products);
// }

export const cartproUp = createSlice({
    name: "cartPrice",
    initialState: {
        subTotal:0,
        product : []
    },
    reducers: {
        SubTotalProducts:(state)=>{
            // AssignProduct();
            state.product.forEach(element => {
                state.subTotal = state.subTotal + (element.quantity * element.proPrice);
            });
        },
        SubTotalProductsreset:(state)=>{
            state.subTotal = 0;
        }
    }
});

export const {SubTotalProducts,SubTotalProductsreset} = cartproUp.actions;
export default cartproUp.reducer