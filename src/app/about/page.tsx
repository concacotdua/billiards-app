"use client"

import BannerChild from "@/layouts/BannerChild/main";
import BreadcrumbsItem from "@/components/Breadcrumbs/main";
import { CategoryContainer as Container, NewsContent, SportsContent, InputContent, SocialContent, TabsContent } from "@/components/Category/main";
import TitleContent from "@/components/TitleContent/main";
import { Button } from "@nextui-org/react";
import { FaFire } from "react-icons/fa";

import AboutProfile from "@/components/AboutProfile/main";
import UpComming from "@/components/UpComming/UpComming";
import { gamer } from "@/assets/images";
import TableStanding from "@/components/TableStanding/TableStanding";
export default function About() {

    return (
        <>
            <BannerChild title="About us" component={<BreadcrumbsItem />} />

            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 relative">

                <div className="w-default-layout-w md:flex-row flex flex-col items-start justify-center mt-10">

                    <div className="w-default-content-w flex flex-col relative h-full mr-[15px]">
                        <TitleContent title="player overview">
                            <AboutProfile />
                        </TitleContent>
                    </div>

                    <div className="w-default-catefory-w h-full flex flex-col ml-[15px] ">
                        {/* <category /> */}
                        <TitleContent title={<div className="flex items-center gap-2"><FaFire className="text-red-400" /> HOT NEWS</div>}>
                            <Container>
                                <NewsContent />
                            </Container>
                        </TitleContent>

                        <TitleContent title={<div className="flex items-center gap-2">Latest Games results</div>}>
                            <Container>
                                <SportsContent />
                                <SportsContent />
                                <SportsContent />
                            </Container>
                        </TitleContent>

                        <TitleContent title={<div className="flex items-center gap-2">Follow us</div>}>
                            <Container>
                                <SocialContent />
                            </Container>
                        </TitleContent>

                        <TitleContent title={<div className="flex items-center gap-2">Latest News</div>}>
                            <Container>
                                <TabsContent />
                            </Container>
                        </TitleContent>

                        <TitleContent title={<div className="flex items-center gap-2">Join our newsletter</div>}>
                            <Container>
                                <InputContent />
                            </Container>
                        </TitleContent>


                    </div>

                </div>

                <TitleContent title="in the spotlight" button={<>
                    <Button className="border-1 rounded-md uppercase text-[1rem] font-bold hover:text-white" variant="ghost"> tournaments</Button>
                    <Button className="border-1 rounded-md uppercase text-[1rem] font-bold hover:text-white" variant="ghost"> october</Button>
                    <Button className="border-1 rounded-md uppercase text-[1rem] font-bold hover:text-white" variant="ghost"> 2016-2018</Button>
                </>}>
                    <div className="container-fluid grid grid-rows-2 grid-cols-2 gap-10 w-full py-6">
                        <div className="w-full">
                            <SportsContent image1={gamer.gamer1.src} image2={gamer.gamer2.src} />
                        </div>
                        <div className="w-full">
                            <SportsContent image1={gamer.gamer3.src} image2={gamer.gamer1.src} />
                        </div>
                        <div className="w-full">
                            <SportsContent image1={gamer.gamer1.src} image2={gamer.gamer4.src} />
                        </div>
                        <div className="w-full">
                            <SportsContent image1={gamer.gamer1.src} image2={gamer.gamer2.src} />
                        </div>
                    </div>

                </TitleContent>
                <TitleContent title="Standings" button={<>
                    <Button className="border-1 rounded-md uppercase text-[1rem] font-bold hover:text-white" variant="ghost"> american league</Button>
                    <Button className="border-1 rounded-md uppercase text-[1rem] font-bold hover:text-white" variant="ghost"> 2016 - 2018</Button>
                </>}>
                    <div></div>
                </TitleContent>

                <TableStanding />

                <UpComming />
            </div >

        </>
    );
}