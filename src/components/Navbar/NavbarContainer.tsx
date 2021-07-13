import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Navbar} from "./Navbar";

const mapStateToProps = (state: AppStateType) => {
    return {
        myFriends: state.sidebar.myFriends
    }
}

export const NavbarContainer = connect(mapStateToProps, {})(Navbar)