import React, { useState,useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import CartCard from "./cartCard";

const Wrapper = styled.div``;

const Div = styled.div``

const Img = styled.img``

const Button = styled.button``

const H2 = styled.h2``

const P = styled.p``

const H3 = styled.h3``

const createCart=(contact)=>{
    return(
        <CartCard
            key = {contact._id}
            ID = {contact._id}
            name = {contact.proName}
            disc = {contact.proDisc}
            img = {contact.proURL}
            price = {contact.proPrice}
            objCart = {contact}
        />
    );
}



const Cartcomp = () => {
    const [product,setProduct] = useState([]);
    const CartId = useSelector((state)=>state.user.currentUser)
    useEffect(()=>{
        try {
            axios
        .get("http://localhost:8000/userCart/allCart/"+CartId.cartid,{headers:{authorization: "Bearer "+CartId.accessToken}})
        .then((res)=>
            setProduct(res.data)
        );
        } catch (error) {
            console.log(error)
        }
},[CartId.cartid]);

    if (product.length==0) {
        return (
        <div>
            <h1>YOUR CART IS EMPTY</h1>
        </div>

    );
    } else {
        return (
        <div>
            <div className="cartName">Shopping Cart</div>
            <div className="cartContainer">
            <div className="cartPro">
            <div className="proInfoCont">
                <div className="proInfoName">

                </div>
                <div className="proInfoName">
                    Product Name
                </div>
                <div className="proInfoName">
                    Unit Price
                </div>
                <div className="proInfoName">
                    Qty
                </div>
                <div className="proInfoName">
                    Subtotal
                </div>
            </div>
            {product.map(createCart)}
        </div>
        <div className="orderSumm">

        </div>
        </div>
        </div>
        
        

    );
    }
}

export default Cartcomp;