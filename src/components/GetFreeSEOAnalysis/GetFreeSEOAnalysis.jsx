
import './GetFreeSEOAnalysis.css'
import letterIcon from './assets/letterIcon-lightMode.svg'
import geopositionIcon from './assets/geopositionIcon-lightMode.svg'
import { useTranslation } from 'react-i18next'
import Button from '../Button/Button'
import { useState } from 'react'



function GetFreeSEOAnalysis() {

  const { t } = useTranslation()


  const [nameInputValue, setNameInputValue] = useState('')
  const [emailInputValue, setEmailInputValue] = useState('')
  const [phoneInputValue, setPhoneInputValue] = useState('')
  const [urlInputValue, setUrlInputValue] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()

    setNameInputValue('')
    setEmailInputValue('')
    setPhoneInputValue('')
    setUrlInputValue('')
  }


  return (
    <article className='GetFreeSEOAnalysis'>
      <div className='blur-background'>
        <div className="container GetFreeSEOAnalysis__container">
          <div className='GetFreeSEOAnalysis__title'>
            <h1>{t("getFreeSEOAnalysis.title-part1")} <br /> {t("getFreeSEOAnalysis.title-part2")}</h1>

            <div>
              <address>
                <img src={letterIcon} alt="letter-icon" />
                <p>Hello@agency.com</p>
              </address>
              <address>
                <img src={geopositionIcon} alt="geoposition-icon" /> 
                <p>{t("getFreeSEOAnalysis.address")}</p>
              </address>
            </div>
          </div>

          <form className='GetFreeSEOAnalysis__form' onSubmit={handleSubmit}>
            <input type="text" className='input-darkScheme' placeholder={t("getFreeSEOAnalysis.name-placeholder")} value={nameInputValue} onChange={e => setNameInputValue(e.target.value)} required />
            <input type="email" className='input-darkScheme' placeholder={t("getFreeSEOAnalysis.email-placeholder")} value={emailInputValue} onChange={e => setEmailInputValue(e.target.value)} required />
            <input type="number" className='input-darkScheme' placeholder={t("getFreeSEOAnalysis.phone-placeholder")} value={phoneInputValue} onChange={e => setPhoneInputValue(e.target.value)} required />
            <input type="url" className='input-darkScheme' placeholder={t("getFreeSEOAnalysis.website-placeholder")} value={urlInputValue} onChange={e => setUrlInputValue(e.target.value)} required />

            <Button elem={t("getFreeSEOAnalysis.button-text")} mod='orange' size='button-L' />
          </form>
        </div>
      </div>
    </article>
  )
}

export default GetFreeSEOAnalysis