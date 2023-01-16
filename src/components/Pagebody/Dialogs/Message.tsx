import s from './Dialogs.module.css'

type TypeMessage = {
	message: string
}

export const Message = (props: TypeMessage) => {
	return (
		<>
			<div className={s.message}>
				{props.message}
			</div>
		</>
	)
}