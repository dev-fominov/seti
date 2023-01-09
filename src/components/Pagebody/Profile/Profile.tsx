import { PostType, ProfileType } from '../../../App'
import { MyPosts } from './MyPosts/MyPosts'
import s from './Profile.module.css'

export type PostsType = {
	profilePage: ProfileType
}

export const Profile = (props: PostsType) => {
	return (
		<div className={s.contentProfile}>
			<MyPosts posts={props.profilePage.posts} />
		</div>
	)
}