import { getAllGames, getGamesBySearch } from '@/services/getGames'
import { create } from 'zustand'

export const useGames = create(set => ({
	games: [],
	loading: false,
	getAllGames: async () => {
		set({ loading: true })
		const games = await getAllGames()
		set({ games, loading: false })
	},
	getGamesBySearch: async data => {
		set({ loading: true })
		const games = await getGamesBySearch(data)
		set({ games, loading: false })
	},
}))
