import React, { useState } from 'react'
import './Team.sass'
import TeamSlider from './TeamSlider.jsx/TeamSlider'
import SliderImages from './TeamSlider.jsx/SliderImages'
import MainSlider from './TeamSlider.jsx'

const Team = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const [activeSlide2Index, setActiveSlide2Index] = useState(0)

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex)
  }

  const handleSlideChange2 = (swiper) => {
    setActiveSlide2Index(swiper.activeIndex)
  }

  return (
    <section className="team" id="team">
      <div className="container">
        <div className="team-box">
          <div className="box-item">
            <div className="item-heading">
              <h3 className="heading">Наша команда</h3>
            </div>
          </div>
          <div className="box-item">
            <div className="slider-team">
              <div className='team-slider-context'>
                <MainSlider/>
                {/* <TeamSlider activeSlideIndex={activeSlide2Index} onSlideChange={handleSlideChange} /> */}
              </div>
              {/* <SliderImages activeSlideIndex={activeSlideIndex} onSlideChange={handleSlideChange2} /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team
