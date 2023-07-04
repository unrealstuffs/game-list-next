import { AiOutlineLoading } from 'react-icons/ai'
import { styled } from 'styled-components'

export const Loader = styled(AiOutlineLoading)`
	animation: spinner 1.5s linear infinite;
	font-size: 30px;

	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`
