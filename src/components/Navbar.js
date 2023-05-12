import React from "react";
import { Link, useNavigate } from "react-router-dom";
import menuBar from "../icons/bars-solid.svg";
import cartComp from "../icons/cart-shopping-solid (2).svg"
import userIcon from "../icons/user-solid.svg"
import { useSelector,useDispatch } from "react-redux";
import Logo from "./Ellipse 1 (3).png"
import {logout} from "../redux/userLogin"

const Navbar = () => {
    const quantity = useSelector((state)=>state.cart.quantity);
    const user = useSelector((state)=>state.user.userName)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout=()=>{
        dispatch(logout())
        navigate("/")
    }

    const checkConditionally=()=>{
        if(user!==""){
            return(
                <div style={{
                    display:"flex",
                    alignItems:"center"
                }}>
                    <img className="icon" src={userIcon} />
                    <p style={{
                        fontSize:"1.4em",
                        marginLeft:"10px",
                        color:"#2e3718"
                    }}>Hello,{user}</p>
                    <button onClick={handleLogout} className="nav_btn">Logout</button>
                </div>
            )
        }
        else{
            return(
                <button className="nav_btn"><a style={{textDecoration:"none"}} href="/login" className="a">Login/Register</a></button>
            )
        }
    }

    const createDiv=()=>{
        if(quantity!==0){
            return(
                <div
                                style={{
                                    borderRadius:"15px",
                                    paddingRight:"5px",
                                    paddingLeft:"5px",
                                    color:"white",
                                    fontSize:"15px",
                                    backgroundColor:"#6D67E4",
                                    textAlign:"center",
                                    border:"solid",
                                    position:"absolute",
                                    top:"2px"
                                }}>
                                {
                                    quantity
                                }
                        </div>
            )
        }
    }

    return (
    <div className="ok">
        <div className="first">
            <img typeof="button" className="menuBar" src={menuBar} />
            <img className="logo" src={Logo}/>
        </div>
        <div className="second">
            <div ><a href="/" className="nice">Home</a></div>
            <div ><a href="/products" className="nice">Products</a></div>
            <div className="nice">About</div>
            <div className="nice">Contact</div>
        </div>
        
        <div className="third">
                <div style={{
                    display:"flex",
                    alignItems:"center"
                    }}>
                    <div className="iconContainer">
                        {
                            (user!=="")? <Link to="/cart">
                        <img
                        style={{
                            width:"40px"
                        }}
                        typeof="button" 
                        src={cartComp}/>
                        </Link> : 
                        <Link to="/login">
                        <img
                        style={{
                            width:"40px"
                        }}
                        typeof="button" 
                        src={cartComp}/>
                        </Link>
                        }
                        {createDiv()}
                    </div>
                </div>
                <div 
                style=
                {
                    {
                        width:"50%"
                    }
                }>
                    {checkConditionally()}
            </div>
        </div>
    </div>
    );
}

export default Navbar;

{/* <div className="sideMenu">
            <div className="sideMenudiv">
                <button className="nav_btn">Login</button>
            </div>
            <div className="sideNav">
                <div className="nice">Home</div>
                <div className="nice">Products</div>
                <div className="nice">About</div>
                <div className="nice">Contact</div>
            </div>
            <div className="sideMenudiv">
                <button className="nav_btn">Logout</button>
            </div>
        </div> */}