import React, {ChangeEvent} from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogsType, MessagesType} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    addMessage: () => void
    updateNewMessageText: (newText: string) => void
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let DialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)

    let MessagesElements = props.messages.map(m => <Message message={m.message} key={m.id}/>)


    const addMessage = () => {
        props.addMessage()
    }

    const onMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newText = e.currentTarget.value
        props.updateNewMessageText(newText)
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
                              value={props.newMessageText}/>
                </div>
                <div>
                    <button onClick={addMessage} className={`${s.btn} ${s.btn1}`}>Send message</button>
                </div>
            </div>
        </div>
    )
}