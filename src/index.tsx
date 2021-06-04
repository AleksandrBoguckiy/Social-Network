import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export type PostsType = {
    id: number
    post: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type ProfilePageType = {
    posts: Array<PostsType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, post: "Hello my friends. I'm hear!", likesCount: 15},
            {id: 2, post: "I'm fine!", likesCount: 9}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Oleg'},
            {id: 2, name: 'Egor'},
            {id: 3, name: 'Mariya'},
            {id: 4, name: 'Aleksandr'},
            {id: 5, name: 'Ruslan'},
            {id: 6, name: 'Irina'}
        ],
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Hey, are you there?'},
            {id: 4, message: 'Hello Friend! Yes I am listening to you!'}
        ]
    }
}

ReactDOM.render(
    <React.StrictMode>
        <App state={state} />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
