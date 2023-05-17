import React, {useState} from "react";
import styled from "styled-components";

const Button = styled.button``
const Para = styled.div``
const Wrapper = styled.div``




const QuantityComp = () => {
    
    const [currentState, setState] = useState(1)

    const no = () =>{
        
    }
    const increase = () =>{
        setState(currentState + 1);
    }

    const decrease = () => {
        setState(currentState - 1);
    }

    return (
        <Wrapper className="quantityWrap">
            <Button onClick={currentState===1 ?no: decrease } className="decButton">-</Button>
            <Para className="quantCount"><Para>{currentState}</Para></Para>
            <Button onClick={increase} className="incButton">+</Button>
        </Wrapper>
    )
}

export default QuantityComp;