import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const Login = () => {

    const [state,setState] = useState("Login")
    const {setShowLogin, setUser} = useContext(AppContext)

    useEffect(()=>{
        document.body.style.overflow='hidden';

        return ()=>{
            document.body.style.overflow='unset';
        }
    },[])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setUser({ name: "Yagnik" });
        setShowLogin(false);
    }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className='absolute top-0 bottom-0 right-0 left-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'
    >
        <motion.form 
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onSubmit={onSubmitHandler} 
          className='relative bg-white p-10 rounded-xl text-slate-500'
        >
            <h1 className='font-bold text-3xl mb-3 flex items-center justify-center'>{state}</h1>
            <p className='text-sm'>{state=="Login" ? "Welcome Back! Please Sign in to continue" : "Enter your details to create an account"}</p>
            {state == 'Sign Up' && <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <img src={assets.user_icon} alt=''/>
                <input type="text" name="name" id="" placeholder='Full Name' className='outline-none text-sm'/>
            </div>}

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <img src={assets.email_icon} alt=''/>
                <input type="email" name="name" id="" placeholder='Email Id' className='outline-none text-sm'/>
            </div>

            <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5'>
                <img src={assets.lock_icon} alt=''/>
                <input type="password" name="name" id="" placeholder='Password' className='outline-none text-sm'/>
            </div>

            {state == "Login" ? <p className='text-sm text-blue-600 mt-4 cursor-pointer hover:text-blue-800'>Forgot Password?</p> : null}

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='inline-flex mt-6 w-full items-center justify-center gap-2 px-12 py-2 rounded-full bg-blue-500 border-2 border-gray-300 mb-6 text-white m-auto hover:bg-blue-600 cursor-pointer transition duration-300'
            >
              {state == 'Login' ? 'Login' : 'Sign Up'}
            </motion.button>

            {state == 'Login' ? <p className='mt-3 text-center' onClick={()=>setState("Sign Up")}>Dont have account?<span className='text-blue-600 ml-1 cursor-pointer hover:text-blue-800'>Sign up</span></p> 
            : <p className='mt-3 text-center' onClick={() => setState('Login')}>Already have account?<span className='text-blue-600 ml-1 cursor-pointer hover:text-blue-800'>Log In</span></p>}


            <motion.img 
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              src={assets.cross_icon} 
              className='absolute top-4 right-4 w-4 cursor-pointer' 
              onClick={()=>{
                setShowLogin(false)
              }}
            />

        </motion.form>
    </motion.div>
  )
}

export default Login