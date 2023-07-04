export const getGames = async params => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_GAMES_API_URL}?key=${process.env.NEXT_PUBLIC_ACCESS_KEY}${params}`
	)

	if (!response.ok) throw new Error('Unable to fetch games.')

	return response.json()
}

export const getGameBySlug = async slug => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_GAMES_API_URL}/${slug}?key=${process.env.NEXT_PUBLIC_ACCESS_KEY}`,
		{ next: { revalidate: 60 } }
	)

	if (!response.ok) throw new Error('Unable to fetch game.')

	return response.json()
}

export const getScreenshotsBySlug = async slug => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_GAMES_API_URL}/${slug}/screenshots?key=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
	)

	if (!response.ok) throw new Error('Unable to fetch screenshots.')

	const screenshots = await response.json()

	return screenshots.results
}
