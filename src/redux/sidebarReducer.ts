import {ActionsType, MyFriendsType} from "./redux-store";
import {v1} from "uuid";

type initialStateType = typeof initialState

const initialState = {
    myFriends: [
        {id: v1(), name: 'Maria'},
        {id: v1(), name: 'Alex'},
        {id: v1(), name: 'Daria'}
    ] as Array<MyFriendsType>
}

export const sidebarReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {

    return state
}