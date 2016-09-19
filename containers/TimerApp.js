import React, { Component } from 'react'
import Title from '../components/Title'
import './TimerApp.scss'

export default class TimerApp extends Component {
	constructor(props) {
		super(props)
		this.state = { counter: 0 }
	}

	componentDidMount() {
		this.interval = setInterval(this.tick.bind(this), 1000)
	}

	tick() {
		this.setState({ counter: this.state.counter + 1 })
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render() {
		const title = `Timer ${this.state.counter}`
		return <Title title={title} />
	}
}