import React from 'react'
import './Button.sass'

const Button = ({className, text, onClick}) => {
  return (
    <div className='button'>
        <button className={`btn ${className}`} onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button