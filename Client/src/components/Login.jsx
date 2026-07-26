import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Login = () => {

    const [state,setState] = useState("Login")
    const {setShowLogin} = useContext(AppContext)

    useEffect(()=>{
        document.body.style.overflow='hidden';

        return ()=>{
            document.body.style.overflow='unset';
        }
    },[])

  return (
    <div className='absolute top-0 bottom-0 right-0 left-0 z-10 
    blackdrop-blur-sm bg-black/30 flex justify-center items-center '>
        
        <form action="" className='relative bg-white p-10 rounded-xl text-slat-500'>
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

            {state == "Login" ? <p className='text-sm text-sm text-blue-600 mt-4 cursor-pointer hover:text-blue-800'>Forgot Password?</p> : null}

            <button className='inline-flex mt-6 w-full items-center justify-center gap-2 px-12 py-2 rounded-full bg-blue-500 border-2 border-gray-300 mb-6 text-white m-auto hover:bg-blue-600 cursor-pointer transition-hover duration-500'>
              {state == 'Login' ? 'Login' : 'Sign Up'}
            </button>

            {state == 'Login' ? <p className='mt-3 text-center' onClick={()=>setState("Sign Up")}>Dont have account?<span className='text-blue-600 ml-1 cursor-pointer hover:text-blue-800'>Sign up</span></p> 
            : <p className='mt-3 text-center' onClick={() => setState('Login')}>Already have account?<span className='text-blue-600 ml-1 cursor-pointer hover:text-blue-800'>Log In</span></p>}


            <img src={assets.cross_icon} className='absolute top-4 right-4 w-4 cursor-pointer' onClick={()=>{
                setShowLogin(false)
            }}/>

        </form>
    </div>
  )
}

export default Login