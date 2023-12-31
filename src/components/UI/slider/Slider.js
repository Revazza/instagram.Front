import React, { useRef, useState } from "react";
import styles from "./Slider.module.scss";

function Slider({ sliderClassName, data, chunkSize, children }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderStyle, setSliderStyle] = useState(``);
  const sliderClass = `${styles.slider} ${sliderClassName}`;
  const max_page = Math.ceil(data?.length / chunkSize);
  const showLeftArrow = currentSlide != 0;
  const showRightArrow = currentSlide + 1 != max_page;

  const moveLeft = () => {
    setCurrentSlide((prevState) => --prevState);
    setSliderStyle(
      `translateX(${-sliderRef.current.clientWidth * (currentSlide - 1)}px)`
    );
  };

  const moveRight = () => {
    setCurrentSlide((prevState) => ++prevState);
    setSliderStyle(
      `translateX(${-sliderRef.current.clientWidth * (currentSlide + 1)}px)`
    );
  };

  const sliderRef = useRef();

  return (
    <div className={styles.container}>
      <div
        className={sliderClass}
        ref={sliderRef}
        style={{ transform: sliderStyle }}
      >
        {children}
      </div>
      {showLeftArrow && (
        <div id={styles.left} className={styles.switch} onClick={moveLeft}>
          <img src="/images/arrow.png" alt="move-left" />
        </div>
      )}
      {showRightArrow && (
        <div id={styles.right} className={styles.switch} onClick={moveRight}>
          <img src="/images/arrow.png" alt="move-right" />
        </div>
      )}
    </div>
  );
}

export default Slider;
