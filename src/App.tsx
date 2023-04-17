import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <div> Hello, samurai! Let's go!</div>
            <div> <Header /></div>
            <div> <Technologies /></div>
        </div>
    );
}

function Header() {
    return (
        <div>
            <a href='#s'>Home</a><br/>
            <a href='#s'>News Feed</a><br/>
            <a href='#s'>Messages</a><br/>
        </div>
    );
}

function Technologies() {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    );
}
export default App;
