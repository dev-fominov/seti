import { PostType, ProfileType } from '../../../App'
import { MyPosts } from './MyPosts/MyPosts'
import s from './Profile.module.css'

export type PostsType = {
	profilePage: ProfileType
	dispatch: (action: any) => void
}

export const Profile = (props: PostsType) => {
	return (
		<div className={s.contentProfile}>
			<MyPosts
				posts={props.profilePage.posts}
				newPostText={props.profilePage.newPostText}
				dispatch={props.dispatch}
			/>
		</div>
	)
}