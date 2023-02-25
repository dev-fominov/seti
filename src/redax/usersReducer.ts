import { UserType, setiAPI } from "../api/api"
import { setStatusAC } from "../app/appReducer"

let initialState = {
	users: [],
} as InitialType

type InitialStateType = typeof initialState

export const usersReducer = (state = initialState, action: allType): InitialStateType => {
	switch (action.type) {
		case 'FOLLOW': {
			return {...state, users: state.users.map(el => el.id === action.payload.userId ? { ...el, followed: true } : el)}
		}
		case 'UNFOLLOW': {
			return {...state, users: state.users.map((el: any) => el.id === action.payload.userId ? { ...el, followed: false } : el)}
		}
		case 'SET-USERS': {
			return { ...state, users: [...state.users, ...action.payload.users] }
		}
		default: return state
	}
}

export const followAC = (userId: number) => ({ type: 'FOLLOW', payload: { userId } } as const)
export const unfollowAC = (userId: number) => ({ type: 'UNFOLLOW', payload: { userId } } as const)
export const setUsersAC = (users: UserType[]) => ({ type: 'SET-USERS', payload: { users } } as const)

type allType = followType | unfollowType | setUsersType

type followType = ReturnType<typeof followAC>
type unfollowType = ReturnType<typeof unfollowAC>
type setUsersType = ReturnType<typeof setUsersAC>

type InitialType = {
	users: Array<UserType>
}

export const getUsersTC = () => (dispatch: any) => {
	dispatch(setStatusAC('loading'))
	setiAPI.getUsers()
		.then((res) => {
			dispatch(setUsersAC(res.data.items))
			dispatch(setStatusAC('succeeded'))
		})
}

export const followTC = (userId: number) => (dispatch: any) => {
	dispatch(setStatusAC('loading'))
	setiAPI.follow(userId)
		.then((res) => {
			console.log(res.data)
			if(res.data.resultCode === 0) {
				dispatch(unfollowAC(userId))
			} else {
				console.log(res.data.message)
			}
			dispatch(setStatusAC('succeeded'))
		})
}

export const unfollowTC = (userId: number) => (dispatch: any) => {
	dispatch(setStatusAC('loading'))
	setiAPI.unfollow(userId)
		.then((res) => {
			console.log(res.data)
			if(res.data.resultCode === 0) {
				dispatch(followAC(userId))
			} else {
				console.log(res.data.message)
			}
			dispatch(setStatusAC('succeeded'))
		})
}