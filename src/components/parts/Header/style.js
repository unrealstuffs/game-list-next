'use client'

import breakpoints from '@/styles/breakpoints'
import Link from 'next/link'
import { styled } from 'styled-components'

export const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	padding: 10px 15px;
	margin-bottom: 15px;
	border-bottom: 1px solid ${({ theme }) => theme.text.auxiliary};

	@media ${breakpoints.sm} {
		padding: 10px 30px;
		margin-bottom: 25px;
	}

	@media ${breakpoints.md} {
		padding: 25px 30px;
	}
`

export const StyledLink = styled(Link)`
	color: ${({ theme }) => theme.text.primary};
	font-weight: bold;
	user-select: none;
	text-decoration: none;
`
