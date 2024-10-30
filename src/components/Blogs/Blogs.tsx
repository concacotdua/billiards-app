'use client'

import { User } from "@nextui-org/react";
import { FaRegClock, FaRegComment, FaRegEye, FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa'; // Importing icons from react-icons
import { Image } from "@nextui-org/react";
import { post } from "@/assets/images"

const BlogPage = () => {
    const postImages = [post.post1.src]
    return (
        <div className='w-full h-full bg-backgroundPrimary-color mb-[100px] p-4 mt-5 px-6'>
            <div className="flex flex-col p-10 space-y-4">
                <div className="w-full h-full flex gap-6 uppercase">
                    <div className="text-white text-[1rem] font-bold bg-tertiary-color rounded-lg py-2 px-[3px]">TOURNAMENT</div>
                </div>
                <div className="flex flex-col gap-4 space-y-4">
                    <h1 className="flex-wrap text-[2.5rem] font-bold uppercase line-clamp-3">
                        Brian Cap Wins Tri-State Event at Rockaway and other important news & updates
                    </h1>
                    <div className="w-full h-full flex items-center text-xl">
                        <User
                            name
                            avatarProps={{
                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                                alt: "user",
                                size: "lg"
                            }}
                        />
                        <span className="text-2xl font-semibold ml-3">Catherine Burns</span>
                        <div className="border-l border-gray-300 h-10 mx-4"></div>
                        <div className="flex items-center space-x-4 text-black/40 uppercase font-bold gap-4">
                            <div className="flex items-center space-x-1">
                                <FaRegClock className="text-tertiary-color" />
                                <span>April 15, 2018</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <FaRegComment className="text-tertiary-color" />
                                <span>345</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <FaRegEye className="text-tertiary-color" />
                                <span>234</span>
                            </div>
                        </div>
                    </div>
                    <p className="text-[1.6rem] text-black/80 font-normal line-clamp-3 px-6">
                        The titles in the 8-ball individuals at the Dynamic Billard European Championships for Seniors and Ladies at the Golden Tulip
                        Jagershorst Hotel in Leende, The Netherlands. In the ladies division...
                    </p>

                    <div className="w-full h-full flex justify-between items-center text-xl bg-backgroundContainer-color p-10">
                        <div className="flex items-center gap-2 text-black/40">
                            <p className="uppercase font-semibold">share this post</p>
                        </div>
                        <div className="flex items-center gap-4 text-black/40">
                            <FaFacebookF />
                            <FaTwitter />
                            <FaGoogle />
                            <FaInstagram />
                        </div>
                    </div>

                    <p className="text-[1.6rem] text-black/80 font-normal leading-inherit px-6">
                        {`The titles in the 8-ball individuals at the Dynamic Billard European Championships for Seniors and Ladies at the Golden Tulip
                        Jagershorst Hotel in Leende, The Netherlands. In the ladies division The titles in the 8-ball individuals at the Dynamic Billard European Championships for Seniors and Ladies at the Golden Tulip
                        Jagershorst Hotel in Leende, The Netherlands. In the ladies division The titles in the 8-ball individuals at the Dynamic Billard European Championships for Seniors and Ladies at the Golden Tulip
                        Jagershorst Hotel in Leende, The Netherlands. In the ladies division...`}
                    </p>
                    <p className="text-[1.6rem] text-black/80 font-normal leading-inherit px-6">
                        {`The titles in the 8-ball individuals at the Dynamic Billard European Championships for Seniors and Ladies at the Golden Tulip
                        Jagershorst Hotel in Leende, The Netherlands. In the ladies division The titles in the 8-ball individuals at the Dynamic Billard European Championships for Seniors and Ladies at the Golden Tulip
                        Jagershorst Hotel in Leende, The Netherlands. In the ladies division The titles in the 8-ball individuals at the Dynamic Billard European Championships for Seniors and Ladies at the Golden Tulip
                        Jagershorst Hotel in Leende, The Netherlands. In the ladies division...`}
                    </p>

                    <Image isZoomed
                        className="w-full h-full object-cover rounded-none"
                        src={postImages[0]}
                        radius="none"
                        alt="news" />

                    <p className="text-[1.6rem] text-black/80 font-normal leading-inherit px-6">
                        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
                    </p>

                    <p className="text-[1.6rem] text-black/80 font-normal leading-inherit px-6">
                        {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogPage
