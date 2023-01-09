import { PostType } from '../../../../../App'
import s from './Post.module.css'

export const Post = (props: PostType) => {
	return (
		<div className={s.contentpost} key={props.id}>
			<div className={s.img}>
				<img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000" alt="photo" />
			</div>
			<div className={s.infoMessage}>
				<div className={s.name}>{props.name}</div>
				<div className={s.message}>{props.message}</div>
				<div className={s.like}>Like: {props.like}</div>
			</div>
		</div>
	)
}