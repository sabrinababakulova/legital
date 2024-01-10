import React, { useState } from "react";
import SliderImages from "./SliderImages";
import TeamSlider from "./TeamSlider";

const MainSlider = () => {
  const [currentIndex, setCurrentIndex] = useState({
    direction: "",
    index: 0,
    origin: "",
  });
  const handleSwipe = (index, origin, direction) =>
    setCurrentIndex({
      index,
      origin,
      direction,
    });
  return (
    <div className="main-slider">
      <TeamSlider handleSwipe={handleSwipe} mainInfo={currentIndex} />
      <SliderImages handleSwipe={handleSwipe} mainInfo={currentIndex} />
    </div>
  );
};

export default MainSlider;
