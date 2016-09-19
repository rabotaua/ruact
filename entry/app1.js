import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'

const root = document.getElementById('root')
ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	root
)

if (module.hot) {
	module.hot.accept('../components/App', () => {
		const NextApp = require('../components/App').default
		ReactDOM.render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			root
		)
	})
}
