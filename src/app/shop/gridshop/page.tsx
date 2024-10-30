'use client'
import { Button } from '@nextui-org/react';


import BannerChild from '@/layouts/BannerChild/main';
import BreadcrumbsItem from "@/components/Breadcrumbs/main";
import TitleContent from "@/components/TitleContent/main";
import { FaList, FaStar } from 'react-icons/fa';
import { FaTableCells } from 'react-icons/fa6';
import Link from 'next/link';
import { ProductGrid } from '@/components/Shop/index';
import PaginationComponent from '@/components/Pagination/main';
import { CatCheck, SelectSize } from '@/components/Category/Shop';
import PriceProduct from '@/components/Category/Shop/Price/main';
import ColorPalette from '@/components/Category/Shop/Color/main';

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
    },
    {
        id: 4,
        title: 'Apple watch nike+',
        image: 'https://i.pinimg.com/564x/12/bd/76/12bd76a2abbcc8cf68f3bcd86ab57e43.jpg',
        price: '$400',
        content: 'The Nike Hoops Elite Backpack is designed with an innovative zip system so you can access your gear from any angle.',
        review: '4 customer reviews',
        discount: '$290',
        rate: <FaStar />
    },
    {
        id: 5,
        title: 'nike free rn',
        image: 'https://i.pinimg.com/564x/11/08/7f/11087f5be017b0718a8340d87f08fc15.jpg',
        price: '$400',
        content: 'The Nike Hoops Elite Backpack is designed with an innovative zip system so you can access your gear from any angle.',
        review: '4 customer reviews',
        discount: '$290',
        rate: <FaStar />
    },
    {
        id: 6,
        title: 'Snooker licensed t-shirt',
        image: 'https://i.pinimg.com/736x/23/56/b9/2356b94b6a5a889c5378398fc1e8d3d5.jpg',
        price: '$400',
        content: 'The Nike Hoops Elite Backpack is designed with an innovative zip system so you can access your gear from any angle.',
        review: '4 customer reviews',
        discount: '$290',
        rate: <FaStar />
    },
    {
        id: 7,
        title: 'garmin vivofit',
        image: 'https://i.pinimg.com/564x/1c/71/04/1c7104301cce3230ce525b8dd83b99aa.jpg',
        price: '$400',
        content: 'The Nike Hoops Elite Backpack is designed with an innovative zip system so you can access your gear from any angle.',
        review: '4 customer reviews',
        discount: '$290',
        rate: <FaStar />
    },
    {
        id: 8,
        title: 'k-swiss bigshot II',
        image: 'https://i.pinimg.com/564x/e9/27/39/e927394569205d574497c46686e944cc.jpg',
        price: '$400',
        content: 'The Nike Hoops Elite Backpack is designed with an innovative zip system so you can access your gear from any angle.',
        review: '4 customer reviews',
        discount: '$290',
        rate: <FaStar />
    },
    {
        id: 9,
        title: 'Nike dark grey snapback',
        image: 'https://i.pinimg.com/564x/04/11/1d/04111db1a91b5aeede18984f765159cd.jpg',
        price: '$400',
        content: 'The Nike Hoops Elite Backpack is designed with an innovative zip system so you can access your gear from any angle.',
        review: '4 customer reviews',
        discount: '$290',
        rate: <FaStar />
    }

]
const page = () => {
    return (
        <>
            <BannerChild title="Grid shop" component={<BreadcrumbsItem />} />

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


                            <ProductGrid data={PRODUCT_ITEMS} />


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

export default page