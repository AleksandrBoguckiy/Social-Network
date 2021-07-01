import {v1} from "uuid"


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

type AddPostActionType = {
    type: 'ADD-POST'
    postMessage: string
}

type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    textMessage: string
}

type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}

export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType

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
        if (actions.type === 'ADD-POST') {
            const newPost/*:PostsType (первый способ типизации)*/ = {
                id: v1(),
                post: actions.postMessage,
                likesCount: 2
            } as PostsType /*второй способ типизации*/
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._rerenderEntireTree()
        } else if (actions.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = actions.newText
            this._rerenderEntireTree()
        } else if (actions.type === 'ADD-MESSAGE') {
            const newMessage = {
                id: v1(),
                message: actions.textMessage
            } as MessagesType
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ''
            this._rerenderEntireTree()
        } else if (actions.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = actions.newText
            this._rerenderEntireTree()
        }
    }
}