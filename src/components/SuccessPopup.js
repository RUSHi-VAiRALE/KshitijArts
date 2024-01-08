import React, { useState } from "react";
import Emo from "./Group 1.png";
import Popup from "reactjs-popup";
import { useNavigate } from "react-router-dom";

const SuccessPopUp = () =>{
    const [open, setOpen] = useState(true);
    const navigate = useNavigate();
    const closeModal = () => {
        setOpen(false);
        navigate("/");
    }
    return (
        <div>
            <Popup open={open} closeOnDocumentClick onClose={closeModal}>
                <div className="modal">
                    <div className="sucDiv">
                        <div className="sucDiv1">
                            <img className="sucImg" src={Emo}/>
                            <div className="wooHoo">Woo hoo!!</div>
                            <div className="msg">Congrats! your order is placed successfully</div>
                            <button className="sucButton" onClick={closeModal}>Done</button>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    )
}

export default SuccessPopUp;