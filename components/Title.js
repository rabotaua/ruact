import React from 'react'
import './Title.scss'

const Title = ({title}) => <h1 className="title">{title}</h1>

Title.propTypes = {
	title: React.PropTypes.string.isRequired
}

export default Title