import {combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./profileReducer";
import {DialogsActionsType, dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {Dispatch} from "redux";
import {UsersActionsType, usersReducer} from "./usersReducer";

export type AppActionsTypes = ProfileActionsType | DialogsActionsType | UsersActionsType;
export type AppStoreType = typeof store;
export type AppDispatchType = Dispatch<AppActionsTypes>;
export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
})

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store