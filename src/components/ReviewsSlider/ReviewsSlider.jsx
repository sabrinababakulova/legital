
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import ReviewsSliderItem from './ReviewsSliderItem';
import './ReviewsSlider.sass'


const ReviewsSlider = () => {
  return (
      <div className='reviews-slider'>
        <div className="slider-header">
          <div className="header-block">
            <div className="header-box">
              <div className="total-number">
                <h3 className="total">4.9</h3>
              </div>
              <div className="total-reviews">
                <p className='text'>146 отзывов</p>
              </div>
            </div>
            <div className="header-box">
              <div className="box-title">
                <h3 className="title sub-heading-white">Средняя оценка</h3>
              </div>
              <div className="box-stars">
                {[...Array(5)].map((star, index) => {
                  return(
                    <i key={index} className="icon-star-full"></i>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="button-group">
            <button className="arrow-right">
              <div className='icon-right'><i className="icon-arrow-right"></i></div>
            </button>
            <button className="arrow-left">
              <div className='icon-left'><i className="icon-arrow-right"></i></div>
            </button>
          </div>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          modules={[ Navigation]}
          className="mySwiper"
        >
          <SwiperSlide><ReviewsSliderItem/></SwiperSlide>
          <SwiperSlide><ReviewsSliderItem/></SwiperSlide>
          <SwiperSlide><ReviewsSliderItem/></SwiperSlide>
          <SwiperSlide><ReviewsSliderItem/></SwiperSlide>
          <SwiperSlide><ReviewsSliderItem/></SwiperSlide>
          
        </Swiper>
      </div>
  );
}

export default ReviewsSlider