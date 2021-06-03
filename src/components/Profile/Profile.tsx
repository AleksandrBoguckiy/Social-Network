import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import React from "react";
import { PostType } from '../..';


type ProfilePropsType = {
    posts: Array<PostType>
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

