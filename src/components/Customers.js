import React from "react";
import customer_image from "@/assets/SVGs/customer_image.svg";
import Image from "next/image";
import { Button } from "./ui/button";
import client1 from '@/assets/SVGs/client1.svg'
import client2 from '@/assets/SVGs/client2.svg'
import client3 from '@/assets/SVGs/client3.svg'
import client4 from '@/assets/SVGs/client4.svg'
import client5 from '@/assets/SVGs/client5.svg'
import client6 from '@/assets/SVGs/client6.svg'
const Customers = () => {
  return (
    <div className=" flex bg-light-blue py-[32px] pb-[45px] gap-20 px-[7%] ">
      <div>
      <Image src={customer_image} alt="mobile_login" height={2500} className="hidden sm:block" />
      </div>
      
      <div className=" flex flex-col mt-2  gap-3">
        {/* <div className="w-[600px] "> */}
          {/* <h2 className="font-semibold text-[38px] leading-[44px]  mb-2">
            The unseen of spending three years at Pixelgrade
          </h2> */}
          <p className="text-[16px] w-[91%] font-semibold text-[1.1rem] text-dark-gray">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <h4 className=" text-green-500 font-semibold text-[20px] mt-3 text-green">Tim Smith</h4>
          <p className="text-dark-gray">British Dragon Boat Racing Association</p>

          <div className="flex gap-5 mt-5 flex-col sm:flex-row">
            <Image src={client1} alt="client" height={48} width={48}/>
            <Image src={client2} alt="client" height={48} width={48}/>
            <Image src={client3} alt="client" height={48} width={48}/>
            <Image src={client4} alt="client" height={48} width={48}/>
            <Image src={client5} alt="client" height={48} width={48}/>
            <Image src={client6} alt="client" height={48} width={48}/>
            
          </div>
          <Button variant="ghost" className="w-[215px] text-green text-[1.4rem] font-bold mt-5">Meet all customers </Button>
      </div>
    </div>
  );
};

export default Customers;
