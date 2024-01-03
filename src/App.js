import React from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import AccDashBoard from "./pages/AccountDashBoard";
import Product  from "./pages/Products";
import SingleProduct from "./pages/Single-product"
import Cart from "./pages/Cart";
import {
    Route,
    Routes
} from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./components/Login";

const App = () => {
    return (
        <Routes>
            <Route path="/" element = {<Home />}/>
            <Route path="/register" element = {<Register />}/>
            <Route path="/login" element = {<Login />}/>
            <Route path="/products" element = {<Product />}/>
            <Route path="/sp/:id" element = {<SingleProduct />}/>
            <Route path="/cart" element = {<Cart />}/>
            <Route path="/AccDashboard" element={<AccDashBoard />} />
        </Routes>)
};

export default App;
