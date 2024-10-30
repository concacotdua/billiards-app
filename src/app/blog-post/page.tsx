'use client'

import BannerChild from "@/layouts/BannerChild/main";
import BreadcrumbsItem from "@/components/Breadcrumbs/main";
import { CategoryContainer as Container, NewsContent, SportsContent, InputContent, SocialContent, TabsContent } from "@/components/Category/main";
import TitleContent from "@/components/TitleContent/main";
import { Button } from "@nextui-org/react";
import { FaFire } from "react-icons/fa";

import BlogsPage from "@/components/Blogs/Blogs";
import Comment from "@/components/Comment/Comment";
import { gamer } from "@/assets/images";
import TableStanding from "@/components/TableStanding/TableStanding";
const blogPost = () => {
    
    return (
        <>
            <BannerChild title="Blog Post" component={<BreadcrumbsItem />} />

            <div className="w-full md:w-11/12 lg:w-default-layout-w relative mx-auto p-4">

                <div className="flex flex-col md:flex-row items-start justify-center mt-10 space-y-6 md:space-y-0 md:space-x-4">

                    <div className="w-full md:w-2/3 flex flex-col relative h-full mr-[15px]">
                        <BlogsPage />
                        <TitleContent title="3 Comments"><Comment /></TitleContent>
                    </div>

                    <div className="w-full md:w-1/3 h-full flex flex-col space-y-4">
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

                    <div></div>

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

            </div >

        </>
    )
}

export default blogPost