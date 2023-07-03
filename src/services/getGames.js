export const getGames = async params => {
	const response = await fetch(
		`https://api.rawg.io/api/games?key=bcbb4410689940c1b4e98754ff7771a7${params}`
	)

	if (!response.ok) throw new Error('Unable to fetch games.')

	return response.json()
}

export const getGameBySlug = async slug => {
	const response = await fetch(
		`https://api.rawg.io/api/games/${slug}?key=bcbb4410689940c1b4e98754ff7771a7`,
		{ next: { revalidate: 60 } }
	)

	if (!response.ok) throw new Error('Unable to fetch game.')

	return response.json()
}

export const getScreenshotsBySlug = async slug => {
	const response = await fetch(
		`https://api.rawg.io/api/games/${slug}/screenshots?key=bcbb4410689940c1b4e98754ff7771a7`
	)

	if (!response.ok) throw new Error('Unable to fetch screenshots.')

	const screenshots = await response.json()

	return screenshots.results
}
