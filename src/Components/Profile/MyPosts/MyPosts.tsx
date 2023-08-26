import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Posts/Post";


export const MyPosts = () => {
    let postsData = [
        {id:1, message:"Hi, how are you?", likesCount:5},
        {id:2, message:"It's my first post", likesCount:3},
        {id:3, message:"+++", likesCount:50}
    ]
    let postsElements = postsData.map(el => <Post message={el.message} likesCount={el.likesCount}/>)

    return <div className={classes.postsBlock}>
        <div> <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div>
                <h4>New post</h4>
            </div>
        </div>
        <div className={classes.posts}>
            {postsElements}
        </div>
    </div>
}


