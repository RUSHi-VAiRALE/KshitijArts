import axios from "axios";
import React, { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { setProduct } from "../redux/apiCalls";
import Card from "./Card";
import { Link } from "react-router-dom";

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
            .get("http://localhost:8000/product/allProducts")
            .then(res=>{
                setArray(res.data)
    });
    },[]);
    return (
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
        <h2 className="text-[28px] font-muli-14-regular font-bold tracking-tight text-gray-900">Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {inArray.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-h-3 aspect-w-3 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 h-96">
                <img
                  src={product.imgURL}
                  alt=""
                  className="h-96 w-72 object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                  <Link to={"/sp/"+product._id}>
                    <a>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    );
}

export default ProductList;