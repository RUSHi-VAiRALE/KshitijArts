import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div``

const Wrapper = styled.div``

const Heading = styled.div``

const Img = styled.img``

const Button = styled.button``

const Paragraph = styled.div``


const Card=(props)=>{

    const handlePayment=(amount)=>{
       const _data = {amount:amount}
        try {
            axios.post("http://localhost:8000/payment/orders",_data)
        .then(res=>{
            console.log(res.data)
        })
        } catch (error) {
            console.log(error)
        }
    }

    return (
            <div className="proBox">
                <Wrapper className="wrapper">
                <Link style={{textDecoration:"None"}} to={"/sp/"+props.ID}>
                <Img  className="circle-img" src={props.img}/>
                </Link>
                </Wrapper>
                <div className="secDiv">
                    <div className="name">
                        {props.name}
                    </div>
                    <div className="price">
                        {props.price}
                    </div>
                    <div>
                        <Button onClick={()=>handlePayment(props.price)}
                        className="btn">Buy Now</Button>
                    </div>
                </div>
            </div>
    );
}

export default Card;
