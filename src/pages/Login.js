import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { loginFailure, loginStart, loginSuccess } from "../redux/userLogin";
import { useNavigate } from "react-router-dom";
import {login} from "../redux/apiCalls";


const Container = styled.div`
    width : 100vw;
    height : 100vh;
    background-image: linear-gradient(120deg, #fadddd 0%, #9c8471 100%);
    display : flex;
    align-items : center;
    justify-content : center;
`;

const Wrapper = styled.div`
background-color : #fed49a;
width : 450px;
height:300px;
border-radius : 12px;
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

const Login = () => {

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
    return(
        <div>
            <Navbar />
            <Container>
                <Wrapper>
                    <Form onSubmit={handleSubmit}>
                        <Title>Login</Title>
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
            </Container>
            <Footer />
        </div>
    );
}

export default Login;
