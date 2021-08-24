import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/authReducer";
import {authApi} from "../../api/api";

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchToPropsType = {
    setAuthUserData: (id: number | null, email: string | null, login: string | null) => void
}

class HeaderContainer extends React.Component<MapStateToPropsType & MapDispatchToPropsType, {}> {

    componentDidMount() {
        authApi.getAuthData().then(response => {
            if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            this.props.setAuthUserData(id, email, login)
        }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {setAuthUserData}) (HeaderContainer)