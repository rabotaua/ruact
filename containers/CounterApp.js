import React from 'react'
import Title from '../components/Title'
import Button from '../components/Button'
import './CounterApp.scss'

export default class CounterApp extends React.Component {
	constructor(props) {
		super(props)
		this.state = { counter: 0 }
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		this.setState({ counter: this.state.counter + 1 })
	}

	render() {
		const title = `Counter ${this.state.counter}`
		return <div>
			<Title title={title} />
			<Button onClick={this.handleClick} text="Click me" />
		</div>
	}
}
