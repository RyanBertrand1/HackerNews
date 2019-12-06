import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import { Select } from '@material-ui/core';

function hn(state = [], action) {
    switch (action.type) {
        case 'action1':
            console.log("action1 : " + action.text);
            break;

        case 'action2':
            console.log("action2 : " + action.text)
            break;

        default:
            return
    }
}

const store = createStore(hn, ['Use Redux'])

function action1(text){
    return {type : "action1", text};
}

function action2(text){
    return {type : "action2", text};
}

function select(state){
    return state
}



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
