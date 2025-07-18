import React, { useState } from 'react'
import {
  BsSunFill,
  BsMoon,
}from "react-icons/bs";
const socialIcons = "hover:bg-slate-200 cursor-pointer rounded";
const right=" translate-x-[21px]"
const left=" translate-x-[-1px]"
export default function Toggle() {
    const [toggle, setToggle] = useState(false)

  return (
    <div className='pt-2 grid grid-cols-3'>
      <div>
        <BsMoon className={socialIcons+'pl-4'}/>
      </div>
       <div className={"rounded-[25px] w-[40px] h-fit cursor-pointer transition duration-700 "+(toggle===false?"bg-slate-300":"bg-slate-700")}onClick={()=>setToggle(!toggle)}>
        <div className={"rounded-full h-[20px] w-[20px] bg-white transition duration-500"+(toggle===false?left:right)} ></div>
      </div>
      <div className='pl-2'>
        <BsSunFill className={socialIcons+''}/>
      </div>
    </div>
  )
}
