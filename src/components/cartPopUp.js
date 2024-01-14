import React from "react";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import TrashCan from "./trash-solid.svg";
import { setProduct } from "../redux/apiCalls";
import axios from "axios";

const CreateCart = (contact,index) =>{
  const cartId = useSelector((state)=>state.user.currentUser);
  const dispatch = useDispatch();
  const handleClick = () =>{
    try {
            axios
        .delete("http://localhost:8000/userCart/deleteCart/"+cartId.cartid+"/"+contact._id,{headers:{authorization: "Bearer "+cartId.accessToken}});
        } catch (error) {
            console.log(error)
    }
    setProduct(dispatch,cartId);
  }
  return(
    <div className="cartPopDiv">
      <div>
        <img src={contact.proURL} />
      </div>
      <div>
        <div>
          {contact.proName}
        </div>
        <div>
          {contact.proPrice}
        </div>
        <div>
          <button onClick={handleClick}>
            <img src={TrashCan} />
          </button>
        </div>
      </div>
    </div>
  )
}

const CartPopUP = () =>{
  const ind = 0;
  const dispatch = useDispatch();
  const cartId = useSelector((state)=>state.user.currentUser);
  const product1 = useSelector((state)=>state.cart.products);
let subTotal = 0;
    product1.forEach(element => {
                subTotal = subTotal + (element.quantity * element.proPrice);
            });
  console.log(product1)
//   useEffect(async()=>{
//        await setProduct(dispatch,cartId);
// },[cartId.cartid]);

  if (product1.length===0) {
    return(
      <div>
        YOUR CART IS EMPTY
      </div>
    )
  } else {
    return (
        <div className="cartPopDiv">
          <div>
            {
              product1.map(CreateCart,ind)
            }
          </div>
          <div>
            <div>
              <div>Total</div>
              <div>{subTotal}</div>
            </div>
            <div>
              <button>
                Go To Checkout
              </button>
            </div>
          </div>
        </div>
  );
  }
}

export default CartPopUP