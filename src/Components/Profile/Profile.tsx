import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfilePagePropsType} from '../../redux/state';

export const Profile = (props: ProfilePagePropsType) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </div>
    )
}