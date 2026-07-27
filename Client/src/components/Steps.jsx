import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center max-w-4xl mx-auto my-32'
    >
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>How it works?</h1>
      <p className='text-center text-neutral-600 mb-8'>Generate high-quality images using advanced AI. Perfect for projects, portfolios, and creative work.</p>

      <div className='space-y-4 w-full rounded-md max-w-3xl text-sm'>
        {stepsData.map((item, index) => (
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            key={index} 
            className='flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border rounded-xl cursor-pointer'
          >
            <img src={item.icon} alt="" />
            <div className='flex flex-col'>
              <h1 className='font-semibold text-xl text-neutral-800'>{item.heading}</h1>
              <p className='text-gray-500'>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps