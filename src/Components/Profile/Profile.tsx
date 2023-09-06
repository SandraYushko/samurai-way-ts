import React from "react";
import classes from './Profile.module.css'
import {MyPosts, MyPostsPropsType} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export const Profile = (props: MyPostsPropsType) => {
    /*let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 3},
        {id: 3, message: '+++', likesCount: 50}
    ]*/

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    )
}