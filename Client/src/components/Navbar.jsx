import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const Navbar = () => {
    const { user, setShowLogin, logout, credit } = useContext(AppContext)
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ opacity: 0.2, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex items-center justify-between py-4'
        >
            <Link to='/'>
                <motion.img
                    whileHover={{ scale: 1.02 }}
                    src={assets.logo}
                    alt="Logo"
                    className='w-28 sm:w-32 lg:w-40 cursor-pointer'
                />
            </Link>

            <div>
                {user ?
                    <div className='flex items-center gap-2 sm:gap-3'>

                        {/* for logged in */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/buy')}
                            className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full cursor-pointer transition'
                        >
                            <img src={assets.credit_star} alt='' className='w-5' />
                            <p className='text-xs sm:text-sm font-medium text-gray-600'>  Credit Left : {credit} </p>
                        </motion.button>

                        <p className='text-gray-600 max-sm:hidden pl-4'>Hi {user.name}</p>
                        <div className='relative group flex items-center gap-2 sm:gap-3'>
                            <img src={assets.profile_icon} alt='' className='w-10 drop-shadow cursor-pointer' />
                            <div className='absolute hidden group-hover:block top-10 right-0 z-50 text-black rounded bg-white'>
                                <ul className='list-none m-0 p-2 bg-white rounded-md text-sm shadow'>
                                    <li onClick={logout} className='py-2 px-4 cursor-pointer pr-10 hover:bg-zinc-50'>Logout</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                    :
                    <div className='flex items-center gap-5'>
                        {/* for logged out */}
                        <motion.p
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/buy')}
                            className='cursor-pointer text-lg font-medium'
                        >
                            Pricing
                        </motion.p>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-zinc-800 text-white px-7 py-3 sm:px-8 text-sm rounded-full cursor-pointer'
                            onClick={() => setShowLogin(true)}
                        >
                            Login
                        </motion.button>
                    </div>
                }

            </div>

        </motion.div>
    )
}

export default Navbar