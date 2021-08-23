import HeaderPicture from "../../assets/images/HeaderPicture.png";
import React from "react";
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <div className={s.header}>
            <img src={HeaderPicture} alt='Logo'/>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </div>
    )
}