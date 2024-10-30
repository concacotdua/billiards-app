import { Image } from "@nextui-org/react";
import React from 'react'

interface Product {
    id: number;
    title: string;
    image: string;
    price: string;
    discount: string;
    rate: JSX.Element;
}
interface ProductGridProps {
    data: Product[];
}
const ProductGrid = ({ data }: ProductGridProps) => {
    return (
        <>
            <div className="container mx-auto px-4 py-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {data?.map((item) => (
                        <div key={item.id} className="border rounded-lg p-4 bg-white shadow-md">
                            {/* Product image */}
                            <div className="h-[265px] bg-gray-200 mb-4 rounded-md">

                                <Image
                                    src={item.image || 'https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg'}
                                    alt={item.title}
                                    width={272}
                                    height={265}
                                    className="w-full h-full object-cover rounded-md"
                                />
                            </div>

                            {/* Product details */}
                            <h2 className="text-center text-2xl font-semibold mb-2 uppercase">{item.title}</h2>
                            <div className="flex justify-center gap-2 items-center">

                                <p className="text-gray-500 text-lg line-through">{item.price}</p>
                                <p className="text-blue-500 text-2xl font-bold">{item.discount}</p>
                            </div>
                            <div className="flex items-center justify-center text-xl mt-2 text-yellow-400 gap-2">
                                {item.rate}
                                {item.rate}
                                {item.rate}
                                {item.rate}
                                {item.rate}
                            </div>


                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default ProductGrid