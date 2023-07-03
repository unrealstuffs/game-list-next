import { Input } from '@/components/shared/FormField'
import breakpoints from '@/styles/breakpoints'
import { styled } from 'styled-components'

export const StyledSearch = styled.div`
	display: grid;
	align-content: center;
	gap: 10px;
	grid-template-columns: 1fr;

	@media ${breakpoints.xs} {
		grid-template-columns: repeat(2, 1fr);

		${Input}:first-child {
			grid-area: 1 / 1 / 1 / 3;
		}
	}

	@media ${breakpoints.md} {
		grid-template-columns: 2fr repeat(3, 1fr);

		${Input}:first-child {
			grid-area: initial;
		}
	}
`
