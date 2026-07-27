import React from 'react'
import { testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {    
  return (
    <motion.div 
      initial={{ opacity: 0.2, y: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='max-w-5xl mx-auto mt-32'
    >
        <h1 className='text-4xl font-medium text-center'>User Testimonials</h1>
        <p className='text-center mb-12'>Here are what some of our users say about ImaGing</p>

        <div className='flex flex-col md:flex-row gap-8'>
            {testimonialsData.map((testimonial, index) => (
                <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    whileHover={{ scale: 1.05, y: -7 }}
                    className='rounded-xl bg-white/2 border p-4 cursor-pointer transition-all duration-500'
                >
                    <div className='flex flex-row gap-4'>
                        <div>
                            <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl'>{testimonial.name}</h2>
                            <p>{testimonial.role}</p>
                        </div>
                    </div>
                    <p className='mt-4'>{testimonial.text}</p>
                </motion.div>
            ))}
        </div>
    </motion.div>
  )
}

export default Testimonials