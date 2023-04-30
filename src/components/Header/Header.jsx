import React, { useEffect, useRef, useState } from 'react'
import {useTranslation} from 'react-i18next'

import './Header.css'
import css from './Header.module.css'
import mainLogoLight from './assets/mainLogo-lightMode.svg'
import mainLogoDark from './assets/mainLogo-darkMode.svg'
import bottomArrowLight from './assets/bottomArrow-lightMode.svg'
import bottomArrowDark from './assets/bottomArrow-darkMode.svg'
import searchIconLight from './assets/searchIcon-lightMode.svg'
import searchIconDark from './assets/searchIcon-darkMode.svg'
import languageIconLight from './assets/languageIcon-lightMode.svg'
import languageIconDark from './assets/languageIcon-darkMode.svg'
import burgerMenuIconLight from './assets/burgerMenuIcon-lightMode.svg'
import burgerMenuIconDark from './assets/burgerMenuIcon-darkMode.svg'
import crossIconLight from './assets/crossIcon-lightMode.svg'
import crossIconDark from './assets/crossIcon-darkMode.svg'
import Button from '../Button/Button'
import { useSelector } from 'react-redux'







function Header() {
  const darkScheme = useSelector(state => state.darkScheme.value)

  const { t, i18n } = useTranslation()
  

  const [isLangModal, setLangModal] = useState(false)
  const [isSelectModal, setSelectModal] = useState(false)
  const [isSearchModal, setSearchModal] = useState(false)
  const [isMobileSearchModal, setMobileSearchModal] = useState(false)
  const [isMobileMenuModal, setMobileMenuModal] = useState(false)
  const [isMobileSelect, setMobileSelect] = useState(false)

  const toggleModal = (value, setValue) => {
    setValue(!value)
  }

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }


  const [inputValue, setInputValue] = useState('')
  const [mobileInputValue, setMobileInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setInputValue('')
    setMobileInputValue('')
  }



  useEffect(() => {
    const body = document.querySelector('body')

    if (isMobileMenuModal) {
      body.style.overflow = 'hidden'
    } else if(!isMobileMenuModal){
      body.style.overflow = 'auto'
    }
  }, [isMobileMenuModal])


  
  const header = useRef()

  useEffect(() => {
    document.addEventListener('click', e => {
      if (!e.target.classList.contains('lang-button')) {
        setLangModal(false)
      }
      
      if (!e.target.classList.contains('header__select')) {
        setSelectModal(false)
      }

      const headerSearchBtn = document.querySelector('.search-button')
      const headerSearchModal = document.querySelector('.header__search-modal')
      if (!e.composedPath().includes(headerSearchBtn) && !e.composedPath().includes(headerSearchModal)) {
        setSearchModal(false)
      }

      const headerSearchBtnMobile = document.querySelector('.search-button_mobile')
      const headerSearchModalMobile = document.querySelector('.header__search-modal-mobile')
      if (!e.composedPath().includes(headerSearchBtnMobile) && !e.composedPath().includes(headerSearchModalMobile)) {
        setMobileSearchModal(false)
      }

      const burgerMenuBtnMobile = document.querySelector('.burger-menu-button_mobile')
      const mobileHeaderMenuModal = document.querySelector('.mobile-header__menu-modal')
      if (!e.composedPath().includes(mobileHeaderMenuModal) && !e.composedPath().includes(burgerMenuBtnMobile)) {
        setMobileMenuModal(false)
      }
    })

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 1) {
        header.current.classList.add('is-pinned')
      } else{
        header.current.classList.remove('is-pinned')
      }
    })
  }, [])


  return (
    <header ref={header}>
      <div className={`container header__container`}>
        <nav className={`header__container-links`}>
          <img className={`header__logo`} src={darkScheme ? mainLogoDark : mainLogoLight} alt="ZONE logo" />
          <a href="#">Home</a>
          <a href="#">Components</a>
          <p className='header__select' onClick={() => toggleModal(isSelectModal, setSelectModal)}>
            Pages 
            <img src={darkScheme ? bottomArrowDark : bottomArrowLight} alt="bottom arrow" className={`${isSelectModal ? 'rotate180deg' : ''}`} />
          </p>
          <a href="#">Documentation</a>

          <div className={`header__select-modal ${isSelectModal ? 'active' : ''}`}>
            <Button elem="Home" mod='disabled'/>
            <Button elem="Services"/>
            <Button elem="Case Studies"/>
            <Button elem="Blog"/>
            <Button elem="About Us"/>
            <Button elem="Contacts"/>
          </div>
        </nav>

        <div className={`header__container-personals`}>
          <Button className={`search-button ${isSearchModal ? 'hide' : ''}`} elem={<img src={darkScheme ? searchIconDark : searchIconLight} alt='search icon' />} onClick={() => toggleModal(isSearchModal, setSearchModal)} />
          <Button className={`lang-button`} elem={<img src={darkScheme ? languageIconDark : languageIconLight} alt='language icon' />} onClick={() => toggleModal(isLangModal, setLangModal)} />
          <hr />
          <Button elem="Login" />
          <Button elem="Join Us" mod='black' />

          <div className={`header__language-modal ${isLangModal ? 'active' : ''}`}>
            <Button elem="RU"/>
            <Button elem="EN" mod={`disabled`}/>
          </div>

          <form className={`header__search-modal ${isSearchModal ? 'search-active' : ''}`} onSubmit={handleSubmit}>
            <input type="text" className={`header__search-input`} value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <input type="image" className={`header__search-submit`} src={darkScheme ? searchIconDark : searchIconLight} alt="search icon" name='submit' />
          </form>
        </div>
      </div>

      <div className={`container header__container_mobile`}>
        <img className={`header__logo`} src={darkScheme ? mainLogoDark : mainLogoLight} alt="ZONE logo" />

        <div className={`header__burger-menu`}>
          <Button className={`burger-menu-button_mobile`} elem={<img src={darkScheme ? burgerMenuIconDark : burgerMenuIconLight} alt='burger menu icon' />} onClick={() => toggleModal(isMobileMenuModal, setMobileMenuModal)} />

          <Button className={`search-button_mobile ${isMobileSearchModal ? 'hide' : ''}`} elem={<img src={darkScheme ? searchIconDark : searchIconLight} alt='search icon' />} onClick={() => toggleModal(isMobileSearchModal, setMobileSearchModal)} />

          <form className={`header__search-modal header__search-modal-mobile ${isMobileSearchModal ? 'search-modal-mobile_active' : ''}`} onSubmit={handleSubmit}>
            <input type="text" className={`header__search-input header__search-input-mobile`} value={mobileInputValue} onChange={e => setMobileInputValue(e.target.value)} />
            <input type="image" className={`header__search-submit header__search-submit-mobile`} src={darkScheme ? searchIconDark : searchIconLight} alt="search icon" name='submit' />
          </form>
        </div>

        <div className={`container mobile-header__menu-modal ${isMobileMenuModal ? 'mobile-header__menu-modal_active' : ''}`}>
          <img className={`header__logo mobile-header__logo`} src={darkScheme ? mainLogoDark : mainLogoLight} alt="ZONE logo" />

          <Button className={`mobile-header__close-button`} elem={<img src={darkScheme ? crossIconDark : crossIconLight} alt="cross icon" />} onClick={() => setMobileMenuModal(false)} />

          <nav className={`mobile-header__links`}>
            <Button elem={'Home'}/>
            <Button elem={'Components'}/>
            <Button 
              className={`header__select-button`}
              elem={
                <p className='header__select' >
                  Pages 
                  <img src={darkScheme ? bottomArrowDark : bottomArrowLight} alt="bottom arrow" className={`${isMobileSelect ? 'rotate180deg' : ''}`} />
                </p>
              } 
              onClick={() => toggleModal(isMobileSelect, setMobileSelect)}
            />
            <div className={`mobile-header__select-container ${isMobileSelect ? 'mobile-header__select-container_active' : ''}`}>
              <Button elem="Home" mod='disabled'/>
              <Button elem="Services"/>
              <Button elem="Case Studies"/>
              <Button elem="Blog"/>
              <Button elem="About Us"/>
              <Button elem="Contacts"/>
            </div>
            <Button elem={'Documentation'}/>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
