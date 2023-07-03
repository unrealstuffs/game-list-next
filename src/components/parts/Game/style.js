'use client'

import { styled } from 'styled-components'
import Image from 'next/image'
import { Text } from '@/components/shared/Text'
import breakpoints from '@/styles/breakpoints'

const Block = styled.div`
	margin-bottom: 20px;

	@media ${breakpoints.md} {
		margin-bottom: 40px;
	}
`

export const StyledGame = styled.div`
	display: grid;

	grid-template-columns: 1fr;
	column-gap: 0;
	row-gap: 20px;

	@media ${breakpoints.md} {
		grid-template-columns: repeat(4, 1fr);
		column-gap: 20px;
	}
`

export const GamePoster = styled.div`
	display: flex;
	flex-direction: column;
`

export const StyledImage = styled(Image)`
	width: 100%;

	height: 100%;
	border-radius: 12px;
	object-fit: cover;

	@media ${breakpoints.md} {
		height: 40%;
	}
`

export const GameRating = styled.div`
	display: flex;
	align-items: center;
	column-gap: 15px;
	margin-top: 15px;
`

export const GameInfo = styled(Block)`
	grid-area: 2 / 1 / 2 / 3;

	@media ${breakpoints.md} {
		grid-area: 1 / 2 / 1 / 5;
	}

	@media ${breakpoints.lg} {
		grid-area: 1 / 2 / 1 / 4;
	}
`

export const GameDescription = styled(Block)`
	color: ${({ theme }) => theme.text.primary};

	p {
		margin-bottom: 10px;
	}
`

export const InfoList = styled(Block)`
	display: flex;
	flex-direction: column;
`

export const InfoRow = styled.div`
	display: flex;
	flex-direction: column;

	${Text}:first-child {
		flex: 0 0 30%;
		margin-bottom: 5px;
	}

	${Text}:last-child {
		flex: 0 0 70%;
		margin-bottom: 10px;
	}

	@media ${breakpoints.xs} {
		flex-direction: row;
	}
`
