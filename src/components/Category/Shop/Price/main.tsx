'use client'
import React, { useState } from 'react'
import TitleContent from '@/components/TitleContent/main';

const PriceProduct = () => {
    const [minPrice, setMinPrice] = useState(100); // Initial minimum price
    const [maxPrice, setMaxPrice] = useState(500); // Initial maximum price

    const handleMinSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(Number(event.target.value)); // Update minimum price
    };

    const handleMaxSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(Number(event.target.value)); // Update maximum price
    };

    return (
        <TitleContent title='Price'>
            <div className='w-full bg-backgroundPrimary-color p-12 my-8'>
                <div className='flex gap-4 justify-around mb-6'>
                    <div className='rounded-s-md border-2 px-12 py-2'>${minPrice}</div>
                    <div className='rounded-s-md border-2 px-12 py-2'>${maxPrice}</div>
                </div>

                <div className='grid grid-cols-2'>
                    <input
                        type="range"
                        min="0"
                        max={maxPrice} // Ensure min slider does not exceed max
                        value={minPrice}
                        onChange={handleMinSliderChange}
                    />
                    <input
                        type="range"
                        min={minPrice} // Ensure max slider does not go below min
                        max="500"
                        value={maxPrice}
                        onChange={handleMaxSliderChange}
                    />
                </div>
            </div>
        </TitleContent>
    );
}

export default PriceProduct;
