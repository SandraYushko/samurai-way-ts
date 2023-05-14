import React from "react";
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://interier-foto.ru/wp-content/uploads/dlinnye-foto-1.jpg"/>
            </div>
            <div> ava+description</div>
            <MyPosts/>
        </div>
    )
}