import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";


const Container = styled.div``

const Wrapper = styled.div``

const Div = styled.div``

const Img = styled.img``

const Button = styled.button``

const H2 = styled.h2``

const P = styled.p``

const H3 = styled.h3``

const CartCard=(props)=>{

    const cartId = useSelector((state)=>state.user.currentUser)

    const handleClick=(e)=>{
        try {
            axios
        .delete("http://localhost:8000/userCart/deleteCart/"+cartId.cartid+"/"+props.ID,{headers:{authorization: "Bearer "+cartId.accessToken}});
        } catch (error) {
            console.log(error)
    }
    window.location.reload(true)
}

    return(
        <Wrapper className="cartwrapper">
                
                    <Div className="Cartmain1">
                            <Div className="imgcont">
                                <Img className="CartmainProduct" src={props.img} />
                            </Div>
                    </Div>

                        <Div className="Cartmain2">
                            <H2 className="productName">
                                {props.name}
                            </H2>
                            <P className="productDisc">{props.disc}</P>
                            <H3 className="price">{props.price}</H3>
                            <Button onClick={handleClick} className="btn btn-remove">Remove</Button>
                        </Div>
                    
            </Wrapper>
    )
}

export default CartCard;