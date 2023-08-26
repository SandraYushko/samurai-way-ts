import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string,
    id: number
}
type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={classes.dialog}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    )
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.message}> {props.message} </div>
    )
}


export const Dialogs = () => {
    let dialogsData = [
        {id:1, name:"Sasha"},
        {id:2, name:"Masha"},
        {id:3, name:"Dasha"},
        {id:4, name:"Kate"},
        {id:5, name:"Sveta"}
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



