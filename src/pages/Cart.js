import React from "react";
import Cartcomp from "../components/Cartcomp";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Separator from "../components/Separator"
const singleCart = () => {
    return (<div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-px box-border gap-[22px] tracking-[normal]">
        <Navbar />
        <Cartcomp />
        <Footer />
    </div>
    );
}

export default singleCart;