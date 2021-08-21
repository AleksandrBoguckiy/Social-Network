import HeaderMainContentPicture from '../../../assets/images/HeaderMainContentPicture.png';
import s from './ProfileInfo.module.css';
import React from 'react';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";
import Avatar from '../../../assets/images/Avatar.jpg';

type ProfileInfoPropsType = {
    profile: ProfileType | null
}

export const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.wrapper}>
            <div>
                <img className={s.header} src={HeaderMainContentPicture} alt='HeaderPicture'/>
            </div>
            <div>
                <img className={s.avatar} src={props.profile.photos.large != null ? props.profile.photos.large : Avatar} alt='AvatarPicture'/>
            </div>
        </div>
    )
}