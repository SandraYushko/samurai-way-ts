import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from './Components/Dialogs/Dialogs';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Music} from './Components/Music/Music';
import {News} from './Components/News/News';
import {Settings} from './Components/Settings/Settings';
import {MyPostsPropsType} from './Components/Profile/MyPosts/MyPosts';


function App(props: MyPostsPropsType) {
   /* let postsData = [
       {id: 1, message: 'Hi, how are you?', likesCount: 5},
       {id: 2, message: 'It\'s my first post', likesCount: 3},
       {id: 3, message: '+++', likesCount: 50}
   ]*/
 /*   let dialogsData = [
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
    ]*/
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs dialogs={dialogsData} messages={messagesData}/>} />
                        <Route path='/profile' element={<Profile posts={props.posts}/>} />
                        <Route path='/news' element={<News/>} />
                        <Route path='/music' element={<Music/>} />
                        <Route path='/settings' element={<Settings/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
