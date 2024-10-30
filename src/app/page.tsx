'use client'

import React from "react";

import { banner } from "@/assets/images";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaFire } from "react-icons/fa";
import { Button } from "@nextui-org/react";

import Banner from "@/layouts/Banner/main";
import SlideSection from "@/layouts/Slider/main";
import UpComming from "@/components/UpComming/UpComming";
import TitleContent from "@/components/TitleContent/main";
import Content from "@/components/Content/main";
import { CategoryContainer as Container, NewsContent, SportsContent, InputContent, CardsContent, SocialContent, TabsContent } from "@/components/Category/main";


export default function Home() {
  

  return (
    <React.Fragment>
      <div className="w-full h-full">
        <Banner banner={banner} />
      </div>

      <div className="w-full flex justify-center h-full mt-12 px-4 md:px-0">
        <SlideSection slidesPerview={2.5} />
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
        <UpComming />
        
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-10">
          <div className="w-full lg:w-2/3">
            <TitleContent 
              title="in the spotlight" 
              button={
                <Button className="border-1 rounded-md uppercase text-[1rem] font-bold hover:text-white" variant="ghost">
                  All NEWS
                </Button>
              }
            >
              <Content />
            </TitleContent>
          </div>

          <div className="w-default-catefory-w h-full flex flex-col ml-[15px]">
            {/* <Content /> */}
            <TitleContent title={<div className="flex items-center gap-2">
              <FaFire className="text-red-400" /> HOT NEWS</div>}>
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

            <TitleContent 
              title={<div className="flex items-center gap-2">SHOP</div>} 
              button={
                <div className="flex gap-2">
                  <div className="rounded-md p-4 bg-backgroundContainer-color border-1 border-black/20 hover:bg-tertiary-color">
                    <FaChevronLeft />
                  </div>
                  <div className="rounded-md p-4 bg-backgroundContainer-color border-1 border-black/20 hover:bg-tertiary-color">
                    <FaChevronRight />
                  </div>
                </div>
              }
            >
              <Container>
                <CardsContent />
              </Container>
            </TitleContent>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center mt-10 px-4 md:px-0">
        <SlideSection slidesPerview={3.5} />
      </div>
    </React.Fragment>
  );
}
