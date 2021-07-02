import {v1} from "uuid";
import {ActionsType, DialogsPageType, MessagesType} from "./store";

const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const dialogsReducer = (state: DialogsPageType, actions: ActionsType) : DialogsPageType  => {
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