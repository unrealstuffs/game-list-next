export const getPlatforms = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_PLATFORMS_API_URL}?key=${process.env.NEXT_PUBLIC_ACCESS_KEY}`
	)

	if (!response.ok) throw new Error('Unable to fetch platforms.')

	const platforms = await response.json()

	return platforms.results
}
