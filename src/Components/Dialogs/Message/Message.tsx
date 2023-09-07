import React from 'react';
import classes from './Message.module.css'
import {MessagesPropsType} from '../../../redux/state';

export const Message = (props: MessagesPropsType) => {
    return (
        <div className={classes.message}> {props.message} </div>
    )
}





