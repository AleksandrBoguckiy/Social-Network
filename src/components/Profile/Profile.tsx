import React from "react";
import HeaderMainContentPicture from "../../assets/images/HeaderMainContentPicture.png";
import Avatar from "../../assets/images/Avatar.jpg";
import s from './Profile.module.css'

export function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src={HeaderMainContentPicture} alt='HeaderPicture'/>
            </div>
            <div>
                <img src={Avatar} alt='AvatarPicture'/>
            </div>
            <div>
                My post
                <div>
                    New post
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}