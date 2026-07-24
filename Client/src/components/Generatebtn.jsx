import React from 'react'
import { assets } from '../assets/assets'

const Generatebtn = () => {
  return (
    <div className='flex flex-col gap-4 mt-12 justify-center items-center pb-12'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium text-center'>See the Magic of ImaGing</h1>
        <button className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-[1.10] cursor-pointer duration-500 transition'>
            Generate Image
            <img src={assets.star_group} alt="arrow" className='h-6 w-6' />
        </button>
    </div>
  )
}

export default Generatebtn