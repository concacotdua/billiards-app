import { Button, Image } from "@nextui-org/react";
import React from 'react'
import { FaShareNodes } from "react-icons/fa6";

interface Product {
    id: number;
    title: string;
    image: string;
    price: string;
    discount: string;
    rate: JSX.Element;
    review: string;
    content: string;
}
interface DetailProductProps {
    data: Product[];
}
const DetailProduct = ({ data }: DetailProductProps) => {
    return (
        <>
            <div className="container mx-auto px-4 py-8">
                {data?.map((item) => (
                    <div key={item.id} className="flex items-center border rounded-lg p-4 bg-white shadow-md mb-4">
                        {/* Product image */}
                        <div className="mr-4">
                            <Image
                                src={item.image || 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg'}
                                alt={item.title}
                                width={370}
                                height={340}
                                className="object-cover rounded-md"
                            />
                        </div>
                        {/* Product details */}
                        <div className="flex-1 ml-4">
                            <h2 className="text-[2.2rem] font-semibold mb-2">{item.title}</h2>
                            <div className="flex gap-4 items-center">
                                <div className="flex items-center text-xl text-yellow-400 space-x-1">
                                    {item.rate}
                                    {item.rate}
                                    {item.rate}
                                    {item.rate}
                                    {item.rate}
                                </div>
                                <p className="text-gray-500 text-lg font-semibold uppercase">{item.review}</p>
                            </div>
                            <div className="flex items-center mt-2 gap-3 text-[1.6rem]">
                                <p className="text-blue-500 font-bold text-[1.8rem]">{item.discount}</p>
                                <p className="text-gray-400 line-through">{item.price}</p>
                            </div>
                            <p className="mt-2 text-xl text-gray-400 line-clamp-2">{item.content}</p>
                            <div className="space-x-4">
                                <Button className="mt-8 bg-tertiary-color text-white text-2xl p-10 rounded uppercase font-bold">
                                    Add to Cart
                                </Button>
                                <Button className="mt-8 bg-red-400 text-white text-xl p-10 rounded uppercase font-bold"><FaShareNodes /></Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DetailProduct
