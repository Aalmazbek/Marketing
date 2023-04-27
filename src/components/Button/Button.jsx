import React from 'react'

import css from './Button.module.css'


function Button({ elem, mod, className, onclick }) {
  return (
    <button className={`${css.button} ${css[mod] ? css[mod] : ''} ${className ? className : ''}`} onClick={onclick ? onclick : null}>{elem}</button>
  )
}

export default Button