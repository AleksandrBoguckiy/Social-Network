import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {addMessage, DialogsType, MessagesType, updateNewMessageText} from '../../redux/dialogsReducer';
import {AppStateType} from "../../redux/redux-store";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

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

export const DialogsContainer = WithAuthRedirect(connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {addMessage, updateNewMessageText})(Dialogs))