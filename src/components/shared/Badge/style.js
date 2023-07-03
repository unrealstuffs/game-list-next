'use client'

import { styled } from 'styled-components'

export const StyledBadge = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${({ size }) => size + 'px'};
	height: ${({ size }) => size + 'px'};
	font-size: ${({ size }) => size / 2 + 'px'};
	border-radius: ${({ size }) => size / 3.3 + 'px'};
	color: ${({ theme }) => theme.text.primary};
	font-weight: bold;
	background-color: ${({ theme, count }) => {
		if (count >= 70) return theme.rating.high
		if (count < 70 && count >= 40) return theme.rating.average
		if (count < 40) return theme.rating.low

		return theme.text.primary
	}};
`
