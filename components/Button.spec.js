import test from 'ava'
import React from 'react'
import Button from './Button'
import {shallow} from 'enzyme'


test.beforeEach(t => {
    t.context = shallow(<Button text="text" onClick={()=> {}}/>)
})

test('can set prop', t => {
    t.is(t.context.find('button').text(), 'text')
    t.context.setProps({text: 'hello'})
    t.is(t.context.find('button').text(), 'hello')
})

test('can set handler', t => {
    let i = 0
    const handler = () => i++

    t.context.setProps({onClick: handler})
    t.is(i, 0)
    t.context.simulate('click')
    t.is(i, 1)
})