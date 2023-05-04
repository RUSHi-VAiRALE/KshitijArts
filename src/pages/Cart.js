import React from "react";
import Cartcomp from "../components/Cartcomp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Separator from "../components/Separator"
const singleCart = () => {
    return (<div>
        <Navbar />
        <Separator/>
        <Cartcomp />
        <Footer />
    </div>
    );
}

export default singleCart;