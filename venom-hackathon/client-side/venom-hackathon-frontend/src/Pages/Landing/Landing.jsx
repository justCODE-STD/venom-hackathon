import React, { useState } from 'react'
import './Landing.scss'
import Navbar from '../../Components/Navbar/Navbar'
import Input from '../../Components/Input/Input'
import Hero from '../../Components/Hero/Hero'

const Landing = () => {

  return (
    <div id='landing'>

      <section>
          <Navbar />

          <Hero />
      </section>

      
    </div>
  )
}

export default Landing