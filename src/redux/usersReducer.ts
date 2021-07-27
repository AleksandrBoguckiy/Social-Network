const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export type UsersActionsType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> | ReturnType<typeof setUsersAC>

export type UsersStateType = {
    users: Array<UsersType>
}

export type LocationType = {
    country: string
    city: string
}
export type UsersType = {
    id: string
    photos: {
        small: string
        large: string
    }
    name: string
    status: string
    followed: boolean
    location: LocationType
}

const initialState: UsersStateType = {
    users: [] as Array<UsersType>
}

export const usersReducer = (state: UsersStateType = initialState, actions: UsersActionsType): UsersStateType => {
    switch (actions.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === actions.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === actions.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...actions.users]
            }
        default:
            return state
    }
}

export const followAC = (userId: string) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: string) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UsersType>) => ({type: SET_USERS, users} as const)
