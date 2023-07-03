import Posts from '@/components/parts/Posts'
import Search from '@/components/parts/Search'
import { Container } from '@/components/shared/Container'
import Header from '@/components/parts/Header'
import { PageTitle } from '@/components/shared/Title'

export default function Home() {
	return (
		<>
			<Header />
			<Container>
				<PageTitle>Popular Games</PageTitle>
				<Search />
				<Posts />
			</Container>
		</>
	)
}
