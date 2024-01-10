import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import IntroSliderItem from './IntroSliderItem'
import 'swiper/css'
import 'swiper/css/pagination'
import './IntroSlider.sass'

const sliderItems = [
    {
        index: 1,
        heading: "Защита ваших прав в сфере правопорядка",
        text: "Оказываем юридическую помощь в области административного, жилищного, гражданского и уголовного права"
    },
    {
        index: 2,
        heading: "Защита ваших прав в сфере правопорядка",
        text: "Оказываем юридическую помощь в области административного, жилищного, гражданского и уголовного права"
    },
    {
        index: 3,
        heading: "Защита ваших прав в сфере правопорядка",
        text: "Оказываем юридическую помощь в области административного, жилищного, гражданского и уголовного права"
    },
]

const IntroSlider = () =>{
  return (
    <>
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}

        modules={[Pagination]}
        className="mySwiper"
      >
        {sliderItems.map((item, index) => (
            <SwiperSlide key={index}><IntroSliderItem key={item.index} heading={item.heading} text={item.text}/></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default IntroSlider