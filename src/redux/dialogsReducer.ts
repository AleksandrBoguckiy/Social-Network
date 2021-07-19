import {v1} from "uuid";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export type DialogsActionsType = ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageTextAC>

export type DialogsStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type DialogsType = {
    id: string
    name: string
}

export type MessagesType = {
    id: string
    message: string
}

const initialState: DialogsStateType = {
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

export const dialogsReducer = (state: DialogsStateType = initialState, actions: DialogsActionsType): DialogsStateType => {
    switch (actions.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: v1(),
                message: state.newMessageText
            } as MessagesType
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        case
        UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: actions.newText
            };
        default:
            return state;
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE} as const)
export const updateNewMessageTextAC = (newText: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText} as const)
