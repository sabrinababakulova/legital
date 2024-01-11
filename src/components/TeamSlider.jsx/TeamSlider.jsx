import { Swiper, SwiperSlide } from "swiper/react";
import TeamSliderItem from "./TeamSliderItem";
import { useEffect, useRef, useState } from "react";
import "swiper/css/navigation";
import "./TeamSlider.sass";
import "swiper/css";
import { Navigation } from "swiper/modules";

const TeamSlider = ({ handleSwipe, mainInfo }) => {
  const names = [
    "Мамадалиев Умид Юлдашевич 1",
    '"Мамаsdfsdfдалиев Умид dfsdffsdfsdf 2',
    "dsff Умид sdfsdfsdfsdf 3",
    '"Мамадалиев Умид Юлдашевич 4',
  ];
  const [currentSlide, setCurrentSlide] = useState(1);
  const swiperRef = useRef(null);
  const [isUserSwiped, setIsUserSwiped] = useState(false);

  const onSlideChange = (e, direction) => {
    if (isUserSwiped) {
      if (e) {
        handleSwipe(
          e.realIndex,
          "team",
          e?.touches?.diff < 0 ? "next" : "prev"
        );
      }
      setIsUserSwiped(false);
    }
    if (direction) {
      handleSwipe(0, "team", direction);
    }
    setCurrentSlide(e.realIndex + 1);
  };

  const onSwiperInit = (swiper) => (swiperRef.current = swiper);

  useEffect(() => {
    if (mainInfo?.origin === "images") {
      mainInfo?.direction === "next"
        ? swiperRef.current.slideNext()
        : swiperRef.current.slidePrev();
      setIsUserSwiped(false);
    }
  }, [mainInfo]);

  return (
    <div className="team-slider">
      <Swiper
        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
        modules={[Navigation]}
        onSwiper={onSwiperInit}
        slidesPerView={1}
        initialSlide={mainInfo.index}
        className="mySwiper"
        loop={true}
        onSlideChangeTransitionStart={onSlideChange}
        onSliderMove={() => setIsUserSwiped(true)}
      >
        {names.map((name) => (
          <SwiperSlide key={name}>
            <TeamSliderItem name={name} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div id="count">
        {currentSlide}/{names?.length}
      </div>
      <div className="button-group">
        <button
          className="arrow-right"
          onClick={() => onSlideChange(null, "prev")}
        >
          <div className="icon-right">
            <i className="icon-arrow-right"></i>
          </div>
        </button>
        <button
          className="arrow-left"
          onClick={() => onSlideChange(null, "next")}
        >
          <div className="icon-left">
            <i className="icon-arrow-right"></i>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TeamSlider;
