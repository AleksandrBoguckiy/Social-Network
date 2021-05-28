import React from "react";
import {Post} from "./Post/Post";
import s from './MyPosts.module.css'

export const MyPosts = () => {
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea placeholder='Anything new?' />
                </div>
                <div>
                    <button className={`${s.btn} ${s.btn1}`}>Add post</button>
                </div>
            </div>
            <Post post={'Hello my friends. I am hear!'}/>
            <Post post={'I am fine!'}/>
        </div>
    )
}

