"use client"
import React, { useState } from 'react'
const lol="px-2 py-2 bg-slate-200  underline-offset-1 border-bottom grid grid-cols-5"
const card ="hover:'{gap}' hover:animate-pulse cursor-pointer mt-1 mr-1 h-[220px] mb-2 max-w-sm p-2  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
const imagee="h-[200px] w-[400px] rounded"
const gap="w-[300px] h-[300px]"
const overlayshow="flex justify-center items-center fixed top-0 left-0 z-[998] h-full w-full bg-slate-800/80 backdrop-blur-sm"
const overlayhide="flex justify-center items-center fixed top-0 left-0 z-[998] h-full w-full bg-slate-800/80 backdrop-blur-sm hidden"
function page() {
  const [start, setStart] = useState(0)
  const [hidden, setHidden] = useState(true)
  return (
    <div>
      <div className='text-center text-4xl mb-2 font-mono font-semibold'>GALLERY</div>
      <div className={hidden?overlayhide:overlayshow} onClick={()=>setHidden(true)}>
        <img className='h-[90%] z-[999]' src={"/gal/"+(start+1)+".JPG"}/>
      </div>
      <div className={lol}>
        {
          new Array(20).fill('').map((item, index)=>(
            <div className={card} key={index} >
              <img src={"/gal/"+(index+1)+".JPG"} className={imagee} onClick={()=>{
                setStart(index);
                setHidden(false)
              }}/>  
            </div>  
          ))
        }
      </div>
    </div>
    
  )
}

export default page