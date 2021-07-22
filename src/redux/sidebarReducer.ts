import {v1} from "uuid";
import {AppActionsTypes} from "./redux-store";

export type MyFriendsStateType = {
    myFriends: Array<MyFriendsType>
}
export type MyFriendsType = {
    id: string
    name: string
}

const initialState = {
    myFriends: [
        {id: v1(), name: 'Maria'},
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Daria'}
    ] as Array<MyFriendsType>
}

export const sidebarReducer = (state: MyFriendsStateType = initialState, action: AppActionsTypes) : MyFriendsStateType => {

    return state
}