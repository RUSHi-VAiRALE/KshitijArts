import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div``

const Wrapper = styled.div``

const Heading = styled.div``

const Img = styled.img``

const Button = styled.button``

const Paragraph = styled.div``


const Card=(props)=>{

    return (
            <div style={{
                height:"450px",
                marginTop:"2%"
            }}>
                <Wrapper className="wrapper">
                <Link style={{textDecoration:"None"}} to={"/sp/"+props.ID}>
                <Img  className="circle-img" src={props.img}/>
                </Link>
                </Wrapper>
                <div className="secDiv">
                    <div className="name">
                        {props.name}
                    </div>
                    <div>
                        <Button
                        className="btn">Buy Now</Button>
                    </div>
                </div>
            </div>
    );
}

export default Card;
