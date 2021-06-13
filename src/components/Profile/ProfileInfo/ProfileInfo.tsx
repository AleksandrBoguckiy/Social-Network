import HeaderMainContentPicture from '../../../assets/images/HeaderMainContentPicture.png';
import s from './ProfileInfo.module.css';
import Avatar from '../../../assets/images/Avatar.jpg';
import React from 'react';

export const ProfileInfo = () => {
    return (
        <div className={s.wrapper}>
            <div>
                <img className={s.header} src={HeaderMainContentPicture} alt='HeaderPicture'/>
            </div>
            <div>
                <img className={s.avatar} src={Avatar} alt='AvatarPicture'/>
            </div>
        </div>
    )
}