import React, {ChangeEvent} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogsPageType} from '../../redux/state';

type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessageCallBack: (textMessage: string) => void
    updateNewMessageTextCallBack: (newText: string) => void
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let DialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    let MessagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)


    const addMessage = () => {
        props.addMessageCallBack(props.dialogsPage.newMessageText);
    }

    const onMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageTextCallBack(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {DialogsElements}
            </div>
            <div className={s.messages}>
                {MessagesElements}
            </div>
            <div className={s.inputForm}>
                <div>
                    <textarea onChange={onMessageHandler}
                              placeholder={'Write a message...'}
                              value={props.dialogsPage.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage} className={s.btn + " " + s.btn1}>Send message</button>
                </div>
            </div>
        </div>
    )
}