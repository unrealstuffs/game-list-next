'use client'

import { styled } from 'styled-components'
import Image from 'next/image'
import { Text } from '@/components/shared/Text'

const Block = styled.div`
	margin-bottom: 40px;

	@media screen and (max-width: 768px) {
		margin-bottom: 20px;
	}
`

export const StyledGame = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 20px;
	row-gap: 20px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		column-gap: 0;
	}
`

export const GamePoster = styled.div`
	display: flex;
	flex-direction: column;
`

export const ImageContainer = styled(Image)`
	width: 100%;
	height: 40%;
	border-radius: 12px;
	object-fit: cover;

	@media screen and (max-width: 768px) {
		height: 100%;
	}
`

export const GameRating = styled.div`
	display: flex;
	align-items: center;
	column-gap: 15px;
	margin-top: 15px;
`

export const GameInfo = styled(Block)`
	grid-area: 1 / 2 / 1 / 4;

	@media screen and (max-width: 1024px) {
		grid-area: 1 / 2 / 1 / 5;
	}

	@media screen and (max-width: 768px) {
		grid-area: 2 / 1 / 2 / 3;
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

	${Text}:first-child {
		flex: 0 0 30%;
		margin-bottom: 5px;
	}

	${Text}:last-child {
		flex: 0 0 70%;
		margin-bottom: 10px;
	}

	@media screen and (max-width: 480px) {
		flex-direction: column;
	}
`
