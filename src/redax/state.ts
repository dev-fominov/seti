import { PagesType } from "../App";
import { rerenderEntireTree } from "../render";

export const state: PagesType = {
	profilePage: {
		posts: [
			{ id: 1, name: 'Aleksandr', message: 'My first message 1', like: 2 },
			{ id: 2, name: 'Vadim', message: 'My first message 2', like: 5 },
			{ id: 3, name: 'Vlad', message: 'My first message 3', like: 9 },
		]
	},
	dialogsPage: {
		dialogsData: [
			{ id: 1, name: 'Aleksandr' },
			{ id: 2, name: 'Vlad' },
			{ id: 3, name: 'Kirill' },
			{ id: 4, name: 'Anna' },
			{ id: 5, name: 'Natasha' }
		],
		messageData: [
			{ id: 1, message: 'Hi Aleksandr 1' },
			{ id: 2, message: 'Hi Vlad 2' },
			{ id: 3, message: 'Hi Kirill 3' },
			{ id: 4, message: 'Hi Anna 4' },
			{ id: 5, message: 'Hi Natasha 5' }
		]
	}
}

export const addPost = (postMessage: string) => {
	// [{ id: 4, name: 'Anna', message: postMessage, like: 0 }, ...state.profilePage.posts]
	const newPost = { id: 4, name: 'Anna', message: postMessage, like: 0 }
	state.profilePage.posts.push(newPost)
	// rerenderEntireTree(state)
}