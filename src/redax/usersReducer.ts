

let initialState = {
	users: []
}

export const usersReducer = (state: any = initialState, action: allType): any => {
	switch (action.type) {
		case 'FOLLOW': {
			return state.users.map((el: any) => el.id === action.payload.userId ? { ...el, followed: true } : el)
		}
		case 'UNFOLLOW': {
			return state.users.map((el: any) => el.id === action.payload.userId ? { ...el, followed: false } : el)
		}
		case 'SET-USERS': {
			return { ...state, users: [...state.users, ...action.payload.users] }
		}
		default: return state
	}
}

export const followAC = (userId: string) => ({ type: 'FOLLOW', payload: { userId } } as const)
export const unfollowAC = (userId: string) => ({ type: 'UNFOLLOW', payload: { userId } } as const)
export const setUsersAC = (users: Array<any>) => ({ type: 'SET-USERS', payload: { users } } as const)

type allType = followType | unfollowType | setUsersType

type followType = ReturnType<typeof followAC>
type unfollowType = ReturnType<typeof unfollowAC>
type setUsersType = ReturnType<typeof setUsersAC>