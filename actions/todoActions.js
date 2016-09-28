import * as types from './types'

export const addTodo = text => ({type: types.ADD_TODO, text})
export const deleteTodo = id => ({type: types.DELETE_TODO, id})
export const toggleTodo = id => ({type: types.TOGGLE_TODO, id})
