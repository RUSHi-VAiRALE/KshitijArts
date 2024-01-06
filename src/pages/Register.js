import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Heart from "../components/Vector.svg";
import Close from "../components/Group 8.svg";

const Register = () => {
    
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
        const res = axios
                        .post("http://localhost:8000/user/auth/register",inputs)
    } catch (error) {
        console.log(error);
    } 
    navigate("/");
  }

  const handleClose1 = () =>{
        navigate("/")
  }

    return (
        <div>
            <div className="regiDiv">
                    <div className="regiDiv1">
                        <div style={{
                            display:"flex",
                            justifyContent:"center"
                        }}>
                            <img className="regiHeart" src={Heart}/>
                        <p className="regiTitle">Hi, keep track of your favorites!</p>
                        </div>
                        <img className="regicloseImg" onClick={handleClose1} src={Close}/>
                        <p className="regisignINtext">
                            Please register.
                        </p>
                    </div>
                    <div className="regiDiv2">
                        <form className="regiForm" onSubmit={handleSubmit}> 
                        <div className="regiInputCont">
                            <div className="regidiv">
                                <label for = "email" className="regiLable">Email</label>
                            <input 
                        id="email"
                        type="email" 
                        className="regiInput"
                        placeholder="Email" 
                        name="email" 
                        value={inputs.email || ""} onChange={handleChange}/>
                        </div>
                                <div className="regidiv">
                        <label className="regiLable">First Name</label>
                        <input className="regiInput" type="text" placeholder="First Name" name="fName" value={inputs
                        .fName || ""} onChange={handleChange}/>
                        </div>
                        <div className="regidiv">
                            <label className="regiLable">Last Name</label>
                        <input className="regiInput" type="text" placeholder="Last Name" name="lName" value={inputs
                        .lName || ""} onChange={handleChange}/>
                        </div>
                        <div className="regidiv">
                            <label className="regiLable">Phone</label>
                        <input className="regiInput" type="number" placeholder="phone" name="phone" value={inputs
                        .phone || ""} onChange={handleChange}/>
                        </div>
                        <div className="regidiv">
                            <label className="regiLable">Username</label>
                        <input className="regiInput" type="text" placeholder="Username" name="userName" value={inputs
                        .userName || ""} onChange={handleChange}/>
                        </div>
                        <div className="regidiv">
                            <label className="regiLable">Password</label>
                        <input className="regiInput" placeholder="Password" name="password" type="password" 
                            value={inputs
                            .password || ""} onChange={handleChange}
                        />
                        </div>
                        <button className="regiButton" type="submit">Create Account</button>
                        </div>
                        
                    </form>
                                
                    </div>
            </div>
        </div>
    );

};

export default Register;