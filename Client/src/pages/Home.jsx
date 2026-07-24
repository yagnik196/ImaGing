import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Desc from '../components/Desc'
import Testimonials from '../components/Testimonials'
import Generatebtn from '../components/Generatebtn'

const Home = () => {
  return (
    <div>
        <Header />
        <Steps />
        <Desc />
        <Testimonials />
        <Generatebtn />
    </div>
  )
}

export default Home