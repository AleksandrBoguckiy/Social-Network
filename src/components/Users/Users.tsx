import React from 'react';
import s from './Users.module.css'
import {UsersType} from "../../redux/usersReducer";
import userPhoto from "../../assets/images/Avatar.jpg";

type UsersPropsType = {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    onPageChanged: (currentPage: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = Math.max(props.currentPage - 5, 1); i <= Math.max(1,
        Math.min(props.currentPage + 5, pagesCount)); i++) {
        pages.push(i);
    }
    return (
        <div className={s.users}>
            <h2>Users</h2>
            <div>
                {pages.map(p => <span key={p}
                                      className={`${props.currentPage === p ? s.selectedPage : ''} ${s.pagination}`}
                                      onClick={() => props.onPageChanged(p)}>{p}</span>)}
            </div>

            {
                props.users.map(u => <div className={s.wrapper} key={u.id}>
                <span>
                    <div className={s.avatar}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt='Avatar'/>
                    </div>
                    <div className={s.btn}>
                        {u.followed
                            ? <button className={`${s.btn1} ${s.btn2}`}
                                      onClick={() => {
                                          props.unfollow(u.id)
                                      }}>Unfollow</button>
                            : <button className={`${s.btn1} ${s.btn2}`}
                                      onClick={() => {
                                          props.follow(u.id)
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