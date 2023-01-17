import { connect } from 'react-redux'
import { sendMessageAC, updateNewMessageBodyAC } from '../../../redax/dialogsReducer'
import { Dialogs } from './Dialogs'

const mapStateToProps = (state: any) => {
	return {
		dialogsPage: state.dialogsPage
	}
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		onNewMessage: (text: string) => dispatch(updateNewMessageBodyAC(text)),
		addMessage: () => dispatch(sendMessageAC())
	}
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)