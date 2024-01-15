import React,{useState} from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import DelImg from "./trash-solid.svg"
import { incQty,decQty } from "../redux/apiCalls";
import { setProduct } from "../redux/apiCalls";
import { subTotalProducts,subTotalProductsreset } from "../redux/userCart";
import { useEffect } from "react";

const Container = styled.div``

const Wrapper = styled.div``

const Div = styled.div``

const Img = styled.img``

const Button = styled.button``

const H2 = styled.h2``

const Para = styled.p``

const H3 = styled.h3``

const quantity=0;

const CartCard=(props)=>{
    const cartId = useSelector((state)=>state.user.currentUser)
    const productArray = useSelector((state)=>state.cart.products)
    const dispatch = useDispatch();
    const [currentState, setState] = useState(productArray[props.index].quantity);
    const [currentPrice , setPrice] = useState(productArray[props.index].proPrice * productArray[props.index].quantity);

    // useEffect(() =>{
    //     setPrice(productArray[props.index].proPrice * productArray[props.index].quantity)
    // },[cartId.cartid]);
    
    const no = () =>{
        
    }
    const increase = () =>{
        let curVar = currentState;
        curVar = curVar + 1;
        setPrice(curVar * Number(props.price));
        setState(curVar);
        incQty(cartId,props.index);
        setProduct(dispatch,cartId);
        // dispatch(subTotalProducts());
        // dispatch(updateQty());
    }

    const decrease = () => {
        let curVar = currentState;
        curVar = curVar - 1;
        setPrice(curVar * Number(props.price));
        setState(curVar);
        decQty(cartId,props.index);
        setProduct(dispatch,cartId);
        // dispatch(subTotalProducts());
    }
    
    const handleClick=()=>{
        try {
            axios
        .delete("http://localhost:8000/userCart/deleteCart/"+cartId.cartid+"/"+props.ID,{headers:{authorization: "Bearer "+cartId.accessToken}});
        } catch (error) {
            console.log(error)
    }
    setProduct(dispatch,cartId);
    // dispatch(subTotalProductsreset());
    // dispatch(subTotalProducts());
    // window.location.reload(true)
}

    return(
        <Wrapper className="cartwrapper">
                    <Div className="Cartmain1">
                            <Div className="imgcont">
                                <Img className="CartmainProduct" src={props.img} />
                            </Div>
                    </Div>

                        <Div className="Cartmain2">
                            <H2 className="cproductName">
                                {props.name}
                            </H2>
                            <H3 className="cproductPrice">{props.price}</H3>
                            <Wrapper className="quantityWrap">
            <Button onClick={currentState===1 ?no: decrease } className="decButton">-</Button>
            <Para className="quantCount"><Para>{currentState}</Para></Para>
            <Button onClick={increase} className="incButton">+</Button>
        </Wrapper>
            <H3 className="cproductPrice">{currentPrice}</H3>
                            <Button onClick={handleClick} className="trashCan">
                                <img src={DelImg}/>
                            </Button>
                        </Div>
                    
            </Wrapper>
    )
}

export default CartCard;