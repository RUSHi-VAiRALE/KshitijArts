import React from "react";

const ADashBoard = () =>{
    return(
    <div className="aDashCont">
        <div className="aDashName">
            MY DASHBOARD
        </div>
        <div className="aDashMain">
            <div className="aDashInfo">
                <div className="aDashInfo1">
                    <div style={{
                        fontWeight:"bold",
                        background:"lightGray"
                    }} className="aDashDiv1">
                        Account Dashboard
                    </div>
                    <div className="aDashDiv1">
                        Account Information
                    </div>
                    <div className="aDashDiv1">
                        Address Book
                    </div>
                    <div className="aDashDiv1">
                        My Orders
                    </div>
                </div>
                <button className="LogButton">
                    <p className="btnName">LOG OUT</p>
                </button>
            </div>
        </div>
    </div>
)
}

export default ADashBoard;