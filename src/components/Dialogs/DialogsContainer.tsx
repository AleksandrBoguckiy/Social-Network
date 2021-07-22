import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {addMessageAC, DialogsType, MessagesType, updateNewMessageTextAC} from '../../redux/dialogsReducer';
import {AppDispatchType, AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

type MapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
}

const mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) : MapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessageText: (newText: string) => {
            dispatch(updateNewMessageTextAC(newText))
        }
    }
}

export const DialogsContainer = connect <MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType> (mapStateToProps, mapDispatchToProps)(Dialogs)