import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import menuBar from "../icons/bars-solid.svg";
import cartComp from "../icons/cart-shopping-solid (2).svg"
import userIcon from "../icons/user-solid.svg"
import { useSelector,useDispatch } from "react-redux";
import Logo from "./Ellipse 1 (3).png"
import {logout} from "../redux/userLogin"
import { logoutProducts } from "../redux/userCart";
import Login from "./Login";

const Navbar = ({handleLoginClick}) => {

    const [isShowLogin,setIsShowLogin] = useState(false);
    const quantity = useSelector((state)=>state.cart.quantity);
    const user = useSelector((state)=>state.user.userName)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleItems = () =>{
        if(user!==""){
            navigate("/cart");
        }

        else{

            alert("Please Sign First!");
            handleSignIN();
        }
    }


    const handleLogout=()=>{
        dispatch(logout())
        dispatch(logoutProducts())
        navigate("/")
    }

    const handleSignIN = () =>{
        setIsShowLogin(true)
        ShowLogin();
    };



    const ShowLogin = () => {
        const p = document.getElementById("divd")
        if (p != null) {
            p.style.visibility="visible"
        }
        if (isShowLogin) {
            return(
            <Login/>
        )
        }
    }

    const checkConditionally=()=>{
        if(user!==""){
            return(
                <div style={{
                    display:"flex",
                    alignItems:"center",
                    flexDirection:"column"
                }}>
                    {/* <div style={{
                        display:"flex",
                        marginBottom:"2px"
                    }}>
                        <img className="icon" src={userIcon} />
                    <p style={{
                        fontSize:"1.4em",
                        marginLeft:"10px",
                        color:"#2e3718"
                    }}>Hello,{user}</p>
                    </div> */}
                    <button onClick={handleLogout} className="logout_btn"><p className="btnName">Logout</p></button>
                </div>
            )
        }
        else{
            return(
                <button onClick={handleSignIN} className="nav_btn"><p className="btnName">Sign in</p></button>
            )
        }
    }

    const createDiv=()=>{
        if(quantity!==0){
            return(
                <p className="btnName" style={{
                    marginRight:"2px"
                }}>
                    {quantity}
                </p>
            )
        }
    }

    return (
    <div id="loginF" className="navflexcont">
        {ShowLogin()}
        <div className="ok">
        <div className="first">
            <p className="logoName">Kshitij.World</p>
        </div>
        <div className="second">
            <div ><a href="/" className="nice">Home</a></div>
            <div ><a href="/products" className="nice">Products</a></div>
            <div className="nice">About</div>
            <div className="nice">Contact</div>
        </div>
        
        <div className="third">
                <div>
                        <button onClick= {handleItems} className="iconContainer">
                    {createDiv()}
                    <p className="btnName">items</p>
                    <img style={{
                        width:"20px"
                    }} src={cartComp} />
                </button>
                </div>
                <div>
                    {checkConditionally()}
            </div>
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