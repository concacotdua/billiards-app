import Link from "next/link";
import { FaChevronDown, FaChevronRight, FaFacebook, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";

export default function BottomHeader({pathname, layoutWidth}: {pathname: string, layoutWidth: string}) {
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
    return (
        <div className="hidden xl:block w-full">
                <div className={`bg-secondary-color text-white/40 text-[1.4rem] flex justify-center items-center p-4 shadow-md sticky top-0 z-999`}>
                    <div className={`bg-secondary-color ${layoutWidth} flex justify-between items-center`}>
                        <ul className="hidden sm:flex gap-12 p-4 text-white font-bold uppercase items-center space-x-10">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <div className="relative group">
                                    <Link
                                        href={item.path}
                                        className={`text-2xl py-2 px-6 flex items-center rounded-xl ${pathname === item.path ? 'bg-tertiary-color' : ''}`}
                                    >
                                        {item.name}
                                        {item.subItems && <FaChevronDown className="ml-2 text-sm transition-transform group-hover:rotate-180" />}
                                    </Link>
                                    {item.subItems && (
                                        <div className="absolute left-0 mt-2 w-[220px] bg-white rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                            {item.subItems.map((subItem) => (
                                                <Link key={subItem.name} href={subItem.path} className="block px-8 py-5 text-xl text-black hover:bg-tertiary-color relative group/item">
                                                    <span className="relative z-10 transition-transform duration-300 group-hover/item:translate-x-2 inline-block">{subItem.name}</span>
                                                    <span className="absolute left-2 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover/item:opacity-100 group-hover/item:left-0">
                                                        <FaChevronRight className="text-tertiary-color" />
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </li>
                        ))}
                        </ul>   
                        <ul className="flex items-center gap-4 text-white space-x-2">
                        {socialIcons.map(({ Icon, name }) => (
                            <li key={name}>
                                <Icon size={18} className="hover:text-tertiary-color cursor-pointer" />
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
    )
}
