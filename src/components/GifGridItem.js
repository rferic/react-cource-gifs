import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({ gif }) => {
	return (
		<div className="gif-grid-item animate__animated animate__fadeIn">
			<img src={gif.img} alt={gif.title} />
			<h5>{gif.title}</h5>
		</div>
	)
}

GifGridItem.propTypes = {
	gif: PropTypes.shape({
		title: PropTypes.string.isRequired,
		img: PropTypes.string.isRequired,
	}).isRequired
}

export default GifGridItem
