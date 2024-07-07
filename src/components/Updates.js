import React from "react";
import community_update_1 from '@/assets/SVGs/community_update_1.svg'
import community_update_2 from '@/assets/SVGs/community_update_2.svg'
import community_update_3 from '@/assets/SVGs/community_update_3.svg'
import Image from "next/image";
import { Button } from "./ui/button";

const data = [
    {
        image: community_update_1,
        label: "Creating Streamlined Safeguarding Processes with OneRen",
        href: "#"
    },
    {
        image: community_update_2,
        label: "What are your safeguarding responsibilities and how can you manage them?",
        href: "#"
    },
    {
        image: community_update_3,
        label: "Revamping the Membership Model with Triathlon Australia",
        href: "#"
    },
]

const Updates = () => {
  return (
    <div className="flex flex-col justify-center text-center items-center gap-3 mt-10 mb-[110px]">
      <h1 className="text-[36px] text-dark-gray">Caring is the new marketing</h1>
      <p className="w-[80%] text-[16px] text-light-gray">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.
      </p>
        <div className="flex justify-around gap-7 mt-3 flex-col lg:flex-row">
        {
            data?.map((update,index)=>{
                return (
                    <div key={index} className="flex flex-col items-center relative">
                        <Image src={update.image} alt="community_updates" height={286} width={368} />
                        <div className="bg-white shadow-lg w-[310px] mt-[-25%] h-[175px] flex flex-col gap-4 rounded-lg justify-center items-center">
                            <h4 className="font-bold text-[1.3rem] text-light-gray">Creating Streamlined Safeguarding Proces with OneRen</h4>
                            <Button variant="ghost" className='text-[1.3rem] font-bold'>Readmore </Button>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  );
};

export default Updates;
