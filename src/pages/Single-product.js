import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SingleProduct from "../components/SingleProduct";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/userCart";
import Single from "../newSingle"
import ProductList from "../components/ProductList";
import { useLocation } from "react-router-dom";
import axios from "axios";
import OverlapDiv from "../components/overlapDiv";


const SingleProductpage = () => {

    return (
    <div>
        <Navbar />
        <SingleProduct />
        <OverlapDiv/>
        <ProductList />
        <Footer />
    </div>
    );
}
export default SingleProductpage;

