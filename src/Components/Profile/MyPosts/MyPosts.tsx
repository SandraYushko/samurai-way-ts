import React from "react";
import classes from './MyPosts.module.css'
import {Post} from "./Posts/Post";


export const MyPosts = () => {
    let postsData = [
        {id:1, message:"Hi, how are you?", likesCount:5},
        {id:2, message:"It's my first post", likesCount:3},
        {id:3, message:"+++", likesCount:50}
    ]

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
            {postsData.map((el) => {return <Post message={el.message} likesCount={el.likesCount}/>})}
        </div>
    </div>
}


// return <div className={classes.postsBlock}>
//     <div> <h3>My posts</h3>
//         <div>
//             <div>
//                 <textarea></textarea>
//             </div>
//             <div>
//                 <button>Add post</button>
//                 <button>Remove</button>
//             </div>
//         </div>
//         <div>
//             <h4>New post</h4>
//         </div>
//     </div>
//     <div className={classes.posts}>
//         <Post message='Hi, how are you?' likesCount={5}/>
//         <Post message="It's my first post" likesCount={3}/>
//         <Post message='3' likesCount={50}/>
//     </div>
// </div>
// }