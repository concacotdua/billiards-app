import Image from "next/image";
import Link from "next/link";
import { Input } from "@nextui-org/react";
import { FaPersonBooth, FaEnvelope } from "react-icons/fa";
import { SearchIcon } from "@/components/Icon/icons";
import images from "@/assets/images";

export default function CenterHeader({showFullHeader, layoutWidth}: {showFullHeader: boolean, layoutWidth: string}) {


    return (
        <div className="hidden xl:block w-full">
                <div className={`bg-secondary-color text-white/40 text-[1.4rem] flex-col justify-center items-center py-6 border-b border-white/20 h-[100px] transition-transform duration-300 ${showFullHeader ? 'block' : 'hidden'}`}>
                    <div className="flex justify-center items-center">
                        <div className={`flex justify-between items-center ${layoutWidth}`}>
                            <div className="flex items-center ml-10">
                                <Image src={images.logo} alt="logo" />
                            </div>

                            <div className="relative hidden sm:flex gap-3 items-center">
                                <div className="flex items-center justify-center text-2xl">
                                    <div className="flex items-center justify-center">
                                        <FaPersonBooth size={30} className="text-green-500 stroke-2 fill-[#15b095]" />
                                    </div>
                                    <div className="flex flex-col pl-3">
                                        <p className="text-white/25 uppercase font-semibold">Become a player</p>
                                        <Link href="/" className="text-white">team@demolink.org</Link>
                                    </div>
                                    <div className="absolute left-[140px] top-0 border-r border-white/20 h-full flex items-center justify-center px-10"></div>
                                </div>


                                <div className="flex items-center justify-center text-2xl ml-10">
                                    <div className="flex items-center justify-center">
                                        <FaEnvelope size={30} className="text-green-500 stroke-2 fill-tertiary-color" />
                                    </div>
                                    <div className="flex flex-col pl-3">
                                        <p className="text-white/25 uppercase font-semibold">Contact Us</p>
                                        <Link href="/" className="text-white">team@demolink.org</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <Input
                                    classNames={{
                                        base: "max-w-full sm:max-w-[350px] h-[50px]",
                                        mainWrapper: "h-full",
                                        input: "text-medium",
                                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-sm mr-[14rem] p-5",
                                    }}
                                    placeholder="Type to search..."
                                    size="sm"
                                    endContent={<SearchIcon size={23} />}
                                    type="search"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
