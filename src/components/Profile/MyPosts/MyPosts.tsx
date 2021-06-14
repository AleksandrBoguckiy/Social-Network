import {Post} from './Post/Post';
import s from './MyPosts.module.css'
import React from 'react';
import {PostsType} from '../../../redux/state';

type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}
export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let PostsElements = props.posts.map(p => <Post post={p.post} likesCount={p.likesCount} key={p.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>() //создание ссылки на пока не заданный элемент из JSX, т.е. textarea

    const addPost = () => {
        debugger
        if (newPostElement.current) {
            let text = newPostElement.current.value; //берем значение у нативного HTML-элемента (обращаемся к ссылке)
            props.addPost(text)
        }
    }
    return (
        <div className={s.posts}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} placeholder='Anything new?'/>
                </div>
                <div>
                    <button onClick={addPost} className={`${s.btn} ${s.btn1}`}>Add post</button>
                </div>
            </div>
            {PostsElements}
        </div>
    )
}

