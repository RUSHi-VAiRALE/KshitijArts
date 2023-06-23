import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {login} from "../redux/apiCalls";
import Close from "../components/xmark-solid.svg"

const Container = styled.div`
    border : solid;
    width : 100vw;
    height : 100vh;
    background-image: linear-gradient(120deg, #fadddd 0%, #9c8471 100%);
    display : flex;
    align-items : center;
    justify-content : center;
`;

const Wrapper = styled.div`
position : absolute;
top : 300px;
left: 510px;
border : solid;
background-color : #fed49a;
width : 450px;
height:300px;
border-radius : 12px;
z-index : 1;
`;

const Title = styled.h1`
    font-size : 24px;
    font-weight : bolder;
`

const Form = styled.form `
    height:100%;
    display : flex;
    justify-content:space-around;
    flex-direction : column;
    align-items:center;
`

const Input = styled.input`
    width:250px;
    height:40px;
    border-radius:21px;
    border:none;
`;
const Button = styled.button`
    width : 180px;
    height : 40px;
    background-color :#2e3718;
    border : none;
    border-radius : 20px;
    color : white;
    font-size : 20px;
`;

const Login = ({isShowLogin}) => {

    const [inputs, setInputs] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const token = useSelector((state)=>state.user);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    login(dispatch,inputs);
    // dispatch(loginStart());
    // try {
    //     axios
    //     .post("http://localhost:8000/user/auth/login",inputs)
    //     .then((res)=>
    //         dispatch(loginSuccess(res.data)))
        
    // } catch (error) {
    //     dispatch(loginFailure());
    // }
    navigate("/");
  }

  const handleClose = () =>{
        const p = document.getElementById("divd").style.display="none";
  }

    return(
                <Wrapper id="divd">
                    <Form onSubmit={handleSubmit}>
                        <Title>Login</Title>
                        <img  onClick={handleClose} style={{
                            width:"25px",
                            height:"25px",
                            position:"absolute",
                            top:"0px",
                            right:"2px",
                        }} src={Close}/>
                        <Input 
                        type="text"
                        placeholder="Username"
                        name="userName"
                        value={inputs.userName || ""} 
                        onChange={handleChange} />
                        <Input
                        type="password"
                        name="password"
                        placeholder="Password" 
                        value={inputs.password || ""}
                        onChange={handleChange}
                        />
                        <Button type="submit">Login</Button>
                    </Form>
                </Wrapper>
    );
}

export default Login;
