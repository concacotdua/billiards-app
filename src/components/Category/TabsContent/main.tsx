'use client'
import { Tabs, Tab } from "@nextui-org/react";
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import tab1 from '@/assets/images/tab1.jpg';
import tab2 from '@/assets/images/tab2.jpg';
import tab3 from '@/assets/images/tab3.jpg';

const TabsContent = () => {
    const tabsNew = [
        {
            id: "NEW",
            label: "NEW",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            image: tab1.src,
            childrenTabs: [
                {
                    id: "NEW1",
                    label: "NEW1",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    image: tab1.src
                },
                {
                    id: "NEW2",
                    label: "NEW2",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    image: tab2.src
                },
                {
                    id: "NEW3",
                    label: "NEW3",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    image: tab3.src
                }
            ]
        },
        {
            id: "TRENDING",
            label: "TRENDING",
            content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            image: tab2.src,
            childrenTabs: [
                {
                    id: "TRENDING1",
                    label: "TRENDING1",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: tab3.src
                },
                {
                    id: "TRENDING2",
                    label: "TRENDING2",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: tab1.src
                },
                {
                    id: "TRENDING3",
                    label: "TRENDING3",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: tab2.src
                }

            ]
        },
        {
            id: "POPULAR",
            label: "POPULAR",
            content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            image: tab3.src,
            childrenTabs: [
                {
                    id: "POPULAR1",
                    label: "POPULAR1",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: tab3.src
                },
                {
                    id: "POPULAR2",
                    label: "POPULAR2",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: tab2.src
                },
                {
                    id: "POPULAR3",
                    label: "POPULAR3",
                    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: tab1.src
                }
            ]
        }
    ];
    return (
        <div className="flex w-full flex-col gap-4 h-full">
            <Tabs 
                aria-label="Dynamic tabs" 
                items={tabsNew} 
                size="lg" 
                radius="none"
                classNames={{
                    tabList: "gap-2 w-full flex-wrap sm:flex-nowrap",
                    tab: "max-w-fit px-4 h-10",
                    tabContent: "text-sm sm:text-base"
                }}
            >
                {(item) => (
                    <Tab key={item.id} title={item.label}>
                        <div className="flex flex-col gap-4 h-full">
                            {item.childrenTabs?.map((childTab) => (
                                <div
                                    key={childTab.id}
                                    className="flex flex-col sm:flex-row w-full h-full items-center gap-4 bg-backgroundPrimary-color p-4"
                                >
                                    <div className="w-full sm:w-1/3 h-[200px] sm:h-[100px]">
                                        <Image
                                            src={childTab.image}
                                            alt={childTab.label}
                                            width={100}
                                            height={100}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-3 w-full sm:w-2/3">
                                        <p className="text-lg sm:text-2xl font-bold uppercase line-clamp-2">
                                            {childTab.content}
                                        </p>
                                        <p className="flex items-center gap-4 uppercase text-base sm:text-xl font-bold text-gray-500">
                                            <FaRegCalendarAlt /> April 15, 2018
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Tab>
                )}
            </Tabs>

        </div>
    )
}

export default TabsContent