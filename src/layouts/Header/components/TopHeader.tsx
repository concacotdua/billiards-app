
import Link from "next/link";
import Tippy from "@tippyjs/react";
import { Button } from "@nextui-org/react";
import { FaShoppingCart } from "react-icons/fa";
import { FaBars, FaArrowRightFromBracket, FaEllipsisVertical } from "react-icons/fa6";


export default function TopHeader({showFullHeader, toggleSidebar, toggleTopHeader}: {showFullHeader: boolean, toggleSidebar: () => void, toggleTopHeader: () => void}) {

    const menuItems = ['About Us', 'News', 'Shop', 'Contact Us', 'Watch Live']

  return (
    <div className={`bg-primary-color text-white/40 text-[1.4rem] flex justify-center items-center w-full transition-all duration-300 ${showFullHeader ? 'mt-0' : '-mt-[60px]'} ease-in-out`}>

                <div className="bg-primary-color flex justify-between items-center w-default-layout-w h-[54px] pl-2">
                    <button onClick={toggleSidebar} className="flex items-center justify-center xl:hidden px-5">
                        <FaBars size={30} className="text-white cursor-pointer" />
                    </button>
                    <ul className="hidden justify-center items-center space-x-20 xl:flex">
                        {menuItems.map((item) => (
                            <li key={item}>
                                <Link href="/">{item}</Link>
                            </li>
                        ))}
                    </ul>


                    <ul className="flex gap-10 items-center text-white">
                        <li>
                            <Tippy 
                            className="text-white"
                            content="English"
                           >
                                <Button size="sm" variant="bordered" className="text-white">EN</Button>
                            </Tippy>
                        </li>
                        <li className="pl-4 border-l border-white/40">
                            <Link href="/"><FaShoppingCart size={16} /></Link>
                        </li>
                        <li className="flex items-center gap-3 pl-4 text-[1.2rem] border-l border-white/40 uppercase font-semibold text-white">
                            <FaArrowRightFromBracket size={16} />
                            <Link href="/">Your Account</Link>
                        </li>
                        <Button className="block xl:hidden bg-transparent" onClick={toggleTopHeader}>
                            <FaEllipsisVertical size={26} className="text-white/70" />
                        </Button>
                    </ul>
                </div>
            </div>
  )
}
