import {combineReducers} from 'redux'
import todos from './todosReducer'
const reducers = combineReducers({
	todos
})

export default reducers
