import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addProduct } from "../redux/userCart";
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
    const [onMouseOv, setOnMouseOv] = useState(false);
    const [srcUrl , setSrcUrl] = useState("");

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
                    pQuant : Number(currentState),
                    pPrice: (data.amount/100)
                }
                axios.post("http://34.204.107.73:8000/payment/verify/"+token.cartid,{response:response,proInfo})
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
        console.log(amount,cuState)
        if (user!=="") {
            console.log("im in");
            const _data = {amount:amount,
                            quantity:cuState}
        try {
            axios.post("http://34.204.107.73:8000/payment/orders",_data)
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


useEffect(()=>{
    const GetProduct=async ()=>{
        try {
            axios
        .get("http://34.204.107.73:8000/product/"+proId)
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
                axios.post("http://34.204.107.73:8000/userCart/updateCart/"+token.cartid,single,{headers:{authorization: "Bearer "+token.accessToken}})
            } catch (error) {
                console.log(error)
            }
            // dispatch(addProduct({single,quantity}))
        } else {
            alert("Please login first!")
            navigate("/")
        }
    }

    const handleClick1=(e)=>{
        setOnMouseOv(true);
        setSrcUrl(e.target.src);
    }

    const handleClick2 = () =>{
        setOnMouseOv(false);
        setSrcUrl("");
    }
return(
        <div>
            <Wrapper className="swrapper">
                <Div className="main12Cont">
                    <Div className="main1">
                        <Div className="sideImg"><Img id="1" className="sideImg1" onMouseOver={handleClick1} onMouseOut={handleClick2}  src={single.img1URL} /></Div>
                        <Div className="sideImg"><Img id="2" onMouseOver={handleClick1} onMouseOut={handleClick2} className="sideImg1" src={single.img2URL} /></Div>
                        <Div className="sideImg"><Img id="3" onMouseOver={handleClick1} onMouseOut={handleClick2} className="sideImg1" src={single.img3URL} /></Div>
                        <Div className="sideImg"><Img id="4" onMouseOver={handleClick1} onMouseOut={handleClick2} className="sideImg1" src={single.img4URL} /></Div>
                        <Div className="sideImg"><Img id="5" onMouseOver={handleClick1} onMouseOut={handleClick2} className="sideImg1" src={single.img5URL} /></Div>
                    </Div>
                    <Div className="main2">
                                <Img className="mainProduct" src={(onMouseOv)?srcUrl:single.imgURL} />
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