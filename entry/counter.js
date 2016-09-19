import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../containers/CounterApp'

const root = document.getElementById('root')

ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	root
)

if (module.hot) {
	module.hot.accept('../containers/CounterApp', () => {
		const NextApp = require('../containers/CounterApp').default
		ReactDOM.render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			root
		)
	})
}