import {v1} from "uuid";
import {ActionsType, PostsType, ProfilePageType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export const profileReducer = (state: ProfilePageType, actions: ActionsType): ProfilePageType  => {
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
