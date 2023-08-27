import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';

export const Dialogs = () => {
    let dialogsData = [
        {id:1, name:"Sasha"},
        {id:2, name:"Masha"},
        {id:3, name:"Dasha"},
        {id:4, name:"Kate"},
        {id:5, name:"Svetlana"}
    ]

    let dialogsElements = dialogsData.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesData = [
        {id:1, message:"Hello"},
        {id:2, message:"How are you?"},
        {id:3, message:"Yo"},
    ]
    let messagesElements = messagesData.map(el => <Message message={el.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}



