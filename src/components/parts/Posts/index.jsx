'use client'

import Post from './Post'
import { StyledPosts } from './style'
import { getGames } from '@/services/getGames'
import InfiniteScroll from 'react-infinite-scroll-component'
import useInfiniteLoading from '@/hooks/useInfiniteLoading'
import { useSearch } from '@/store'
import Message from './Message'
import { AiOutlineLoading } from 'react-icons/ai'
import { Loader } from '@/components/shared/Loader'

const Posts = () => {
	const formData = useSearch(state => state.formData)
	const {
		paginatedData: games,
		error,
		hasMore,
		setSize,
		size,
		isLoading,
	} = useInfiniteLoading(20, getGames, formData)

	if (error) return <Message>Error!</Message>
	if (isLoading)
		return (
			<Message>
				<Loader />
			</Message>
		)
	if (games.length === 0 && !isLoading)
		return <Message>Games not Found</Message>

	return (
		<InfiniteScroll
			dataLength={games.length}
			next={() => setSize(size + 1)}
			hasMore={hasMore}
			loader={
				<Message>
					<Loader />
				</Message>
			}
			style={{ overflow: 'inherit' }}
		>
			<StyledPosts>
				{games.map(game => (
					<Post key={game.id} game={game} />
				))}
			</StyledPosts>
		</InfiniteScroll>
	)
}

export default Posts
