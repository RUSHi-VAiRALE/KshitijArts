import React from "react";

const year = new Date().getFullYear();

const Footer = () => {
    return <div style={{
        width:"100%",
        position:"fixed",
        backgroundColor :"#2e3718",
        height: "3rem",
        display: "flex",
        justifyContent:"center",
        bottom:"0px"}}>
        <p style={{
            marginTop : "1rem",
            color : "#e9a554"
        }}>copyright © {year}</p>
    </div>
}

export default Footer;