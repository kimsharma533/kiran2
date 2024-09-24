import React from 'react'
import banner from "../../public/banner.jpg"
function Banner() {
  return (
<>
<div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
    <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
        <div className='space-y-12'>
        <h1 className='text-4xl font-bold'>Hello,welcome here to learn something <span className='text-pink-500'>new everyday!!!</span></h1>
        <p className='text-xl '>
        Follow the journey of a determined protagonist who faces challenges and obstacles that test their limits. 
        </p>
        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Username" />
</label>
</div>
<button className="btn mt-6  btn-secondary">Secondary</button>    
    </div>
    <div className=' order-1 w-full md:w-1/2  dark:bg-slate-900 dark:text-white '>
        <img src={banner} className='w-92 h-92  dark:bg-slate-900 dark:text-white ' alt=""/>
    </div>
</div>        
</>
  );
}

export default Banner