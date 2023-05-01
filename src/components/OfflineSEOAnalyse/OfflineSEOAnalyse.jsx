import React, { useState } from 'react'
import Button from '../Button/Button'

import './OfflineSEOAnalyse.css'

import emailIcon from './assets/emailIcon.svg'
import websiteIcon from './assets/websiteIcon.svg'
import { useTranslation } from 'react-i18next'


function OfflineSEOAnalyse() {
  const { t } = useTranslation()  


  const [emailInputValue, setEmailInputValue] = useState('')
  const [websiteInputValue, setWebsiteInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setEmailInputValue('')
    setWebsiteInputValue('')
  }

  
  return (
    <article className='OfflineSEOAnalyse'>
      <div className="container OfflineSEOAnalyse__container">
        <h1>{t("offlineSEOAnalyse.title")}</h1>
        <p>{t("offlineSEOAnalyse.description")}</p>

        <form className='OfflineSEOAnalyse__form' onSubmit={handleSubmit}>
          <label>
            <img src={emailIcon} alt="" />
            <input type="email" className='OfflineSEOAnalyse__email-input' placeholder={t("offlineSEOAnalyse.email-placeholder")} value={emailInputValue} onChange={e => setEmailInputValue(e.target.value)} required />
          </label>

          <hr />

          <label>
            <img src={websiteIcon} alt="" />
            <input type="url" className='OfflineSEOAnalyse__website-input' placeholder={t("offlineSEOAnalyse.website-placeholder")} value={websiteInputValue} onChange={e => setWebsiteInputValue(e.target.value)} required />
          </label>

          <Button elem={t("offlineSEOAnalyse.button-text")} mod='orange' className={`OfflineSEOAnalyse__form-submit`} />
        </form>
      </div>
    </article>
  )
}

export default OfflineSEOAnalyse