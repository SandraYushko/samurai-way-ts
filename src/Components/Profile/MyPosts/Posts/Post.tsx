import React from "react";
import classes from './Post.module.css'

export type PostPropsStyle={
    message: string;
    likesCount: number
}

export const Post = (props: PostPropsStyle) => {
    return (
        <div className={classes.item}>
            <img src='https://s8.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2022/04/avatar.jpg'/>
            {props.message}
            <div>
            <span>Like</span> {props.likesCount}
            </div>
        </div>

    )
}