import {Post} from './Post/Post';
import s from './MyPosts.module.css'
import React from "react";
import { PostType } from '../../..';

type MyPostsPropsType = {
    posts: Array<PostType>
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let PostsElements = props.posts.map(p=> <Post post={p.post} likesCount={p.likesCount}/>)

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
            { PostsElements }
        </div>
    )
}

