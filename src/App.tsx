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
import {MainRootStatePropsType} from './redux/state';

const App = (props: MainRootStatePropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs dialogs={props.state.messagesPage.dialogs} messages={props.state.messagesPage.messages}/>} />
                        <Route path='/profile' element={<Profile posts={props.state.profilePage.posts}/>} />
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
