import React from "react";
import BackImage from "./mockup-wall-with-plants-shelf.jpg"
import IMG1 from "./handmade nature painting 8k.jpg"
import IMG2 from "./pottery image with colour full background skin col.jpg"
const BackImg=()=>{
    return(
    <div className="imgCont">
        <img className="backImg" src={BackImage}/>
    </div>
)
}

export default BackImg;