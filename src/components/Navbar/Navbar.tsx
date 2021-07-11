import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import {MyFriends} from '../MyFriends/MyFriends';
import React from "react";
import {SidebarType} from "../../redux/redux-store";

type NavbarPropsType = {
    sidebar: SidebarType
}
export const Navbar: React.FC<NavbarPropsType> = (props) => {

    let myFriends =
        props.sidebar.myFriends.map(f => <MyFriends name={f.name} key={f.id} />);

    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
            </div>
            <div className={`${s.item} ${s.myFriends}`}>
                <NavLink to='/myFriends' activeClassName={s.active}>My Friends</NavLink>
                {myFriends}
            </div>
        </nav>
    )
}