import HeaderPicture from "../assets/images/HeaderPicture.png";
import React from "react";

export function Header () {
    return (
        <div className='header'>
            <img src={HeaderPicture} alt='Logo'/>
        </div>
    )
}