import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/userCart";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";


const Container = styled.div``

const Wrapper = styled.div``

const Div = styled.div``

const Img = styled.img``

const Button = styled.button``

const H2 = styled.h2``

const H3 = styled.h3``

const Para = styled.p``


const SingleProductComp =()=>{
    const user = useSelector((state)=>state.user.userName);
    const dispatch = useDispatch();
    const userCheck = useSelector((state)=>state.user.userName)
    const navigate = useNavigate();
    const quantity=0;
    const loc = useLocation();
    let proId=loc.pathname.split("/")[2];
    const [single,setObject] = useState({});
    const token = useSelector((state)=>state.user.currentUser);

    const [currentState, setState] = useState(1)

    const no = () =>{
        
    }
    const increase = () =>{
        setState(currentState + 1);
    }

    const decrease = () => {
        setState(currentState - 1);
    }

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
                    pId : single._id,
                    pImg  : single.imgURL,
                    pName : single.name,
                    pPrice: (data.amount/100)
                }
                axios.post("http://localhost:8000/payment/verify/"+token.cartid,{response:response,proInfo})
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

    const handlePayment=(amount,cuState)=>{
        if (user!=="") {
            const _data = {amount:amount,
                            quantity:cuState}
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
            try {
                axios.post("http://localhost:8000/userCart/updateCart/"+token.cartid,single,{headers:{authorization: "Bearer "+token.accessToken}})
            } catch (error) {
                console.log(error)
            }
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
                        <Img id="1" onMouseEnter={handleClick1} onMouseOut={handleClick1} className="sideImg" src={single.img1URL} />
                        <Img id="2" onMouseEnter={handleClick1} onMouseOut={handleClick1} className="sideImg" src={single.img2URL} />
                        <Img id="3" onMouseEnter={handleClick1} onMouseOut={handleClick1} className="sideImg" src={single.img3URL} />
                        <Img id="4" onMouseEnter={handleClick1} onMouseOut={handleClick1} className="sideImg" src={single.img4URL} />
                        <Img id="5" onMouseEnter={handleClick1} onMouseOut={handleClick1} className="sideImg" src={single.img5URL} />
                    </Div>
                <Div className="main2">
                    <Div className="mainImg">
                        <Div>
                            <Img className="mainProduct" src={single.imgURL} />
                        </Div>
                    </Div>
                </Div>
                <Div className="main3">
                    <Div className="priceName">
                        <Div className="productName">
                            {single.name}
                        </Div>
                        <Div className="price">{single.price}</Div>
                    </Div>
                    <Div className="productDisc">{single.discription}</Div>
                    <Div><Wrapper className="quantityWrap">
            <Button onClick={currentState===1 ?no: decrease } className="decButton">-</Button>
            <Para className="quantCount"><Para>{currentState}</Para></Para>
            <Button onClick={increase} className="incButton">+</Button>
        </Wrapper></Div>
                    <Div className="btn-container">
                            <Button onClick={()=>handlePayment(single.price,currentState)} className="sBuyButton"><p className="nameCon">Buy Now</p></Button>
                            <Button 
                            onClick={handleClick}
                            className="sCartButton"><p className="nameCon">Add to Cart</p></Button>
                    </Div>
                </Div>
            </Wrapper>
    </div>
)
}
export default SingleProductComp;