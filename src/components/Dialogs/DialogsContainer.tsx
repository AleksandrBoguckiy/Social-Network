import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {addMessage, DialogsType, MessagesType, updateNewMessageText} from '../../redux/dialogsReducer';
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import { compose } from "redux";
import React from "react";

type MapStateToPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

type MapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {

    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

export const DialogsContainer = compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {addMessage, updateNewMessageText}),
    WithAuthRedirect,
)(Dialogs)