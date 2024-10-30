"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

import {TopHeader, CenterHeader, BottomHeader, MobileTopHeader, MobileSidebar} from "./components";
import { useScrollHeader } from "./hooks/useScrollHeader";


const LAYOUT_WIDTH = "w-default-layout-w";

export default function Header() {

    const pathname = usePathname()
    const {showFullHeader} = useScrollHeader()

    const [isOpenSideBar, setIsOpensideBar] = useState(false)
    const [isTopHeaderOpen, setTopHeaderOpen] = useState(false)

    const toggleSidebar = () => setIsOpensideBar(!isOpenSideBar);
    const toggleTopHeader = () => setTopHeaderOpen(!isTopHeaderOpen);
    


    return (
        <div className="w-full flex flex-col items-center fixed top-0 left-0 right-0 z-40">

            <TopHeader 
                showFullHeader={showFullHeader}
                toggleSidebar={toggleSidebar}
                toggleTopHeader={toggleTopHeader}
            />

            {isTopHeaderOpen && !isOpenSideBar && (
                <MobileTopHeader isOpen={isTopHeaderOpen} />
            )}
            {isOpenSideBar && 
            <MobileSidebar 
            isOpen={isOpenSideBar} 
            onClose={toggleSidebar} 
            pathname={pathname} 
            />}

            <CenterHeader
                showFullHeader={showFullHeader}
                layoutWidth={LAYOUT_WIDTH}
            />

            <BottomHeader
                pathname={pathname}
                layoutWidth={LAYOUT_WIDTH}
            />
        </div>
    );
}
