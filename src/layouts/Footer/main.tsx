'use client'
import React from 'react'
import NextImage from 'next/image';
import { Image as NextUIImage } from '@nextui-org/react';
import { Button, Link, Listbox, ListboxItem } from '@nextui-org/react'

import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaPersonBooth, FaEnvelope } from 'react-icons/fa';

import FooterWrapper from './Wrapper'
import { footers } from '@/assets/images/index'

import images from '@/assets/images/index'


function Footer() {
    const socialIcons = [
        { Icon: FaFacebookF, name: 'Facebook' },
        { Icon: FaTwitter, name: 'Twitter' },
        { Icon: FaGoogle, name: 'Google' },
        { Icon: FaInstagram, name: 'Instagram' },
    ];

    return (
        <FooterWrapper>
            <div className="w-2/3 md:w-default-layout-w h-full flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-4 items-center justify-between py-12">
                <p className="text-white text-3xl font-bold uppercase">OUR Sponsors</p>
                {footers.map((image, index) => (
                    <NextUIImage
                    key={index}
                    src={image.src}
                    alt={`Partner ${index + 1}`}
                    width={89}  // Set actual width of your partner logos
                    height={42} // Set actual height of your partner logos
                    className='w-auto h-auto object-contain'
                    />
                ))}
            </div>

            <div className="w-full md:w-default-layout-w border-b border-white/40 py-6" />

            <div className="flex justify-between items-center md:w-default-layout-w w-2/3 h-full">
                <div className="flex flex-col py-12">
                    <div className="flex gap-4 items-center py-6">
                        <NextImage 
                            src={images.logo.src}
                            alt="logo"
                            width={98}
                            height={65}
                            priority={true}
                            className="w-auto h-auto object-contain"
                            
                        />
                        <div className="text-gray-400 text-lg w-[250px] mx-10 flex flex-col">
                            <p>Snooker is your No. 1 resource of</p>
                            <p>fresh billiard, 8-ball, snooker and pool,</p>
                            <p>news & updates.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 py-6">
                        <div className="flex gap-4">
                            <Button className="bg-transparent border-2 rounded-lg px-10 py-6 border-white/80 text-white uppercase font-semibold hover:bg-tertiary-color">
                                Get in touch
                            </Button>
                            {socialIcons.map(({ Icon, name }) => (
                            <Link key={name} href="/" aria-label={name} className="p-4 text-white border border-white bg-[#47525B] rounded-md">
                                <Icon size={18} className="hover:text-tertiary-color cursor-pointer" />
                            </Link>
                        ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <p className="text-white text-2xl font-bold uppercase p-3">LATEST NEWS</p>
                    <Listbox aria-label="Recent Updates">
                        <ListboxItem 
                            key="update1" 
                            textValue="4 hours ago - Therese Williamson is simply the Best"
                        >
                            <div className="flex flex-col flex-wrap gap-1 rounded-none uppercase">
                                <p className="text-lg text-white font-bold">4 hours ago</p>
                                <p className="text-lg text-white font-bold">Therese Williamson is simply the Best</p>
                            </div>
                            <div className="w-full h-full border-b border-black/20"></div>
                        </ListboxItem>
                        <ListboxItem 
                            key="update2" 
                            textValue="4 hours ago - Dani Sánchez, great person"
                        >
                            <div className="flex flex-col flex-wrap gap-1 rounded-none uppercase">
                                <p className="text-lg text-white font-bold">4 hours ago</p>
                                <p className="text-lg text-white font-bold">Dani Sánchez, great person</p>
                            </div>
                        </ListboxItem>
                    </Listbox>
                </div>

                <div className="flex flex-col">
                    <p className="text-white text-2xl font-bold uppercase p-3">Contact us</p>
                    <div className="hidden sm:flex flex-col gap-3 items-start p-2 space-y-4">
                        <div className="flex items-center justify-start text-2xl">
                            <div className="flex items-center justify-center">
                                <FaPersonBooth size={30} className="text-green-500 stroke-2 fill-[#15b095]" />
                            </div>
                            <div className="flex flex-col pl-3">
                                <p className="text-white/25 uppercase font-semibold">Become a player</p>
                                <Link href="/" className="text-white">team@demolink.org</Link>
                            </div>
                        </div>

                        <div className="flex items-center justify-start text-2xl">
                            <div className="flex items-center justify-center">
                                <FaEnvelope size={30} className="text-green-500 stroke-2 fill-tertiary-color" />
                            </div>
                            <div className="flex flex-col pl-3">
                                <p className="text-white/25 uppercase font-semibold">Contact Us</p>
                                <Link href="/" className="text-white">team@demolink.org</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-full flex items-center justify-center bg-primary-color py-12">
                <div className="flex items-center justify-between w-default-layout-w">
                    <ul className="flex uppercase font-bold text-gray-500 gap-12">
                        {['Home', 'About', 'News', 'Shop', 'Contact Us'].map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <p className="text-white text-sm">Copyright © 2024 All rights reserved</p>
                </div>
            </div>
        </FooterWrapper>
    );
}

export default Footer