import React from "react";
import classes from './Post.module.css'

type PostPropsStyle={
    message: string;
    like: number
}

export const Post = (props: PostPropsStyle) => {
    return (
        <div className={classes.item}>
            <img src='https://s8.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2022/04/avatar.jpg'/>
            {props.message}
            <div>
            <span>{props.like} Like</span>
            </div>
        </div>

    )
}