import React from 'react';
import classes from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog}>Sasha</div>
                <div className={classes.dialog}>Masha</div>
                <div className={classes.dialog}>Dasha</div>
                <div className={classes.dialog}>Kate</div>
                <div className={classes.dialog}>Sveta</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}> Hello </div>
                <div className={classes.message}> How are you? </div>
                <div className={classes.message}> Yo </div>
            </div>
        </div>
    )
}