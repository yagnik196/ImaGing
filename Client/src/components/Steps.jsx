import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-4xl mx-auto'>
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it works?</h1>
      <p className='text-center text-neutral-600'>Generate high-quality images using advanced AI. Perfect for projects, portfolios, and creative work.</p>

      <div className='space-y-4 w-full rounded-md mt-8 max-w-3xl text-sm'>
        {stepsData.map((item,index)=>(
          <div key={index} className='flex item-center gap-4 p-5 px-8 bg-white/20 shadow-md
          border hover:scale-[1.02] transition-all duration-500'>
            <img src={item.icon} alt="" />
            <div className='flex flex-col'>
              <h1 className='font-semibold text-xl text-neutral-800'>{item.heading}</h1>
              <p className='text-gray-500'>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Steps