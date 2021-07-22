import {connect} from 'react-redux';
import {MyPosts} from "./MyPosts";
import {addPostAC, PostsType, updateNewPostTextAC} from "../../../redux/profileReducer";
import {AppDispatchType, AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const mapStateToProps = (state: AppStateType) : MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: AppDispatchType) : MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        }
    }
}
export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)

