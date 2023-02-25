import axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0',
	headers: {
		"API-KEY": '1449fb6f-a118-46bc-8b11-af0716488d9c'
	}
})

export const setiAPI = {
	getUsers() {
		return instance.get<UsersType>(`users`)
	},
	follow(userId: number) {
		return instance.post(`follow/${userId}`)
	},
	unfollow(userId: number) {
		return instance.delete(`follow/${userId}`)
	}
}




export type UserType = {
	name: string
	id: number
	photos: PhotosType
	status: string,
	followed: boolean
}

type PhotosType = {
	small: null | string
	large: null | string
}

export type UsersType = {
	items: Array<UserType>
	totalCount: number
	error: null | string
}