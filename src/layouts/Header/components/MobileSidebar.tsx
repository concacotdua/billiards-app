import Link from "next/link";
import { FaXmark, FaChevronDown, FaChevronRight, FaFacebook, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa6";
import { useState } from "react";

export default function MobileSidebar({isOpen, onClose, pathname}: {isOpen: boolean, onClose: () => void, pathname: string}) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    if (!isOpen) return null;
    
    const navItems = [
        {name: 'Home', path: '/'},
        {name: 'About Us', path: '/about'},
        {name: 'News', path: '/news', subItems: [{name: 'Blog Post', path: '/blog-post'}]},
        {name: 'Shop', path: '/shop', subItems: [
            {name: 'Grid shop', path: '/shop/gridshop'}, 
            {name: 'List shop', path: '/shop/listshop'}, 
            {name: 'Product page', path: '/shop/productpage'}, 
            {name: 'Shopping cart', path: '/shop/shoppingcart'}, 
            {name: 'Checkout', path: '/shop/checkout'}
        ]},
        {name: 'Contact Us', path: '/contact'},
    ]
    
    const socialIcons = [
        {Icon: FaFacebook, name: 'Facebook'},
        {Icon: FaTwitter, name: 'Twitter'},
        {Icon: FaGoogle, name: 'Google'},
        {Icon: FaInstagram, name: 'Instagram'},
    ]

    const handleDropdownClick = (itemName: string, e: React.MouseEvent) => {
        e.preventDefault();
        setOpenDropdown(openDropdown === itemName ? null : itemName);
    };

    return (
        <div className="block xl:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
            <aside className={`fixed inset-y-0 left-0 w-[300px] bg-primary-color p-4 transform transition-all duration-300 ease-in-out ${isOpen ? 'ml-0' : '-ml-full'}`}>
                <button onClick={onClose} className="text-white">
                    <FaXmark size={30} />
                </button>
                <nav className="mt-4 bg-secondary-color w-full">
                    <ul className="flex flex-col text-white font-bold uppercase">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <div className="border-b border-gray-700">
                                    <Link
                                        href={item.path}
                                        className={`text-2xl p-6 flex items-center justify-between ${pathname === item.path ? 'bg-tertiary-color' : ''}`}
                                        onClick={item.subItems ? (e) => handleDropdownClick(item.name, e) : undefined}
                                    >
                                        <span>{item.name}</span>
                                        {item.subItems && (
                                            <FaChevronDown 
                                                className={`transition-transform duration-300 ${
                                                    openDropdown === item.name ? 'rotate-180' : ''
                                                }`} 
                                            />
                                        )}
                                    </Link>
                                    {item.subItems && (
                                        <div 
                                            className={`bg-white overflow-hidden transition-all duration-300 ${
                                                openDropdown === item.name ? 'max-h-[500px]' : 'max-h-0'
                                            }`}
                                        >
                                            {item.subItems.map((subItem) => (
                                                <Link 
                                                    key={subItem.name} 
                                                    href={subItem.path} 
                                                    className="block px-8 py-5 text-xl text-black hover:bg-tertiary-color/10 transition-colors"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <FaChevronRight className="text-tertiary-color" />
                                                        <span>{subItem.name}</span>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex items-center gap-4 text-white p-6">
                        {socialIcons.map(({ Icon, name }) => (
                            <li key={name}>
                                <Icon size={18} className="hover:text-tertiary-color cursor-pointer" />
                            </li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </div>
    )
}
