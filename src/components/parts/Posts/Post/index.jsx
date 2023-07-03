'use client'

import Image from 'next/image'
import React from 'react'
import {
	StyledCard,
	GameInfo,
	GameImage,
	GameTitle,
	InfoList,
	InfoRow,
} from './style'
import Badge from '@/components/shared/Badge'
import { Text } from '@/components/shared/Text'

const Post = ({ game }) => {
	const { slug, name, released, background_image, metacritic } = game

	return (
		<StyledCard href={`game/${slug}`}>
			<GameImage>
				{background_image && (
					<Image
						src={background_image}
						fill
						quality={70}
						sizes='50vw'
						style={{
							objectFit: 'cover',
							borderTopRightRadius: 12,
							borderTopLeftRadius: 12,
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
						}}
						alt={name}
					/>
				)}
			</GameImage>
			<GameInfo>
				<GameTitle>{name}</GameTitle>
				<InfoList>
					<InfoRow>
						<Text secondary='true'>Metascore Rating:</Text>
						{metacritic ? (
							<Badge count={metacritic} size={30} />
						) : (
							<Text>N/A</Text>
						)}
					</InfoRow>
					<InfoRow>
						<Text secondary='true'>Release Date:</Text>
						{released ? <Text>{released}</Text> : <Text>N/A</Text>}
					</InfoRow>
				</InfoList>
			</GameInfo>
		</StyledCard>
	)
}

export default Post
