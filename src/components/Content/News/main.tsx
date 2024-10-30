import { FaEye } from "react-icons/fa"
import { Image } from "@nextui-org/react"
import { FaComment, FaFacebookF, FaTwitter, FaGoogle, FaLinkedin } from "react-icons/fa"



const News = ({ images }: { images?: string[] }) => {
    return (
        <>
            <div className="flex flex-col p-10 space-y-4 shadow-small">
                <div className="w-full h-full flex gap-6 uppercase">
                    <div className="text-white text-[1rem] font-bold bg-tertiary-color rounded-lg py-2 px-[3px]">TOURNAMENT</div>
                    <span className="text-black/50 text-[1.2rem] font-bold  py-2">april 15,2018</span>
                    <div className="flex items-center gap-2 py-2 text-[1.2rem]"><FaEye />234</div>

                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="flex-wrap text-[2rem] font-bold uppercase line-clamp-3">
                        Brian Cap Wins Tri-State Event at Rockaway and other important news & updates
                    </h1>
                    {images && (
                        <p className="text-[1.4rem] text-black/50 font-normal line-clamp-2">
                            The titles in the 8-ball individuals at the Dynamic Billard European Championships for Seniors and Ladies at the Golden Tulip
                            Jagershorst Hotel in Leende, The Netherlands. In the ladies division...
                        </p>
                    )}
                </div>
            </div>

            <div className="w-full h-full p-0">
                <Image
                    isZoomed
                    className="w-full h-full object-cover rounded-none"
                    src={images?.[0]}
                    radius="none"
                    alt="news"
                />
            </div>

            <div className={`w-full h-full ${images ? 'p-10' : 'p-4'} flex justify-between items-center ${images ? 'text-[1.3rem]' : 'text-[1.2rem]'}`}>
                <div className="flex items-center gap-2 text-black/40">
                    <FaComment />
                    <p className="uppercase font-semibold">345 comments</p>
                </div>
                <div className="flex items-center gap-4 text-black/40">
                    <p className="uppercase font-semibold">share</p>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaGoogle />
                    <FaLinkedin />
                </div>
            </div>

        </>
    )
}

export default News