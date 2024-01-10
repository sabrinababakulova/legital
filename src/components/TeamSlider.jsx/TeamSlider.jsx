import { Swiper, SwiperSlide } from 'swiper/react'
import TeamSliderItem from './TeamSliderItem'
import { useEffect, useRef } from 'react'
import 'swiper/css/navigation'
import './TeamSlider.sass'
import 'swiper/css'

const TeamSlider = ({ setCurrentIndex, activeIndex }) => {
  const swiperRef = useRef(null)

  const onSlideChange = (e)=>{
    console.log(e.realIndex,'realindex');
    console.log(activeIndex,'index');

  setCurrentIndex(e.realIndex);
  }  

  const onSwiperInit = (swiper) => {
    swiperRef.current = swiper
    // if (activeSlideIndex !== undefined) {
    //   swiperRef.current.slideTo(activeSlideIndex)
    // }
  }

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex)
    }
  }, [activeIndex, swiperRef])

  return (
    <div className="team-slider">
      <Swiper
        slidesPerView={1}
        initialSlide={activeIndex}
        className="mySwiper"
        loop= {true}
        onSlideChange={onSlideChange}
        onSwiper={onSwiperInit}
      >
        <SwiperSlide>
          <TeamSliderItem name="Мамадалиев Умид Юлдашевич 1" />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSliderItem name="Мамаsdfsdfдалиев Умид dfsdffsdfsdf 2" />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSliderItem name="dsff Умид sdfsdfsdfsdf 3" />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSliderItem name="Мамадалиев Умид Юлдашевич 4" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <TeamSliderItem name="Мамаsdfsdfдалиев Умид dfsdffsdfsdf 5" />
        </SwiperSlide>
        <SwiperSlide>
          <TeamSliderItem name="dsff Умид sdfsdfsdfsdf 6" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default TeamSlider
