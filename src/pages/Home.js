import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import BackImg from "../components/backImg";
import Login from "../components/Login";
import OverlapDiv from "../components/overlapDiv"

const Home = () => {

    return (<div>
        <Navbar />
        <BackImg />
        <div style={{
            width:"80.1%",
            border:"solid",
            position:"relative",
            maxWidth: "1277px",
            margin:"auto",
            top:"156px",
            borderColor:"#D9D9D9"
        }}></div>
        <OverlapDiv />
        <ProductList />
        <Footer />
    </div>)
}

export default Home;