import React, { useState, useEffect, useRef } from 'react';

const InfiniteSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);

  // Sample items - replace with your own content
  const items = [
    { id: 1, content: "Slide 1" },
    { id: 2, content: "Slide 2" },
    { id: 3, content: "Slide 3" },
    { id: 4, content: "Slide 4" }
  ];

  const extendedItems = [...items, ...items, ...items];
  const slideWidth = 100;
  const transitionTime = 500;
  const autoSlideInterval = 3000;
  const swipeThreshold = 50; // Minimum distance for swipe to trigger slide

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
    if (currentIndex >= items.length) {
      setCurrentIndex(0);
    } else if (currentIndex < 0) {
      setCurrentIndex(items.length - 1);
    }
  };

  // Touch and mouse event handlers
  const handleDragStart = (e) => {
    setIsDragging(true);
    setStartX(e.type === 'mousedown' ? e.pageX : e.touches[0].pageX);
    setCurrentX(e.type === 'mousedown' ? e.pageX : e.touches[0].pageX);
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const x = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
    setCurrentX(x);
  };

  const handleDragEnd = () => {
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
  };

  const getTranslateX = () => {
    let baseTranslate = -(currentIndex + items.length) * slideWidth;
    
    // Add drag offset while dragging
    if (isDragging) {
      const dragOffset = ((currentX - startX) / sliderRef.current.offsetWidth) * 100;
      baseTranslate += dragOffset;
    }
    
    return `translateX(${baseTranslate}%)`;
  };

  // Calculate actual index for progress indicators
  const actualIndex = ((currentIndex % items.length) + items.length) % items.length;

  return (
    <div className="relative w-full overflow-hidden">
      {/* Navigation Buttons */}
      <button 
        onClick={handlePrev}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        ←
      </button>
      <button 
        onClick={handleNext}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        →
      </button>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {items.map((_, index) => (
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

      {/* Slider Track */}
      <div
        ref={sliderRef}
        className="flex touch-pan-y"
        style={{
          transform: getTranslateX(),
          transition: isTransitioning && !isDragging 
            ? `transform ${transitionTime}ms cubic-bezier(0.4, 0, 0.2, 1)` 
            : isDragging 
              ? 'none' 
              : 'transform 0.1s linear'
        }}
        onTransitionEnd={handleTransitionEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
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
            className="flex-shrink-0 w-full h-64 flex items-center justify-center bg-gray-200 select-none"
            style={{ width: `${slideWidth}%` }}
          >
            <div className="text-2xl font-bold">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;