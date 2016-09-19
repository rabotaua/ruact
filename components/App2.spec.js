import test from 'ava'
import React from 'react'
import App2 from './App2'
import {mount} from 'enzyme'


test.beforeEach(t => {
    t.context = mount(<App2/>)
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
	t.context.find('button').simulate('click')
	t.is(t.context.state('counter'), prev + 2)
})