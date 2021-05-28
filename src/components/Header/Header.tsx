import HeaderPicture from "../../assets/images/HeaderPicture.png";
import React from "react";
import s from './Header.module.css';

export function Header () {
    return (
        <div className={s.header}>
            <img src={HeaderPicture} alt='Logo'/>
        </div>
    )
}