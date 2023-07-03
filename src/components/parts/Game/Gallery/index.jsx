'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import { StyledImage } from './style'

const Gallery = ({ images }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)

	return (
		<>
			<Swiper
				style={{
					'--swiper-navigation-color': '#fff',
					'--swiper-pagination-color': '#fff',
					'--swiper-navigation-size': 30,
				}}
				spaceBetween={10}
				navigation={true}
				thumbs={{
					swiper:
						thumbsSwiper && !thumbsSwiper.destroyed
							? thumbsSwiper
							: null,
				}}
				modules={[FreeMode, Navigation, Thumbs]}
				className='mySwiper2'
			>
				{images.map(({ id, image }) => (
					<SwiperSlide key={id}>
						<StyledImage
							src={image}
							width={0}
							height={0}
							sizes='100vw'
							alt='cover image'
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className='mySwiper'
			>
				{images.map(({ id, image }) => (
					<SwiperSlide key={id}>
						<StyledImage
							src={image}
							width={0}
							height={0}
							sizes='100vw'
							alt='cover image'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default Gallery
