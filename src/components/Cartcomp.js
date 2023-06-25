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
        <div className="mainCartCont">
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
                <div className="oInputAdd">
                    <div className="SummW">
                    Summary
                </div>
                <div className="AddW">
                    Address
                </div>
                    <label for="Aline1" className="OaLabel">
                        Address Line 1
                    </label>
                    <input 
                        id="Aline1"
                        type="text"
                        placeholder="Line 1"
                        className="oAinput"
                    />
                    <label for="Aline2" className="OaLabel">
                        Address Line 2
                    </label>
                    <input 
                        id="Aline2"
                        type="text"
                        placeholder="Line 2"
                        className="oAinput"
                    />
                    <label for="Country" className="OaLabel">
                        Country
                    </label>
                    <input 
                        id="Country"
                        type="text"
                        placeholder="Country"
                        className="oAinput"
                    />
                    <label for="State" className="OaLabel">
                        State
                    </label>
                    <input 
                        id="State"
                        type="text"
                        placeholder="State"
                        className="oAinput"
                    />
                    <label for="Pin Code" className="OaLabel">
                        Pin Code
                    </label>
                    <input 
                        id="Pin Code"
                        type="text"
                        placeholder="Pin Code"
                        className="oAinput"
                    />
                    <div style={{
                        width:"282px",
                        borderTop:"none",
                        borderLeft:"none",
                        borderRight:"none",
                        border:"solid",
                        borderBottomColor:"#D9D9D9",
                        borderWidth:"1px"
                    }}></div>
                </div>
            <div className="oInputAdd1">
                <div className="oAinput1">
                    <div style={{
                        width: "140px",
                        height: "30px",
                        fontSize: "15px",
                        fontFamily: "Mulish",
                        lineHeight: "25px",
                        textAlign:"left"
                    }}>
                        Sub Total
                    </div>
                    <div style={{
                        width: "140px",
                        height: "30px",
                        fontSize: "15px",
                        fontFamily: "Mulish",
                        lineHeight: "25px",
                        textAlign:"right"
                    }}>
                        $ 2800
                    </div>
                </div>
                <div className="oAinput1">
                        <div style={{
                        width: "140px",
                        height: "30px",
                        fontSize: "15px",
                        fontFamily: "Mulish",
                        lineHeight: "25px",
                        textAlign:"left"
                    }}>
                        Shipping
                    </div>
                    <div style={{
                        width: "140px",
                        height: "30px",
                        fontSize: "15px",
                        fontFamily: "Mulish",
                        lineHeight: "25px",
                        textAlign:"right"
                    }}>
                        $ 100
                    </div>
                </div>
                <div style={{
                    marginTop:"20px"
                }} className="oAinput1">
                    <div style={{
                        width: "140px",
                        height: "30px",
                        fontSize: "15px",
                        fontFamily: "Mulish",
                        lineHeight: "25px",
                        textAlign:"left"
                    }}>
                        Order Total
                    </div>
                    <div style={{
                        width: "140px",
                        height: "30px",
                        fontSize: "15px",
                        fontFamily: "Mulish",
                        lineHeight: "25px",
                        textAlign:"right"
                    }}>
                        $ 2900
                    </div>
                </div>
                <div style={{
                        width:"282px",
                        borderTop:"none",
                        borderLeft:"none",
                        borderRight:"none",
                        border:"solid",
                        borderWidth:"1px"
                    }}></div>
                </div>
                <div className="oInputAdd2">
                    <button className="placeObutton">
                        Place Order
                    </button>
                </div>
        </div>
        </div>
        </div>
        
        

    );
    }
}

export default Cartcomp;