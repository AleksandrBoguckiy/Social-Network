import React from 'react';
import s from '../Dialogs.module.css'
import Avatar from '../../../assets/images/Avatar.jpg'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string
    id: string
}
export const DialogItem: React.FC<DialogItemPropsType> = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <img src={Avatar} alt='Avatar'/>{props.name}</NavLink>
        </div>
    )
}