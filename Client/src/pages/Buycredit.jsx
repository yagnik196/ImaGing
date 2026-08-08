import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios'

const Buycredit = () => {

  const { user, BackendURL, load_credits, token, setShowLogin } = useContext(AppContext);

  const navigate = useNavigate();

  const initpay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      receipt: order.id,
      name: "ImaGing",
      description: "Pay for credits",
      order_id: order.id,
      handler: async (res) => {
        try {
          const { data } = await axios.post(BackendURL + "/api/user/verify-razor", res, { headers: { token } });
          if (data.success) {
            load_credits();
            navigate("/");
            toast.success(data.message || "Credits added successfully!");
          } else {
            toast.error(data.message);
          }
        } catch (error) {
          toast.error(error.message);
        }
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open();
  }

  const makepayment = async (planId) => {
    try {
      if (!user) setShowLogin(true);

      const { data } = await axios.post(BackendURL + "/api/user/razor-pay", { planId }, { headers: { token } })

      if (data.success) {
        initpay(data.order)
      }
      else {
        toast.error(data.message);
      }


    } catch (e) {
      toast.error(e.message)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0.2, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className='min-h-[80vh] text-center pt-14 mb-10 px-4 sm:px-10 md:px-14 lg:px-20'
    >
      <button className='border border-gray-400 px-10 py-2.5 rounded-full mb-6 text-neutral-600 bg-white hover:bg-neutral-50 transition-all duration-300 shadow-sm font-medium text-sm'>
        Our Plans
      </button>
      <h1 className='text-3xl sm:text-4xl font-medium mb-10 text-neutral-800'>Choose a Plan</h1>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left px-4 md:px-0'>
        {plans.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05, translateY: -5 }}
            className={`p-8 bg-white/60 backdrop-blur-lg rounded-2xl border transition-all duration-500 cursor-pointer flex flex-col justify-between relative overflow-hidden shadow-md hover:shadow-xl ${item.id === 'Advanced'
              ? 'border-blue-500 ring-2 ring-blue-500/10 bg-white/80'
              : 'border-gray-200 hover:border-blue-400'
              }`}
          >
            <div>
              {item.id === 'Advanced' && (
                <span className='absolute top-3 right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-wider shadow-sm'>
                  Popular
                </span>
              )}
              <img src={assets.logo_icon} alt="" className='w-12 h-12 mb-5 p-2.5 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 shadow-sm object-contain' />
              <h3 className='text-2xl font-bold text-gray-800 mb-1'>{item.id}</h3>
              <p className='text-gray-500 text-sm mb-6 font-medium'>{item.desc}</p>
            </div>

            <div className='mt-auto'>
              <div className='mb-6 flex items-baseline gap-1'>
                <span className='text-4xl font-extrabold text-gray-900'>₹{item.price}</span>
                <span className='text-gray-500 text-sm font-semibold'>/ {item.credits} credits</span>
              </div>
              <motion.button
                onClick={() => makepayment(item.id)}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
                className={`w-full py-3 rounded-full font-bold text-sm transition-all duration-300 text-center shadow-sm cursor-pointer ${item.id === 'Advanced'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-blue-500/20'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-neutral-50 hover:border-gray-400'
                  }`}
              >
                {user ? "Buy Now" : "Get Started"}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

    </motion.div>
  )
}

export default Buycredit