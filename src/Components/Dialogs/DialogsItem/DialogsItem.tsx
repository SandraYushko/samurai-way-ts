import React from 'react';
import classes from './DialogsItem.module.css'
import {NavLink} from 'react-router-dom';

export type DialogItemPropsType = {
    name: string,
    id: number
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={classes.dialog}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    )
}






