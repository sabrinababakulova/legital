import React from 'react'
import './IntroSliderItem.sass'
import Button from '../UI/Button'

const IntroSliderItem = ({heading, text}) => {
  return (
    <div className='intro-slider-item'>
        <div className="item-heading">
            <h1 className='heading'>{heading}</h1>
        </div>
        <div className="item-box">
            <div className="box-text">
                <p className='text'>{text}</p>
            </div>
            <div className="box-buttons">
                <Button text='Консультация' className='md'/>
                <Button text='О нас' className='outline sm'/>
            </div>
        </div>
    </div>
  )
}

export default IntroSliderItem