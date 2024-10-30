'use client'
import React, { useState } from 'react';
import TitleContent from '@/components/TitleContent/main';
import { Button } from '@nextui-org/react'; // Import Button from Next UI

const sizes = [
    { name: 'S', value: 'S' },
    { name: 'M', value: 'M' },
    { name: 'L', value: 'L' },
    { name: 'XL', value: 'XL' },
    { name: 'XXL', value: 'XXL' },
];

const SelectSize = () => {
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

    const handleSizeClick = (size: string) => {
        setSelectedSizes(prev =>
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };

    return (
        <TitleContent title="Size">
            <div className="relative bg-backgroundPrimary-color w-full p-16 my-8 flex flex-wrap gap-2">
                {sizes.map(size => (
                    <Button
                        radius='none'
                        key={size.value}
                        onClick={() => handleSizeClick(size.value)}
                        className={`w-24 h-24 text-2xl font-semibold m-1 ${selectedSizes.includes(size.value) ? 'bg-white border-tertiary-color text-tertiary-color' : 'bg-white border-gray-300 text-black'} border rounded-lg`}
                    >
                        {size.name}
                    </Button>
                ))}
            </div>
        </TitleContent>
    );
};


export default SelectSize;
