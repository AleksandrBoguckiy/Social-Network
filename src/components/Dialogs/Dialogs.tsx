import React from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';

export const Dialogs = () => {

    let dialogs = [
        {id: 1, name: 'Oleg'},
        {id: 2, name: 'Egor'},
        {id: 3, name: 'Mariya'},
        {id: 4, name: 'Aleksandr'},
        {id: 5, name: 'Ruslan'},
        {id: 6, name: 'Irina'}
    ]

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Hey, are you there?'},
        {id: 4, message: 'Hello Friend! Yes I am listening to you!'},
    ]

    let DialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let MessagesElements = messages.map(m => <Message message={m.message}/>)

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