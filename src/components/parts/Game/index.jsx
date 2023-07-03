'use client'

import React from 'react'
import {
	StyledGame,
	GamePoster,
	ImageContainer,
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
				<ImageContainer
					src={background_image}
					alt={name}
					width={0}
					height={0}
				/>
				<GameRating>
					<Badge size={40} count={metacritic} />
					<Text>Metascore Rating</Text>
				</GameRating>
			</GamePoster>
			<GameInfo>
				<GameDescription
					dangerouslySetInnerHTML={{ __html: description }}
				></GameDescription>
				<InfoList>
					<InfoRow>
						<Text secondary='true'>Release Date:</Text>
						<Text>{released}</Text>
					</InfoRow>
					<InfoRow>
						<Text secondary='true'>Game website:</Text>
						<Text
							as='a'
							highlight='true'
							href={website}
							target='_blank'
						>
							{website}
						</Text>
					</InfoRow>
				</InfoList>
				<Gallery images={screenshots} />
			</GameInfo>
		</StyledGame>
	)
}

export default Game
