import React from 'react'
import {
	StyledGame,
	GamePoster,
	StyledImage,
	GameRating,
	GameInfo,
	GameDescription,
	InfoList,
	InfoRow,
} from './style'
import Gallery from './Gallery'
import { Text } from '@/components/shared/Text'
import Badge from '@/components/shared/Badge'

const Game = ({ game, screenshots }) => {
	const {
		description,
		metacritic,
		background_image,
		name,
		released,
		website,
	} = game
	return (
		<StyledGame>
			<GamePoster>
				{background_image && (
					<StyledImage
						src={background_image}
						alt={name}
						width={0}
						height={0}
					/>
				)}

				<GameRating>
					{metacritic ? (
						<Badge count={metacritic} size={40} />
					) : (
						<Text>N/A</Text>
					)}
					<Text>Metascore Rating</Text>
				</GameRating>
			</GamePoster>
			<GameInfo>
				<GameDescription
					dangerouslySetInnerHTML={{ __html: description }}
				></GameDescription>
				<InfoList>
					<InfoRow>
						<Text $secondary>Release Date:</Text>
						<Text>{released || 'N/A'}</Text>
					</InfoRow>
					{website && (
						<InfoRow>
							<Text $secondary>Game website:</Text>
							<Text
								$highlight
								as='a'
								href={website}
								target='_blank'
							>
								{website}
							</Text>
						</InfoRow>
					)}
				</InfoList>
				{screenshots && <Gallery images={screenshots} />}
			</GameInfo>
		</StyledGame>
	)
}

export default Game
