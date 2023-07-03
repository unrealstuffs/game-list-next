export const getPlatforms = async () => {
	const response = await fetch(
		'https://api.rawg.io/api/platforms?key=bcbb4410689940c1b4e98754ff7771a7'
	)

	if (!response.ok) throw new Error('Unable to fetch platforms.')

	const platforms = await response.json()

	return platforms.results
}
