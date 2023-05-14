import React from "react";
import classes from './Post.module.css'


export const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://s8.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2022/04/avatar.jpg'/>
            Post 1
            <div>
            <span>Like</span>
            </div>
        </div>

    )
}