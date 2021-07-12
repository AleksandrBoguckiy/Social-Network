import React from 'react';
import {addMessageAC, StoreType, updateNewMessageTextAC} from '../../redux/redux-store';
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
}
export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const state = props.store.getState()

    const addMessage = () => {
        props.store.dispatch(addMessageAC(state.dialogsPage.newMessageText))
    }

    const onMessageHandler = (newText: string) => {
        props.store.dispatch(updateNewMessageTextAC(newText))
    }

    return (
        <Dialogs addMessage={addMessage}
                 updateNewMessageText={onMessageHandler}
                 dialogs={state.dialogsPage.dialogs}
                 messages={state.dialogsPage.messages}
                 newMessageText={state.dialogsPage.newMessageText}/>
    )
}