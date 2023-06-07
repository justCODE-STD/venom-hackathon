import React, { useState } from 'react'
import './Landing.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Input from '../../Components/Input/Input'
import Hero from '../../Components/Hero/Hero'
import Features from '../../Components/Features/Features'
import Choose from '../../Components/Choose/Choose'

const Landing = () => {

  return (
    <div id='landing'>

      <section>
          <Navbar />

          <Hero />
      </section>

      <Features />
      <Choose />
    </div>
  )
}

export default Landing