'use client'
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "@/components/Category/NewsContent/ListBoxWrapper";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const ContactDetail = () => {
    return (

        <ListboxWrapper>
            <Listbox
                aria-label="Contact Details"
                onAction={(key) => alert(key)}
            >
                <ListboxItem 
                
                key="email"
                textValue="Email: info@demolink.org"
                >
                    <div className="flex flex-col flex-wrap gap-1 p-10 rounded-none">
                        <h1 className="text-2xl uppercase text-tertiary-color font-semibold">E-mail</h1>
                        <div className="flex items-center gap-4 mt-2">
                            <FaEnvelope className="text-tertiary-color text-3xl" />
                            <p className="text-2xl">info@demolink.org</p>
                        </div>
                    </div>
                    <div className="w-full h-full border-b-1 border-black/20"></div>
                </ListboxItem>
                <ListboxItem
                    key="address"
                    textValue="Address: 71 Pilgrim Avenue Chevy Chase, MD 20815"
                >
                    <div className="flex flex-col flex-wrap gap-1 p-10 rounded-none">
                        <h1 className="text-2xl uppercase text-tertiary-color font-semibold">Adress</h1>
                        <div className="flex items-center gap-4 mt-2">
                            <FaLocationDot className="text-tertiary-color text-3xl" />
                            <p className="text-2xl">71 Pilgrim Avenue Chevy Chase, MD 20815</p>
                        </div>
                    </div>
                    <div className="w-full h-full border-b-1 border-black/20"></div>
                </ListboxItem>
                <ListboxItem 
                    key="phone"
                    textValue="Phone: +34 91 398 43 00"
                >
                    <div className="flex flex-col flex-wrap gap-1 p-10 rounded-none">
                        <h1 className="text-2xl uppercase text-tertiary-color font-semibold">Phone</h1>
                        <div className="flex items-center gap-4 mt-2">
                            <FaPhone className="text-tertiary-color text-3xl" />
                            <p className="text-2xl">+34 91 398 43 00</p>
                        </div>
                    </div>

                </ListboxItem>

            </Listbox>
        </ListboxWrapper>

    )
}

export default ContactDetail