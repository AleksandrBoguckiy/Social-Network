import React from 'react';
import s from './Users.module.css'
import {UsersStateType, UsersType} from "../../redux/usersReducer";
import userPhoto from "../../assets/images/Avatar.jpg";
import axios from 'axios';

type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
}

export class UsersClass extends React.Component<UsersPropsType, UsersStateType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div className={s.users}>
                <h2>Users</h2>
                {
                    this.props.users.map(u => <div className={s.wrapper} key={u.id}>
                <span>
                    <div className={s.avatar}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt='Avatar'/>
                    </div>
                    <div className={s.btn}>
                        {u.followed
                            ? <button className={`${s.btn1} ${s.btn2}`}
                                      onClick={() => {
                                          this.props.unfollow(u.id)
                                      }}>Unfollow</button>
                            : <button className={`${s.btn1} ${s.btn2}`}
                                      onClick={() => {
                                          this.props.follow(u.id)
                                      }}>Follow</button>}
                    </div>
                </span>
                        <span className={s.data}>
                        <span>
                            <div className={s.data_name}>{u.name}</div>
                            <div>{u.status != null ? u.status : 'status not set'}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
    }
}