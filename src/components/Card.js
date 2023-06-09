import axios from "axios";
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div``

const Wrapper = styled.div``

const Heading = styled.div``

const Img = styled.img``

const Button = styled.button``

const Paragraph = styled.div``


const Card=(props)=>{

    const user = useSelector((state)=>state.user.userName);
    const cartId = useSelector((state)=>state.user.currentUser);
    const navigate = useNavigate();

    const handleOpenRazorpay = (data) =>{
        const options = {
            key : 'rzp_test_W1CfhGkA90XLGW',
            amount : data.amount,
            currency : data.currency,
            name : "KshitijArts",
            discription : 'xyz',
            order_id : data.id,
            handler : function (response) {
                console.log(response)
                const proInfo = {
                    pId : props.ID,
                    pImg  : props.img,
                    pName : props.name,
                    pPrice: (data.amount/100)
                }
                axios.post("http://localhost:8000/payment/verify/"+cartId.cartid,{response:response,proInfo})
                .then(res=>{
                    console.log(res)
                })
                .catch(err=>{
                    console.log(err)
                })
            }
        }
        const rzp = new window.Razorpay(options)
        rzp.open();
    }

    const handlePayment=(amount)=>{
        if (user!=="") {
            const _data = {amount:amount,
                            quantity:1}
        try {
            axios.post("http://localhost:8000/payment/orders",_data)
        .then(res=>{
            console.log(res.data)
            handleOpenRazorpay(res.data);
        })
        } catch (error) {
            console.log(error)
        }
        } else {
            alert("Please login first")
            navigate("/login")
        }
    }

    return (
            <div className="proBox">
                <Wrapper className="wrapper">
                <Link style={{textDecoration:"None"}} to={"/sp/"+props.ID}>
                <Img  className="circle-img" src={props.img}/>
                </Link>
                <div className="name">
                        {props.name}
                    </div>
                    <div className="priceinlist">
                        {props.price}
                    </div>
                </Wrapper>
            </div>
    );
}

export default Card;
