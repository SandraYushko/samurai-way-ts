import React, {useRef} from 'react';
import classes from './MyPosts.module.css'
import {Post} from './Posts/Post';
import {ProfilePagePropsType} from '../../../redux/state';

export const MyPosts = (props: ProfilePagePropsType) => {
    let postsElements = props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} id={el.id}/>)

    let newPostElement = useRef<HTMLTextAreaElement>(null);

    const addPost = () => {
        if (newPostElement.current !== null) {
            alert(newPostElement.current.value)
        }
    }

    return <div className={classes.postsBlock}>
        <div><h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
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


