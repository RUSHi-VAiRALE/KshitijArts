import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    width : 98.9vw;
    height : 100vh;
    background : linear-gradient(50deg,rgb(244, 238, 169)50%,rgb(240, 187, 98)50%);
    display : flex;
    align-items : center;
    justify-content : center;
`;

const Wrapper = styled.div`
background-color : white;
width : 40%;
padding : 10px 5px 10px 5px;
border-radius : 12px;
`;

const Title = styled.h1`
    font-size : 24px;
    font-weight : 300;
    margin-left : 3px;
`

const Form = styled.form `
    display : flex;
    flex-wrap : wrap;
`

const Input = styled.input`
    flex : 1;
    min-width : 40%;
    margin : 10px 5px 30px 5px;
    padding : 10px;
`;
const Button = styled.button`
    width : 350px;
    height : 40px;
    background-color :rgb(6, 70, 53);
    border : none;
    border-radius : 12px;
    color : white;
    margin : auto;
    font-size : 20px;
`;


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

    return (
        <div>
            <Container>
                <Wrapper>
                    <Title>Creat An Account</Title>
                    <Form onSubmit={handleSubmit}> 
                        <Input 
                        type="email" 
                        placeholder="Email" 
                        name="email" 
                        value={inputs.email || ""} onChange={handleChange}/>
                        <Input type="text" placeholder="First Name" name="fName" value={inputs
                        .fName || ""} onChange={handleChange}/>
                        <Input type="text" placeholder="Last Name" name="lName" value={inputs
                        .lName || ""} onChange={handleChange}/>
                        <Input type="number" placeholder="phone" name="phone" value={inputs
                        .phone || ""} onChange={handleChange}/>
                        <Input type="text" placeholder="Username" name="userName" value={inputs
                        .userName || ""} onChange={handleChange}/>
                        <Input placeholder="Password" name="password" type="password" 
                            value={inputs
                            .password || ""} onChange={handleChange}
                        />
                        <Button type="submit">Create Account</Button>
                    </Form>
                </Wrapper>
            </Container>
        </div>
    );

};

export default Register;