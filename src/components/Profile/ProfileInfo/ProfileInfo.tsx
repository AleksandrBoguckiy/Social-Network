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
            <div className={s.header}>
                <img src={HeaderMainContentPicture} alt='HeaderPicture'/>
            </div>
            <div>
                <img className={s.avatar} src={props.profile.photos.large != null ? props.profile.photos.large : Avatar}
                     alt='AvatarPicture'/>
            </div>
            <div className={s.fullNameUser}>
                {props.profile.fullName}
                <div className={s.status}>
                    {props.profile.aboutMe}
                </div>
            </div>
            <div className={s.lookingForAJob}>
                <div>
                    {props.profile.lookingForAJob ? <div>Looking for a job: <span>Yes</span></div> :
                        <div>Looking for a job: <span>No</span></div>}
                </div>
                <div>
                    Looking for a job description: <span>{props.profile.lookingForAJobDescription}</span>
                </div>
            </div>
            <div className={s.mainContacts}>
                <div className={s.contacts}>Contacts:</div>
                <div className={s.items}>
                    <div>facebook: <span>{props.profile.contacts.facebook ? props.profile.contacts.facebook : 'not indicated'}</span>
                    </div>
                    <div>website: <span>{props.profile.contacts.website ? props.profile.contacts.website : 'not indicated'}</span>
                    </div>
                    <div>vk: <span>{props.profile.contacts.vk ? props.profile.contacts.vk : 'not indicated'}</span>
                    </div>
                    <div>twitter: <span>{props.profile.contacts.twitter ? props.profile.contacts.twitter : 'not indicated'}</span>
                    </div>
                    <div>instagram: <span>{props.profile.contacts.instagram ? props.profile.contacts.instagram : 'not indicated'}</span>
                    </div>
                    <div>youtube: <span>{props.profile.contacts.youtube ? props.profile.contacts.youtube : 'not indicated'}</span>
                    </div>
                    <div>github: <span>{props.profile.contacts.github ? props.profile.contacts.github : 'not indicated'}</span>
                    </div>
                    <div>main
                        link: <span>{props.profile.contacts.mainLink ? props.profile.contacts.mainLink : 'not indicated'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}