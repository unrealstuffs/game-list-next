import useSWRInfinite from 'swr/infinite'

const useInfiniteLoading = (pageSize, fetcher, params) => {
	const getKey = (pageIndex, previousPageData) => {
		if (previousPageData && previousPageData.length === 0) {
			return null // Reached the end, stop fetching
		}

		const page = pageIndex + 1
		const { search, platform, ordering } = params
		const searchParams = `${search ? '&search=' + search : ''}${
			platform ? '&platforms=' + platform : ''
		}${ordering ? '&ordering=' + ordering : ''}`

		return `&page_size=${pageSize}&page=${page}${searchParams}`
	}

	const { data, error, size, setSize, isLoading } = useSWRInfinite(
		getKey,
		fetcher,
		{
			revalidateFirstPage: false,
		}
	)

	const paginatedData = data ? data.flatMap(page => page.results) : []
	const hasMore = data && data[data.length - 1].results.length === pageSize

	return {
		paginatedData,
		hasMore,
		error,
		size,
		setSize,
		isLoading,
	}
}

export default useInfiniteLoading
