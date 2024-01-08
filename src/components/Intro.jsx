import React from 'react'
import IntroSlider from './IntroSlider/IntroSlider'
import introFirst from '../assets/images/intro-first_1.webp'
import introSecond from '../assets/images/intro-second_1.webp'
import introThird from '../assets/images/intro-third.webp'
import './Intro.sass'

const Intro = () => {
  return (
    <div className='intro'>
      <div className="container">
        <div className="intro-box"><IntroSlider/></div>
        <div className="intro-box">
          <div className="box-item">
            <a href='#about' className="icon">
              <i className='icon-arrow-down'></i>
            </a>
            <div className="item-text">
              <p className='text'>Листайте вниз</p>
            </div>
          </div>
          <div className="box-item-image">
            <div className="item-image">
              <img src={introFirst} alt="" />
            </div>
            <div className="item-image">
              <img src={introSecond} alt="" />
            </div>
            <div className="item-image">
              <img src={introThird} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro