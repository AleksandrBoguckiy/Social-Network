import React from 'react';
import s from '../Dialogs.module.css'
import Avatar from '../../../assets/images/Avatar.jpg';

type MessagePropsType = {
    message: string
}

export const Message: React.FC<MessagePropsType> = (props) => {

    return (
        <div className={s.messages}>
            <img src={Avatar} alt='Avatar'/> {props.message}
        </div>
    )
}