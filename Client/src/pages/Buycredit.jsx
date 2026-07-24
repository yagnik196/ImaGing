import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const Buycredit = () => {
  
  const {user}=useContext(AppContext);

  return (
    <div className='min-h-[85vh] text-center pt-14 mb-10 mx-32'>
      <button className='inline-flex items-center gap-2 px-12 py-2 rounded-full bg-white border-2 border-gray-300 mb-6 text-black m-auto '>Our Plans</button>
      <h1 className='text-4xl mb-6 font-medium'>Choose a Plan</h1>

      <div className='grid grid-cols-3 gap-8 mx-12 px-8'>
        {plans.map((item, index) => (
          <div key={index} className='p-8 bg-neutral-100 shadow-sm rounded-xl border border-gray-200 hover:bg-white hover:scale-[1.05] transition-hover duration-300 cursor-pointer'>
            <img src={assets.logo_icon} />
            <p className='text-3xl mt-2 mb-2'>{item.id}</p>
            <p className='text-gray-600 mb-4'>{item.desc}</p>
            <p className='text-3xl font-medium mb-6'>${item.price}/<span>{item.credits} credits</span></p>
            <button className='inline-flex items-center gap-2 px-12 py-2 rounded-full bg-white border-2 border-gray-300 mb-6 text-black m-auto hover:bg-blue-500 hover:text-white hover:border-blue-500 cursor-pointer transition-hover duration-500'>
                {user? "purchased":"Get Started"}
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Buycredit