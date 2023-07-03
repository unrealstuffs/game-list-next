import useSWRInfinite from 'swr/infinite'

const useInfiniteLoading = (pageSize, fetcher) => {
	const getKey = (pageIndex, previousPageData) => {
		if (previousPageData && previousPageData.length === 0) {
			return null // Reached the end, stop fetching
		}

		const page = pageIndex + 1
		return `&page_size=${pageSize}&page=${page}`
	}

	const { data, error, size, setSize, mutate } = useSWRInfinite(
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
		mutate,
	}
}

export default useInfiniteLoading
