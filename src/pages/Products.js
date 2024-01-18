import React,{useState} from "react";
import Product from "../components/ProductList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Separtor from "../components/Separator";
import OverlapDiv from "../components/overlapDiv";


const ProductsPage = () => {
    
    return <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center pt-0 px-0 pb-px box-border gap-[22px] tracking-[normal]">
            <Navbar />
            {/* <OverlapDiv /> */}
            <Product />
            <Footer />
        </div>
}

export default ProductsPage;