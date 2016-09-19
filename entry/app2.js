import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'
import App2 from '../components/App2'

const root = document.getElementById('root')
ReactDOM.render(
	<AppContainer>
		<App2 />
	</AppContainer>,
	root
)

if (module.hot) {
	module.hot.accept('../components/App2', () => {
		const NextApp2 = require('../components/App2').default
		ReactDOM.render(
			<AppContainer>
				<NextApp2 />
			</AppContainer>,
			root
		)
	})
}
