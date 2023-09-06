import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem, DialogItemPropsType} from './DialogsItem/DialogsItem';
import {Message, MessagePropsType} from './Message/Message';

export const Dialogs = (props: DialogItemPropsType, MessagePropsType) => {
   /* let dialogsData = [
        {id:1, name:"Sasha"},
        {id:2, name:"Masha"},
        {id:3, name:"Dasha"},
        {id:4, name:"Kate"},
        {id:5, name:"Svetlana"}
    ]
    let messagesData = [
        {id:1, message:"Hello"},
        {id:2, message:"How are you?"},
        {id:3, message:"Yo"},
    ]*/

    let dialogsElements = props.dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesElements = props.messagesData.map(el => <Message message={el.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>{dialogsElements}</div>
            <div className={classes.messages}>{messagesElements}</div>
        </div>
    )
}



