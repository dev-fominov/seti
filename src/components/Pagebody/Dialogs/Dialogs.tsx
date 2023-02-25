import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import { Message } from './Message'
import { DialogsType } from '../../../App'
import { sendMessageAC, updateNewMessageBodyAC } from '../../../redax/dialogsReducer'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from '../../../redax/redax-store'
import { memo, useCallback } from 'react'

export const Dialogs = memo(() => {

	const dialogsPage = useSelector<AppRootStateType, DialogsType>(state => state.dialogsPage)
	const dispatch = useDispatch()

	const linkActive = (isActive: boolean) => {
		return { color: isActive ? 'red' : 'black' }
	}
	const addMessageHandler = useCallback(() => {
		dispatch(sendMessageAC())
	}, [])

	const onNewMessageChange = useCallback((e: any) => {
		dispatch(updateNewMessageBodyAC(e.currentTarget.value))
	}, [])

	return (
		<div className={s.contentDialogs}>
			<div className={s.left}>
				{
					dialogsPage.dialogsData.map(dialog => {
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
					dialogsPage.messageData.map(m => <Message key={m.id} message={m.message} />)
				}
				<div className={s.sendMessage}>
					<textarea onChange={onNewMessageChange} value={dialogsPage.newMessageBody}></textarea>
					<button onClick={addMessageHandler}>Send</button>
				</div>
			</div>
		</div>
	)
})