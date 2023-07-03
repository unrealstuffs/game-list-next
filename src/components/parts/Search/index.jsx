'use client'

import useSWR from 'swr'
import { useEffect, useRef } from 'react'
import { StyledSearch } from './style'
import { Input, Option, Select } from '../../shared/FormField'
import { getPlatforms } from '@/services/getPlatforms'
import debounce from 'lodash.debounce'
import { useSearch } from '@/store'

const orderingOptions = [
	{ id: 1, value: '', title: 'Relevance' },
	{ id: 2, value: '-released', title: 'Release Date (new first)' },
	{ id: 3, value: 'released', title: 'Release Date (old first)' },
	{ id: 4, value: '-metacritic', title: 'Metacritic (high rate first)' },
	{ id: 5, value: 'metacritic', title: 'Metacritic (low rate first)' },
]

const Search = () => {
	const { data: platforms, isLoading } = useSWR('platforms', getPlatforms)
	const [formData, setFormData] = useSearch(state => [
		state.formData,
		state.setFormData,
	])
	const searchInputRef = useRef(null)

	const debouncedSearch = useRef(
		debounce(value => {
			setFormData({ ...formData, search: value })
		}, 1000)
	).current

	useEffect(() => {
		return () => {
			debouncedSearch.cancel()
		}
	}, [])

	const handleInputChange = e => {
		const value = e.target.value
		searchInputRef.current.value = value

		debouncedSearch(value)
	}

	return (
		<StyledSearch>
			<Input
				ref={searchInputRef}
				onChange={handleInputChange}
				placeholder='Search...'
			/>
			<Select
				onChange={event =>
					setFormData({
						...formData,
						platform: event.target.value,
					})
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
					setFormData({
						...formData,
						ordering: event.target.value,
					})
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
