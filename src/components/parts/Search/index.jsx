'use client'

import useSWR from 'swr'
import { useEffect, useState } from 'react'
import { StyledSearch } from './style'
import { Input, Option, Select } from '../../shared/FormField'
import { getPlatforms } from '@/services/getPlatforms'
import { getAllGames, getGamesBySearch } from '@/services/getGames'
import debounce from 'lodash.debounce'
import useInfiniteLoading from '@/hooks/useInfiniteLoading'

const orderingOptions = [
	{ id: 1, value: '', title: 'Relevance' },
	{ id: 2, value: '-released', title: 'Release Date (new first)' },
	{ id: 3, value: 'released', title: 'Release Date (old first)' },
	{ id: 4, value: '-metacritic', title: 'Metacritic (high rate first)' },
	{ id: 5, value: 'metacritic', title: 'Metacritic (low rate first)' },
]

const Search = () => {
	const { data: platforms, isLoading } = useSWR('platforms', getPlatforms)
	const { setSize, mutate } = useInfiniteLoading(20, getAllGames)

	const [formData, setFormData] = useState({
		search: '',
		platform: '',
		ordering: '',
	})

	useEffect(() => {
		const delayedSearch = debounce(async () => {
			const games = await getGamesBySearch(formData)
			mutate(games)
			setSize(1)
		}, 1000)

		delayedSearch()

		return () => {
			delayedSearch.cancel()
		}
	}, [formData])

	return (
		<StyledSearch>
			<Input
				value={formData.search}
				onChange={e =>
					setFormData(prev => ({ ...prev, search: e.target.value }))
				}
				placeholder='Search...'
			/>
			<Select
				onChange={event =>
					setFormData(prev => ({
						...prev,
						platform: event.target.value,
					}))
				}
			>
				<Option value=''>All platforms</Option>
				{isLoading
					? null
					: platforms.map(({ id, name }) => (
							<Option key={id} value={id}>
								{name}
							</Option>
					  ))}
			</Select>
			<Select
				onChange={event =>
					setFormData(prev => ({
						...prev,
						ordering: event.target.value,
					}))
				}
			>
				{orderingOptions.map(({ id, value, title }) => (
					<Option key={id} value={value}>
						{title}
					</Option>
				))}
			</Select>
		</StyledSearch>
	)
}

export default Search
