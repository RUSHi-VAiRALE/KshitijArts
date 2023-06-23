import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SingleProduct from "../components/SingleProduct";
import Login from "./Login";
import ProductList from "../components/ProductList";
import OverlapDiv from "../components/overlapDiv";


const SingleProductpage = () => {

    const [isShowLogin,setIsShowLogin] = useState(false);

    const handleLoginClick = () => {
        console.log("igotcalled")
        setIsShowLogin(true)
    };

    const ShowLogin = () => {
        if (isShowLogin) {
            return(
                <Login/>
            )
        } 
    }

    return (
    <div>
        <Navbar handleLoginClick={handleLoginClick} />
        {ShowLogin()}
        <SingleProduct />
        {/* <OverlapDiv/> */}
        <ProductList />
        <Footer />
    </div>
    );
}
export default SingleProductpage;

