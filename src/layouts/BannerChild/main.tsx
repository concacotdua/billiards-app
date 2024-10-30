import React from 'react';
import Image from 'next/image';
import { bgBannerChild } from '@/assets/images/index';

const BannerChild = ({ title, component }: { title: string, component: React.ReactNode }) => {
    return (
        <div className='w-full h-[275px] flex flex-col items-center justify-center relative'>
            <Image
                src={bgBannerChild.bannerChild}
                alt='banner'
                fill
                priority={true}
                sizes='100vw'
                quality={75}
                className='object-cover'
            />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
                <h1 className='text-white text-[3rem] font-bold uppercase'>{title}</h1>
                <div className='text-tertiary-color text-[2rem] font-bold uppercase'>{component}</div>
            </div>

        </div>
    );
};

export default BannerChild;
