import {Post} from './Post/Post';
import s from './MyPosts.module.css'
import React, {ChangeEvent} from 'react';
import {PostsType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostsType>
    newPostText: string
    addPostCallBack: (postMessage: string) => void
    updateNewPostTextCallBack: (newText: string) => void
}
export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let PostsElements = props.posts.map(p => <Post post={p.post} likesCount={p.likesCount} key={p.id}/>)

    const addPost = () => {
        props.addPostCallBack(props.newPostText);
    }

    const onPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostTextCallBack(e.currentTarget.value);
    }

    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostHandler} placeholder='Anything new?' value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost} className={`${s.btn} ${s.btn1}`}>Add post</button>
                </div>
            </div>
            {PostsElements}
        </div>
    )
}

