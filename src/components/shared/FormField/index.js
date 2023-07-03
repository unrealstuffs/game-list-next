'use client'

import { styled } from 'styled-components'

export const Input = styled.input`
	border-radius: 12px;
	background-color: ${({ theme }) => theme.bg.secondary};
	color: ${({ theme }) => theme.text.primary};
	outline: none;
	border: none;
	padding: 10px 15px;

	::placeholder {
		color: ${({ theme }) => theme.text.secondary};
	}
`

export const Select = styled.select`
	border-radius: 12px;
	background-color: ${({ theme }) => theme.bg.secondary};
	color: ${({ theme }) => theme.text.primary};
	outline: none;
	border: none;
	padding: 10px 15px;
	cursor: pointer;
`

export const Option = styled.option`
	background-color: ${({ theme }) => theme.bg.secondary};
	color: ${({ theme }) => theme.text.primary};
	cursor: pointer;
`
