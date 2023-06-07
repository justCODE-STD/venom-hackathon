import React from 'react'
import './Partners.scss'
import venom from '../../assets/venomlogo.png'

const Partners = () => {
  return (
    <div id='partners'>
        <div id="pt-top">
            <h1>Our Partners</h1>
            <img src={venom} alt="" />
        </div>

        <div id="pt-bottom">
            <p>
                Sign up for our newsletter to get <br /> 
                personalized updates from us
            </p>

            <span>
                <input type="email" name="email" id="email" placeholder='Your Email Address'/>
            </span>
        </div>
    </div>
  )
}

export default Partners