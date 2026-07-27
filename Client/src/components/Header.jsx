import React from 'react'
import {useNavigate} from 'react-router-dom'
import { assets } from '../assets/assets'
import { motion } from "framer-motion"

const Header = () => {
    const navigate = useNavigate();
    return (
        <motion.div className='flex flex-col items-center justify-center text-center my-20'
            initial={{ opacity: 0.2, y: 100 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border-neutral-500 border'
                initial={{ opacity: 0, y: -2 }}
                transition={{ delay: 0.2, duration: 1 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <p>Best text to image generator</p>
                <img src={assets.star_icon} className='w-4' />
            </motion.div>


            <motion.h1 className='text-4xl max-w-[500px] mx-auto sm:max-w-[590px] mt-2 text-center'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
            >
                Describe the image you are
                <span className='text-blue-500'> imaGing...</span>
            </motion.h1>
            <motion.p className='tex-center max-w-xl mx-auto text-stone-600 mt-2 mb-10 text-sm sm:text-base'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
            >
                Generate high-quality images using advanced AI. Perfect for projects, portfolios, and creative work.
            </motion.p>
            <motion.button className='inline-flex items-center gap-2 px-12 py-3 mb-10 rounded-full bg-black text-white m-auto hover:scale-[1.10] cursor-pointer duration-500 transition'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ default: { duration: 0.2 }, opacity: { delay: 0.8, duration: 1 } }}
                onClick={()=>{navigate("/result")}}
            >
                Generate Image
                <img src={assets.star_group} alt="arrow" className='h-6 w-6' />
            </motion.button>

            <motion.div className='flex justify-center gap-8 mt-8'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
            >
                {Array(6).fill('').map((item, index) => (
                    <motion.img className='rounded hover:scal-125 transition-all duration-500 max-sm:w-10'
                        whileHover={{ scale: 1.05, duration: 0.1 }}
                        src={(index % 2) ? assets.sample_img_1 : assets.sample_img_2} alt="" key={index} width={70} />
                ))}
            </motion.div>
            <motion.p className='mt-2 text-neutral-600'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
            >
                Images generated from ImaGing
            </motion.p>
        </motion.div>
    )
}

export default Header