import React from "react";
import styled from "styled-components";

const Hr = styled.hr`
align : center;
margin: auto;
width : 180px;
height : 0px;
border : solid 1px;
color : white`

const Heading = styled.h2`
text-align : center;
font-weight : lighter;
font-size : 2rem;
color : white`

const Separtor = () => {
    return (
        <div className="sep-Container">
            <Hr className="hr"/>
            <Heading>Products</Heading>
            <Hr />
        </div>
    );
}

export default Separtor;