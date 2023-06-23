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
        <ProductList />
        <Footer />
    </div>)
}

export default Home;