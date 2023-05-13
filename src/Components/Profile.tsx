import React from "react";
import classes from './Profile.module.css'


export const Profile = ()=> {
    return  <div className={classes.content}>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7yn8kq_YVzTYhemWw3Q3coPHgqHyfZRnP7w&usqp=CAU"/>
        </div>
        <div> ava+description</div>
        <div> My posts
            <div>
                New post
            </div>
        </div>
        <div className={classes.profile}>
            <div className={classes.item}>Post 1</div>
            <div className={classes.item}>Post 2</div>
        </div>
    </div>
}