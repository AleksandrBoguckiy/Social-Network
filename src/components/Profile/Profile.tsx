import React from "react";
import HeaderMainContentPicture from "../../assets/images/HeaderMainContentPicture.png";
import Avatar from "../../assets/images/Avatar.jpg";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src={HeaderMainContentPicture} alt='HeaderPicture'/>
            </div>
            <div className={s.avatar}>
                <img src={Avatar} alt='AvatarPicture' />
            </div>
            <MyPosts />
        </div>
    )
}

