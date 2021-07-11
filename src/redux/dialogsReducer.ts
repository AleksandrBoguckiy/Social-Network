import {v1} from "uuid";
import {ActionsType} from "./redux-store";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

type DialogsType = {
    id: string
    name: string
}

type MessagesType = {
    id: string
    message: string
}

type InitialStateType = typeof initialState

const initialState = {
        dialogs: [
            {id: v1(), name: 'Oleg'},
            {id: v1(), name: 'Egor'},
            {id: v1(), name: 'Maria'},
            {id: v1(), name: 'Aleksandr'},
            {id: v1(), name: 'Ruslan'},
            {id: v1(), name: 'Irina'}
        ] as Array<DialogsType>,
        messages: [
            {id: v1(), message: 'Hi!'},
            {id: v1(), message: 'How are you?'},
            {id: v1(), message: 'Hey, are you there?'},
            {id: v1(), message: 'Hello Friend! Yes I am listening to you!'}
        ] as Array<MessagesType>,
        newMessageText: ''
    }

export const dialogsReducer = (state: InitialStateType = initialState, actions: ActionsType) : InitialStateType  => {
    switch (actions.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: v1(),
                message: actions.textMessage
            } as MessagesType
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = actions.newText;
            return state;
        default:
            return state;
    }
}