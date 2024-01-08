import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import  firstSlideImg from '../../assets/images/trader-first.webp'
import  secondSlideImg from '../../assets/images/trader-second.webp'
import  thirdSlideImg from '../../assets/images/trader-third.webp'
import './SliderImages.sass'
import 'swiper/css'

const SliderImages = ({ activeSlideIndex, onSlideChange }) => {
  const swiperRef = useRef(null)
  const slides = [
    firstSlideImg,
    secondSlideImg,
    thirdSlideImg,
    firstSlideImg,
    secondSlideImg,
    thirdSlideImg,
  ]

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
    <div className="slider-wrapper slider-images">
      <Swiper
        onSwiper={onSwiperInit}
        onSlideChange={onSlideChange}
        spaceBetween={13}
        slidesPerView={3}
        loop= {true}
        initialSlide={activeSlideIndex}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="image" style={{ backgroundImage: `url(${slide})` }}></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SliderImages
