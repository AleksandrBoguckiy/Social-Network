import React from 'react';
import {DialogItem} from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import {Message} from './Message/Message';

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name='Oleg' id={1}/>
                <DialogItem name='Egor' id={2}/>
                <DialogItem name='Mariya' id={3}/>
                <DialogItem name='Aleksandr' id={4}/>
                <DialogItem name='Ruslan' id={5}/>
                <DialogItem name='Irina' id={6}/>
            </div>
            <div className={s.messages}>
                <Message message='Hi!'/>
                <Message message='How are you?'/>
                <Message message='Hey, are you there?'/>
                <Message message='Hello Friend! Yes I am listening to you!'/>
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