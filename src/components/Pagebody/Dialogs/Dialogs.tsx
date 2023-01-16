import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import { Message } from './Message'
import { DialogsType } from '../../../App'
import { sendMessageAC, updateNewMessageBodyAC } from '../../../redax/dialogsReducer'

type DialogsPageType = {
	dialogsPage: DialogsType
	dispatch: (action: any) => void
}

export const Dialogs = (props: DialogsPageType) => {
	const linkActive = (isActive: boolean) => {
		return { color: isActive ? 'red' : 'black' }
	}
	const addMessageHandler = () => {
		props.dispatch(sendMessageAC())
	}

	const onNewMessageChange = (e: any) => {
		let text = e.currentTarget.value
		props.dispatch(updateNewMessageBodyAC(text))
	}

	return (
		<div className={s.contentDialogs}>
			<div className={s.left}>
				{
					props.dialogsPage.dialogsData.map((dialog) => {
						return (
							<NavLink
								key={dialog.id}
								to={'/dialogs/' + dialog.id}
								style={(params) => linkActive(params.isActive)}>
								{dialog.name}
							</NavLink>
						)
					})
				}
			</div>
			<div className={s.right}>
				{
					props.dialogsPage.messageData.map((m) => {
						return (
							<Message key={m.id} message={m.message} />
						)
					})
				}
				<div className={s.sendMessage}>
					<textarea onChange={onNewMessageChange} value={props.dialogsPage.newMessageBody}></textarea>
					<button onClick={addMessageHandler}>Send</button>
				</div>
			</div>
		</div>
	)
}