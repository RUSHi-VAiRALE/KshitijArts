import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userLogin";
import cartReducer from "./userCart";

export default configureStore({
    reducer:{
        user:userReducer,
        cart:cartReducer
    }
});