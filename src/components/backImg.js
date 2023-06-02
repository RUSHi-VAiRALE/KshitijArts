import React from "react";
import BackImage from "./heropottery.jpg"
import IMG1 from "./handmade nature painting 8k.jpg"
import IMG2 from "./pottery image with colour full background skin col.jpg"
const BackImg=()=>{
    return(
    <div >
        <img className="backImg" src={BackImage}/>
        <div style={{
            display:"flex"
        }}>
            <div className="onimgdiv1">

            </div>
            <div className="onimgdiv2">
                <div className="imgdiv1">
                    <img className="imgPainting" src={IMG1}/>
                </div>
                <div className="imgdiv2">
                    <img className="imgPottery" src={IMG2}/>
                </div>
            </div>
        </div>

    </div>
)
}

export default BackImg;