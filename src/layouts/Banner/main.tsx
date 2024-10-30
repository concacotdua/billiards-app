'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import ContentBanner from './Content/main';
import { banner } from '@/assets/images';

interface BannerProps {
    banner: typeof banner;
}
function Banner({ banner }: BannerProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSlideChange = (swiper: any) => {
        setCurrentSlide(swiper.activeIndex);
    }

    return (

        <Swiper
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange}
            style={{ width: "100%", height: "100%" }}
            className='mySwiper'
        >
            {banner.map((item, index) => (
                <SwiperSlide key={index}>
                    <Image src={item} alt='banner' height={580} className='w-full h-full object-cover' />
                    <ContentBanner key={currentSlide} active={currentSlide === index} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Banner