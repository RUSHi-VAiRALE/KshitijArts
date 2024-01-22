import React from "react";
import BackImage from "./mockup-wall-with-plants-shelf.jpg"
import IMG1 from "./handmade nature painting 8k.jpg"
import IMG2 from "./pottery image with colour full background skin col.jpg"
const BackImg=()=>{
    return(
    <div className="imgCont">
        <img className="backImg" src={BackImage}/>
        <div className="backImage absolute">
            <h1 style={{color:"#50623A"}} className="backImageh1 font-bold text-gray-900 tracking-[-0.05em] leading-[25px] text-black font-palanquin-dark flex flex-col tracking-wide">
                Kshitij.World
            <span className="backImageSpan font-ovo-18-regular tracking-wide text-black">Beyond The Horizon</span>
            </h1>
        </div>
    </div>
)
}

export default BackImg;