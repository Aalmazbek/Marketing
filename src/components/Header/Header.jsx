import React, { useEffect, useRef, useState } from 'react'
import {useTranslation} from 'react-i18next'

import './Header.css'
import css from './Header.module.css'
import mainLogoLight from './assets/mainLogo-lightMode.svg'
import mainLogoDark from './assets/mainLogo-darkMode.svg'
import bottomArrow from './assets/bottomArrow-lightMode.svg'
import searchIcon from './assets/searchIcon.svg'
import languageIcon from './assets/languageIcon.svg'
import Button from '../Button/Button'



function Header() {

  const { t, i18n } = useTranslation()
  

  let [isModal, setIsModal] = useState(false)
  const toggleLangModal = () => {
    console.log('click');
    setIsModal(!isModal)
  }

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }


  useEffect(() => {
     document.addEventListener('click', e => {
      if (!e.target.classList.contains('lang-button')) {
        setIsModal(false)
      }
     })
  }, [])


  return (
    <header>
      <div className={`container header__container`}>
        <div className={`header__container-links`}>
          <img className={`header__logo`} src={mainLogoLight} alt="ZONE logo" />
          <a href="#">Home</a>
          <a href="#">Components</a>
          <p className='header__select' href="#">Pages <img src={bottomArrow} alt="bottom arrow" /></p>
          <a href="#">Documentation</a>
        </div>

        <div className={`header__container-personals`}>
          <Button elem={<img src={searchIcon} alt='search icon'></img>} />
          <Button className={`lang-button`} elem={<img src={languageIcon} alt='language icon'></img>} onclick={toggleLangModal} />
          <hr />
          <Button elem="Login" />
          <Button elem="Join Us" mod='black' />

          <div className={`header__language-modal ${isModal ? 'active' : ''}`}>
            <Button elem="RU"/>
            <Button elem="EN"/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header