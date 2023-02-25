import { combineReducers, createStore, applyMiddleware, AnyAction } from 'redux'
import thunk, {ThunkDispatch} from 'redux-thunk'

import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { usersReducer } from './usersReducer';
import { appReducer } from '../app/appReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


let rootReducer = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
	app: appReducer,
})

// непосредственно создаём store
export const store = createStore(rootReducer, applyMiddleware(thunk)) 
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

type AppDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store