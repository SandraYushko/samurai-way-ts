import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {MessagesPagePropsType} from '../../redux/state';

export const Dialogs = (props: MessagesPagePropsType) => {

    let dialogsElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesElements = props.messages.map(el => <Message message={el.message} id={el.id}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElements}</div>
            <div className={classes.messages}>{messagesElements}</div>
        </div>
    )
}



