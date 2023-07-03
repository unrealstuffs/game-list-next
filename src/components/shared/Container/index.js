'use client'

import { styled } from 'styled-components'

export const Container = styled.div`
	max-width: 1440px;
	margin: 0 auto;
	padding: 0 15px;

	@media screen and (max-width: 1536px) {
		max-width: 1024px;
	}

	@media screen and (max-width: 768px) {
		padding: 0 30px;
	}
	@media screen and (max-width: 640px) {
		padding: 0 25px;
	}
`
