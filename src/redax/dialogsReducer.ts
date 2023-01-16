import { DialogsType } from "../App"

let initialState = {
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

export const dialogsReducer = (state: DialogsType = initialState, action: allType): DialogsType => {
	switch (action.type) {
		case 'SEND-MESSAGE': {
			const newMessage = { id: 6, message: state.newMessageBody }
			return { ...state, messageData: [...state.messageData, newMessage], newMessageBody: '' }
		}
		case 'UPDATE-NEW-MESSAGE-BODY': {
			return { ...state, newMessageBody: action.payload.newMessageBody }
		}
		default: return state
	}
}

export const sendMessageAC = () => ({ type: 'SEND-MESSAGE' } as const)
export const updateNewMessageBodyAC = (newMessageBody: string) =>
	({ type: 'UPDATE-NEW-MESSAGE-BODY', payload: { newMessageBody } } as const)

type allType = sendMessageType | updateNewMessageBodyType

type sendMessageType = ReturnType<typeof sendMessageAC>
type updateNewMessageBodyType = ReturnType<typeof updateNewMessageBodyAC>