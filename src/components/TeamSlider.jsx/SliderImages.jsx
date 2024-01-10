import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import firstSlideImg from "../../assets/images/trader-first.webp";
import secondSlideImg from "../../assets/images/trader-second.webp";
import thirdSlideImg from "../../assets/images/trader-third.webp";
import "./SliderImages.sass";
import "swiper/css";

const SliderImages = ({ handleSwipe, mainInfo }) => {
  const [isUserSwiped, setIsUserSwiped] = useState(false);
  const swiperRef = useRef(null);
  const slides = [firstSlideImg, secondSlideImg, thirdSlideImg, firstSlideImg];

  const onSlideChange = (e) => {
    if (isUserSwiped) {
      handleSwipe(
        e.realIndex,
        "images",
        e?.touches?.diff < 0 ? "next" : "prev"
      );
    }
  };

  const onSwiperInit = (swiper) => (swiperRef.current = swiper);

  useEffect(() => {
    if (mainInfo?.origin === "team") {
      mainInfo?.direction === "next"
        ? swiperRef.current.slideNext()
        : swiperRef.current.slidePrev();
      setIsUserSwiped(false);
    }
  }, [mainInfo]);

  return (
    <div className="slider-wrapper slider-images">
      <Swiper
        onSwiper={onSwiperInit}
        onSlideChangeTransitionStart={onSlideChange}
        spaceBetween={13}
        slidesPerView={3}
        loop={true}
        initialSlide={mainInfo.index}
        onSliderMove={() => setIsUserSwiped(true)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="image"
              style={{ backgroundImage: `url(${slide})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderImages;
