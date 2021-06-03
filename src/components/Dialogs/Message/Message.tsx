import React from "react";
import s from '../Dialogs.module.css'
import Avatar from "../../../assets/images/Avatar.jpg";

type PropsType = {
    message: string
}

export const Message = (props: PropsType) => {

    return (
        <div className={s.messages}>
            <img src={Avatar} alt='Avatar'/> {props.message}
        </div>
    )
}