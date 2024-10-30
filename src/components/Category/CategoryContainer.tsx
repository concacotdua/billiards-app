import React from 'react'

interface CategoryContainerProps {
    children: React.ReactNode
}

function CategoryContainer({ children }: CategoryContainerProps) {
    return (
        <div className="w-full p-4 bg-white rounded-lg shadow-sm">
            {children}
        </div>
    )
}

export default CategoryContainer