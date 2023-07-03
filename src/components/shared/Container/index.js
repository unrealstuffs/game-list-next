'use client'

import breakpoints from '@/styles/breakpoints'
import { styled } from 'styled-components'

export const Container = styled.div`
	margin: 0 auto;
	padding: 0 15px;
	max-width: 1024px;

	@media ${breakpoints.xxl} {
		max-width: 1440px;
	}

	@media ${breakpoints.sm} {
		padding: 0 30px;
	}
`
