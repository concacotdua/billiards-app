'use client'
import { useState } from "react";
import { Image } from "@nextui-org/react";
import { FaTrashAlt } from "react-icons/fa";

const CompoTable = () => {

    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            productname: "Product 1",
            image: "https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg",
            color: "Red",
            size: "M",
            quantity: 1,
            price: 100,
        },
        {
            id: 2,
            productname: "Product 2",
            image: "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg?semt=ais_hybrid",
            color: "Blue",
            size: "L",
            quantity: 2,
            price: 150,
        },
        {
            id: 3,
            productname: "Product 2",
            image: "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg?semt=ais_hybrid",
            color: "Blue",
            size: "L",
            quantity: 2,
            price: 150,
        },
        {
            id: 4,
            productname: "Product 2",
            image: "https://img.freepik.com/premium-photo/ultra-realistic-orange-background-4k-hd-photo-product_1193781-21514.jpg?semt=ais_hybrid",
            color: "Blue",
            size: "L",
            quantity: 2,
            price: 150,
        },
    ]);
    // Hàm để tăng/giảm số lượng
    const updateQuantity = (id: number, amount: number) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + amount) }
                    : item
            )
        );
    };

    // Hàm để xóa sản phẩm khỏi giỏ hàng
    const removeItem = (id: number) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };
    return (
        <div className="overflow-x-auto">
            <table className="lg:w-full bg-white border border-gray-300">
                <thead className="bg-gray-50">
                    <tr>
                        {['Product', 'Color', 'Size', 'Quantity', 'Price', 'Remove'].map((item) => (
                            <th key={item} className="py-2 px-4 text-sm md:text-lg uppercase text-gray-400">{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item) => (
                        <tr key={item.id} className="border-b">
                            <td className="py-2 px-4">
                                <div className="flex flex-col md:flex-row items-center gap-2">
                                    <Image 
                                        src={item.image} 
                                        alt={item.productname} 
                                        className="w-20 h-20 md:w-32 md:h-32 object-cover"
                                    />
                                    <span className="text-sm md:text-xl font-semibold uppercase">
                                        {item.productname}
                                    </span>
                                </div>
                            </td>
                            <td className="py-2 px-4 text-center text-sm md:text-lg">{item.color}</td>
                            <td className="py-2 px-4 text-center text-sm md:text-lg font-bold">{item.size}</td>
                            <td className="py-2 px-4 text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <button onClick={() => updateQuantity(item.id, -1)}
                                            className="px-2 py-1 bg-gray-200 rounded text-sm md:text-xl">-</button>
                                    <span className="px-2 text-sm md:text-lg">{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, 1)}
                                            className="px-2 py-1 bg-gray-200 rounded text-sm md:text-xl">+</button>
                                </div>
                            </td>
                            <td className="py-2 px-4 text-center text-sm md:text-lg">${item.price}</td>
                            <td className="py-2 px-4 text-center">
                                <button onClick={() => removeItem(item.id)} 
                                        className="text-red-600 text-sm md:text-xl">
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default CompoTable