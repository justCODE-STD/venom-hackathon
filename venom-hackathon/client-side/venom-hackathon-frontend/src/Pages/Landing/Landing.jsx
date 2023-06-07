import React, { useState } from 'react'
import './Landing.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Input from '../../Components/Input/Input'
import Hero from '../../Components/Hero/Hero'
import Features from '../../Components/Features/Features'
import Choose from '../../Components/Choose/Choose'
import GetStarted from '../../Components/GetStarted/GetStarted'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Partners from '../../Components/Partners/Partners'
import Footer from '../../Components/Footer/Footer'

const Landing = () => {

  return (
    <div id='landing'>

      <section>
          <Navbar />

          <Hero />
      </section>

      <Features />
      <Choose />
      <GetStarted />
      <Testimonials />
      <Partners />
      <Footer />
    </div>
  )
}

export default Landing