import { PostType } from '../../../../App'
import s from './MyPosts.module.css'
import { Post } from './Post/Post'

type PostsType = {
	posts: PostType[]
}

export const MyPosts = (props: PostsType) => {

	const addPost = () => {

	}

	return (
		<div className={s.contentMyposts}>
			<div className={s.top}>
				<textarea></textarea>
				<button onClick={addPost}>Add post</button>
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