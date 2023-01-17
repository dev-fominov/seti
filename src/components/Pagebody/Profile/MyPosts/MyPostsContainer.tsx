import { connect } from 'react-redux'
import { addPostAC, updateNewPostAC } from '../../../../redax/profileReducer'
import { MyPosts } from './MyPosts'

const mapStateToProps = (state: any) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		updateNewPostText: (text: string) => dispatch(updateNewPostAC(text)),
		addPost: () => dispatch(addPostAC())
	}
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)