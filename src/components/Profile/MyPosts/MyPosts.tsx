import {Post} from './Post/Post';
import s from './MyPosts.module.css'

export const MyPosts = () => {

    let posts = [
        {id: 1, post: "Hello my friends. I'm hear!", likesCount: 15},
        {id: 2, post: "I'm fine!", likesCount: 9},
    ]

    let PostsElements = posts.map(p=> <Post post={p.post} likesCount={p.likesCount}/>)

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

