import s from './Profile.module.css'
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import React from 'react';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

