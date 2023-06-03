import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}><NavLink to='/dialogs/1'>Sasha</NavLink></div>
                <div className={classes.dialog}><NavLink to='/dialogs/2'>Masha</NavLink></div>
                <div className={classes.dialog}><NavLink to='/dialogs/3'>Dasha</NavLink></div>
                <div className={classes.dialog}><NavLink to='/dialogs/4'>Kate</NavLink></div>
                <div className={classes.dialog}><NavLink to='/dialogs/5'>Sveta</NavLink></div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}> Hello </div>
                <div className={classes.message}> How are you? </div>
                <div className={classes.message}> Yo </div>
            </div>
        </div>
    )
}