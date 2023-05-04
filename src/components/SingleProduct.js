import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SingleProduct from "../components/SingleProduct";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/userCart";
import Single from "../newSingle"
import ProductList from "../components/ProductList";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const Container = styled.div``

const Wrapper = styled.div``

const Div = styled.div``

const Img = styled.img``

const Button = styled.button``

const H2 = styled.h2``

const P = styled.p``

const H3 = styled.h3``


const SingleProductComp =()=>{
    const dispatch = useDispatch();
    const userCheck = useSelector((state)=>state.user.userName)
    const navigate = useNavigate();
    const quantity=0;
    const loc = useLocation();
    let proId=loc.pathname.split("/")[2];
    const [single,setObject] = useState({});
    const [img,setImg] = useState();

useEffect(()=>{
    const GetProduct=async ()=>{
        try {
            axios
        .get("http://localhost:8000/product/"+proId)
        .then((res)=>
            setObject(res.data)
        );
        } catch (error) {
            console.log(error)
        }
    }
    GetProduct();
},[proId])

    const handleClick=()=>{
        if (userCheck!=="") {
            dispatch(addProduct({single,quantity}))
        } else {
            alert("Please login first!")
            navigate("/login")
        }
    }

    const handleClick1=(e)=>{
        let b =e.target.src
        let c = e.target.id
        let a = document.querySelectorAll("img.mainProduct")[0].src
        document.querySelectorAll("img.mainProduct")[0].setAttribute("src",b);
        document.getElementById(c).setAttribute("src",a)
    }
return(
        <div>
            <Wrapper className="swrapper">
                <Div className="main1">
                    <Div className="smallImg">
                        <Img id="1" onMouseEnter={handleClick1} onMouseOut={handleClick1} className="sideImg" src={single.img1URL} />
                        <Img id="2" onMouseEnter={handleClick1} onMouseOut={handleClick1}className="sideImg" src={single.img2URL} />
                        <Img id="3" onMouseEnter={handleClick1} onMouseOut={handleClick1} className="sideImg" src={single.img3URL} />
                        <Img id="4" onMouseEnter={handleClick1} onMouseOut={handleClick1} className="sideImg" src={single.img4URL} />
                        <Img id="5" onMouseEnter={handleClick1} onMouseOut={handleClick1} className="sideImg" src={single.img5URL} />
                    </Div>
                    <Div className="mainImg">
                        <Div>
                            <Img className="mainProduct" src={single.imgURL} />
                        </Div>
                    </Div>
                </Div>
                <Div className="main2">
                    <Div className="productName">
                        {single.name}
                    </Div>
                    <Div className="productDisc">{single.discription}</Div>
                    <Div className="productPrice">{single.email}</Div>
                    <Div className="btn-single btn-container">
                            <Button className="btn btns">Buy Now</Button>
                            <Button 
                            onClick={handleClick}
                            className="cart-btn btn btns">Add to Cart</Button>
                    </Div>
                </Div>
            </Wrapper>
    </div>
)
}
export default SingleProductComp;