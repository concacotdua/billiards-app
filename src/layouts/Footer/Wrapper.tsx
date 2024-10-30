import React from 'react'

function FooterWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-full bg-secondary-color flex flex-col items-center justify-center">
            {children}
        </div>
    )
}

export default FooterWrapper