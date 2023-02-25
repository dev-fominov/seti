import { PostType } from '../../../../../App'
import s from './Post.module.css'

type PostTypeHandler = {
	post: PostType
}

export const Post = (props: PostTypeHandler) => {
	let {id, name, message, like} = props.post
	return (
		<div className={s.contentpost} key={id}>
			<div className={s.img}>
				<img src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=2000" alt="photo" />
			</div>
			<div className={s.infoMessage}>
				<div className={s.name}>{name}</div>
				<div className={s.message}>{message}</div>
				<div className={s.like}>Like: {like}</div>
			</div>
		</div>
	)
}