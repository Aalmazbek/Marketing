import React from 'react'

import css from './Button.module.css'


function Button({ elem, size, mod, className, onClick }) {
  return (
    <button className={`${css.button} ${css[size]} ${css[mod] ? css[mod] : ''} ${className ? className : ''}`} onClick={onClick ? onClick : null}>{elem}</button>
  )
}

export default Button