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
import {ActionsType, StoreType} from './redux/store';
import React from 'react';

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<AppPropsType> = (props) => {

    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebar={state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() =>
                        <Profile profilePage={state.profilePage} dispatch={props.dispatch.bind(props.store)}/>}/>
                    <Route path='/users' render={() => <Users/>}/>
                    <Route path='/dialogs' render={() =>
                        <Dialogs dialogsPage={state.dialogsPage} dispatch={props.dispatch.bind(props.store)}/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;