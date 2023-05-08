import React, { useState,useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
const Wrapper = styled.div``;

const Div = styled.div``

const Img = styled.img``

const Button = styled.button``

const H2 = styled.h2``

const P = styled.p``

const H3 = styled.h3``

const CreateCart=(sProduct)=>{
    
    const handleClick=(sPro)=>{
        console.log("remove");
    //     try {
    //         axios
    //     .get("http://localhost:8000/userCart/deleteCart/"+CartId1.cartid+"/"+sPro._id,{headers:{authorization: "Bearer "+CartId1.accessToken}});
    //     } catch (error) {
    //         console.log(error)
    // }
}
    return(
        <Wrapper className="cartwrapper">
                
                    <Div className="Cartmain1">
                            <Div className="imgcont">
                                <Img className="CartmainProduct" src={sProduct.imgURL} />
                            </Div>
                    </Div>

                        <Div className="Cartmain2">
                            <H2 className="productName">
                                {sProduct.proName}
                            </H2>
                            <P className="productDisc">{sProduct.proDisc}</P>
                            <H3 className="productPrice">{sProduct.price}</H3>
                            <Button onClick={handleClick(sProduct)} className="btn btn-remove">Remove</Button>
                        </Div>
                    
            </Wrapper>
    )
}

const Cartcomp = () => {
    console.log("cart called");
    const [products,setProducts] = useState([])
    const CartId = useSelector((state)=>state.user.currentUser)
    useEffect(()=>{
        try {
            axios
        .get("http://localhost:8000/userCart/allCart/"+CartId.cartid,{headers:{authorization: "Bearer "+CartId.accessToken}})
        .then((res)=>
            setProducts(res.data)
        );
        } catch (error) {
            console.log(error)
        }
},[CartId.cartid])

    return (
        <Div>
                {products.map(CreateCart)}
        </Div>

    );
}

export default Cartcomp;