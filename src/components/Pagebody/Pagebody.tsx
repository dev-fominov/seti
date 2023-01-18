import { Route, Routes } from 'react-router-dom'
import s from './Pagebody.module.css'
import { Profile } from './Profile/Profile'
import { DialogsContainer } from './Dialogs/DialogsContainer'
import { UsersContainer } from './Users/UsersContainer'

export const Pagebody = (props: any) => {
	
	return (
		<div className={s.pagebody}>
			<Routes>
				<Route path={'/'} element={
					<Profile store={props.store} />
				} />
				<Route path={'/dialogs'} element={
					<DialogsContainer store={props.store} />
				} />
				<Route path={'/users'} element={
					<UsersContainer />
				} />
			</Routes>
		</div>
	)
}