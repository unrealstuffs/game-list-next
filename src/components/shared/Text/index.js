'use client'

import { styled } from 'styled-components'

export const Text = styled.p`
	margin: 0;
	padding: 0;
	color: ${({ theme, $secondary, $highlight, $auxiliary }) => {
		if ($secondary) return theme.text.secondary
		if ($highlight) return theme.text.highlight
		if ($auxiliary) return theme.text.auxiliary

		return theme.text.primary
	}};
	font-size: 16px;
	font-weight: ${({ $bold }) => {
		if ($bold) return 700

		return 400
	}};
`
