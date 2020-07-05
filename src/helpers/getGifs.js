const getGifs = async category => {
	const API_KEY = 'Qdf92Vsy6zbUCJ0XY8DMpGdnOeA4wV4K'
	const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${encodeURI(category)}&limit=10`)

	if ( response.ok ) {
		const { data } = await response.json()
		return data.map(gif => {
			const { id, images, title } = gif
			return { id, img: images.downsized_medium.url, title }
		})
	} else {
		throw new Error('Error: Bad request')
	}
}

export default getGifs
