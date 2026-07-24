import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonials = () => {    
  return (
    <div className='max-w-5xl mx-auto mt-32'>
        <h1 className='text-4xl font-medium text-center'>User Testimonials</h1>
        <p className='text-center mb-12'>Here are what some of our users say about ImaGing</p>

        <div className='flex flex-row gap-8'>
            {testimonialsData.map((testimonial, index) => (
                <div key={index} className='rounded-xl bg-white/2 border p-4 hover:scale-[1.10] cursor-pointer duration-500 transition'>
                    <div className='flex flex-row gap-4'>
                        <div>
                            <img src={testimonial.image} alt={testimonial.name} />
                        </div>
                        <div className='flex flex-col'>
                            <h2 className='text-2xl'>{testimonial.name}</h2>
                            <p>{testimonial.role}</p>
                        </div>
                    </div>
                    <p>{testimonial.text}</p>
                </div>

            ))
            }
        </div>
    </div>
  )
}

export default Testimonials