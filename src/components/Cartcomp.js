import React from "react";
import styled from "styled-components";
import QuantityComp from "./quantityComp";
import { useSelector,useDispatch } from "react-redux";
const Wrapper = styled.div``;

const Div = styled.div``

const Img = styled.img``

const Button = styled.button``

const H2 = styled.h2``

const P = styled.p``

const H3 = styled.h3``

const createCart=(sProduct)=>{


    return(
        <Wrapper className="cartwrapper">
                
                    <Div className="Cartmain1">
                            <Div className="imgcont">
                                <Img className="CartmainProduct" src={sProduct.imgURL} />
                            </Div>
                    </Div>

                        <Div className="Cartmain2">
                            <H2 className="productName">
                                {sProduct.name}
                            </H2>
                            <P className="productDisc">{sProduct.discription}</P>
                            <H3 className="productPrice">{sProduct.price}</H3>
                            <Button className="btn btn-remove">Remove</Button>
                        </Div>
                    
            </Wrapper>
    )
}

const Cartcomp = () => {

    const cart = useSelector((state)=>state.cart)

    return (
        <Div>
                {cart.products.map((product)=>(
                createCart(product)
            ))}
        </Div>

    );
}

export default Cartcomp;