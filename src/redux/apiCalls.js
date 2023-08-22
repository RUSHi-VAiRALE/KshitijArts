import { loginStart,loginFailure,loginSuccess } from "./userLogin"
import {setProducts} from "./userCart"
import axios from "axios";


export const login= async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        await axios
        .post("http://localhost:8000/user/auth/login",user)
        .then((res)=>
            dispatch(loginSuccess(res.data))) 
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const setProduct = async (dispatch,cartId) =>{
    try {
            axios
        .get("http://localhost:8000/userCart/allCart/"+cartId.cartid,{headers:{authorization: "Bearer "+cartId.accessToken}})
        .then((res)=>
            dispatch(setProducts(res.data))
        );
        } catch (error) {
            console.log(error)
        }
}

export const incQty = async(cartID,index)=>{
    try {
        axios
        .post("http://localhost:8000/userCart/incqty/"+cartID.cartid+"/"+index,{headers:{authorization: "Bearer "+cartID.accessToken}})
        .then((res)=>
            console.log(res)
        );
    } catch (error) {
        console.log(error)
    }
}

export const decQty = async(cartID,index) =>{
    try {
        axios
        .post("http://localhost:8000/userCart/decqty/"+cartID.cartid+"/"+index,{headers:{authorization: "Bearer "+cartID.accessToken}})
        .then((res)=>
            console.log(res)
        );
    } catch (error) {
        console.log(error)
    }
}