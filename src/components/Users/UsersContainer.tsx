import {connect} from "react-redux";
import {AppDispatchType, AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/usersReducer";
import {UsersClass} from "./UsersClass";

type MapStateToPropsType =  {
    users: Array<UsersType>
}

type MapDispatchToPropsType =  {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: Array<UsersType>) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType> (mapStateToProps, mapDispatchToProps)(UsersClass)