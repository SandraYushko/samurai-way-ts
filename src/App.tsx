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
import state from './redux/state';


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/dialogs/*' element={<Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}/>} />
                        <Route path='/profile' element={<Profile posts={state.profilePage.posts}/>} />
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
