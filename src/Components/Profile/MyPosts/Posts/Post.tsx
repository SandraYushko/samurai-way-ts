import React from "react";
import classes from './Post.module.css'
import {PostsPropsType} from '../../../../redux/state';

export const Post = (props: PostsPropsType) => {
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