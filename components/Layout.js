import React from 'react'
import Title from './Title'

export default function Layout({ children }) {
	return (
		<div>
			<Title title="Hello, world!" />
			{children}
		</div>
	)
}

Layout.propTypes = {
	children: React.PropTypes.node
}
