import React,{useState} from "react";
import Product from "../components/ProductList";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Login from "./Login";
import Separtor from "../components/Separator";


const ProductsPage = () => {
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
    return <div>
            <Navbar handleLoginClick={handleLoginClick} />
            {ShowLogin()}
            <Product />
            <Footer />
        </div>
}

export default ProductsPage;