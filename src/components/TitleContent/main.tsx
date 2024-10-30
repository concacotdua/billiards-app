
interface TitleContentProps {
    title: React.ReactNode;
    children: React.ReactNode;
    button?: React.ReactNode;
}
const TitleContent = ({ title, children, button }: TitleContentProps) => {
    return (
        <div className="w-full h-full flex flex-col gap-4 p-4 rounded-lg">
            <div className='flex flex-col md:flex-row justify-between relative px-4 md:px-6'>
                <div className='border-b-4 border-tertiary-color absolute top-0 left-4 rotate-90 w-5 h-10' />
                <h1 className='text-3xl font-bold uppercase'>{title}</h1>
                <div className='flex items-center justify-center gap-2 mt-4 md:mt-0'>
                    {button}
                </div>
            </div>

            <div className='border-b-1 border-gray-300' />

            <div className='flex flex-col items-center justify-center gap-2'>
                {children}
            </div>
        </div>
    )
}

export default TitleContent