import { Text } from '@/components/shared/Text'
import { StyledMessage } from './style'

const Message = ({ children }) => {
	return (
		<StyledMessage>
			<Text $bold={true}>{children}</Text>
		</StyledMessage>
	)
}

export default Message
