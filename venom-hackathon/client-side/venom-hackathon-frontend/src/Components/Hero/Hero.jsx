import React from 'react'
import './Hero.scss'
import PageButton from '../PageButton/PageButton'
import heroimg from '../../assets/heroimg.png'

const Hero = () => {
  return (
    <div id='hero'>
        <aside>
            <h1>
                Enjoy faster 
                Payments with 
                Cryptocurrency
            </h1>
            <p>
                Enjoy seamless payment services when
                your customers interact with your
                business.
            </p>

            <span>
                <PageButton title={'Sign Up Now'} link={'/signup'} id={'hr-sign'}/>
                <PageButton title={'Learn More'} link={'/'} id={'hr-learn'}/>
            </span>
        </aside>

        <img src={heroimg} alt="" />
    </div>
  )
}

export default Hero