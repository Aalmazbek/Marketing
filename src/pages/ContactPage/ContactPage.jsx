import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box';


import './ContactPage.css'
import Button from '../../components/Button/Button';

import illustration from './assets/illustration.png'
import iconPin from './assets/ic_pin.svg'
import iconMobile from './assets/ic_mobile.svg'
import iconEmail from './assets/ic_email.svg'
import iconClock from './assets/ic_clock.svg'
import iconNextPage from './assets/ic_next-page.svg'
import { useTranslation } from 'react-i18next';



function ContactPage() {
  const {t} = useTranslation()


  const [value, setValue] = useState([0, 10000]);
  const minDistance = 3000
  const valuetext = (value) => `${value}`

  const handleChange = (event, newValue, activeThumb) => {
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };


  return (
    <>
      <article className='ContactPage__article'>
        <div className="container ContactPage__container">
          <section className='ContactPage__info'>
            <img src={illustration} alt="illustration" />
            
            <div>
              <img src={iconPin} alt="geo-icon" />

              <span>
                <h1>{t('ContactPage.info.visit-us')} <a href="#"><img src={iconNextPage} alt="go to page icon" /></a></h1>
                <address>{t('ContactPage.info.address')}</address>
              </span>
            </div>

            <div>
              <img src={iconMobile} alt="mobile-icon" />

              <span>
                <h1>{t('ContactPage.info.call-us')}</h1>
                <address>(319) 555-0115</address>
              </span>
            </div>

            <div>
              <img src={iconEmail} alt="email-icon" />

              <span>
                <h1>{t('ContactPage.info.talk-to-us')}</h1>
                <address>hello@example.com</address>
              </span>
            </div>

            <div>
              <img src={iconClock} alt="clock-icon" />

              <span>
                <h1>{t('ContactPage.info.working-hours')}</h1>
                <p>{t('ContactPage.info.schedule')}</p>
              </span>
            </div>
          </section>

          <section className='ContactPage__form-wrapper'>
            <h1>{t('ContactPage.form.title')}</h1>

            <form className='ContactPage__form'>
              <fieldset className='ContactPage__form-checkboxes'>
                <legend>{t('ContactPage.form.services')}</legend>

                <div>
                  <label className='ContactPage__form-checkbox'>
                    <input type="checkbox" />
                    <span>{t('ContactPage.form.email-marketing')}</span>
                  </label>
                  <label className='ContactPage__form-checkbox'>
                    <input type="checkbox" />
                    <span>{t('ContactPage.form.seo')}</span>
                  </label>
                  <label className='ContactPage__form-checkbox'>
                    <input type="checkbox" />
                    <span>{t('ContactPage.form.social-marketing')}</span>
                  </label>
                  <label className='ContactPage__form-checkbox'>
                    <input type="checkbox" />
                    <span>{t('ContactPage.form.research')}</span>
                  </label>
                </div>
              </fieldset>

              <fieldset className='ContactPage__form-inputs'>
                <input className='ContactPage__form-firstName' type="text" placeholder={t('ContactPage.form.first-name')} required />
                <input className='ContactPage__form-lastName' type="text" placeholder={t('ContactPage.form.last-name')} required />
                <input className='ContactPage__form-email' type="email" placeholder={t('ContactPage.form.email')} required />
                <input className='ContactPage__form-number' type="number" placeholder={t('ContactPage.form.phone')} required />
                <input className='ContactPage__form-company' type="text" placeholder={t('ContactPage.form.company')} required />
                <input className='ContactPage__form-website' type="url" placeholder={t('ContactPage.form.website')} required />
              </fieldset>

              <fieldset className='ContactPage__form-rangeSlider'>
                <legend>{t('ContactPage.form.your-budget')}</legend>
                <Box sx={{ width: '100%'}}>
                  <Slider
                    sx={{
                      width: '100%',
                      '& .MuiSlider-rail': {
                        height: '2px',
                        backgroundColor: 'rgba(var(--main-orange-rgb), 0.5)'
                      },
                      '& .MuiSlider-thumb': {
                        width: '12px',
                        height: '12px',
                        backgroundColor: 'var(--main-orange)',
                        boxShadow: 'none'
                      },
                      '& .MuiSlider-thumb:before': {
                        boxShadow: 'none'
                      },
                      '& .MuiSlider-thumb.Mui-active': {
                        boxShadow: '0 0 0 10px rgba(var(--main-orange-rgb), 0.16)'
                      },
                      '& .MuiSlider-valueLabelLabel': {
                        color: 'white'
                      },
                      '& .MuiSlider-track': {
                        height: '2px',
                        backgroundColor: 'var(--main-orange)',
                        border: 'none'
                      },
                    }}
                    getAriaLabel={() => 'Budget range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={1000}
                    max={100000}
                    disableSwap
                  />
                </Box>
              </fieldset>

              <fieldset>
                <textarea className='ContactPage__form-textarea' placeholder={t('ContactPage.form.message')} required></textarea>
              </fieldset>

              <Button elem={t('ContactPage.form.send-request')} mod='orange' />
            </form>
          </section>
        </div>
      </article>
    </>
  )
}

export default ContactPage