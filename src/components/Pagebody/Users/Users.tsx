import { useSelector } from 'react-redux'
import { useEffect } from "react"
import { User } from './User'
import s from './Users.module.css'
import { AppRootStateType, useAppDispatch } from '../../../redax/redax-store'
import { getUsersTC } from '../../../redax/usersReducer'
import { UserType } from '../../../api/api'


// export type UserType = {
// 	id: number
// 	photoURL: string
// 	followed: boolean
// 	fullName: string
// 	status: 'Follow' | 'Unfollow'
// 	location: LocationType
// }

type LocationType = {
	city: string
	country: string
}


export const Users = () => {

	useEffect(() => {
		dispatch(getUsersTC())
	}, [])

	const users = useSelector<AppRootStateType, Array<UserType>>(state => state.usersPage.users)
	const dispatch = useAppDispatch()

	return (
		<div className={s.contentUsers}>
			{users.map(user => <User key={user.id} user={user} />)}
		</div>
	)
}