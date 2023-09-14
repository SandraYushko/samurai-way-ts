import React from 'react';
import classes from './DialogsItem.module.css'
import {NavLink} from 'react-router-dom';
import {DialogsPropsType} from '../../../redux/state';

export const DialogItem = (props: DialogsPropsType) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.avatar}</NavLink>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}






