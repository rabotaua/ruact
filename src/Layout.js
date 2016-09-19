import React from 'react'

export default function Layout({ children }) {
	return (
		<div>
			<h1>Hello, world!</h1>
			{children}
		</div>
	)
}

Layout.propTypes = {
	children: React.PropTypes.node
}