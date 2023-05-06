import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'


import './ServicesPage.css'
import LatestPosts from '../../components/LatestPosts/LatestPosts'
import Testimonials from '../../components/Testimonials/Testimonials'
import OfflineSEOAnalyse from './components/OfflineSEOAnalyse/OfflineSEOAnalyse'
import Button from '../../components/Button/Button'

import * as images from './assets/ServicesPageImages'


function ServicesPage() {

  const darkScheme = useSelector(state => state.general.darkScheme)

  const { t } = useTranslation()


  return (
    <div className={darkScheme ? 'ServicesPage-dark' : ''}>
      <OfflineSEOAnalyse />

      <article className={`ServicesPage__main-1`}>
        <div className='container ServicesPage__main-1-container'>
          <div className='ServicesPage__main-1-img'>
            <img src={images.artboard1} alt="artboard" />
          </div>

          <div className='ServicesPage__main-1-text'>
            <h1>{t('ServicesPage.main-1.title')}</h1>
            <p>{t('ServicesPage.main-1.description')}</p>

            <ul>
              <li>{t('ServicesPage.main-1.advantage-1')}</li>
              <li>{t('ServicesPage.main-1.advantage-2')}</li>
              <li>{t('ServicesPage.main-1.advantage-3')}</li>
              <li>{t('ServicesPage.main-1.advantage-4')}</li>
            </ul>

            <Button 
              className='ServicesPage__main-1-button'
              elem={<>
                <p>{t('ServicesPage.main-1.button')}</p>
                <img src={images.rightArrowIcon} alt="right-arrow-icon" />
              </>}
              mod='outlined-black'
            />
          </div>
        </div>
      </article>


      <article className='ServicesPage__main-2'>
        <div className="container ServicesPage__main-2-container">
          <div className='ServicesPage__main-2-title'>
            <h1>{t('ServicesPage.main-2.title')}</h1>
            <p>{t('ServicesPage.main-2.description')}</p>
          </div>

          <div className="ServicesPage__main-2-cards-wrapper">
            <section className='ServicesPage__main-2-card'>
              <img src={images.statisticsIcon} alt="checklist-icon" />
              <h1>{t('ServicesPage.main-2.card-1')}</h1>
              <p>{t('ServicesPage.main-2.card-description')}</p>
            </section>
            
            <section className='ServicesPage__main-2-card'>
              <img src={images.socialMediaIcon} alt="checklist-icon" />
              <h1>{t('ServicesPage.main-2.card-2')}</h1>
              <p>{t('ServicesPage.main-2.card-description')}</p>
            </section>

            <section className='ServicesPage__main-2-card'>
              <img src={images.realTimeIcon} alt="checklist-icon" />
              <h1>{t('ServicesPage.main-2.card-3')}</h1>
              <p>{t('ServicesPage.main-2.card-description')}</p>
            </section>

            <section className='ServicesPage__main-2-card'>
              <img src={images.checklistIcon} alt="checklist-icon" />
              <h1>{t('ServicesPage.main-2.card-4')}</h1>
              <p>{t('ServicesPage.main-2.card-description')}</p>
            </section>
            
            <section className='ServicesPage__main-2-card'>
              <img src={images.reportIcon} alt="checklist-icon" />
              <h1>{t('ServicesPage.main-2.card-5')}</h1>
              <p>{t('ServicesPage.main-2.card-description')}</p>
            </section>

            <section className='ServicesPage__main-2-card'>
              <img src={images.fileIcon} alt="checklist-icon" />
              <h1>{t('ServicesPage.main-2.card-6')}</h1>
              <p>{t('ServicesPage.main-2.card-description')}</p>
            </section>
          </div>
        </div>
      </article>


      <article className='ServicesPage__main-3'>
        <div className="container ServicesPage__main-2-container ServicesPage__main-3-container">
          <div className='ServicesPage__main-2-title'>
            <h1>{t('ServicesPage.main-3.title')}</h1>
            <p>{t('ServicesPage.main-3.description')}</p>
          </div>

          <div className="ServicesPage__main-3-cards-wrapper">
            <section className='ServicesPage__main-2-card ServicesPage__main-3-card' style={{gridArea: 'c1'}}>
              <h1>{t('ServicesPage.main-3.card-1.title')}</h1>
              <p>{t('ServicesPage.main-3.card-1.description')}</p>
            </section>

            <section className='ServicesPage__main-2-card ServicesPage__main-3-card' style={{gridArea: 'c2'}}>
              <h1>{t('ServicesPage.main-3.card-2.title')}</h1>
              <p>{t('ServicesPage.main-3.card-3.description')}</p>
            </section>

            <section className='ServicesPage__main-2-card ServicesPage__main-3-card' style={{gridArea: 'c3'}}>
              <h1>{t('ServicesPage.main-3.card-3.title')}</h1>
              <p>{t('ServicesPage.main-3.card-3.description')}</p>
            </section>

            <div className='ServicesPage__main-3-image'>
              <img src={images.benefitsIllustration} alt="benefits-illustration" />
            </div>

            <section className='ServicesPage__main-2-card ServicesPage__main-3-card' style={{gridArea: 'c4'}}>
              <h1>{t('ServicesPage.main-3.card-4.title')}</h1>
              <p>{t('ServicesPage.main-3.card-4.description')}</p>
            </section>

            <section className='ServicesPage__main-2-card ServicesPage__main-3-card' style={{gridArea: 'c5'}}>
              <h1>{t('ServicesPage.main-3.card-5.title')}</h1>
              <p>{t('ServicesPage.main-3.card-5.description')}</p>
            </section>

            <section className='ServicesPage__main-2-card ServicesPage__main-3-card' style={{gridArea: 'c6'}}>
              <h1>{t('ServicesPage.main-3.card-6.title')}</h1>
              <p>{t('ServicesPage.main-3.card-6.description')}</p>
            </section>
          </div>
        </div>
      </article>


      <article className='ServicesPage__main-4' style={{backgroundImage: `url(${images.background})`}}>
        <div className="ServicesPage__main-4-background"></div>
        <div className='container ServicesPage__main-4-container'>
          <div className='ServicesPage__main-4-title'>
            <h1>{t('ServicesPage.main-4.title')}</h1>
            <p>{t('ServicesPage.main-4.description')}</p>
          </div>

          <div className="ServicesPage__main-4-cards-wrapper">
            <p className="ServicesPage__main-4-step step1" style={{gridArea: 's1'}}>Step 1</p>

            <div className="ServicesPage__main-4-card" style={{gridArea: 'c1'}}>
              <h1>{t('ServicesPage.main-4.card-1')}</h1>
              <p>{t('ServicesPage.main-4.card-description')}</p>
            </div>

            <p className="ServicesPage__main-4-step step2" style={{gridArea: 's2'}}>Step 2</p>

            <div className="ServicesPage__main-4-card" style={{gridArea: 'c2'}}>
              <h1>{t('ServicesPage.main-4.card-2')}</h1>
              <p>{t('ServicesPage.main-4.card-description')}</p>
            </div>

            <p className="ServicesPage__main-4-step step3" style={{gridArea: 's3'}}>Step 3</p>

            <div className="ServicesPage__main-4-card" style={{gridArea: 'c3'}}>
              <h1>{t('ServicesPage.main-4.card-3')}</h1>
              <p>{t('ServicesPage.main-4.card-description')}</p>
            </div>

            <p className="ServicesPage__main-4-step step4" style={{gridArea: 's4'}}>Step 4</p>

            <div className="ServicesPage__main-4-card" style={{gridArea: 'c4'}}>
              <h1>{t('ServicesPage.main-4.card-4')}</h1>
              <p>{t('ServicesPage.main-4.card-description')}</p>
            </div>
          </div>
        </div>
      </article>


      <Testimonials />
      <LatestPosts />
    </div>
  )
}

export default ServicesPage