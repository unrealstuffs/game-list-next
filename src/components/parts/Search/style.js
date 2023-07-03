'use client'

import { styled } from 'styled-components'

export const StyledSearch = styled.div`
	display: grid;
	align-content: center;
	gap: 10px;
	grid-template-columns: 2fr repeat(3, 1fr);
	width: 60%;

	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(2, 1fr);
		width: 100%;

		&:first-child {
			grid-area: 1 / 1 / 1 / 4;
		}
	}

	@media screen and (max-width: 480px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(4, 1fr);

		&:first-child {
			grid-area: initial;
		}
	}
`
