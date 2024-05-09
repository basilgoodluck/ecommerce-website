import React, { useEffect, useRef, useState, useCallback } from 'react';
import SlideCard from './slideCard';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderBoxRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const images = [
    <SlideCard contentImg={'./assets/iphone.png'} />,
    <SlideCard contentImg={'./assets/developer.webp'} />,
    <SlideCard contentImg={'./assets/teddyBear.webp'} />,
  ];

  const clonedFirstSlide = React.cloneElement(images[0])
  console.log(clonedFirstSlide)

  const moveToNextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    // if(currentIndex ===)
  }, [images.length]);

  const moveToPrevSlide = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);


  useEffect(() => {
    setSlideWidth(sliderBoxRef.current.clientWidth);

    const interval = setInterval(() => {
      moveToNextSlide();
    }, 2000);

    setIntervalId(interval);

    return () => clearInterval(interval);
  }, [moveToNextSlide]);

  useEffect(() => {
    if (currentIndex === 0 || currentIndex === images.length - 1) {
      clearInterval(intervalId);
    }
  }, [currentIndex, images.length, intervalId]);

  const handleButtonClick = (direction) => {
    if (direction === 'prev') {
      moveToPrevSlide();
    } else {
      moveToNextSlide();
    }
  };

  return (
    <div className='w-full m-auto overflow-hidden bg-black text-white relative'>
      <div className='bg-black w-full'>
        <div className='flex w-full justify-between' ref={sliderBoxRef} style={{ transform: `translateX(${-slideWidth * currentIndex}px)`, transition: `${currentIndex === 0 || currentIndex === images.length - 1 ? 'none' : 'transform ease .7s'}` }}>
          {[...images, clonedFirstSlide].map((image, index) => (
            <React.Fragment key={index}>{image}</React.Fragment>
          ))}
        </div>
      </div>
      <div className='w-full flex gap-3 absolute bottom-0 left-3 h-3'>
        {images.map((_, index) => (
          <button key={index} className={`slider-button ${currentIndex === index ? 'active' : ''}`} onClick={() => handleButtonClick(index)}></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
