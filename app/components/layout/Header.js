"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import Toggle from "../Toggle";
const row = "flex flex-row ";
const socialIcons = "p-2 hover:bg-slate-200 cursor-pointer h-fit w-fit rounded";
const gap = "w-4";
const link = "uppercase h-full p-2 rounded";
export default function Header() {
  const pathname = usePathname();
  
  const ThemeSwitcher =()=>{
   const {theme,setTheme}= useTheme();
  }
  return (



    <div className="">  
      {console.log(pathname)}
      <div className={row + "px-4 py-2 justify-between mb-2 bg-blue-600"}>
        <span className="w-[400px] text-white text-sm">
          University Of Engineering & Management, New Town, University Area,
          Plot No. III, B/5, New Town Rd, Action Area III, Newtown, Kolkata,
          West Bengal 700160
        </span>

        <div className={row + " items-center"}>
          <a className="text-sm" href="email:admissions@iemcal.com">
            admissions@iemcal.com
          </a>
          <div className="w-6"></div>
          <div className={socialIcons}>
            <FaTwitter className="w-6 h-6" />
          </div>
          <div className={socialIcons}>
            <FaFacebook className="w-6 h-6" />
          </div>
          <div className={socialIcons}>
            <FaInstagram className="w-6 h-6" />
          </div>
          <div className={socialIcons}>
            <FaLinkedinIn className="w-6 h-6" />
          </div>
        </div>
      </div>
      <header className="px-4 py-1">
        <div className={row + "w-[400px] mb-2"}>
          <img src="/images/CSIFINALLOGO.png" />
        </div>
        <div className={row + " mb-2 bg-slate-200 rounded px-4 py-2 "}>
          <Link href="/">
            <div className={link + (pathname === "/" ? " bg-blue-200" :"  hover:animate-bounce")+""}>
              home
            </div>
          </Link>
          <div className={gap}></div>
          <Link href="/about">
            <div
              className={link + (pathname === "/about" ? " bg-blue-200" : " hover:animate-bounce")+" "}
            >
              about
            </div>
          </Link>
          <div className={gap}></div>
          <Link href="/contacts">
            <div
              className={
                link + (pathname === "/contacts" ? " bg-blue-200" : " hover:animate-bounce")+" "}
            >
              Contact
            </div>
          </Link>
          <div className={gap}></div>
          <Link href="/event">
            <div
              className={link + (pathname === "/event" ? " bg-blue-200" : " hover:animate-bounce")+" "}
            >
              Event
            </div>
          </Link>
          <div className={gap}></div>
          <Link href="/gallery">
            <div
              className={link + (pathname === "/gallery" ? " bg-blue-200" : " hover:animate-bounce")+" "}
            >
              Gallery
            </div>
          </Link>
          <div className={gap}></div>
          <Link href="/members">
            <div
              className={link + (pathname === "/members" ? " bg-blue-200" : " hover:animate-bounce")+" grow  "}
            >
              Members
            </div>
          </Link> 
          <div className="grow"></div>
            {/* <div className="uppercase  items-end h-full p-2 rounded">
              Button
            </div> */}
            <Toggle />
                  
        </div>
        
      </header>
    </div>
  );
}
