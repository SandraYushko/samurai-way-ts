import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

 let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 5},
    {id: 2, message: 'It\'s my first post', likesCount: 3},
    {id: 3, message: '+++', likesCount: 50}
]
let dialogsData = [
    {id:1, name:"Sasha"},
    {id:2, name:"Masha"},
    {id:3, name:"Dasha"},
    {id:4, name:"Kate"},
    {id:5, name:"Svetlana"}
]
let messagesData = [
    {id:1, message:"Hello"},
    {id:2, message:"How are you?"},
    {id:3, message:"Yo"},
]

ReactDOM.render(
            <App posts={postsData} dialogs={dialogsData} messages={messagesData}/>,
            document.getElementById('root')
);