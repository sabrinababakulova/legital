import React from 'react'
import './WhyUsItem.sass'

const WhyUsItem = ({number, heading, text}) => {
  return (
    <div className="why-us-item">
      <div className="why-us-numbers">
        <h3 className='numbers heading-light'>{number}</h3>
      </div>
      <div className="why-us-heading">
        <p className='heading'>{heading}</p>
      </div>
      <div className="why-us-text">
        <p className="text sub-heading-white">{text}</p>
      </div>
    </div>
  )
}

export default WhyUsItem