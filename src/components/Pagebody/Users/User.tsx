import { UserType } from '../../../api/api'
import { useAppDispatch, useAppSelector } from '../../../redax/redax-store'
import { followTC, unfollowTC } from '../../../redax/usersReducer'
import s from './Users.module.css'

type UserTypeHandler = {
	user: UserType
}

export const User = (props: UserTypeHandler) => {
	const {
		id,
		photos: {
			small,
			large
		},
		followed,
		name,
		status
	} = props.user

	const dispatch = useAppDispatch()

	const follow = () => dispatch(followTC(id))
	const unfollow = () => dispatch(unfollowTC(id))

	return (
		<div key={id} className={s.item}>
			<div className={s.photo}>
				{small ? <img src={small} alt="" /> : <div className={s.img}>
					<img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000" alt="photo" />
				</div>}
				{
					followed
						? <button onClick={unfollow}>Unfollow</button>
						: <button onClick={follow}>Follow</button>
				}
			</div>
			<div className={s.info}>
				<div>
					<div>{name}</div>
					<div>{status}</div>
				</div>
				<div>
					{/* <div>{location.country}</div> */}
					{/* <div>{location.city}</div> */}
				</div>
			</div>
		</div>
	)
}