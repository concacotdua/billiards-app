import React from 'react'
import { Button } from '@nextui-org/react';


import BannerChild from '@/layouts/BannerChild/main';
import BreadcrumbsItem from "@/components/Breadcrumbs/main";
import TitleContent from "@/components/TitleContent/main";
import { FaList, FaStar } from 'react-icons/fa';
import { FaTableCells } from 'react-icons/fa6';
import Link from 'next/link';
import PaginationComponent from '@/components/Pagination/main';
import { CatCheck, SelectSize } from '@/components/Category/Shop';
import PriceProduct from '@/components/Category/Shop/Price/main';
import ColorPalette from '@/components/Category/Shop/Color/main';
import DetailProduct from '@/components/Shop/ListShop';

const PRODUCT_ITEMS = [
    {
        id: 1,
        title: 'Nike hoops elite backpack',
        image: 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg',
        price: '$400',
        content: 'The Nike Hoops Elite Backpack is designed with an innovative zip system so you can access your gear from any angle.',
        review: '4 customer reviews',
        discount: '$290',
        rate: <FaStar />
    },
    {
        id: 2,
        title: 'Nike Air Zoom Pegasus',
        image: 'https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg?semt=ais_hybrid',
        price: '$400',
        content: 'The Nike Hoops Elite Backpack is designed with an innovative zip system so you can access your gear from any angle.',
        review: '4 customer reviews',
        discount: '$290',
        rate: <FaStar />
    },
    {
        id: 3,
        title: 'Nike distressed baseball hat',
        image: 'https://i.pinimg.com/564x/7d/06/6d/7d066dde0c4c8ee3a09b1ac89aa6195f.jpg',
        price: '$400',
        content: 'The Nike Hoops Elite Backpack is designed with an innovative zip system so you can access your gear from any angle.',
        review: '4 customer reviews',
        discount: '$290',
        rate: <FaStar />
    }
]

const ListShop = () => {
    return (
        <>
            <BannerChild title="List shop" component={<BreadcrumbsItem />} />

            <div className="w-full md:w-11/12 lg:w-default-layout-w relative mx-auto p-4">

                <div className="flex flex-col md:flex-row items-start justify-center mt-10 space-y-6 md:space-y-0 md:space-x-4">

                    <div className="w-full md:w-2/3 flex flex-col relative h-full mr-[15px]">
                        <TitleContent title="product catalog" button={<>
                            <Button className="border-1 rounded-md uppercase text-[1rem] font-bold hover:text-white" variant="ghost"> new first</Button>
                            <Button className="border-1 rounded-md uppercase text-[1rem] font-bold hover:text-white" variant="ghost"> product price</Button>
                            <Button className="border-1 rounded-md uppercase text-[1rem] font-bold hover:text-white" variant="ghost"> show 6 per page</Button>
                            <Link href='/shop/gridshop' className='bg-transparent hover:text-tertiary-color text-gray-700 text-3xl px-2'><FaTableCells /></Link>
                            <Link href='/shop/listshop' className='bg-transparent hover:text-tertiary-color text-gray-700 text-3xl'><FaList /></Link>
                        </>}>


                            <DetailProduct data={PRODUCT_ITEMS} />


                        </TitleContent>

                        <div className='flex justify-center'>
                            <PaginationComponent />

                        </div>

                    </div>

                    <div className="w-full md:w-1/3 h-full flex flex-col ml-[15px] ">
                        {/* <category /> */}
                        <CatCheck />
                        <PriceProduct />
                        <ColorPalette />
                        <SelectSize />

                    </div>


                </div>
            </div >
        </>
    )
}

export default ListShop
