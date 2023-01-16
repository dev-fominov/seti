import { Route, Routes } from 'react-router-dom'
import { Dialogs } from './Dialogs/Dialogs'
import s from './Pagebody.module.css'
import { Profile } from './Profile/Profile'
import { DataType } from '../../App'

export const Pagebody = (props: DataType) => {
	return (
		<div className={s.pagebody}>
			<Routes>
				<Route path={'/'} element={
					<Profile profilePage={props.state.profilePage} dispatch={props.dispatch} />
				} />
				<Route path={'/dialogs'} element={<Dialogs dialogsPage={props.state.dialogsPage} dispatch={props.dispatch} />} />
			</Routes>
		</div>
	)
}