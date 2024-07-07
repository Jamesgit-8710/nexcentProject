import React from "react";
import calender_image from "@/assets/SVGs/calender_image.svg";
import Image from "next/image";
import { Button } from "./ui/button";
const Calender = () => {
  return (
    <div className=" flex mt-[60px] px-[10%] pb-[60px]">
      <Image src={calender_image} alt="mobile_login" height={480} className="hidden lg:block" />
      <div className="flex flex-col justify-around">
        <div className="ml-20">
          <h2 className="font-semibold text-[38px] leading-[44px]  mb-2 text-dark-gray">
          How to design your site footer like we did
          </h2>
          <p className="text-[14px] mt-4 text-light-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <div className="mt-20">
          <Button className='h-[58px] w-[180px] text-[1.2rem]'>Learn More </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calender;
