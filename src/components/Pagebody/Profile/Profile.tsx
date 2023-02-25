import { MyPosts } from './MyPosts/MyPosts'
import s from './Profile.module.css'

export const Profile = () => {
	return (
		<div className={s.contentProfile}>
			<MyPosts />
		</div>
	)
}