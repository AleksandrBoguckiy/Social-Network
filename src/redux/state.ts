import { v1 } from "uuid"

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
}

export type ProfilePageType = {
    posts: Array<PostsType>
}

export type SideBarType = {
    myFriends: Array<MyFriendsType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SideBarType
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), post: "Hello my friends. I'm hear!", likesCount: 15},
            {id: v1(), post: "I'm fine!", likesCount: 9}
        ]
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
        ]
    },
    sidebar: {
        myFriends: [
            {id: v1(), name: 'Maria'},
            {id: v1(), name: 'Alex'},
            {id: v1(), name: 'Daria'}
        ]
    }
}

export const addPost = (postMessage: string) => {
    let newPost/*:PostsType (первый способ типизации)*/ = {
        id: v1(),
        post: postMessage,
        likesCount: 2
    } as PostsType /*второй способ типизации*/
    state.profilePage.posts.push(newPost)
}

export const addMessage = (textMessage: string) => {
    debugger
    let newMessage = {
        id: v1(),
        message: textMessage
    } as MessagesType
    state.dialogsPage.messages.push(newMessage)
}