import { useDispatch, useSelector } from 'react-redux'
import { ProfileType } from '../../../../App'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'
import { addPostAC, updateNewPostAC } from '../../../../redax/profileReducer'
import { AppRootStateType } from '../../../../redax/redax-store'
import { memo, useCallback } from 'react'

export const MyPosts = memo(() => {

	const profilePage = useSelector<AppRootStateType, ProfileType>(state => state.profilePage)
	const dispatch = useDispatch()

	const addPostHandler = useCallback(() => {
		dispatch(addPostAC())
	}, [])

	const onPostChange = useCallback((e: any) => {
		dispatch(updateNewPostAC(e.currentTarget.value))
	}, [])

	return (
		<div className={s.contentMyposts}>
			<div className={s.top}>
				<textarea onChange={onPostChange} value={profilePage.newPostText}></textarea>
				<button onClick={addPostHandler}>Add post</button>
			</div>
			<div className={s.bottom}>
				{
					profilePage.posts.map(post => <Post key={post.id} post={post} />)
				}
			</div>
		</div>
	)
})