import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App2 from '../components/App2'

const app2 = document.getElementById('app2')
ReactDOM.render(
	<AppContainer>
		<App2 />
	</AppContainer>,
	app2
)

if (module.hot) {
	module.hot.accept('../components/App2', () => {
		const NextApp2 = require('../components/App2').default
		ReactDOM.render(
			<AppContainer>
				<NextApp2 />
			</AppContainer>,
			app2
		)
	})
}