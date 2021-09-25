import axios from "axios";
import {UsersType} from "../redux/usersReducer";
import {ProfileType} from "../redux/profileReducer";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'e48f586f-eae5-4a76-8ed1-bdd525d79043'
    }
})

type CommonDataType = {
    id: number
    login: string
    email: string
}
type CommonResponseType<T = {}> = {
    data: T
    fieldsErrors: Array<string>
    messages: Array<string>
    resultCode: number
}

type GetUsersType = {
    error: string
    items: Array<UsersType>
    totalCount: number
}

export const authApi = {
    getAuthData() {
        return instance.get<CommonResponseType<CommonDataType>>(`auth/me`)
    },
}

export const usersApi = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
    },
}

export const followApi = {
    follow(userId: string) {
        return instance.post<CommonResponseType>(`follow/${userId}`)
    },

    unFollow(userId: string) {
        return instance.delete<CommonResponseType>(`follow/${userId}`)
    },
}

export const profileApi = {
    getProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put<CommonResponseType>(`profile/status`, {status})
    }
}
