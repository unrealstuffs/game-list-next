'use client'

import Post from './Post'
import { StyledPosts } from './style'
import { getAllGames } from '@/services/getGames'
import { Text } from '@/components/shared/Text'
import InfiniteScroll from 'react-infinite-scroll-component'
import useInfiniteLoading from '@/hooks/useInfiniteLoading'

const Posts = () => {
	const {
		paginatedData: games,
		error,
		hasMore,
		setSize,
		size,
	} = useInfiniteLoading(20, getAllGames)

	if (error) return <Text>Error!</Text>
	if (size === 1 && !games) return <Text>Loading...</Text>

	return (
		<>
			{games.length === 0 ? (
				<Text>Games not Found</Text>
			) : (
				<InfiniteScroll
					dataLength={games.length}
					next={() => setSize(size + 1)}
					hasMore={hasMore}
					loader={<Text>Loading more...</Text>}
				>
					<StyledPosts>
						{games.map(game => (
							<Post key={game.id} game={game} />
						))}
					</StyledPosts>
				</InfiniteScroll>
			)}
		</>
	)
}

export default Posts
