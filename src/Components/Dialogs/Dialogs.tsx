import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    name: string,
    id: number
}
type MessagePropsType = {
    message: string
}

const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={classes.dialog}><NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink></div>
    )
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={classes.message}> {props.message} </div>
    )
}


export const Dialogs = () => {
    let dialogsData = [
        {id:1, name:"Sasha"},
        {id:2, name:"Masha"},
        {id:3, name:"Dasha"},
        {id:4, name:"Kate"},
        {id:5, name:"Sveta"}
    ]
    let messagesData = [
        {id:1, message:"Hello"},
        {id:2, message:"How are you?"},
        {id:3, message:"Yo"},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsData.map((el) => {return <DialogItem name={el.name} id={el.id}/>})}
            </div>
            <div className={classes.messages}>
                {messagesData.map((el) => {return  <Message message={el.message}/>})}
            </div>
        </div>
    )
}





// return (
//     <div className={classes.dialogs}>
//         <div className={classes.dialogsItems}>
//             <DialogItem name="Sasha" id={1}/>
//             <DialogItem name="Masha" id={2}/>
//             <DialogItem name="Dasha" id={3}/>
//             <DialogItem name="Kate" id={4}/>
//             <DialogItem name="Sveta" id={5}/>
//         </div>
//         <div className={classes.messages}>
//             <Message message="Hello"/>
//             <Message message="How are you?"/>
//             <Message message="Yo"/>
//         </div>
//     </div>
// )
// }