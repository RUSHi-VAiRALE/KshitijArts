import axios from "axios";
import React, { useState,useEffect } from "react";
import Card from "./Card";

const createCard=(contact) => {
    return (
        <Card 
            key = {contact._id}
            ID = {contact._id}
            name = {contact.name}
            img = {contact.imgURL}
            tel = {contact.phone}
            email = {contact.email}
        />
    );
}

const ProductList = () => {

    const [inArray,setArray] = useState([]);
    useEffect(()=>{
        axios
            .get("http://localhost:8000/product/allProducts")
            .then((res)=>
                setArray(res.data)
            );
    },[]);
    return (
        <div className="container">
        {inArray.map(createCard)}
    </div>
    );
}

export default ProductList;