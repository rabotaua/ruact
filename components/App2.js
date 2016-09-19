import React, { Component } from 'react'
import Title from './Title'
import Button from './Button'
import './App2.scss'
export default class App2 extends Component {
	constructor() {
		super()
		this.state = { counter: 0 }
	}
	render() {
		return <div>
			<Title title="App2" />
			<Button onClick={() => { this.setState({counter: this.state.counter + 1}) }} text={this.state.counter} />
		</div>
	}
}