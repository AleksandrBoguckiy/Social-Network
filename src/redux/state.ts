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
    addPost: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    addMessage: (textMessage: string) => void
    updateNewMessageText: (newText: string) => void
    subscribe: (observer: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => StateType
}

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
    addPost(postMessage: string) {
        const newPost/*:PostsType (первый способ типизации)*/ = {
            id: v1(),
            post: postMessage,
            likesCount: 2
        } as PostsType /*второй способ типизации*/
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree()
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree()
    },
    addMessage(textMessage: string) {
        let newMessage = {
            id: v1(),
            message: textMessage
        } as MessagesType
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._rerenderEntireTree()
    },
    updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this._rerenderEntireTree()
    },
    _rerenderEntireTree() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    getState() {
        return this._state
    }
}