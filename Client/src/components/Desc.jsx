import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Desc = () => {
  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='max-w-5xl mx-auto pt-32'
    >
      <h1 className='text-center text-4xl sm:text-5xl font-semibold mb-2'>Create AI images </h1>
      <p className='text-center text-lg text-gray-500 mb-8'>Turn your imagination into pictures using ImaGing AI</p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
        <motion.img 
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          src={assets.sample_img_2} alt="" className='w-80 xl:w-96 rounded-lg' 
        />
        <motion.div 
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className='text-3xl font-semibold mb-4 max-w-lg'>Introducing AI powered image Generator ImaGing</h2>
          <p className='text-gray-600 mb-8 text-lg '>
            ImaGing is a free, easy-to-use AI image generator that turns your words into images in seconds.
            Whether you need something for a project, school, or just for fun, ImaGing makes it simple to bring your ideas to life.
            ImaGing is a free, easy-to-use AI image generator that turns your words into images in seconds.
            Whether you need something for a project, school, or just for fun, ImaGing makes it simple to bring your ideas to life.
            ImaGing is a free, easy-to-use AI image generator that turns your words into images in seconds.
            Whether you need something for a project, school, or just for fun, ImaGing makes it simple to bring your ideas to life.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Desc