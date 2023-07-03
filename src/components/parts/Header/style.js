'use client'

import Link from 'next/link'
import { styled } from 'styled-components'

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	padding: 25px 30px;
	margin-bottom: 25px;
	border-bottom: 1px solid ${({ theme }) => theme.text.auxiliary};

	@media screen and (max-width: 768px) {
		padding: 10px 25px;
		margin-bottom: 15px;
	}
`

export const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.text.primary};
	font-weight: bold;
	user-select: none;
	text-decoration: none;
`
