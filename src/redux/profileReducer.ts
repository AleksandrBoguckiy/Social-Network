import {v1} from "uuid";
import {ActionsType} from "./redux-store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

type PostsType = {
    id: string
    post: string
    likesCount: number
}
type initialStateType = typeof initialState

const initialState = {
        posts: [
            {id: v1(), post: "Hello my friends. I'm hear!", likesCount: 15},
            {id: v1(), post: "I'm fine!", likesCount: 9}
        ] as Array<PostsType>,
        newPostText: ''
    };

export const profileReducer = (state: initialStateType = initialState, actions: ActionsType): initialStateType  => {
    switch (actions.type) {

        case ADD_POST:
            const newPost/*:PostsType (первый способ типизации)*/ = {
                id: v1(),
                post: actions.postMessage,
                likesCount: 2
            } as PostsType /*второй способ типизации*/
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = actions.newText;
            return state;
        default:
            return state;
    }
}
