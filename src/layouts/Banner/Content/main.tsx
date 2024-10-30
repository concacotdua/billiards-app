import React from 'react';
import Link from 'next/link';
import { Button } from '@nextui-org/react';

const ContentBanner = ({ active }: { active: boolean }) => {
    return (
        <div className={`absolute top-0 right-0 w-[50%] h-full flex flex-col items-center justify-center ${active ? 'animate-fadeInLeftSmall' : ''}`}>
            <div className='w-[80%] h-full text-white flex flex-col justify-center space-y-8 p-6'>
                <h2 className='md:text-[5rem] text-[3rem] font-semibold swiper-slide-active:animate-fadeInLeftSmall'>
                    New talents in Snooker
                </h2>
                <h5 className='text-[1.6rem] font-medium swiper-slide-active:animate-fadeInLeftSmall delay-200'>
                    Peter Williams shares his thoughts on new players of the snooker league
                </h5>
                <div className='swiper-slide-active:animate-fadeInLeftSmall delay-400'>
                    <Button
                        variant='ghost'
                        className='text-[1.6rem] px-12 py-10 rounded-lg border border-white hover:bg-tertiary-color'>
                        <Link href={'/'} className='inline-block text-white px-4 py-2 rounded'>
                            Read More
                        </Link>
                    </Button>
                </div>
            </div>

        </div>
    );
};


export default ContentBanner;
