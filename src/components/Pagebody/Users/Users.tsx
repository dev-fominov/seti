import s from './Users.module.css'

export const Users = (props: any) => {

	if (props.users.length === 0) {
		props.setUsers([
			{ id: 1, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU', followed: true, fullName: 'Aleksandr', status: 'Follow', location: { city: 'Minsk', country: 'Belarus' } },
			{ id: 2, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU', followed: true, fullName: 'Vlad', status: 'Follow', location: { city: 'Moskva', country: 'Russia' } },
			{ id: 3, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU', followed: false, fullName: 'Anna', status: 'Unfollow', location: { city: 'Kiev', country: 'Ukraina' } },
		])
	}


	return (
		<div className={s.contentUsers}>
			{
				props.users.map((user: any) => {
					return (
						<div key={user.id} className={s.item}>
							<div className={s.photo}>
								<img src={user.photoURL} alt="" />
								{
									user.followed
										? <button onClick={() => props.unfollow(user.id)}>Unfollow</button>
										: <button onClick={() => props.follow(user.id)}>Follow</button>
								}

							</div>
							<div className={s.info}>
								<div>
									<div>{user.fullName}</div>
									<div>{user.status}</div>
								</div>
								<div>
									<div>{user.location.country}</div>
									<div>{user.location.city}</div>
								</div>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}