import test from 'ava'
import * as types from '../actions/types'
import reducer from './todosReducer'

test('should have initial state', t => {
	let expected = []
	let actual = reducer(undefined, {})
	t.deepEqual(actual, expected)
})

test(`should handle ${types.ADD_TODO}`, t => {
	let text = 'Buy the milk'
	let expected = [{id: 0, completed: false, text}]
	let actual = reducer([], {type: types.ADD_TODO, text})
	t.deepEqual(actual, expected)
})

test(`should handle ${types.DELETE_TODO}`, t => {
	let expected = []
	let actual = reducer([{id: 1, completed: false, text: 'Buy the milk'}], {type: types.DELETE_TODO, id: 1})
	t.deepEqual(actual, expected)
})

test(`should handle ${types.TOGGLE_TODO}`, t => {
	let expected = [{id: 1, completed: true, text: 'Buy the milk'}]
	let actual = reducer([{id: 1, completed: false, text: 'Buy the milk'}], {type: types.TOGGLE_TODO, id: 1})
	t.deepEqual(actual, expected)
})

test(`should handle ${types.TOGGLE_TODO} reverse`, t => {
	let expected = [{id: 1, completed: false, text: 'Buy the milk'}]
	let actual = reducer([{id: 1, completed: true, text: 'Buy the milk'}], {type: types.TOGGLE_TODO, id: 1})
	t.deepEqual(actual, expected)
})
