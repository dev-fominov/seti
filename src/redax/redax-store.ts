import { dialogsReducer } from './dialogsReducer';
import { profileReducer } from './profileReducer';
import { combineReducers, createStore } from "redux";
import { usersReducer } from './usersReducer';

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogsPage: dialogsReducer,
	usersPage: usersReducer,
})

let store = createStore(reducers)

export default store