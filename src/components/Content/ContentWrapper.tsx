import { ReactNode } from "react"

interface ContentWrapperProps {
    children: ReactNode
}

const ContentWrapper = ({ children }: ContentWrapperProps) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-backgroundPrimary-color my-4 hover:shadow-medium hover:cursor-pointer transition-all duration-300 ease-in-out">

            {children}

        </div>
    )
}

export default ContentWrapper

