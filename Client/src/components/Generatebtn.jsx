import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Generatebtn = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='flex flex-col gap-4 mt-12 justify-center items-center pb-12'
    >
        <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium text-center'>See the Magic of ImaGing</h1>
        <motion.button 
          onClick={()=>{navigate("/result")}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ default: { duration: 0.2 } }}
          className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto cursor-pointer transition'
        >
            Generate Image
            <img src={assets.star_group} alt="arrow" className='h-6 w-6' />
        </motion.button>
    </motion.div>
  )
}

export default Generatebtn