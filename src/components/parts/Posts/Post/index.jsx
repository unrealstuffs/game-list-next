import {
	StyledCard,
	GameInfo,
	GameImage,
	GameTitle,
	InfoList,
	InfoRow,
	StyledImage,
} from './style'
import Badge from '@/components/shared/Badge'
import { Text } from '@/components/shared/Text'

const Post = ({ game }) => {
	const { slug, name, released, background_image, metacritic } = game

	return (
		<StyledCard href={`game/${slug}`}>
			<GameImage>
				{background_image && (
					<StyledImage
						src={background_image}
						fill
						sizes='50vw'
						alt={name}
					/>
				)}
			</GameImage>
			<GameInfo>
				<GameTitle>{name}</GameTitle>
				<InfoList>
					<InfoRow>
						<Text $secondary>Metascore Rating:</Text>
						{metacritic ? (
							<Badge count={metacritic} size={30} />
						) : (
							<Text>N/A</Text>
						)}
					</InfoRow>
					<InfoRow>
						<Text $secondary>Release Date:</Text>
						<Text>{released || 'N/A'}</Text>
					</InfoRow>
				</InfoList>
			</GameInfo>
		</StyledCard>
	)
}

export default Post
