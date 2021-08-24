import React from 'react';
import s from './Users.module.css'
import {UsersType} from "../../redux/usersReducer";
import userPhoto from "../../assets/images/Avatar.jpg";
import {NavLink} from 'react-router-dom';
import Pagination from 'rc-pagination';
import {localInfo} from "../../locale/en_US";
import {followApi} from "../../api/api";

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

    return (
        <div className={s.users}>
            <h2>Users</h2>
            <Pagination className="ant-pagination"
                        defaultCurrent={props.currentPage}
                        pageSize={props.pageSize}
                        total={props.totalUsersCount}
                        current={props.currentPage}
                        locale={localInfo}
                        onChange={(e) => {
                            props.onPageChanged(e)
                        }}/>
            {
                props.users.map(u => <div className={s.wrapper} key={u.id}>
                <span>

                    <div className={s.avatar}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt='Avatar'/>
                        </NavLink>
                    </div>
                    <div className={s.btn}>
                        {u.followed
                            ? <button className={`${s.btn1} ${s.btn2}`}
                                      onClick={() => {
                                          followApi.unFollow(u.id).then(res => {
                                              if (res.data.resultCode === 0) {
                                                  props.unfollow(u.id)
                                              }
                                          })
                                      }}>Unfollow</button>
                            : <button className={`${s.btn1} ${s.btn2}`}
                                      onClick={() => {
                                          followApi.follow(u.id).then(res => {
                                              if (res.data.resultCode === 0) {
                                                  props.follow(u.id)
                                              }
                                          })
                                      }}>Follow</button>}
                    </div>
                </span>
                    <span className={s.data}>
                        <span>
                            <NavLink to={'/profile/' + u.id}>
                                <div className={s.data_name}>{u.name}</div>
                            </NavLink>
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