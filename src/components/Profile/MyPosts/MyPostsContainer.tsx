import {connect} from 'react-redux';
import {MyPosts} from "./MyPosts";
import {addPost, PostsType, updateNewPostText} from "../../../redux/profileReducer";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

export const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    addPost, updateNewPostText})(MyPosts)

