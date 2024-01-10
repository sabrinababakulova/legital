import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import  firstSlideImg from '../../assets/images/trader-first.webp'
import  secondSlideImg from '../../assets/images/trader-second.webp'
import  thirdSlideImg from '../../assets/images/trader-third.webp'
import './SliderImages.sass'
import 'swiper/css'

const SliderImages = ({ setCurrentIndex, activeIndex }) => {
  const swiperRef = useRef(null)
  const slides = [
    firstSlideImg,
    secondSlideImg,
    thirdSlideImg,
    firstSlideImg,
  ]
  

  const onSlideChange = (e)=> {};
  

  const onSwiperInit = (swiper) => {
    swiperRef.current = swiper
    // if (activeSlideIndex !== undefined) {
    //   swiperRef.current.slideTo(activeSlideIndex)
    // }
  }

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex, swiperRef])

  return (
    <div className="slider-wrapper slider-images">
      <Swiper
        onSwiper={onSwiperInit}
        onSlideChange={onSlideChange}
        spaceBetween={13}
        slidesPerView={3}
        loop={true}
        initialSlide={activeIndex}
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
