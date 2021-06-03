import HeaderMainContentPicture from "../../../assets/images/HeaderMainContentPicture.png";
import s from "../Profile.module.css";
import Avatar from "../../../assets/images/Avatar.jpg";
import React from "react";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src={HeaderMainContentPicture} alt='HeaderPicture'/>
            </div>
            <div className={s.avatar}>
                <img src={Avatar} alt='AvatarPicture'/>
            </div>
        </div>
    )
}