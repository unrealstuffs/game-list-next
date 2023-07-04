'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
	}

	html,
	body {
		padding: 0;
		margin: 0;
		background-color: ${({ theme }) => theme.bg.primary};
	}

	h1, h2, h3, h4, h5 {
		margin: 0;
		padding: 0;
	}

	a {
		color: inherit;
		text-decoration: underline;
	}

	p {
		padding: 0;
		margin: 0;
	}
`
