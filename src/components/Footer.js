import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
    return <div style={{
        width:"100%",
        position:"relative",
        background: "#F7F7F7",
        height: "3rem",
        display: "flex",
        justifyContent:"center",
        top:"240px"}}>
        <div>
            <p style={{
            marginTop : "1rem",
            fontFamily: "Mulish",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "21px",
/* or 150% */color:"#646464"
        }}>copyright © {year}</p>
        </div>
    </div>
}

export default Footer;