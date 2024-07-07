import React from "react";
import mobile_login from "@/assets/SVGs/mobile_login.svg";
import Image from "next/image";
import { Button } from "./ui/button";
const Unlock = () => {
  return (
    <div className="flex px-[10%] justify-between mb-20 mt-10">
      <Image src={mobile_login} alt="mobile_login" height={350} className="hidden lg:block"/>
      <div className=" flex flex-col justify-around gap-3">
        <div >
          <h2 className="font-semibold text-[38px] leading-[44px]  mb-2 text-dark-gray">
            The unseen of spending three years at Pixelgrade
          </h2>
          <p className="text-[14px] mt-5 text-light-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
        </div>
       <div> <Button className='h-[58px] w-[180px] text-[1.2rem]'>Learn More </Button></div>
      </div>
    </div>
  );
};

export default Unlock;
