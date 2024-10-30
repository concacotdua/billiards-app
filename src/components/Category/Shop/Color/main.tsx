'use client'
import React, { useState } from 'react';
import TitleContent from '@/components/TitleContent/main';
const colors = [
    { name: 'Red', value: '#c20e4d' },
    { name: 'White', value: '#f9c97c' },
    { name: 'Black', value: '#52525b' },
    { name: 'Orange', value: '#f7b750' },
    { name: 'Green', value: '#A2E9C1' },
    { name: 'Blue', value: '#D7F8FE' },
    { name: 'Purple', value: '#c9a9e9' },
    // Add more colors as needed
];

const ColorPalette = () => {
    const [selectedColors, setSelectedColors] = useState<string[]>([]);

    const handleColorClick = (color: string) => {
        setSelectedColors(prev =>
            prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
        );
    };

    return (
        <TitleContent title="Color">
            <div className="relative bg-backgroundPrimary-color w-full p-12 my-8">
                {colors.map(color => (
                    <div
                        key={color.value}
                        onClick={() => handleColorClick(color.value)}
                        style={{ backgroundColor: color.value }} // Use inline style for background color
                        className={`inline-block w-20 h-20 border ${selectedColors.includes(color.value) ? 'border-black' : 'border-transparent'} cursor-pointer m-1 relative`}
                        title={color.name}
                    >
                        {selectedColors.includes(color.value) && (
                            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-3xl">
                                ✔
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </TitleContent>
    );
};

// ... existing code ...
export default ColorPalette;
// ... existing code ...
