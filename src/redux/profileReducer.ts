import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileApi} from "../api/api";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS_USER_PROFILE = 'SET_STATUS_USER_PROFILE'

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string,
    userId: number,
    photos: {
        small: string
        large: string
    }
}

export type ProfileActionsType = ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setStatusUserProfile>

const initialState: ProfileStateType = {
    posts: [
        {id: v1(), post: "Hello my friends. I'm hear!", likesCount: 15},
        {id: v1(), post: "I'm fine!", likesCount: 9}
    ] as Array<PostsType>,
    newPostText: '',
    profile: null,
    status: ''

};

export type ProfileStateType = {
    posts: Array<PostsType>
    newPostText: string
    profile: ProfileType | null
    status: string
}

export type PostsType = {
    id: string
    post: string
    likesCount: number
}

export const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionsType): ProfileStateType => {
    switch (action.type) {

        case ADD_POST: {
            const newPost/*:PostsType (первый способ типизации)*/ = {
                id: v1(),
                post: state.newPostText,
                likesCount: 2
            } as PostsType /*второй способ типизации*/
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            };
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS_USER_PROFILE: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST} as const)
export const updateNewPostText = (newText: string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatusUserProfile = (status: string) => ({type: SET_STATUS_USER_PROFILE, status} as const)

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getStatusUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileApi.getStatus(userId)
        .then(response => {
            dispatch(setStatusUserProfile(response.data))
        })
}

export const updateStatusUserProfile = (status: string) => (dispatch: Dispatch) => {
    profileApi.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatusUserProfile(status))
            }
        })
}


