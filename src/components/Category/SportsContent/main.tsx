import SportWrapper from './SportWrapper'
import { Image } from '@nextui-org/react'

interface SportsContentProps {
    image1?: string;
    image2?: string;
}
const SportsContent = ({ image1, image2}: SportsContentProps) => {
    return (
        <SportWrapper>
            <div className="flex flex-col md:flex-row items-center justify-between py-6 md:py-14 px-4 md:px-8 gap-6 md:gap-0">
                <div className="flex flex-col items-center uppercase">
                    <div className='w-full h-full flex items-center justify-center'>
                        <Image radius='none' isZoomed src={image1} alt="Sport 1" className='border-1 p-2 md:p-4' />
                    </div>
                    <p className="text-lg md:text-2xl font-semibold">Jon higgins</p>
                    <p className="text-base md:text-xl text-gray-500 font-medium">boston</p>
                </div>
                
                <div className="text-2xl md:text-3xl font-medium">
                    <span className="flex items-center gap-2"><p>15</p>:<p>12</p></span>
                </div>
                
                <div className="flex flex-col items-center uppercase">
                    <div className='w-full h-full flex items-center justify-center'>
                        <Image radius='none' isZoomed src={image2} alt="Sport 2" className='border-1 p-2 md:p-4' />
                    </div>
                    <p className="text-lg md:text-2xl font-semibold">Jon higgins</p>
                    <p className="text-base md:text-xl text-gray-500 font-medium">boston</p>
                </div>
            </div>
            
            <div className="p-2 border-t border-gray-300 flex justify-center">
                <p className="text-base md:text-xl font-medium text-gray-500 uppercase">NYC hall / April 14, 2018</p>
            </div>
        </SportWrapper>
    )
}

export default SportsContent