import React from 'react'
const lol="px-2 py-2 bg-slate-200  underline-offset-1 border-bottom grid grid-cols-5"
const card ="hover:'{gap}' hover:animate-pulse cursor-pointer mt-1 mr-1 h-[220px] mb-2 max-w-sm p-2  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
const imagee="h-[200px] w-[400px] rounded"
const gap="w-[300px] h-[300px]"

function page() {
  return (
    <div>
      <div className='text-center text-4xl mb-2 font-mono font-semibold'> GALLERY</div>
    <div className={lol}>         
      <div className={card}>
        <img src="/gal/DSC_2643.JPG" className={imagee} />  
      </div>  
      <div className={card}>
        <img src="\gal\DSC_2644.JPG" className={imagee} />  
      </div>
      <div className={card}>
        <img src="/gal/DSC_2647.JPG" className={imagee} />  
      </div>  
      <div className={card}>
        <img src="/gal/DSC_2654.JPG" className={imagee} />  
      </div>
      <div className={card}>
        <img src="/gal/DSC_2662.JPG" className={imagee} />  
      </div>  
      <div className={card}>
        <img src="/gal/DSC_2671.JPG" className={imagee} />  
      </div>
      <div className={card}>
        <img src="/gal/DSC_2687.JPG" className={imagee} />  
      </div>  
      <div className={card}>
        <img src="/gal/DSC_2690.JPG" className={imagee} />  
      </div>
      <div className={card}>
        <img src="/gal/DSC_2701.JPG" className={imagee} />  
      </div>  
      <div className={card}>
        <img src="/gal/DSC_2706.JPG" className={imagee} />  
      </div>
      <div className={card}>
        <img src="/gal/DSC_2707.JPG" className={imagee} />  
      </div>  
      <div className={card}>
        <img src="/gal/DSC_2751.JPG" className={imagee} />  
      </div>
      <div className={card}>
        <img src="/gal/DSC_2766.JPG" className={imagee} />  
      </div> 
      <div className={card}>
        <img src="/gal/DSC_2768.JPG" className={imagee} />  
      </div>
      <div className={card}>
        <img src="/gal/DSC_2779.JPG" className={imagee} />  
      </div>
      <div className={card}>
        <img src="/gal/DSC_2821.JPG" className={imagee} />  
      </div>
      <div className={card}>
        <img src="/gal/DSC_2837.JPG" className={imagee} />  
      </div>        
      <div className={card}>
        <img src="/gal/DSC_2848.JPG" className={imagee} />  
      </div>
      <div className={card}>
        <img src="/gal/DSC_2858.JPG" className={imagee} />  
      </div>
      <div className={card}>
        <img src="/gal/DSC_2847.JPG" className={imagee} />  
      </div>
      </div>
    </div>
    
  )
}

export default page