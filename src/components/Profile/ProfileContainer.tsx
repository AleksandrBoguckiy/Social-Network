import React from 'react';
import {Profile} from "./Profile";
import {connect} from 'react-redux';
import {getStatusUserProfile, getUserProfile, ProfileType, updateStatusUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from 'redux';

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
}

type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getStatusUserProfile: (userId: string) => void
    updateStatusUserProfile: (status: string) => void
}

type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<PathParamsType> & ProfilePropsType

class ProfileContainer extends React.Component <PropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '9278';
        }
        this.props.getUserProfile(userId)
        this.props.getStatusUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusUserProfile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
        getUserProfile, getStatusUserProfile, updateStatusUserProfile
    }),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)

