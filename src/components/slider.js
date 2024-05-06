import React, { useEffect, useRef, useState, useCallback } from 'react';
import SlideCard from './slideCard';

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderBoxRef = useRef(null);
  const [slideWidth, setSlideWidth] = useState(0);

  const images = [
    <SlideCard key={0} contentImg={'./assets/iphone.png'} />,
    <SlideCard key={1} contentImg={'./assets/developer.webp'} />,
    <SlideCard key={2} contentImg={'./assets/teddyBear.webp'} />,
  ];

  // const firstItemClone = images[0].cloneNode(true);
  // const lastItemClone = images[images.length - 1].cloneNode(true);
  // console.log(lastItemClone, firstItemClone)

  const moveToNextSlide = useCallback(() => {
    setCurrentIndex(prevIndex => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    const targetPosition = -slideWidth * (currentIndex);
    sliderBoxRef.current.style.transform = `translateX(${targetPosition}px)`;
    sliderBoxRef.current.style.transition = currentIndex === images.length - 1 ? '0' : 'transform ease .7s';
  }, [slideWidth, currentIndex, images.length]);

  useEffect(() => {
    setSlideWidth(sliderBoxRef.current.clientWidth);

    const interval = setInterval(() => {
      moveToNextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length, slideWidth, moveToNextSlide]);


  return (
    <div className='w-full m-auto overflow-hidden bg-black text-white'>
      <div className='bg-black w-full'>
        <div className='flex w-full justify-between' ref={sliderBoxRef}>
          {images.map((image) => (
            image
          ))}
        </div>
      </div>
      <div className='w-full py-3 flex justify-center items-center gap-2'>
        <button className='w-1 h-1 rounded-full bg-gray-400 p-1'></button>
        <button className='w-1 h-1 rounded-full bg-gray-400 p-1'></button>
        <button className='w-1 h-1 rounded-full bg-red-400 p-1'></button>
        <button className='w-1 h-1 rounded-full bg-gray-400 p-1'></button>
        <button className='w-1 h-1 rounded-full bg-gray-400 p-1'></button>
      </div>
    </div>
  );
}

export default Slider;
