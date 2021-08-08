import React from 'react';
import s from './Users.module.css'
import {UsersStateType, UsersType} from "../../redux/usersReducer";
import userPhoto from "../../assets/images/Avatar.jpg";
import axios from 'axios';

type UsersPropsType = {
    users: Array<UsersType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

export class UsersClass extends React.Component<UsersPropsType, UsersStateType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = Math.max(this.props.currentPage - 5, 1); i <= Math.max(1,
            Math.min(this.props.currentPage + 5, pagesCount)); i++) {
            pages.push(i);
        }

        return (
            <div className={s.users}>
                <h2>Users</h2>
                <div>
                    { pages.map(p => <span /*!!!!!!!!!!!key={p.id}!!!!!!!!!!!!!!!*/ className={`${this.props.currentPage === p ? s.selectedPage : ''} ${s.pagination}`}
                    onClick={() => this.onPageChanged(p)}>{p}</span>) }
                </div>

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