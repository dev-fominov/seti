import { PostType, ProfileType } from '../../../App'
import { MyPostsContainer } from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'

export type PostsType = {
	// profilePage: ProfileType
	// dispatch: (action: any) => void
	store: any
}

export const Profile = (props: PostsType) => {
	
	return (
		<div className={s.contentProfile}>
			<MyPostsContainer />
		</div>
	)
}