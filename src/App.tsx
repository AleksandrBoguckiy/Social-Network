import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom'
import {Users} from './components/Users/Users';
import {News} from './components/News/News';
import {Music} from './components/Music/Music';
import {Settings} from './components/Settings/Settings';
import {StateType} from './redux/state';
import React from 'react';

type AppPropsType = {
    state: StateType
    addPostCallBack: (postMessage: string) => void
    addMessageCallBack: (textMessage: string) => void
    updateNewPostTextCallBack: (newText: string) => void
    updateNewMessageTextCallBack: (newText: string) => void
}

const App: React.FC<AppPropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <Profile profilePage={props.state.profilePage}
                                                                           addPostCallBack={props.addPostCallBack}
                                                                           updateNewPostTextCallBack={props.updateNewPostTextCallBack}/>}/>
                    <Route path='/users' render={() => <Users/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage}
                                                                  addMessageCallBack={props.addMessageCallBack}
                                                                  updateNewMessageTextCallBack={props.updateNewMessageTextCallBack}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;