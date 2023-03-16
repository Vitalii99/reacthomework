import React from "react";
import top_img from './top_img.png';
import './top-img.css';

const TopImg = () => {
    return (
        <div className="top_img">
            <img src={top_img} width="100%" alt="img" />
        </div>
    );
}

export default TopImg;