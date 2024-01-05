import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import './TeamSlider.sass'
import TeamSliderItem from './TeamSliderItem'
import { useEffect, useRef } from 'react'

const TeamSlider = ({ onSlideChange, activeSlideIndex }) => {
  const swiperRef = useRef(null)

  const onSwiperInit = (swiper) => {
    swiperRef.current = swiper
    if (activeSlideIndex !== undefined) {
      swiperRef.current.slideTo(activeSlideIndex)
    }
  }

  useEffect(() => {
    if (swiperRef.current && activeSlideIndex !== undefined) {
      swiperRef.current.slideTo(activeSlideIndex)
    }
  }, [activeSlideIndex])

  return (
    <div className="team-slider">
      <Swiper
        slidesPerView={1}
        initialSlide={activeSlideIndex}
        className="mySwiper"
        onSlideChange={onSlideChange}
        onSwiper={onSwiperInit}
      >
        <SwiperSlide>
          <TeamSliderItem name="Мамадалиев Умид Юлдашевич" />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSliderItem name="Мамаsdfsdfдалиев Умид dfsdffsdfsdf" />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSliderItem name="dsff Умид sdfsdfsdfsdf" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TeamSlider
