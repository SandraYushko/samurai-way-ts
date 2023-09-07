import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {RootStatePropsType} from './redux/state';

let rootState:RootStatePropsType = state

ReactDOM.render(
            <App rootState={rootState}/>,
            document.getElementById('root')
);