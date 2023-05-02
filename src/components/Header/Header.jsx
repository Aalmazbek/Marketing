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
import { useDispatch, useSelector } from 'react-redux'
import { changeLang } from '../../redux'
import { Link, useLocation } from 'react-router-dom'







function Header() {
  const darkScheme = useSelector(state => state.general.darkScheme)
  const dispatch = useDispatch()


  const { t, i18n } = useTranslation()
  
  const lang = useSelector(state => state.general.lang)
  const changeLanguage = (str) => {
    setTimeout(() => {
      i18n.changeLanguage(str)
      dispatch(changeLang(str))
    }, 200)
  }


  const location = useLocation()


  
  
  const [isLangModal, setLangModal] = useState(false)
  const [isSelectModal, setSelectModal] = useState(false)
  const [isSearchModal, setSearchModal] = useState(false)
  const [isMobileSearchModal, setMobileSearchModal] = useState(false)
  const [isMobileMenuModal, setMobileMenuModal] = useState(false)
  const [isMobileSelect, setMobileSelect] = useState(false)
  
  const toggleModal = (value, setValue) => {
    setValue(!value)
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
          <Link to='/'>
            <img className={`header__logo`} src={darkScheme ? mainLogoDark : mainLogoLight} alt="ZONE logo" />
          </Link>
          <Link to='/'>{t("header.home")}</Link>
          <a href="#">{t("header.components")}</a>
          <p className='header__select' onClick={() => toggleModal(isSelectModal, setSelectModal)}>
            {t("header.pages")} 
            <img src={darkScheme ? bottomArrowDark : bottomArrowLight} alt="bottom arrow" className={`${isSelectModal ? 'rotate180deg' : ''}`} />
          </p>
          <a href="#">{t("header.documentation")}</a>

          <div className={`header__select-modal ${isSelectModal ? 'active' : ''}`}>
            <Link to='/' className={location.pathname === '/' ? 'link-disabled' : ''}>
              <Button elem={t("header.home")} mod={location.pathname === '/' ? 'disabled' : ''} />
            </Link>
            <Link to='/services' className={location.pathname === '/services' ? 'link-disabled' : ''}>
              <Button elem={t("header.select.services")} mod={location.pathname === '/services' ? 'disabled' : ''} />
            </Link>
            <Link to='/case-studies-list' className={location.pathname === '/case-studies-list' ? 'link-disabled' : ''}>
              <Button elem={t("header.select.case-studies")} mod={location.pathname === '/case-studies-list' ? 'disabled' : ''} />
            </Link>
            <Link to='/blog' className={location.pathname === '/blog' ? 'link-disabled' : ''}>
              <Button elem={t("header.select.blog")} mod={location.pathname === '/blog' ? 'disabled' : ''} />
            </Link>
            <Link to='/about' className={location.pathname === '/about' ? 'link-disabled' : ''}>
              <Button elem={t("header.select.about-us")} mod={location.pathname === '/about' ? 'disabled' : ''} />
            </Link>
            <Link to='/contact' className={location.pathname === '/contact' ? 'link-disabled' : ''}>
              <Button elem={t("header.select.contacts")} mod={location.pathname === '/contact' ? 'disabled' : ''} />
            </Link>
          </div>
        </nav>

        <div className={`header__container-personals`}>
          <Button className={`search-button ${isSearchModal ? 'hide' : ''}`} elem={<img src={darkScheme ? searchIconDark : searchIconLight} alt='search icon' />} onClick={() => toggleModal(isSearchModal, setSearchModal)} />
          <Button className={`lang-button`} elem={<img src={darkScheme ? languageIconDark : languageIconLight} alt='language icon' />} onClick={() => toggleModal(isLangModal, setLangModal)} />
          <hr />
          <Button elem={t("header.login")} />
          <Button elem={t("header.join-us")} mod='black' />

          <div className={`header__language-modal ${isLangModal ? 'active' : ''}`}>
            <Button elem="EN" mod={lang == 'en' ? `disabled` : ''} onClick={() => changeLanguage('en')} />
            <Button elem="RU" mod={lang == 'ru' ? `disabled` : ''} onClick={() => changeLanguage('ru')} />
          </div>

          <form className={`header__search-modal ${isSearchModal ? 'search-active' : ''}`} onSubmit={handleSubmit}>
            <input type="text" className={`header__search-input`} value={inputValue} onChange={e => setInputValue(e.target.value)} />
            <input type="image" className={`header__search-submit`} src={darkScheme ? searchIconDark : searchIconLight} alt="search icon" name='submit' />
          </form>
        </div>
      </div>




      {/* Mobile */}
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
          <div className='container mobile-header__menu-modal-header'>
            <img className={`header__logo mobile-header__logo`} src={darkScheme ? mainLogoDark : mainLogoLight} alt="ZONE logo" />

            <div>
              <Button className={`lang-button mobile-header__lang-button`} elem={<img src={darkScheme ? languageIconDark : languageIconLight} alt='language icon' />} onClick={() => toggleModal(isLangModal, setLangModal)} />
              <Button className={`mobile-header__close-button`} elem={<img src={darkScheme ? crossIconDark : crossIconLight} alt="cross icon" />} onClick={() => setMobileMenuModal(false)} />
            </div>

            <div className={`header__language-modal mobile-header__language-modal ${isLangModal ? 'active' : ''}`}>
              <Button elem="EN" mod={lang == 'en' ? `disabled` : ''} onClick={() => changeLanguage('en')} />
              <Button elem="RU" mod={lang == 'ru' ? `disabled` : ''} onClick={() => changeLanguage('ru')} />
            </div>
          </div>
          

          <nav className={`mobile-header__links`}>
            <Button elem={t("header.home")}/>
            <Button elem={t("header.components")}/>
            <Button 
              className={`header__select-button`}
              elem={
                <p className='header__select' >
                  {t("header.pages")} 
                  <img src={darkScheme ? bottomArrowDark : bottomArrowLight} alt="bottom arrow" className={`${isMobileSelect ? 'rotate180deg' : ''}`} />
                </p>
              } 
              onClick={() => toggleModal(isMobileSelect, setMobileSelect)}
            />
            <div className={`mobile-header__select-container ${isMobileSelect ? 'mobile-header__select-container_active' : ''}`}>
              <Button elem={t("header.home")} mod='disabled'/>
              <Button elem={t("header.select.services")}/>
              <Button elem={t("header.select.case-studies")}/>
              <Button elem={t("header.select.blog")}/>
              <Button elem={t("header.select.about-us")}/>
              <Button elem={t("header.select.contacts")}/>
            </div>
            <Button elem={t("header.documentation")}/>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
