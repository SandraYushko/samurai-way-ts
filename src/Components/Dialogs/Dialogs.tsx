import React, {useRef} from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';
import {MessagesPagePropsType} from '../../redux/state';

export const Dialogs = (props: MessagesPagePropsType) => {

    let dialogsElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesElements = props.messages.map(el => <Message message={el.message} id={el.id}/>)
    let newDialogElement = useRef<HTMLTextAreaElement>(null);

    const addDialog = () => {
        if (newDialogElement.current !== null) {
            alert(newDialogElement.current.value)
        }
    }

    return (
        <div>
            <div className={classes.dialogs}>
                <div className={classes.dialogsItems}>{dialogsElements}</div>
                <div>
                    <div className={classes.messages}>{messagesElements}</div>
                    <div>
                        <div>
                            <textarea ref={newDialogElement}></textarea>
                        </div>
                        <div>
                            <button onClick={addDialog}>Add post</button>
                            <button>Remove</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}



