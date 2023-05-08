import React, { useEffect, useRef, useState } from 'react'
import {useTranslation} from 'react-i18next'
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

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
import { changeLang, changeScheme } from '../../redux'
import { Link, useLocation } from 'react-router-dom'





const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(0px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(25px)',
      '& .MuiSwitch-thumb': {
        boxShadow: '0px 1px 3px -1px #ffffff, 0px 1px 1px 0px #ffffff23, 0px 1px 3px 0px #ffffff1e;'
      },
      '& .MuiSwitch-thumb:before': {
        backgroundColor: '#001e3c',
        borderRadius: '100px',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#fff',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '105%',
      height: '105%',
      left: '-2.5%',
      top: '-2.5%',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#001e3c',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));




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



  const [isPinned, setPinned] = useState(false)
  const [isScrolledDown, setisScrolledDown] = useState(false)

  
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
      const links = Array.prototype.slice.call(document.getElementsByTagName('a'))
      links.forEach(elem => {
        if (e.composedPath().includes(elem)) {
          setMobileMenuModal(false)
        }
      })
      if (!e.composedPath().includes(mobileHeaderMenuModal) && !e.composedPath().includes(burgerMenuBtnMobile)) {
        setMobileMenuModal(false)
      }
    })

    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 1) {
        setisScrolledDown(true)
        setPinned(true)
      } else{
        header.current.classList.remove('is-pinned')
        setisScrolledDown(false)
        setPinned(false)
      }
    })
  }, [])


  const logoFunc = () => {
    // console.log(location.pathname);
    if (darkScheme) {
        if (location.pathname === '/services') {
        if (isPinned) {
          return mainLogoDark
        }
        return mainLogoDark
      }
      return mainLogoDark
    } else{
      if (location.pathname === '/services') {
        if (isPinned) {
          return mainLogoLight
        }
        return mainLogoDark
      }
      return mainLogoLight
      }
  }


  const darkModeFunc = () => {
    if (darkScheme) {
        if (location.pathname === '/services') {
        if (isPinned) {
          return 'header-dark'
        }
        return 'header-dark'
      }
      return 'header-dark'
    } else{
      if (location.pathname === '/services') {
        if (isPinned) {
          return ''
        }
        return 'header-dark'
      }
      return ''
      }
  }

  return (
    <header ref={header} className={`${darkModeFunc()} ${isScrolledDown ? 'is-pinned' : ''}`}>
      <div className={`container header__container`}>
        <nav className={`header__container-links`}>
          <Link to='/'>
            <img 
              className={`header__logo`} 
              src={logoFunc()} 
              alt="ZONE logo" 
            />
          </Link>
          <Link to='/'>{t("header.home")}</Link>
          <a href="#">{t("header.components")}</a>
          <p className='header__select' onClick={() => toggleModal(isSelectModal, setSelectModal)}>
            {t("header.pages")} 
            <img src={bottomArrowLight} alt="bottom arrow" className={`${isSelectModal ? 'rotate180deg' : ''}`} />
          </p>
          <a href="#">{t("header.documentation")}</a>

          <div className={`header__select-modal ${isSelectModal ? 'active' : ''}`}>
            <Link to='/' className={location.pathname === '/' ? 'link-disabled' : ''}>
              <Button elem={t("header.home")} mod={location.pathname === '/' && darkScheme ? 'darkMode-disabled' : darkScheme ? 'darkMode' : ''} />
            </Link>
            <Link to='/services' className={location.pathname === '/services' ? 'link-disabled' : ''}>
              <Button elem={t("header.select.services")} mod={location.pathname === '/services' && darkScheme ? 'darkMode-disabled' : darkScheme ? 'darkMode' : ''} />
            </Link>
            <Link to='/case-studies/list' className={location.pathname === '/case-studies-list' ? 'link-disabled' : ''}>
              <Button elem={t("header.select.case-studies")} mod={location.pathname === '/case-studies' && darkScheme ? 'darkMode-disabled' : darkScheme ? 'darkMode' : ''} />
            </Link>
            <Link to='/blog' className={location.pathname === '/blog' ? 'link-disabled' : ''}>
              <Button elem={t("header.select.blog")} mod={location.pathname === '/blog' && darkScheme ? 'darkMode-disabled' : darkScheme ? 'darkMode' : ''} />
            </Link>
            <Link to='/about' className={location.pathname === '/about' ? 'link-disabled' : ''}>
              <Button elem={t("header.select.about-us")} mod={location.pathname === '/about' && darkScheme ? 'darkMode-disabled' : darkScheme ? 'darkMode' : ''} />
            </Link>
            <Link to='/contact' className={location.pathname === '/contact' ? 'link-disabled' : ''}>
              <Button elem={t("header.select.contact")} mod={location.pathname === '/contact' && darkScheme ? 'darkMode-disabled' : darkScheme ? 'darkMode' : ''} />
            </Link>
          </div>
        </nav>

        <div className={`header__container-personals`}>
          <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked={darkScheme} onChange={() => dispatch(changeScheme())} inputProps={{ 'aria-label': 'controlled' }} />}
          />

          <div className='search-wrapper'>
            <Button 
              className={`search-button ${isSearchModal ? 'hide' : ''}`} 
              elem={<img src={searchIconLight} alt='search icon' />} 
              onClick={() => toggleModal(isSearchModal, setSearchModal)} 
            />

            <form className={`header__search-modal ${isSearchModal ? 'search-active' : ''}`} onSubmit={handleSubmit}>
              <input type="text" className={`header__search-input`} value={inputValue} onChange={e => setInputValue(e.target.value)} />
              <button className={`header__search-submit`}>
                <img src={searchIconLight} alt="search-icon" />
              </button>
            </form>
          </div>

          <div className="lang-wrapper">
            <Button 
              className={`lang-button`} 
              elem={<img src={languageIconLight} alt='language icon' />} 
              onClick={() => toggleModal(isLangModal, setLangModal)} 
            />

            <div className={`header__language-modal ${isLangModal ? 'active' : ''}`}>
              <Button elem="EN" mod={lang == 'en' ? `disabled` : ''} onClick={() => changeLanguage('en')} />
              <Button elem="RU" mod={lang == 'ru' ? `disabled` : ''} onClick={() => changeLanguage('ru')} />
            </div>
          </div>

          <hr />
          <Button className='login-button' elem={t("header.login")} />
          <Button className={`join-button`} elem={t("header.join-us")} mod={'black'} />
        </div>
      </div>




      {/* Mobile */}
      <div className={`container header__container_mobile`}>
        <img className={`header__logo`} src={logoFunc()} alt="ZONE logo" />

        <div className={`header__burger-menu`}>
          <Button className={`burger-menu-button_mobile`} elem={<img src={burgerMenuIconLight} alt='burger menu icon' />} onClick={() => toggleModal(isMobileMenuModal, setMobileMenuModal)} />

          <Button className={`search-button_mobile ${isMobileSearchModal ? 'hide' : ''}`} elem={<img src={searchIconLight} alt='search icon' />} onClick={() => toggleModal(isMobileSearchModal, setMobileSearchModal)} />

          <form className={`header__search-modal header__search-modal-mobile ${isMobileSearchModal ? 'search-modal-mobile_active' : ''}`} onSubmit={handleSubmit}>
            <input type="text" className={`header__search-input header__search-input-mobile`} value={mobileInputValue} onChange={e => setMobileInputValue(e.target.value)} />

            <button className={`header__search-submit header__search-submit-mobile`}><img src={searchIconLight} alt="search-icon" /></button>
          </form>
        </div>

        <div className={`container mobile-header__menu-modal ${isMobileMenuModal ? 'mobile-header__menu-modal_active' : ''} ${darkScheme ? 'mobile-header__menu-modal-dark' : ''}`}>
          <div className='container mobile-header__menu-modal-header'>
            <img className={`header__logo mobile-header__logo`} src={darkScheme ? mainLogoDark : mainLogoLight} alt="ZONE logo" />

            <div>
              <FormControlLabel
                control={<MaterialUISwitch sx={{ m: 1 }} defaultChecked={darkScheme} onChange={() => dispatch(changeScheme())} />}
              />
              <Button 
                className={`lang-button mobile-header__lang-button`} 
                elem={<img src={languageIconLight} alt='language icon' />} 
                onClick={() => toggleModal(isLangModal, setLangModal)} 
              />
              <Button 
                className={`mobile-header__close-button`} 
                elem={<img src={crossIconLight} alt="cross icon" />} 
                onClick={() => setMobileMenuModal(false)} 
              />
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
              <Link to='/' className={'link ' + location.pathname === '/' ? 'link-disabled' : ''}>
                <Button elem={t("header.home")} mod={location.pathname === '/' ? 'disabled' : ''} />
              </Link>
              <Link to='/services' className={location.pathname === '/services' ? 'link-disabled' : ''}>
                <Button elem={t("header.select.services")} mod={location.pathname === '/services' ? 'disabled' : ''} />
              </Link>
              <Link to='/case-studies/list' className={location.pathname === '/case-studies-list' ? 'link-disabled' : ''}>
                <Button elem={t("header.select.case-studies")} mod={location.pathname === '/case-studies-list' ? 'disabled' : ''} />
              </Link>
              <Link to='/blog' className={location.pathname === '/blog' ? 'link-disabled' : ''}>
                <Button elem={t("header.select.blog")} mod={location.pathname === '/blog' ? 'disabled' : ''} />
              </Link>
              <Link to='/about' className={location.pathname === '/about' ? 'link-disabled' : ''}>
                <Button elem={t("header.select.about-us")} mod={location.pathname === '/about' ? 'disabled' : ''} />
              </Link>
              <Link to='/contact' className={location.pathname === '/contact' ? 'link-disabled' : ''}>
                <Button elem={t("header.select.contact")} mod={location.pathname === '/contact' ? 'disabled' : ''} />
              </Link>
            </div>
            <Button elem={t("header.documentation")}/>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
