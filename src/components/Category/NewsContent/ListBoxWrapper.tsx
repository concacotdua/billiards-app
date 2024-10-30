import React from 'react'

export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full h-full px-1 py-2 bg-backgroundPrimary-color rounded-none shadow-sm">
        {children}
    </div>
);