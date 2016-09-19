import React, { Component } from 'react'

export default class App2 extends Component {
	constructor(props) {
		super(props)
		this.state = { counter: 0 }
	}
	render() {
		return <div>
			<h4>App2</h4>
			<button onClick={() => { this.setState({ counter: this.state.counter + 1 }) } }>{this.state.counter}</button>
		</div>
	}
}