import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import BackImg from "../components/backImg";
import Login from "../components/Login";
import OverlapDiv from "../components/overlapDiv"

const Home = () => {

    const [isShowLogin,setIsShowLogin] = useState(false);

    const handleLoginClick = () => {
        setIsShowLogin(true)
    };

    const ShowLogin = () => {
        if (isShowLogin) {
            return(
                <Login/>
            )
        } 
    }

    return (<div>
        <Navbar handleLoginClick={handleLoginClick} />
        {ShowLogin()}
        <BackImg />
        <ProductList />
        <Footer />
    </div>)
}

export default Home;