import { Container } from '@/components/shared/Container'
import Header from '@/components/parts/Header'
import Game from '@/components/parts/Game'
import { PageTitle } from '@/components/shared/Title'
import { getGameBySlug, getScreenshotsBySlug } from '@/services/getGames'

export async function generateMetadata({ params: { slug } }) {
	const { name } = await getGameBySlug(slug)

	return {
		title: name,
	}
}

export default async function GamePage({ params: { slug } }) {
	const game = await getGameBySlug(slug)
	const screenshots = await getScreenshotsBySlug(slug)

	return (
		<>
			<Header />
			<Container>
				<PageTitle>{game.name}</PageTitle>
				<Game game={game} screenshots={screenshots} />
			</Container>
		</>
	)
}
