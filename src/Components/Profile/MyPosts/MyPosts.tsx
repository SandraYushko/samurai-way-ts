import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Posts/Post";


export const MyPosts = () => {
    return <div className={classes.content}>
        <div> My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div>
                New post
            </div>
        </div>
        <div className={classes.posts}>
            <Post message='Hi, how are you?' like={5}/>
            <Post message="It's my first post" like={3}/>
            <Post message='3' like={50}/>
        </div>
    </div>
}