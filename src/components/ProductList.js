import axios from "axios";
import React, { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setProduct } from "../redux/apiCalls";
import Card from "./Card";

const createCard=(contact) => {
    return (
        <Card 
            key = {contact._id}
            ID = {contact._id}
            name = {contact.name}
            img = {contact.imgURL}
            price = {contact.price}
            tel = {contact.phone}
            email = {contact.email}
        />
    );
}

const ProductList = () => {

    const [inArray,setArray] = useState([]);
    
    useEffect(()=>{
        axios
            .get("http://34.204.107.73:8000/product/allProducts")
            .then(res=>{
                setArray(res.data)
    });
    },[]);
    return (
        <div className="container">
        {inArray.map(createCard)}
    </div>
    );
}

export default ProductList;