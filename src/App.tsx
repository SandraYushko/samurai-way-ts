import React from 'react';
import './App.css';



function App() {
    return (
        <div className="app-wrapper">
            <header className='header'>
                <img
                    src={"https://upload.wikimedia.org/wikipedia/ru/c/cf/%D0%9B%D0%BE%D0%B1%D0%BE%D1%81_%D0%A3%D0%9F%D0%9D%D0%A4%D0%9C_%28%D0%BB%D0%BE%D0%B3%D0%BE%29.png"}/>
            </header>
            <nav className="nav">
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>
                <div><a>Settings</a></div>
            </nav>
            <div className="content">
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7yn8kq_YVzTYhemWw3Q3coPHgqHyfZRnP7w&usqp=CAU"/>
                </div>
                <div> ava+description</div>
                <div> My posts
                    <div>
                        New post
                    </div>
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
        </div>
    );
}

export default App;
