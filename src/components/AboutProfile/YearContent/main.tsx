import React from 'react'

const yearContent = ({ year, title }: { year: number, title: string }) => {
    return (
        <>
            <div className='relative flex items-center w-full h-full gap-6'>
                <div className='border-2 border-gray-400-color w-24 h-12 rounded-none flex items-center justify-center text-xl font-bold bg-white'>{year}</div>
                <div className='uppercase text-3xl font-medium'>{title}</div>
                <div className='absolute top-[58px] left-[-54px] w-[130px] border-1 border-gray-400-color rotate-90'></div>

            </div>
            <div className='flex-1 ml-12 py-6'>
                <p className='text-gray-500 text-xl leading-10 font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>

        </>
    )
}

export default yearContent