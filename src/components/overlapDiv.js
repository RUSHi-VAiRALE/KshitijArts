import React from "react";
import Separtor from "./Separator";

const OverlapDiv=()=>{
    return(
        <div style={{
            backgroundColor:"black",
            width:"96%",
            height:"50px",
            margin:"auto",
            position:"relative",
            top:"50%",
            borderRadius:"60px",
            top:"-1px",
            paddingTop:"0.5%"
        }}>
        <Separtor/>
        </div>
    )
}

export default OverlapDiv;