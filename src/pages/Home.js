import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import BackImg from "../components/backImg";
import Login from "../components/Login";
import OverlapDiv from "../components/overlapDiv"

const Home = () => {

    return (<div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-px box-border gap-[22px] tracking-[normal]">
        <Navbar />
        <BackImg />
        <ProductList />
        <Footer />
    </div>)
}

export default Home;