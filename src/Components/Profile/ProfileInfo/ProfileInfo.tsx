import React from 'react';
import classes from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.content}>
                <img
                    src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-1.jpg"/>
            </div>
            <div className={classes.descriptionBlock}> ava+description</div>
        </div>
    )
}