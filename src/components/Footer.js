import React from "react";
import logo from "@/assets/SVGs/lightLogo.svg";
import Image from "next/image";
import instagram_icon from "@/assets/SVGs/instagram_icon.svg";
import twitter_icon from "@/assets/SVGs/twitter_icon.svg";
import dribble_icon from "@/assets/SVGs/dribble_icon.svg";
import youtube_icon from "@/assets/SVGs/youtube_icon.svg";
import Link from "next/link";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <div className="bg-[#263238] flex flex-col lg:flex-row justify-between py-[80px] px-[10%] font-light">
      <div className="w-[300px]">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <Image src={logo} height={33} alt="Logo" />
          </div>
          <div className="my-7 text-white text-[0.9rem]">
            <h1>Copyright 2020 Nexcent ltd.</h1>
            <h1>All rights reserved</h1>
          </div>
          <div className="flex gap-3">
            <Image
              alt="youtube_icon"
              src={youtube_icon}
              height={35}
            />
            <Image
              alt="twitter_icon"
              src={twitter_icon}
              height={35}
            />
            <Image
              alt="dribble_icon"
              src={dribble_icon}
              height={35}
            />
            <Image
              alt="instagram_icon"
              src={instagram_icon}
              height={35}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row lg:px-10 pt-10 lg:pt-0 gap-10 text-white">
        <div>
          <h1 className="font-semibold text-[1.3rem]">Company</h1>
          <br />
          <ol>
            <li className="mt-2 text-[0.9rem]"><Link href="">About us</Link></li>
            <li className="mt-2 text-[0.9rem]"><Link href="">Blog</Link></li>
            <li className="mt-2 text-[0.9rem]"><Link href="">Contact us</Link></li>
            <li className="mt-2 text-[0.9rem]"><Link href="">Pricing</Link></li>
            <li className="mt-2 text-[0.9rem]"><Link href="">Testimonials</Link></li>
          </ol>
        </div>
        <div>
          <h1 className="font-semibold text-[1.3rem]">Support</h1>
          <br />
          <ol>
            <li className="mt-2 text-[0.9rem]"><Link href="">Help center</Link></li>
            <li className="mt-2 text-[0.9rem]"><Link href="">Terms of service</Link></li>
            <li className="mt-2 text-[0.9rem]"><Link href="">Legal</Link></li>
            <li className="mt-2 text-[0.9rem]"><Link href="">Privacy Policy</Link></li>
            <li className="mt-2 text-[0.9rem]"><Link href="">Status</Link></li>
          </ol>
        </div>
        <div>
          <h1 className="font-semibold text-[1.3rem]">Stay up to date</h1>
          <Input placeholder="Your email address" className="w-auto bg-[#FFFFFF1a] text-white mt-9 border-0" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
