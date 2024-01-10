import React, { useState } from 'react'
import SliderImages from './SliderImages'
import TeamSlider from './TeamSlider'
import {Swiper, SwiperSlide} from 'swiper/react'

const MainSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    // console.log(currentPhotoIndex);
    return (
        <div className='main-slider'>
            <TeamSlider setCurrentIndex={setCurrentIndex} activeIndex={currentIndex}/>
            <SliderImages setCurrentIndex={setCurrentIndex} activeIndex={currentIndex}/>
        </div>
    )
}

export default MainSlider