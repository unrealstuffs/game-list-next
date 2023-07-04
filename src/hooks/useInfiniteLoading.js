import useSWRInfinite from 'swr/infinite'

// Hook used to handle infinite scrolling and data fetching with SWR.
const useInfiniteLoading = (pageSize, fetcher, params) => {
	// The getKey function determines the cache key for each page of data
	const getKey = (pageIndex, previousPageData) => {
		// If the previous page data is empty, it means we have reached the end, so stop fetching
		if (previousPageData && previousPageData.length === 0) {
			return null
		}

		// Calculate the page number and construct the search parameters based on the provided params
		const page = pageIndex + 1
		const { search, platform, ordering } = params
		const searchParams = `${search ? '&search=' + search : ''}${
			platform ? '&platforms=' + platform : ''
		}${ordering ? '&ordering=' + ordering : ''}`

		// Return the cache key that includes the page size, page number, and search parameters
		return `&page_size=${pageSize}&page=${page}${searchParams}`
	}

	// Use the useSWRInfinite hook to handle data fetching and caching
	const { data, error, size, setSize, isLoading } = useSWRInfinite(
		getKey,
		fetcher,
		{
			revalidateFirstPage: false,
		}
	)

	// Flatten the paginated data into a single array
	const paginatedData = data ? data.flatMap(page => page.results) : []

	// Determine if there is more data to fetch
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
