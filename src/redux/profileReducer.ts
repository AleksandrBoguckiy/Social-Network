import {v1} from "uuid";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

export type ProfileActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>

const initialState: ProfileStateType = {
        posts: [
            {id: v1(), post: "Hello my friends. I'm hear!", likesCount: 15},
            {id: v1(), post: "I'm fine!", likesCount: 9}
        ] as Array<PostsType>,
        newPostText: ''
    };

export type ProfileStateType = {
    posts: Array<PostsType>
    newPostText: string
}

export type PostsType = {
    id: string
    post: string
    likesCount: number
}

export const profileReducer = (state: ProfileStateType = initialState, actions: ProfileActionsType): ProfileStateType  => {
    switch (actions.type) {

        case ADD_POST:
            const newPost/*:PostsType (первый способ типизации)*/ = {
                id: v1(),
                post: state.newPostText,
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

export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (newText:string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)
