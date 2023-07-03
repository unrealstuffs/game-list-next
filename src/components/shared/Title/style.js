'use client'

import { styled } from 'styled-components'

const StyledTitle = styled.h1`
	font-size: ${({ large }) => (large ? '36px' : '22px')};
	color: ${({ theme }) => theme.text.primary};
	font-weight: bold;
	margin-bottom: 20px;

	@media (min-width: 768px) {
		font-size: ${({ large }) => (large ? '24px' : '20px')};
	}
`

export default StyledTitle
