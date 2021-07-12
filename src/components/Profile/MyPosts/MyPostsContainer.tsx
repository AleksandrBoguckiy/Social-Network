import React from 'react';
import {addPostAC, StoreType, updateNewPostTextAC} from '../../../redux/redux-store';
import {MyPosts} from "./MyPosts";


type MyPostsPropsType = {
    store: StoreType
}


export const MyPostsContainer: React.FC<MyPostsPropsType> = (props) => {

    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.newPostText));
    }

    const onPostHandler = (newText: string) => {
        props.store.dispatch(updateNewPostTextAC(newText))
    }

    return (
        <MyPosts addPost={addPost}
                 updateNewPostText={onPostHandler}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}/>
    )
}

