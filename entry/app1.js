import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'

const app1 = document.getElementById('app1')
ReactDOM.render(
	<AppContainer>
		<App />
	</AppContainer>,
	app1
)

if (module.hot) {
	module.hot.accept('../components/App', () => {
		// If you use Webpack 2 in ES modules mode, you can
		// use <App /> here rather than require() a <NextApp />.
		const NextApp = require('../components/App').default
		ReactDOM.render(
			<AppContainer>
				<NextApp />
			</AppContainer>,
			app1
		)
	})
}