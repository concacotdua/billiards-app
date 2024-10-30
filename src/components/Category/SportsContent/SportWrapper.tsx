import React from 'react'

const SportWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col w-full h-full bg-backgroundPrimary-color my-6">
            {children}
        </div>
    )
}

export default SportWrapper