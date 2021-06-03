import React from "react";
import s from '../Dialogs.module.css'
import Avatar from '../../../assets/images/Avatar.jpg'
import {NavLink} from "react-router-dom";

type PropsType = {
    name: string
    id: number
}

export const DialogItem = (props: PropsType) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <img src={Avatar} alt='Avatar'/>{props.name}</NavLink>
        </div>
    )
}