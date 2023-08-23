import React, { useState,useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import CartCard from "./cartCard";
import { setProduct } from "../redux/apiCalls";
import { SubTotalProducts,SubTotalProductsreset } from "../redux/productPriceUpdate";
import { useNavigate } from "react-router-dom";
const Wrapper = styled.div``;

const Div = styled.div``

const Img = styled.img``

const Button = styled.button``

const H2 = styled.h2``

const P = styled.p``

const H3 = styled.h3``


let shipChar = 100;
const createCart=(contact,index)=>{
    console.log(index)
    return(
        <CartCard
            key = {contact._id}
            ID = {contact._id}
            name = {contact.proName}
            disc = {contact.proDisc}
            img = {contact.proURL}
            price = {contact.proPrice}
            qty = {contact.quantity}
            index = {index}
            objCart = {contact}
        />
    );
}



const Cartcomp = () => {
    // const [product,setProduct] = useState([]);
    console.log("first")
    const ind=0;
    const CartId = useSelector((state)=>state.user.currentUser)
    const product = useSelector((state)=>state.cart.products);
    // const subTot = useSelector((state)=>state.cart.subTotal);
    const navigate = useNavigate();
    const user = useSelector((state)=>state.user.userName);
    let subTotal = 0;
    product.forEach(element => {
                subTotal = subTotal + (element.quantity * element.proPrice);
            });
    const dispatch = useDispatch();
    useEffect(()=>{
        setProduct(dispatch,CartId);
        // dispatch(SubTotalProductsreset());
        // dispatch(SubTotalProducts());
        // try {
        //     axios
        // .get("http://localhost:8000/userCart/allCart/"+CartId.cartid,{headers:{authorization: "Bearer "+CartId.accessToken}})
        // .then((res)=>
        //     setProduct(res.data)
        // );
        // } catch (error) {
        //     console.log(error)
        // }
},[CartId.cartid]);

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
                const proInfo = product;
                // const proInfo = {
                //     proArray : 
                //     // pId : single._id,
                //     // pImg  : single.imgURL,
                //     // pName : single.name,
                //     // pQuant : Number(currentState),
                //     // pPrice: (data.amount/100)
                // }
                axios.post("http://localhost:8000/payment/verify/"+CartId.cartid,{response:response,proInfo})
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
        console.log("i got clicked in place order")
        console.log(amount)
        if (user!=="") {
            console.log("im in");
            const _data = {amount:amount}
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
            navigate("/")
        }
    }



    if (product.length==0) {
        return (
        <div style={{
            top:"400px"
        }}>
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
            {product.map(createCart,ind)}
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
                        &#x20b9; {subTotal}
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
                        &#x20b9; {Number(shipChar)}
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
                        &#x20b9; {shipChar+subTotal}
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
                    <button onClick={()=>handlePayment(subTotal)} className="placeObutton">
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