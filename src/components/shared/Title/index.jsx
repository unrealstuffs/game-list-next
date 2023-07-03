'use client'

import StyledTitle from './style'

export const PageTitle = ({ children }) => {
	return (
		<StyledTitle as='h1' $large>
			{children}
		</StyledTitle>
	)
}
