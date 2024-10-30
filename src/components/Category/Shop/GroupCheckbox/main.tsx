import React from 'react'
import { Checkbox, CheckboxGroup } from '@nextui-org/react'
import TitleContent from '@/components/TitleContent/main'

const CatCheck = () => {
    return (
        <TitleContent title='Categories'>
            <div className='bg-backgroundPrimary-color w-full h-full flex flex-col p-10 my-8'>
                <CheckboxGroup

                    defaultValue={["buenos-aires", "london"]}
                >
                    <div className='uppercase flex justify-between'>
                        <Checkbox color='success' radius='none' value="buenos-aires" size='lg'>shoes</Checkbox>
                        <span className='text-xl'>2</span>
                    </div>
                    <div className='uppercase flex justify-between'>
                        <Checkbox color='success' radius='none' value="sydney" size='lg' className='uppercase'>T-shirts</Checkbox>
                        <span className='text-xl'>1</span>
                    </div>
                    <div className='uppercase flex justify-between'>
                        <Checkbox color='success' radius='none' value="san-francisco" size='lg' className='uppercase'>Backpacks</Checkbox>
                        <span className='text-xl'>1</span>
                    </div>




                </CheckboxGroup>
            </div>
        </TitleContent>
    )
}

export default CatCheck