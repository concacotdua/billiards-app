import React from 'react'
import { Divider } from "@nextui-org/divider";

const CartTotal = () => {
    return (
        <div className='mt-6 container mx-auto grid-rows-3 uppercase font-semibold bg-backgroundPrimary-color w-full'>
            <div className='flex justify-between p-10'>
                <p className='text-2xl'>cart subtotal</p>
                <span className='text-3xl'>$580</span>
            </div>
            <Divider className="my-4" />
            <div className='flex justify-between p-10'>
                <p className='text-2xl '>shipping</p>
                <span className='text-3xl '>free</span>
            </div>
            <Divider className="my-4" />
            <div className='flex justify-between p-10'>
                <p className='text-2xl'>Total</p>
                <span className='text-3xl '>$580</span>
            </div>

        </div>
    )
}

export default CartTotal