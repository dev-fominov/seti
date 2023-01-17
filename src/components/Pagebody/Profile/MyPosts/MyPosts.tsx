import { PostType } from '../../../../App'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

type PostsType = {
	posts: PostType[]
	newPostText: string
	updateNewPostText: (text: string) => void
	addPost: () => void
}

export const MyPosts = (props: PostsType) => {

	const addPostHandler = () => {
		props.addPost()
	}

	const onPostChange = (e: any) => {
		let text = e.currentTarget.value
		props.updateNewPostText(text)
	}

	return (
		<div className={s.contentMyposts}>
			<div className={s.top}>
				<textarea onChange={onPostChange} value={props.newPostText}></textarea>
				<button onClick={addPostHandler}>Add post</button>
			</div>
			<div className={s.bottom}>
				{
					props.posts.map(post => {
						return (
							<Post
								key={post.id}
								id={post.id}
								name={post.name}
								message={post.message}
								like={post.like} />
						)
					})
				}
			</div>
		</div>
	)
}