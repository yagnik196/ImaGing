import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext';

const Buycredit = () => {

  const { user } = useContext(AppContext);

  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10 px-4 sm:px-10 md:px-14 lg:px-20'>
      <button className='border border-gray-400 px-10 py-2.5 rounded-full mb-6 text-neutral-600 bg-white hover:bg-neutral-50 transition-all duration-300 shadow-sm font-medium text-sm'>
        Our Plans
      </button>
      <h1 className='text-3xl sm:text-4xl font-medium mb-10 text-neutral-800'>Choose a Plan</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left px-4 md:px-0'>
        {plans.map((item, index) => (
          <div 
            key={index} 
            className={`p-8 bg-white/40 backdrop-blur-md rounded-2xl border transition-all duration-500 cursor-pointer flex flex-col justify-between relative overflow-hidden shadow-sm hover:shadow-lg hover:scale-[1.03] ${
              item.id === 'Advanced' 
                ? 'border-blue-500 ring-1 ring-blue-500/20 bg-white/60' 
                : 'border-gray-200 hover:border-blue-300'
            }`}
          >
            <div>
              {item.id === 'Advanced' && (
                <span className='absolute top-3 right-3 bg-blue-500 text-white text-[10px] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider'>
                  Popular
                </span>
              )}
              <img src={assets.logo_icon} alt="" className='w-10 h-10 mb-4 p-2 rounded-xl bg-white border border-gray-100 shadow-sm object-contain' />
              <h3 className='text-xl font-semibold text-gray-800 mb-1'>{item.id}</h3>
              <p className='text-gray-500 text-sm mb-6'>{item.desc}</p>
            </div>
            
            <div className='mt-auto'>
              <div className='mb-6'>
                <span className='text-3xl font-bold text-gray-900'>${item.price}</span>
                <span className='text-gray-500 text-sm font-medium'> / {item.credits} credits</span>
              </div>
              <button className={`w-full py-2.5 rounded-full font-medium text-sm transition-all duration-300 text-center ${
                item.id === 'Advanced'
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/10'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}>
                {user ? "purchased" : "Get Started"}
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Buycredit