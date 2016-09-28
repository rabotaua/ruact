import * as ReactHotLoader from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../containers/TimerApp'

const AppContainer = ReactHotLoader.AppContainer
const root = document.getElementById('root')

ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	root
)

if (module.hot) {
	module.hot.accept('../containers/TimerApp', () => {
		const NextApp = require('../containers/TimerApp').default
		ReactDOM.render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			root
		)
	})
}
