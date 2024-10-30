import React from 'react'
import { Button } from '@nextui-org/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Image from 'next/image'
import { event } from '@/assets/images'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaShareNodes } from 'react-icons/fa6'

const UpComming = () => {
    return (
        <div className='w-full h-full flex flex-col gap-4 p-4 rounded-lg mt-20'>
            {/* Header Section */}
            <div className='flex items-center justify-between relative px-6'>
                <div className='border-b-4 border-tertiary-color absolute top-0 left-4 rotate-90 w-5 h-10' />
                <h1 className='text-2xl md:text-3xl font-bold uppercase'>Upcoming events</h1>
                <div className='flex items-center justify-center gap-2'>
                    {['left', 'right'].map((direction) => (
                        <button key={direction} className="rounded-md p-3 md:p-4 bg-backgroundContainer-color border-1 border-black/20 hover:bg-tertiary-color transition-colors">
                            {direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />}
                        </button>
                    ))}
                </div>
            </div>

            <div className='border-b-1 border-gray-300' />

            {/* Event Card */}
            <div className='flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2'>
                {/* Date Section */}
                <div className='flex flex-col lg:flex-row pb-8 lg:pb-[20rem]'>
                    <div className='flex items-start'>
                        <p className='text-4xl md:text-[6rem] font-bold'>17</p>
                        <span className='uppercase text-lg md:text-[1.6rem] font-bold mt-2 md:mt-[5rem]'>may</span>
                    </div>
                    <div className='flex flex-col px-4'>
                        <span className='text-base md:text-[1.4rem] font-bold text-tertiary-color'>8:30 PM</span>
                        <span className='text-sm md:text-[1.2rem] font-bold uppercase'>saturday</span>
                    </div>
                </div>

                {/* Event Image */}
                <div className='w-full lg:w-[355px] h-[320px] pr-0 lg:pr-[1rem]'>
                    <Image 
                        src={event.event1} 
                        width={355} 
                        height={320} 
                        alt='Action pool tour event' 
                        className='w-full h-full object-cover'
                    />
                </div>

                {/* Event Details */}
                <div className='w-full lg:w-[665px] h-auto lg:h-[320px] px-6 lg:px-12 py-6 lg:py-8 bg-backgroundPrimary-color flex flex-col space-y-6 lg:space-y-10'>
                    <div className='flex flex-col gap-2 pb-6 lg:pb-10 justify-start'>
                        <p className='text-2xl md:text-[3rem] font-bold uppercase'>Action pool tour</p>
                        <div className='flex items-center gap-2 uppercase text-black/50 font-bold text-sm md:text-[1.2rem]'>
                            <FaMapMarkerAlt className='text-tertiary-color' />
                            Preston Guild Hall.
                        </div>
                    </div>
                    <div className='relative flex flex-col gap-2 justify-end pt-6 lg:pt-10'>
                        <p className='flex-wrap text-sm md:text-[1.2rem] font-bold uppercase text-black/50 w-full lg:w-[70%]'>
                            {`Get ready for this year's most anticipated pool event – Action Pool Tour! 
                            The number of tickets is limited so hurry up!`}
                        </p>
                        <div className='flex flex-wrap gap-2 items-center mt-8 lg:mt-12'>
                            <Button variant='solid' className='text-base md:text-[1.3rem] text-white px-6 md:px-8 py-6 md:py-8 rounded-lg uppercase bg-red-400'>
                                <FaShareNodes />
                            </Button>
                            <Button variant='solid' className='text-base md:text-[1.3rem] font-medium text-white px-8 md:px-[6rem] py-6 md:py-8 rounded-lg uppercase bg-tertiary-color'>
                                Read more
                            </Button>
                            <Button variant='ghost' className='uppercase text-base md:text-[1.3rem] font-medium px-6 md:px-[3rem] py-6 md:py-8 rounded-lg border-2 border-black'>
                                Buy tickets
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpComming
