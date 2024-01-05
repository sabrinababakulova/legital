import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './SliderImages.sass'
import 'swiper/css'

const SliderImages = ({ activeSlideIndex, onSlideChange }) => {
  const swiperRef = useRef(null)
  const slides = [
    'https://forumavatars.ru/img/avatars/0007/5b/f1/6909-1612969935.jpg',
    'https://pic.rutubelist.ru/video/f9/71/f97160a78dcc7b0d7650ada0730ff92c.jpg?width=750',
    'https://i.ytimg.com/vi/7asUzwYo98Q/hqdefault.jpg',
    'Слайд 1',
    'Слайд 2',
    'Слайд 3',
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
        spaceBetween={30}
        slidesPerView={3}
        initialSlide={activeSlideIndex}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img className='image' src={slide} alt="мяу" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SliderImages
