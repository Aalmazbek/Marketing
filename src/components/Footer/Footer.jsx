import React, { useState } from 'react'


import './Footer.css'
import Button from '../Button/Button'

import mainLogoLight from './assets/mainLogo-lightMode.svg'
import mainLogoDark from './assets/mainLogo-darkMode.svg'
import newsletterIcon from './assets/newsletterIcon.svg'
import facebookIcon from './assets/facebookIcon-lightMode.svg'
import instagramIcon from './assets/instagramIcon-lightMode.svg'
import linkedInIcon from './assets/linkedInIcon-lightMode.svg'
import twitterIcon from './assets/twitterIcon-lightMode.svg'
import letterIcon from './assets/letterIcon-lightMode.svg'
import geopositionIcon from './assets/geopositionIcon-lightMode.svg'
import arrowIcon from './assets/arrow-darkMode.svg'
import { useSelector } from 'react-redux'


function Footer() {
  const darkScheme = useSelector(state => state.darkScheme.value)

  const [newsletterInputValue, setNewsletterInputValue] = useState('')
  const [emailInputValue, setEmailInputValue] = useState('')

  const handleSubmit = (e, setState) => {
    e.preventDefault()

    setState('')
  }

  return (
    <footer>
      <article className={`footer__newsletter`}>
        <div className='container footer__newsletter-container'>
          <section className={`footer__newsletter-title`}>
            <img src={newsletterIcon} alt="email-icon" />

            <div>
              <h1>Sign Up For Newsletter</h1>
              <p>Receive 50% discount on first project</p>
            </div>
          </section>

          <section className='footer__newsletter-form-section'>
            <form onSubmit={e => handleSubmit(e, setNewsletterInputValue)}>
              <input type="email" placeholder='Enter your email' value={newsletterInputValue} onChange={(e) => setNewsletterInputValue(e.target.value)} required />
              <Button elem={`Sign Up`} mod={'orange'} />
            </form>
          </section>  
        </div>
      </article>

      <article className='footer__main'>
        <div className='container footer__main-container'>
          <div className='footer__main-content'>
            <section className='footer__title'>
              <img className='footer__title-logo' src={darkScheme ? mainLogoDark : mainLogoLight} alt="ZONE-logo" />

              <p>The starting point for your next project based on easy-to-customize Material-UI © helps you build apps faster and better.</p>

              <div className='footer__title-socials'>
                <a href="#"><img src={facebookIcon} alt="facebook-icon" /></a>
                <a href="#"><img src={instagramIcon} alt="instagram-icon" /></a>
                <a href="#"><img src={linkedInIcon} alt="linkedIn-icon" /></a>
                <a href="#"><img src={twitterIcon} alt="twitter-icon" /></a>
              </div>
            </section>

            <section className='footer__contacts'>
              <address><img src={letterIcon} alt="letter-icon" /> info@example.com</address>
              <address><img src={geopositionIcon} alt="geoposition-icon" /> 655 Schaefer Dale</address>
            </section>

            <section className='footer__form-section'>
              <form onSubmit={e => handleSubmit(e, setEmailInputValue)}>
                <input type="email" placeholder='Email adress' value={emailInputValue} onChange={e => setEmailInputValue(e.target.value)} required />
                <Button elem={<img src={arrowIcon} alt='arrow-icon' />} mod={'orange'} />
              </form>
            </section>
          </div>

          <section className='footer__copyright'>
            <p>© 2021. All rights reserved</p>

            <nav>
              <a href="#">Help Center</a>
              <a href="#">Terms of Service</a>
            </nav>
          </section>
        </div>
      </article>
    </footer>
  )
}

export default Footer