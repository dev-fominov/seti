import { connect } from 'react-redux'
import { Users } from './Users'
import { followAC, setUsersAC, unfollowAC } from '../../../redax/usersReducer'

const mapStateToProps = (state: any) => {
	return {
		users: state.usersPage.users
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		follow: (userId: string) => dispatch(followAC(userId)),
		unfollow: (userId: string) => dispatch(unfollowAC(userId)),
		setUsers: (users: Array<any>) => dispatch(setUsersAC(users))
	}
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)