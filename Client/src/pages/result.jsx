import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const result = () => {

  const [image, setimage] = useState(assets.sample_img_1);
  const [isimageloaded, setloaded] = useState(false);
  const [loading, setloading] = useState(false);
  const [input, setinput] = useState('');

  const submithandler = async (e) => {
    setloading(true);
    // Complete with backend
  }

  return (
    <motion.form 
      initial={{ opacity: 0.2, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      onSubmit={submithandler} 
      className='flex flex-col min-h-[90vh] justify-center items-center'
    >
      <div className='w-full flex flex-col gap-4 items-center'>
        <div className='relative flex-1'>
          <img src={image} alt="" className='w-full p-4 rounded-lg' />
          <span className={loading ? 'absolute  bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10]' : 'w-0'} />
        </div>

        <p className={!loading ? 'hidden' : ''}>Loading...</p>
      </div>

      {!isimageloaded && 
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className='pcolor flex w-full max-w-xl bg-neutral-500 rounded-full m-auto p-2 text-white'
      >
        <input onChange={e => setinput(e.target.value)} value={input} type="text" name="prompt" id="" placeholder='Enter Whatever you are ImaGing...'
          className='flex-1  bg-transparent outline-none ml-8 max-sm:w-20' />
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type='submit' 
          className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto cursor-pointer transition'
        >
          Generate
          <img src={assets.star_group} alt="arrow" className='h-6 w-6' />
        </motion.button>
      </motion.div>}

      {isimageloaded && 
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='flex gap-4 m-auto mt-4 mb-12'
      >
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={image} 
          download 
          className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto cursor-pointer transition'
        >
          Download Image
        </motion.a>
        <motion.p 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => { setloaded(false); }} 
          className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto cursor-pointer transition'
        >
          Generate Another Image
        </motion.p>
      </motion.div>}
    </motion.form>

  )
}

export default result