import React from "react";
import { useSelector } from "react-redux";

const Userinfo=()=>{
    const user = useSelector((state)=>state.user.userName)
    return (
        <div className="flexContainer">
            <div>
                Hello, {user}
            </div>

            <div>
                Logout
            </div>
        </div>
    )
}

export default Userinfo;    