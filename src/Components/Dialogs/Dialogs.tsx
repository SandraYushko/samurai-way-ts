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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Sasha" id={1}/>
                <DialogItem name="Masha" id={2}/>
                <DialogItem name="Dasha" id={3}/>
                <DialogItem name="Kate" id={4}/>
                <DialogItem name="Sveta" id={5}/>
            </div>
            <div className={classes.messages}>
                <Message message="Hello"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}