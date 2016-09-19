import test from 'ava'
import React from 'react'
import App from './CounterApp'
import {mount} from 'enzyme'


test.beforeEach(t => {
	t.context = mount(<App/>)
})

test('has initial state', t => {
	t.is(t.context.state('counter'), 0)
})

test('has button', t => {
	t.truthy(t.context.find('button').length)
})

test('handles button click', t => {
	const prev = t.context.state('counter')
	t.context.find('button').simulate('click')
	t.is(t.context.state('counter'), prev + 1)
})