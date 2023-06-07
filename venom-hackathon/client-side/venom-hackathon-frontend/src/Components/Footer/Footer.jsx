import React from 'react'
import './Footer.scss'
import PageButton from '../PageButton/PageButton'

const Footer = () => {
  return (
    <footer>
        <nav>
            <h1>Services</h1>
            <PageButton link={'/'}  title={'Accept Payments'} id={'ft-btn'}/>
            <PageButton link={'/'}  title={'Instant Withdrawals'} id={'ft-btn'}/>
            <PageButton link={'/'}  title={'Earn Venom'} id={'ft-btn'}/>
            <PageButton link={'/'}  title={'Merchant'} id={'ft-btn'}/>
        </nav>

        <nav>
            <h1>Developers</h1>
            <PageButton link={'/'}  title={'Billing'} id={'ft-btn'}/>
            <PageButton link={'/'}  title={'API'} id={'ft-btn'}/>
            <PageButton link={'/'}  title={'Open Source'} id={'ft-btn'}/>
            <PageButton link={'/'}  title={'Supported Currencies'} id={'ft-btn'}/>
        </nav>

        <nav>
            <h1>Who We Are</h1>
            <PageButton link={'/'}  title={'About Us'} id={'ft-btn'}/>
            <PageButton link={'/'}  title={'Pricing'} id={'ft-btn'}/>
            <PageButton link={'/'}  title={'Career'} id={'ft-btn'}/>
        </nav>

        <nav>
            <h1>Help</h1>
            <PageButton link={'/'}  title={'FAQs'} id={'ft-btn'}/>
            <PageButton link={'/'}  title={'Contact Us'} id={'ft-btn'}/>
        </nav>

        <nav>
            <h1>Help</h1>
            <PageButton link={'/'}  title={'Instagram'} id={'ft-btn'}/>
            <PageButton link={'/'}  title={'Twitter'} id={'ft-btn'}/>
            <PageButton link={'/'}  title={'LinkedIn'} id={'ft-btn'}/>
        </nav>
    </footer>
  )
}

export default Footer