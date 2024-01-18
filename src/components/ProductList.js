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
            .get("http://localhost:8000/product/allProducts")
            .then(res=>{
                setArray(res.data)
    });
    },[]);
    return (
        <div className="bg-white w-full">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {inArray.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-h-2 aspect-w-2 w-full overflow-hidden bg-gray-200 lg:aspect-none group-hover:opacity-75 h-80">
                <img
                  src={product.imgURL}
                  alt=""
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={"/sp/"+product._id}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
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