import test from 'ava'
import React from 'react'
import {shallow} from 'enzyme'
import Title from './Title'

test.beforeEach(t => {
	t.context = shallow(<Title title="Hello" />)
})

test('renders h1', t => {
	t.truthy(t.context.find('h1').length)
})

test('h1 has title class', t => {
	t.true(t.context.find('h1').hasClass('title'))
})

test('renders title prop', t => {
	t.is(t.context.text(), 'Hello')
	t.context.setProps({ title: 'World' })
	t.is(t.context.text(), 'World')
})