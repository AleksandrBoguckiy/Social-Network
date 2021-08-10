import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import { connect } from 'react-redux';
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    profile: ProfileType | null
}

type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfilePropsType = {

}

class ProfileContainer extends React.Component <ProfilePropsType & MapDispatchToPropsType & MapStateToPropsType, {}> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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
export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(ProfileContainer)

