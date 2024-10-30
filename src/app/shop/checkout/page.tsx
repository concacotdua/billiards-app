'use client'
import React from 'react'
import { Checkbox, cn } from "@nextui-org/react";

import CompoTable from '@/components/Shop/CompoTable/CompoTable'
import TitleContent from '@/components/TitleContent/main'
import CheckOut from '@/components/Shop/CheckOut'
import BannerChild from '@/layouts/BannerChild/main'
import BreadcrumbsItem from '@/components/Breadcrumbs/main'
import CartTotal from '@/components/Shop/CartTotal/CartTotal';



const CheckOutPage = () => {
    return (
        <>
            <BannerChild title="Grid shop" component={<BreadcrumbsItem />} />
            <div className='w-full lg:w-default-layout-w'>
                <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 mt-20'>
                    <TitleContent title='billing adress'>

                        <CheckOut checkbox={
                            <Checkbox
                                defaultSelected size="lg"
                                radius="none"
                                classNames={{
                                    base: cn(
                                        "py-10"
                                    ),
                                    label: "w-full",
                                    icon: 'w-32 h-32 text-tertiary-color bg-white border-none'
                                }}
                            >
                                <p className='text-2xl font-normal mx-4 '>My Billing Address And Shipping Address are The Same</p>
                            </Checkbox>
                        } />
                    </TitleContent>

                    <TitleContent title='delivery address'>
                        <CheckOut />
                    </TitleContent>
                </div>

                <div className='w-full lg:w-default-layout-w mt-20'>
                    <TitleContent title="your shopping cart">
                        <CompoTable />
                    </TitleContent>
                </div>

                <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 mt-20'>
                    <TitleContent title='Payment Methods'>

                        <CheckOut checkbox={
                            <Checkbox
                                defaultSelected size="lg"
                                radius="none"
                                classNames={{
                                    base: cn(
                                        "py-10"
                                    ),
                                    label: "w-full",
                                    icon: 'w-32 h-32 text-tertiary-color bg-white border-none'
                                }}
                            >
                                <p className='text-2xl font-normal mx-4 '>My Billing Address And Shipping Address are The Same</p>
                            </Checkbox>
                        } />
                    </TitleContent>

                    <TitleContent title='Card Total'>
                        <CartTotal />
                    </TitleContent>
                </div>
            </div>
        </>
    )
}

export default CheckOutPage