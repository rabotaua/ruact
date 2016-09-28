import * as types from '../actions/types'

const reducer = (state = [], action) => {
	switch (action.type) {
		case types.ADD_TODO:
			return [
				{
					id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
					completed: false,
					text: action.text
				},
				...state
			]
		case types.DELETE_TODO:
			return state.filter(todo => todo.id !== action.id)
		case types.TOGGLE_TODO:
			return state.map(item => item.id === action.id ? {...item, completed: !item.completed} : item)
		default:
			return state
	}
}

export default reducer
