import { create } from 'zustand'

export const useSearch = create(set => ({
	formData: {
		search: '',
		platform: '',
		ordering: '',
	},
	setFormData: newFormData =>
		set(state => ({ formData: { ...state.formData, ...newFormData } })),
}))
