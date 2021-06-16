import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, StateType, updateNewMessageText, updateNewPostText} from "./redux/state";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 addPostCallBack={addPost}
                 addMessageCallBack={addMessage}
                 updateNewPostTextCallBack={updateNewPostText}
                 updateNewMessageTextCallBack={updateNewMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
