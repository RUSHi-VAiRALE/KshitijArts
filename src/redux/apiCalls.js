import { loginStart,loginFailure,loginSuccess } from "./userLogin"
import axios from "axios";


export const login= async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        await axios
        .post("http://localhost:8000/user/auth/login",user)
        .then((res)=>
            dispatch(loginSuccess(res.data))) 
    } catch (error) {
        dispatch(loginFailure);
    }
}