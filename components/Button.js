import React from 'react'
import './Button.scss'

const Button = ({text, onClick}) => {
	return <button className="button" onClick={onClick}>{text}</button>
}

Button.propTypes = {
	text: React.PropTypes.string.isRequired,
	onClick: React.PropTypes.func.isRequired
}

export default Button