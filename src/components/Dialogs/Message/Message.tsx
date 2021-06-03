import React from "react";
import s from '../Dialogs.module.css'
import Avatar from "../../../assets/images/Avatar.jpg";

export type PropsType = {
    message: string
}

export const Message: React.FC<PropsType> = (props) => {

    return (
        <div className={s.messages}>
            <img src={Avatar} alt='Avatar'/> {props.message}
        </div>
    )
}