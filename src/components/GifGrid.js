import React from 'react'
import GifGridItem from './GifGridItem'
import useFetchGifs from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {
	const { gifs, loading } = useFetchGifs(category)

	return (
		<div>
			<h2>{ category }</h2>
			{ loading && <div className="animate__animated animate__flash">Loading...</div> }
			{ gifs.map(gif => (<GifGridItem key={gif.id} gif={gif} />) ) }
			<hr />
		</div>
	)
}

export default GifGrid
