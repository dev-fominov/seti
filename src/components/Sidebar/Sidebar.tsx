import s from './Sidebar.module.css'
import { NavLink } from 'react-router-dom'

const menu = [
	{ id: 1, title: 'Profile', to: '/' },
	{ id: 2, title: 'Dialogs', to: '/dialogs' }
]

export const Sidebar = () => {
	const linkActive = (isActive: boolean) => {
		return { color: isActive ? 'red' : 'black' }
	}
	return (
		<div className={s.sidebar}>
			{menu.map((m) => {
				return (
					<NavLink
						key={m.id}
						to={m.to}
						style={(params) => linkActive(params.isActive)}>
						{m.title}
					</NavLink>
				)
			})}
		</div>
	)
}