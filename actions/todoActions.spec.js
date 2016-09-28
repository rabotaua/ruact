import test from 'ava'
import * as types from './types'
import * as actions from './todoActions'

test(`addTodo should create ${types.ADD_TODO} action`, t => {
	let text = 'Buy the milk'
	let expected = {type: types.ADD_TODO, text}
	let actual = actions.addTodo(text)
	t.deepEqual(actual, expected)
})

test(`deleteTodo should create ${types.DELETE_TODO} action`, t => {
	let id = 1
	let expected = {type: types.DELETE_TODO, id}
	let actual = actions.deleteTodo(id)
	t.deepEqual(actual, expected)
})

test(`toggleTodo should create ${types.TOGGLE_TODO} action`, t => {
	let id = 1
	let expected = {type: types.TOGGLE_TODO, id}
	let actual = actions.toggleTodo(id)
	t.deepEqual(actual, expected)
})
