'use client'
import { Button, Image } from "@nextui-org/react";
import React, { useState } from 'react'
import { FaCartShopping, FaShareNodes } from "react-icons/fa6";
import { NewSizeSelector, NewColorSelector } from './index'

interface Product {
    id: number;
    title: string;
    image: string;
    price: string;
    discount: string;
    rate: JSX.Element;
    content: string;
}
interface ProdItemDetail {
    data: Product[];
}
const ItemDetail = ({ data }: ProdItemDetail) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <>
            {data?.map((item) => (
                <div key={item.id} className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto bg-white shadow-md mb-4 mt-20">
                    {/* Product image */}
                    <div className="w-full">
                        <Image
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    
                    {/* Product details */}
                    <div className="p-4 md:p-10">
                        <h2 className="md:text-[2.4rem] text-[2.8rem] uppercase font-semibold mb-2">
                            {item.title}
                        </h2>

                        <div className="flex flex-wrap items-center gap-3 text-base md:text-lg">
                            <p className="text-blue-500 font-semibold text-[3rem]">
                                {item.discount}
                            </p>
                            <p className="text-[2.4rem] text-gray-400 line-through">{item.price}</p>
                            <div className="flex items-center text-yellow-400 space-x-1">
                                {/* ... rating stars ... */}
                            </div>
                        </div>

                        <p className="mt-3 md:text-xl text-3xl text-gray-400">{item.content}</p>
                        
                        {/* Selectors */}
                        <div className="space-y-6 mt-6">
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <h3 className="text-3xl md:text-xl font-semibold uppercase">Size</h3>
                                <NewSizeSelector />
                            </div>
                            
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <h3 className="text-3xl md:text-xl font-semibold uppercase">Color</h3>
                                <NewColorSelector />
                            </div>
                            
                            <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <h3 className="text-3xl md:text-xl font-semibold uppercase">Quantity</h3>
                                <div className="flex items-center">
                                    <Button onClick={() => setQuantity(Math.max(1, quantity - 1))} 
                                            className="border text-3xl p-2">-</Button>
                                    <span className="mx-4 text-3xl">{quantity}</span>
                                    <Button onClick={() => setQuantity(quantity + 1)} 
                                            className="border text-3xl p-2">+</Button>
                                </div>
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <Button className="bg-tertiary-color text-white text-3xl md:text-lg lg:p-6 p-10 md:p-8 rounded uppercase font-bold flex-1">
                                <FaCartShopping />Add to Cart
                            </Button>
                            <Button className="bg-red-400 text-white text-3xl md:text-lg lg:p-6 p-10 md:p-8 rounded uppercase font-bold">
                                <FaShareNodes />
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default ItemDetail;
