import React from "react";
import Avatar from "../../../../assets/images/Avatar.jpg";
import s from './Post.module.css'

type PostType = {
    post: string
}
export const Post: React.FC<PostType> = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src={Avatar} alt='AvatarPicture'/>
                <div className={s.post}>
                    {props.post}
                </div>
                <div className={s.likes}>
                    likes
                </div>
            </div>
        </div>
    )
}