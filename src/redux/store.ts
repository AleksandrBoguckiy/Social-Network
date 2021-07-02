import {v1} from "uuid"
import { profileReducer } from "./profileReducer"
import {dialogsReducer} from "./dialogsReducer";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT'

export type PostsType = {
    id: string
    post: string
    likesCount: number
}

export type DialogsType = {
    id: string
    name: string
}

export type MessagesType = {
    id: string
    message: string
}

export type MyFriendsType = {
    id: string
    name: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type SideBarType = {
    myFriends: Array<MyFriendsType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SideBarType
}

export type StoreType = {
    _state: StateType
    subscribe: (observer: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => StateType
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof updateNewMessageTextAC>

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), post: "Hello my friends. I'm hear!", likesCount: 15},
                {id: v1(), post: "I'm fine!", likesCount: 9}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Oleg'},
                {id: v1(), name: 'Egor'},
                {id: v1(), name: 'Maria'},
                {id: v1(), name: 'Aleksandr'},
                {id: v1(), name: 'Ruslan'},
                {id: v1(), name: 'Irina'}
            ],
            messages: [
                {id: v1(), message: 'Hi!'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'Hey, are you there?'},
                {id: v1(), message: 'Hello Friend! Yes I am listening to you!'}
            ],
            newMessageText: ''
        },
        sidebar: {
            myFriends: [
                {id: v1(), name: 'Maria'},
                {id: v1(), name: 'Alex'},
                {id: v1(), name: 'Daria'}
            ]
        }
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    },
    dispatch(actions) {
        this._state.profilePage = profileReducer(this._state.profilePage, actions);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, actions);
        this._rerenderEntireTree()
    }
}

export const addPostAC = (newPostText:string) => ({type: ADD_POST, postMessage: newPostText} as const)
export const updateNewPostTextAC = (newText:string) => ({type: UPDATE_NEW_POST_TEXT, newText} as const)
export const addMessageAC = (newMessageText:string) => ({type: ADD_MESSAGE, textMessage: newMessageText} as const)
export const updateNewMessageTextAC = (newText:string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText} as const)