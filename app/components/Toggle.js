import React, { useState } from 'react'
const right=" translate-x-[21px]"
const left=" translate-x-[-1px]"
export default function Toggle() {
    const [toggle, setToggle] = useState(false)

  return (
    <div className={"rounded-[25px] w-[40px] h-fit cursor-pointer transition duration-700 "+(toggle===false?"bg-slate-300":"bg-slate-700")}>
        <div className={"rounded-full h-[20px] w-[20px] bg-white transition duration-500"+(toggle===false?left:right)} onClick={()=>setToggle(!toggle)}></div>
    </div>
  )
}
