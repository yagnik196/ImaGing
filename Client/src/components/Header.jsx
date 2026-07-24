import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center my-20'>
            <div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border-neutral-500 border'    >
                <p>Best text to image generator</p>
                <img src={assets.star_icon} className='w-4' />
            </div>


            <h1 className='text-4xl max-w-[500px] mx-auto sm:max-w-[590px] mt-2 text-center'>Describe the image you are <span className='text-blue-500'>imaGing...</span></h1>
            <p className='tex-center max-w-xl mx-auto text-stone-600 mt-2 mb-10 text-sm sm:text-base'>
                Generate high-quality images using advanced AI. Perfect for projects, portfolios, and creative work.
            </p>
            <button className='inline-flex items-center gap-2 px-12 py-3 mb-10 rounded-full bg-black text-white m-auto hover:scale-[1.10] cursor-pointer duration-500 transition'>
                Generate Image
                <img src={assets.star_group} alt="arrow" className='h-6 w-6' />
            </button>

            <div className='flex justify-center gap-8 mt-8'>
                {Array(6).fill('').map((item, index) => (
                    <img className='rounded hover:scal-125 transition-all duration-500 max-sm:w-10' src={(index%2)?assets.sample_img_1:assets.sample_img_2} alt="" key={index} width={70} />
                ))}
            </div>
            <p className='mt-2 text-neutral-600'>Images generated from ImaGing</p>
        </div>
    )
}

export default Header