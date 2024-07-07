'use client'

import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay'
import Clients from "@/components/Clients"
import Community from "@/components/Community"
import Calender from "@/components/Calender"
import Customers from "@/components/Customers"
import Updates from "@/components/Updates"
import GetDemo from "@/components/GetDemo"
import Footer from "@/components/Footer"
import Unlock from "@/components/Unlock"
import Achievements from "@/components/Achievements"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import computer_image from "@/assets/SVGs/computer_image.svg";

const HomePage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
      // onMouseEnter={plugin.current.stop}
      // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1 bg-light-blue h-[600px] px-[10%] py-[92px]">
                <div className="flex justify-between bg">
                  <div className="flex flex-col justify-center">
                    <span className="text-[64px] font-semibold leading-[76px] text-dark-gray">
                      Lessons and insights
                    </span>
                    <span className="text-[64px] font-semibold leading-[76px] text-green">
                      from 8 years
                    </span>
                    <p className="py-6 text-light-gray">
                      Where to grow your business as a photographer: site or social media?
                    </p>
                    <div>
                      <Button className='h-[58px] w-[180px] text-[1.2rem]'>Register</Button>
                    </div>
                  </div>
                  <Image
                    alt="computer-image"
                    height={407}
                    width={391}
                    src={computer_image}
                    className="hidden lg:block"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Clients />
      <Community />
      <Unlock />
      <Achievements />
      <Calender />
      <Customers />
      <Updates />
      <GetDemo />
      <Footer />
    </div>
  )
}

export default HomePage
