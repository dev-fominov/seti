import { Route, Routes } from 'react-router-dom'
import s from './Pagebody.module.css'
import { Profile } from './Profile/Profile'
import { Dialogs } from './Dialogs/Dialogs'
import { Users } from './Users/Users'

export const Pagebody = (props: any) => {
	
	return (
		<div className={s.pagebody}>
			<Routes>
				<Route path={'/'} element={
					<Profile />
				} />
				<Route path={'/dialogs'} element={
					<Dialogs />
				} />
				<Route path={'/users'} element={
					<Users />
				} />
			</Routes>
		</div>
	)
}