import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import React from 'react';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType | null
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

