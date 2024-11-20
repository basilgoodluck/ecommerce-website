import React, { useState, useEffect, useRef } from 'react';
// import img1 from "../../src/promo/promo_headset.png";
// import img2 from "../../src/promo/promo_phones.png";
// import img3 from "../../src/promo/promo_wristwatch.png";


const InfiniteSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(null);
  const [currentX, setCurrentX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  const promo_items = [
    {
      id: 1,
      title: "High-Quality Headset",
      description: "Experience immersive sound with our state-of-the-art headset.",
      image: "../../src/promo/promo_headset.png"
    },
    {
      id: 2,
      title: "Latest Smartphones",
      description: "Stay connected with the latest technology in your hands.",
      image: "../../src/promo/promo_phones.png"
    },
    {
      id: 3,
      title: "Smart Wristwatch",
      description: "Track your fitness and manage your time in style.",
      image: "../../src/promo/promo_wristwatch.png"
    }
  ];
  

  const extendedItems = [...promo_items, ...promo_items, ...promo_items];
  const slideWidth = 100;
  const transitionTime = 500;
  const autoSlideInterval = 3000;
  const swipeThreshold = 50;

  useEffect(() => {
    let autoSlide;
    if (!isPaused && !isDragging) {
      autoSlide = setInterval(() => {
        handleNext();
      }, autoSlideInterval);
    }
    return () => clearInterval(autoSlide);
  }, [currentIndex, isPaused, isDragging]);

  const handleNext = () => {
    if (!isTransitioning && !isDragging) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning && !isDragging) {
      setIsTransitioning(true);
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= promo_items.length) {
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setCurrentIndex(promo_items.length - 1);
    }
  };

  // Updated touch and mouse handlers
  const handleDragStart = (e) => {
    setIsPaused(true);
    setIsDragging(true);
    const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    setStartX(pageX);
    setCurrentX(pageX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault(); 
    const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    setCurrentX(pageX);
  };

  const handleDragEnd = (e) => {
    if (!isDragging) return;
    
    const diff = currentX - startX;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    
    setIsDragging(false);
    setIsPaused(false);
    setStartX(null);
    setCurrentX(null);
  };

  const getTranslateX = () => {
    let baseTranslate = -(currentIndex + promo_items.length) * slideWidth;
    
    if (isDragging && startX !== null && currentX !== null) {
      const dragOffset = ((currentX - startX) / window.innerWidth) * 100;
      baseTranslate += dragOffset;
    }
    
    return baseTranslate;
  };

  const actualIndex = ((currentIndex % promo_items.length) + promo_items.length) % promo_items.length;

  return (
    <div className="relative w-full overflow-hidden">
      <button 
        onClick={handlePrev}
        className="absolute w-6 h-6 flex justify-center items-center left-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        ←
      </button>
      <button 
        onClick={handleNext}
        className="absolute w-6 h-6 flex justify-center items-center right-0 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-4 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        →
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
            ? `transform ${transitionTime}ms ease-out` 
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
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-full h-64 flex items-center justify-center bg-black select-none text-white px-10"
            style={{ width: `${slideWidth}%` }}
          >
            <div className="text-xs font-bold">
              <div>
                <p>{item.title}</p>
                <p className='font-normal'>{item.description}</p>
              </div>
              <div><img src={item.image} /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;