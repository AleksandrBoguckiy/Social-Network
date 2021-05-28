import React from "react";
import HeaderMainContentPicture from "../assets/images/HeaderMainContentPicture.png";
import Avatar from "../assets/images/Avatar.jpg";

export function Profile() {
    return (
        <div className='content'>
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
                <div>
                    <div>
                        post 1
                    </div>
                    <div>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    )
}