import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Separator from "../components/Separator";
import UserInfo from "../components/userInfo";
import BackImg from "../components/backImg";
import OverlapDiv from "../components/overlapDiv"

const Home = () => {
    return (<div>
        <Navbar />
        <BackImg />
        <OverlapDiv />
        <ProductList />
        <Footer />
    </div>)
}

export default Home;