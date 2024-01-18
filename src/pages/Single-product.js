import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SingleProduct from "../components/SingleProduct";
import Login from "../components/Login";
import ProductList from "../components/ProductList";
import OverlapDiv from "../components/overlapDiv";


const SingleProductpage = () => {


    return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-px box-border gap-[22px] tracking-[normal]">
        <Navbar />
        <SingleProduct />
        {/* <OverlapDiv/> */}
        <ProductList />
        <Footer />
    </div>
    );
}
export default SingleProductpage;

