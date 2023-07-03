'use client'

import { styled } from 'styled-components'

export const StyledPosts = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 15px;
	margin: 20px 0;

	@media screen and (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media screen and (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media screen and (max-width: 640px) {
		grid-template-columns: 1fr;
	}
`
