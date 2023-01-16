import { PagesType } from "../App";
import { dialogsReducer } from "./dialogsReducer";
import { profileReducer } from "./profileReducer";

export const store: any = {
	_state: <PagesType>{
		profilePage: {
			posts: [
				{ id: 1, name: 'Aleksandr', message: 'My first message 1', like: 2 },
				{ id: 2, name: 'Vadim', message: 'My first message 2', like: 5 },
				{ id: 3, name: 'Vlad', message: 'My first message 3', like: 9 },
			],
			newPostText: ''
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
			],
			newMessageBody: ''
		}
	},
	_callSubscriber() {
		console.log('State changed')
	},
	getState() {
		return this._state;
	},
	subscribe(observer: () => void) {
		this._callSubscriber = observer
	},
	dispatch(action: any) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._callSubscriber()
	}
}

// window.store = store