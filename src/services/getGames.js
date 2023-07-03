export const getAllGames = async (params, data) => {
	const response = await fetch(
		`https://api.rawg.io/api/games?key=bcbb4410689940c1b4e98754ff7771a7${params}`
	)

	if (!response.ok) throw new Error('Unable to fetch games.')

	return response.json()
}

export const getGamesBySearch = async data => {
	const { search, platform, ordering } = data
	const response = await fetch(
		`https://api.rawg.io/api/games?key=bcbb4410689940c1b4e98754ff7771a7${
			search ? '&search=' + search : ''
		}${platform ? '&platforms=' + platform : ''}${
			ordering ? '&ordering=' + ordering : ''
		}`
	)

	if (!response.ok) throw new Error('Unable to fetch games.')

	const games = await response.json()

	return games.results
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
