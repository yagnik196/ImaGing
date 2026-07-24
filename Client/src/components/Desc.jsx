import React from 'react'
import { assets } from '../assets/assets'

const Desc = () => {
  return (
    <div className='max-w-5xl mx-auto pt-32'>
      <h1 className='text-center text-4xl sm:text-5xl font-semibold mb-2'>Create AI images </h1>
      <p className='text-center text-lg text-gray-500 mb-8'>Turn your imagination into pictures using ImaGing AI</p>


      <div className='flex flex-col gap-5 md:gap-14 md:flex-row item-center'>
        <img src={assets.sample_img_2} alt="" className='width-80 xl:width-96 rounded-lg' />
        <div>

          <h2 className='text-3xl font-semibold mb-4 max-w-lg'>Introducing AI powered image Generator ImaGing</h2>
          <p className='text-gray-600 mb-8 text-lg '>
            ImaGing is a free, easy-to-use AI image generator that turns your words into images in seconds.
            Whether you need something for a project, school, or just for fun, ImaGing makes it simple to bring your ideas to life.
            ImaGing is a free, easy-to-use AI image generator that turns your words into images in seconds.
            Whether you need something for a project, school, or just for fun, ImaGing makes it simple to bring your ideas to life.
            ImaGing is a free, easy-to-use AI image generator that turns your words into images in seconds.
            Whether you need something for a project, school, or just for fun, ImaGing makes it simple to bring your ideas to life.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Desc