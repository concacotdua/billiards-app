'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { slider as ImageSlider } from '@/assets/images';

import { Keyboard, FreeMode, Navigation } from 'swiper/modules';
import Image from 'next/image';

const SlideSection = ({ slidesPerview = 2 }: { slidesPerview?: number }) => {
    const isLoop = ImageSlider.length > slidesPerview;

    return (
        <Swiper
            slidesPerView={slidesPerview}
            loop={isLoop}
            spaceBetween={10}
            keyboard={{ enabled: true }}
            freeMode={true}
            navigation={true}
            modules={[Keyboard, FreeMode, Navigation]}
            className='w-default-layout-w h-full md:w-full'
        >
            {ImageSlider.map((item, index) => (
                <SwiperSlide key={index}>
                    <Image
                        src={item.src}
                        alt='slider'
                        width={495}
                        height={345}
                        className='object-cover'
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SlideSection;
