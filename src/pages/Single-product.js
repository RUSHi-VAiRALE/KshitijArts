import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SingleProduct from "../components/SingleProduct";

import ProductList from "../components/ProductList";
import OverlapDiv from "../components/overlapDiv";


const SingleProductpage = () => {

    return (
    <div>
        <Navbar />
        <SingleProduct />
        {/* <OverlapDiv/> */}
        <ProductList />
        <Footer />
    </div>
    );
}
export default SingleProductpage;

