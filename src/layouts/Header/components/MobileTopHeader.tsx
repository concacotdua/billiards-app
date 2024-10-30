import Link from "next/link";

export default function MobileTopHeader({isOpen}: {isOpen: boolean}) {
    const links = ['About Us', 'News', 'Shop', 'Contact Us', 'Watch Live']
    return (
        <div className={`block xl:hidden w-full h-20 bg-secondary-color transition-transform duration-300 ${isOpen ? 'translate-y-0' : '-translate-y-10'} ease-in-out`}>
            <ul className="flex justify-start py-3 px-6 items-center gap-10">
                {links.map((link) => (
                    <li key={link} className="text-2xl text-white/30 p-2">
                        <Link href="/">{link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
