import { StyledBadge } from './style'

const Badge = ({ count, size }) => {
	return (
		<StyledBadge size={size} count={count}>
			{count}
		</StyledBadge>
	)
}

export default Badge
