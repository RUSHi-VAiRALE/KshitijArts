import React from "react";
import styled from "styled-components";
import { useState,useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {login} from "../redux/apiCalls";
import Close from "../components/Group 8.svg"
import Heart from "../components/Vector.svg"
import { setProduct } from "../redux/apiCalls";

const Login = () => {

    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const failure = useSelector((state)=>state.user.isError);
    console.log(failure)
    const CartId = useSelector((state)=>state.user.currentUser)
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch,inputs);
    if(failure===false){
        navigate("/");
    }
    // setProduct(dispatch,CartId)
    // dispatch(loginStart());
    // try {
    //     axios
    //     .post("http://localhost:8000/user/auth/login",inputs)
    //     .then((res)=>
    //         dispatch(loginSuccess(res.data)))
        
    // } catch (error) {
    //     dispatch(loginFailure());
    // }
    
  }

//   const handleClose = () =>{
//         const p = document.getElementById("divd");
//         p.style.visibility="hidden";
//         // p.style.visibility="visible";
//         // console.log(p.style.visibility);
//   }

    return(
            <div>
                <div className="loginDiv">
                    <div className="ldiv1">
                        <div style={{
                            display:"flex",
                            justifyContent:"center"
                        }}>
                            <img className="loginHeart" src={Heart}/>
                        <p className="loginTitle">Hi, keep track of your favorites!</p>
                        </div>
                        <img className="closeImg"  src={Close}/>
                        <p className="signINtext">
                            Please sign in.
                        </p>
                    </div>
                    <div className="ldiv2">
                        <form            className="loginForm" onSubmit={handleSubmit}>
                        <div className="inputCont">
                                    <label 
                                for="username"
                                className="loginLabel">Username</label>
                                <input 
                                id="username"
                                className="loginInput"
                                type="text"
                                placeholder="Username"
                                name="userName"
                                value={inputs.userName || ""} 
                                onChange={handleChange} />
                            <label 
                                for="password"
                                className="loginLabel">Password</label>
                                <input
                                id="password"
                                className="loginInput"
                                type="password"
                                name="password"
                                placeholder="Password" 
                                value={inputs.password || ""}
                                onChange={handleChange}
                                />
                                {(failure)?<p style={{color:"red"}}>User or Password does not match</p>:<p>djkdf</p>}
                                <label className="loginLabe2">Forgot password?</label>
                                <button className="loginButton">Sign In</button>
                        </div>
                        
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default Login;
