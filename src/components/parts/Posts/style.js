import { styled } from 'styled-components'
import breakpoints from '@/styles/breakpoints'

export const StyledPosts = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 15px;
	margin: 20px 0;

	@media ${breakpoints.sm} {
		grid-template-columns: repeat(2, 1fr);
	}
	@media ${breakpoints.md} {
		grid-template-columns: repeat(3, 1fr);
	}
	@media ${breakpoints.lg} {
		grid-template-columns: repeat(4, 1fr);
	}
`
