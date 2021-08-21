import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import { connect } from 'react-redux';
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';

type PathParamsType = {
    userId: any
}

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component <PropsType & MapDispatchToPropsType & MapStateToPropsType, {}> {

    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let WithRouterProfileContainer = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(WithRouterProfileContainer)

