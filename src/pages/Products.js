import React,{useState} from "react";
import Product from "../components/ProductList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Separtor from "../components/Separator";


const ProductsPage = () => {
    
    return <div>
            <Navbar />
            <Product />
            <Footer />
        </div>
}

export default ProductsPage;