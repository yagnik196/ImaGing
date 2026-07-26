import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    const {user, setShowLogin} = useContext(AppContext)
    const navigate = useNavigate();

    return (
        <div className='flex items-center justify-between py-4'>
            <Link to='/'>
                <img src={assets.logo} alt="Logo" className='w-28 sm:w-32 lg:w-40' />
            </Link>

            <div>
                {user ?
                    <div className='flex items-center gap-2 sm:gap-3'>

                        {/* for logged in */}
                        <button onClick={()=> navigate('/buy')}className='flex item-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>
                            <img src={assets.credit_star} alt='' className='w-5' />
                            <p className='text-xs sm:text-sm font-medium text-gray-600'>  Credit Left : 50 </p>
                        </button>

                        <p className='text-gray-600 max-sm:hidden pl-4'>Hi Yagnik</p>
                        <div className='relative group flex items-center gap-2 sm:gap-3'>
                            <img src={assets.profile_icon} alt='' className='w-10 drop-shadow' />
                            <div className='absolute hidden group-hover:block top-11 right-0 z-5000 text-black rounded bg-white'>
                                <ul className='list-none m-0 p-2 bg-white rounded-md text-sm shadow'>
                                    <li className='py-2 px-4 cursor-pointer pr-10 hover:bg-zinc-50'>Logout</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    :
                    <div className='flex items-center gap-5'>
                        {/* for logged out */}
                        <p onClick={() => navigate('/buy')} className='cursor-pointer text-lg font-medium'>Pricing</p>

                        <button className='bg-zinc-800 text-white px-7 py-3 sm:px-8 text-sm rounded-full' onClick={()=>setShowLogin(true)}>
                            Login
                        </button>
                    </div>
                }

            </div>

        </div>
    )
}

export default Navbar