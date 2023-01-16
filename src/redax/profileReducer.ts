import { ProfileType } from "../App"

let initialState = {
	posts: [
		{ id: 1, name: 'Aleksandr', message: 'My first message 1', like: 2 },
		{ id: 2, name: 'Vadim', message: 'My first message 2', like: 5 },
		{ id: 3, name: 'Vlad', message: 'My first message 3', like: 9 },
	],
	newPostText: ''
}

export const profileReducer = (state: ProfileType = initialState, action: allType): ProfileType => {
	switch (action.type) {
		case 'ADD-POST': {
			const newPost = { id: 6, name: 'Anna', message: state.newPostText, like: 0 }
			return { ...state, posts: [...state.posts, newPost], newPostText: '' }
		}
		case 'UPDATE-NEW-POST-TEXT': {
			return { ...state, newPostText: action.payload.newText }
		}
		default: return state
	}
}

export const addPostAC = () => ({ type: 'ADD-POST' } as const)
export const updateNewPostAC = (newText: string) =>
	({ type: 'UPDATE-NEW-POST-TEXT', payload: { newText } } as const)

type allType = addPostType | updateNewPostType

type addPostType = ReturnType<typeof addPostAC>
type updateNewPostType = ReturnType<typeof updateNewPostAC>