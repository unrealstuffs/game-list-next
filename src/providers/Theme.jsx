'use client'

import { ThemeProvider } from 'styled-components'
import theme from '@/styles/theme'

const Provider = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Provider
