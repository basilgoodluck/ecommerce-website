
import React, { useState, useEffect, useRef } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import { useLoaderData, useNavigate } from 'react-router-dom';

const InfiniteSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(null);
  const [currentX, setCurrentX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);
  const navigate = useNavigate();
  const [products, setProducts] = useState([])

  const data = useLoaderData();

  useEffect(() => {
    if(Array.isArray(data)){
      setProducts(data)
    }
  }, [data])

  const promo_items = Array.from(products)
  console.log(data)


  // if(!product || !product.imageURL || product.imageURL.length === 0){
  //   return null;
  // }

  // const id = product.title
  // const idString = (id) => {
  //   return String(id).toLowerCase().split(" ").join("-").slice(0, 10)
  // }

  // const rootId = idString(id)
  // function handleClick() {
  //   navigate(`/product/${rootId}`, {
  //     state: {
  //       item: product,
  //     }
  //   })
  // }
  // const promo_items = 

  const [extendedItems, setExtendedItems] = useState([...promo_items, ...promo_items]);

  const slideWidth = 100;
  const transitionTime = 500;
  const autoSlideInterval = 2500;
  const swipeThreshold = 50;

  useEffect(() => {
    if (currentIndex <= 0) {
      setExtendedItems((prevItems) => [...promo_items, ...prevItems]);
      setCurrentIndex((prev) => prev + promo_items.length);
    } else if (currentIndex >= extendedItems.length - 1) {
      setExtendedItems((prevItems) => [...prevItems, ...promo_items]);
    }
  }, [currentIndex, extendedItems]);

  useEffect(() => {
    let autoSlide;
    if (isPaused && !isDragging) {
      autoSlide = setInterval(() => {
        if (isTransitioning) return
        handleNext();
      }, autoSlideInterval, handleNext);
    }
    return () => clearInterval(autoSlide);
  }, [isPaused, isDragging, isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };
  
  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };
  

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= extendedItems.length - promo_items.length) {
      // setIsTransitioning(false);
      setCurrentIndex(currentIndex - promo_items.length);
    } else if (currentIndex < promo_items.length) {
      // setIsTransitioning(false);
      setCurrentIndex(currentIndex + promo_items.length);
    }
  };

  const handleDragStart = (e) => {
    if (isTransitioning) return;
    setIsPaused(true);
    setIsDragging(true);
    const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    setStartX(pageX);
    setCurrentX(pageX);
  };

  const handleDragMove = (e) => {
    if (!isDragging || isTransitioning) return;
    e.preventDefault();
    const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    setCurrentX(pageX);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    const diff = currentX - startX;
    if (Math.abs(diff) > swipeThreshold) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setIsDragging(false);
    setIsPaused(false);
    setStartX(null);
    setCurrentX(null);
  };

  const getTranslateX = () => {
    let baseTranslate = -currentIndex * slideWidth;
    if (isDragging && startX !== null && currentX !== null) {
      const dragOffset = ((currentX - startX) / window.innerWidth) * 50; // Reduce factor
      baseTranslate += dragOffset;
    }
    return baseTranslate;
  };
  

  const actualIndex = (currentIndex + promo_items.length) % promo_items.length;


  return (
    <div className="relative w-full overflow-hidden">
      <button 
        onClick={handlePrev}
        className="absolute w-6 h-6 flex justify-center items-center left-0 top-1/2 z-10 -translate-y-1/2  rounded-full shadow-lg transition-colors"
      >
        <MdArrowBackIosNew className='text-white text-3xl' />
      </button>
      <button 
        onClick={handleNext}
        className="absolute w-6 h-6 flex justify-center items-center right-0 top-1/2 z-10 -translate-y-1/2  rounded-full shadow-lg text-white transition-colors"
      >
        <MdArrowForwardIos className='text-white text-3xl' />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {promo_items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              actualIndex === index 
                ? 'bg-white w-4' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      <div
        ref={sliderRef}
        className="flex touch-pan-y"
        style={{
          transform: `translateX(${getTranslateX()}%)`,
          transition: isTransitioning && !isDragging 
            ? `transform ${transitionTime}ms cubic-bezier(0.4, 0.0, 0.2, 1)` 
            : 'none'

        }}
        onTransitionEnd={handleTransitionEnd}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {extendedItems.map((item, index) => (
          <div
            key={`${item._id}-${index}`}
            className="flex-shrink-0 w-full h-64 flex items-center justify-center bg-black select-none text-white px-10"
            style={{ width: `${slideWidth}%` }}
          >
            <div className="text-xs font-bold flex gap-1 items-center">
              <div className=''>
                <p className='text-xs'>{item.title}</p>
                <p className='font-normal text-[7px]'>{item.description}</p>
              </div>
              <div className='w-4/5'><img src={item.imageURL} alt='sdiofds' /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider