import style from './MyFriends.module.css';
import React from "react";
import Avatar from '../../assets/images/Avatar.jpg'

type MyFriendsPropsType = {
    id?: number
    name: string
}

export const MyFriends: React.FC<MyFriendsPropsType> = (props) => {

    return (
        <div className={style.friends}>
            <div>
                <img src={Avatar} alt={'Avatar'}/> {props.name}
            </div>
        </div>
    );
}