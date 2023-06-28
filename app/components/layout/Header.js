import Link from 'next/link';
import React from 'react';
import {FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa6'
const row = "flex flex-row "
const socialIcons = "p-2 hover:bg-slate-200 cursor-pointer h-fit w-fit rounded"
const gap = "w-2"
const link = "uppercase h-full "
export default function Header() {
  return (
    <div>
        <header className='px-4 py-1'>
            <div className={row + "justify-between mb-2"}>
                <span className='w-[400px] text-sm'>University Of Engineering & Management, New Town, University Area, Plot No. III, B/5, New Town Rd, Action Area III, Newtown, Kolkata, West Bengal 700160</span>

                <div className={row + " items-center"}>
                    <a className='text-sm' href="email:admissions@iemcal.com">admissions@iemcal.com</a>
                    <div className='w-6'></div>
                    <div className={socialIcons}>
                        <FaTwitter className='w-6 h-6' />
                    </div>
                    <div className={socialIcons}>
                        <FaFacebook className='w-6 h-6'/>
                    </div>
                    <div className={socialIcons}>
                        <FaInstagram className='w-6 h-6'/>
                    </div>
                    <div className={socialIcons}>
                        <FaLinkedinIn className='w-6 h-6'/>
                    </div>
                </div>
            </div>
            <div className={row + "w-[400px] mb-2"}>
                <img src="/images/CSIFINALLOGO.png"/>
            </div>
            <div className={row + "mb-2"}>
                <Link href='/'><div className={link}>home</div></Link>
                <div className={gap}></div>
                <Link href='/about'><div className={link}>about</div></Link>
                <div className={gap}></div>
                <Link href='/contacts'><div className={link}>Contact</div></Link>
            </div>
        </header>
        
    </div>
  )
}
