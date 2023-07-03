'use client'

import breakpoints from '@/styles/breakpoints'
import { styled } from 'styled-components'

const StyledTitle = styled.h1`
	font-size: ${({ $large }) => ($large ? '24px' : '20px')};
	color: ${({ theme }) => theme.text.primary};
	font-weight: bold;
	margin-bottom: 20px;

	@media ${breakpoints.md} {
		font-size: ${({ $large }) => ($large ? '36px' : '22px')};
	}
`

export default StyledTitle
