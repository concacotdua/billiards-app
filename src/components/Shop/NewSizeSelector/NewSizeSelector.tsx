'use client'
import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
const sizes = [
    { name: 'M', value: 'M' },
    { name: 'L', value: 'L' },
    { name: 'XL', value: 'XL' },
];

const NewSizeSelector = () => {
    const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
    const handleSizeClick = (size: string) => {
        setSelectedSizes(prev =>
            prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
        );
    };


    return (
        <div className="flex gap-4">

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
    );
};

export default NewSizeSelector;