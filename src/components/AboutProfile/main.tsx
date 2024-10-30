import React from 'react'
import { Image } from '@nextui-org/react'
import { Progress } from "@nextui-org/react";
import { aboutAva } from '@/assets/images/index';
import YearContent from './YearContent/main';

const AboutProfile = () => {
    return (
        <div className='flex flex-col mt-6 bg-backgroundPrimary-color'>
            <div className='grid grid-cols-2 gap-4 border-b-1 border-b-gray-400-color'>
                <div>
                    <Image isZoomed radius="none" src={aboutAva.aboutProfile.src} alt='about-profile' />
                </div>
                <div className='flex flex-col justify-between p-10'>
                    <div className='flex flex-col uppercase'>
                        <h1 className='text-[2rem] font-bold'>Jack Windsor</h1>
                        <p className='text-xl font-bold text-tertiary-color'>New York, NY</p>
                        <div className='border-b-1 border-b-gray-400-color w-full py-3'></div>
                    </div>

                    <div>
                        <div className='grid grid-cols-4 gap-4 uppercase text-gray-500 font-bold'>
                            <div>
                                <p>Age</p>
                                <p>weight</p>
                            </div>
                            <div className='text-black'>
                                <p>20</p>
                                <p>176 IBS</p>
                            </div>
                            <div>
                                <p>Height</p>
                                <p>total games</p>
                            </div>
                            <div className='text-black'>
                                <p>5’8”</p>
                                <p>	150</p>
                            </div>

                        </div>
                        <div className='border-b-1 border-b-gray-400-color w-full py-3'></div>
                    </div>

                    <div className='grid grid-cols-3 gap-4 uppercase text-gray-500 font-bold'>
                        <div>
                            <p>pool</p>
                            <p>Snooker</p>
                        </div>
                        <div className='space-y-4'>
                            <Progress aria-label="Loading..." value={95} classNames={{
                                base: "max-w-md",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-tertiary-color",
                                label: "tracking-wider font-medium text-default-600",
                                value: "text-foreground/60",
                            }} />
                            <Progress aria-label="Loading..." value={70} classNames={{
                                base: "max-w-md",
                                track: "drop-shadow-md border border-default",
                                indicator: "bg-tertiary-color",
                                label: "tracking-wider font-medium text-default-600",
                                value: "text-foreground/60",
                            }} />
                        </div>
                    </div>

                </div>

            </div>


            <div className='p-10 flex flex-col justify-between gap-4 w-full'>
                <h1 className='text-[2rem] font-bold uppercase'>Biography</h1>
                <div className='flex gap-4'>
                    <div className='border-t-1 border-b-gray-400-color w-16 mt-3 p-4'></div>
                    <p className='flex-1 text-gray-500 text-3xl font-normal'>Jack Windsor is the best player in our team. Technically perfect, he brings together unselfishness, pace, composure and wins, which make him number one.</p>
                </div>
                <div className='flex flex-col gap-8 mt-5 text-2xl leading-9'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>


                <div className='mt-3'>
                    <YearContent year={2005} title='Career Start' />
                    <YearContent year={2009} title='Getting more successful' />
                    <YearContent year={2012} title='Windsor Becomes a Pool Coach' />
                    <YearContent year={2015} title='New Matches and the First Major Championship' />
                    <YearContent year={2018} title='World Cup of Pool' />
                </div>
            </div>
        </div>
    )
}

export default AboutProfile