'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Navigation, Thumbs } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import Image from 'next/image'

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
						<Image
							src={image}
							width={0}
							height={0}
							sizes='100vw'
							style={{
								width: '100%',
								height: 'auto',
								borderRadius: 12,
								marginBottom: 5,
							}}
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
						<Image
							src={image}
							width={0}
							height={0}
							sizes='100vw'
							style={{
								width: '100%',
								height: 'auto',
								borderRadius: 12,
							}}
							alt='cover image'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default Gallery
