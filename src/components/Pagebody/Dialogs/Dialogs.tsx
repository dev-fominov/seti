import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'
import { Message } from './Message'
import { DialogsType } from '../../../App'

type DialogsPageType = {
	dialogsPage: DialogsType
}

export const Dialogs = (props: DialogsPageType) => {
	const linkActive = (isActive: boolean) => {
		return { color: isActive ? 'red' : 'black' }
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
			</div>
		</div>
	)
}