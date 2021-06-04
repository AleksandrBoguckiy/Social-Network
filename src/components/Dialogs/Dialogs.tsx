import React from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';
import {DialogsPageType} from "../../index";

type DialogsPropsType = {
    dialogsPage: DialogsPageType
}
export const Dialogs: React.FC<DialogsPropsType> = (props) => {

    let DialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let MessagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                { DialogsElements }
            </div>
            <div className={s.messages}>
                { MessagesElements }
            </div>
            <div className={s.inputForm}>
                <div>
                    <textarea placeholder={'Write a message...'}/>
                </div>
                <div>
                    <button className={s.btn + " " + s.btn1}>Send message</button>
                </div>
            </div>
        </div>
    )
}