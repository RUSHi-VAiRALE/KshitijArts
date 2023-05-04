import React from "react";
import Product from "../components/ProductList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Separtor from "../components/Separator";


const ProductsPage = () => {
    return <div>
            <Navbar />
            <Separtor />
            <Product />
            <Footer />
        </div>
}

export default ProductsPage;