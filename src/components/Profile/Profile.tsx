import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import React from 'react';
import {ProfilePageType} from '../../redux/state';

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPostCallBack: (postMessage: string) => void
    updateNewPostTextCallBack: (newText: string) => void
}
export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPostCallBack={props.addPostCallBack}
                     updateNewPostTextCallBack={props.updateNewPostTextCallBack}
                     newPostText={props.profilePage.newPostText}/>
        </div>
    )
}

