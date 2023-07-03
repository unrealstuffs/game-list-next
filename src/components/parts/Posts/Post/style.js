import { styled } from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

export const StyledCard = styled(Link)`
	border-radius: 12px;
	background-color: ${({ theme }) => theme.bg.secondary};
	display: flex;
	flex-direction: column;
	transition: transform 0.25s ease;
	text-decoration: none;

	&:hover {
		transform: scale(1.02);
	}
`

export const GameImage = styled.div`
	position: relative;
	flex: 1;
	overflow: hidden;
	border-radius: 4px 4px 0 0;
	height: 0;
	padding-top: 100%;
`

export const StyledImage = styled(Image)`
	object-fit: cover;
	border-top-left-radius: 12px;
	border-top-right-radius: 12px;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`

export const GameInfo = styled.div`
	padding: 10px;
`

export const GameTitle = styled.h2`
	font-size: 22px;
	margin: 0;
	color: ${({ theme }) => theme.text.primary};
`

export const InfoList = styled.div`
	margin-top: 10px;
`

export const InfoRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px dashed ${({ theme }) => theme.text.secondary};
	padding: 10px 0;

	&:last-of-type {
		border: 0;
	}
`
