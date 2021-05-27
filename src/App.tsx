import React from 'react';
import './App.css';
import HeaderPicture from '../src/assets/images/HeaderPicture.png'
import HeaderMainContentPicture from '../src/assets/images/HeaderMainContentPicture.png'
import Avatar from '../src/assets/images/Avatar.jpg'

function App() {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src={HeaderPicture} alt='Logo'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Users</a>
                </div>
                <div>
                    <a>Dialogs</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src={HeaderMainContentPicture} alt='HeaderPicture'/>
                </div>
                <div>
                    <img src={Avatar} alt='AvatarPicture'/>
                </div>
                <div>
                    My post
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
