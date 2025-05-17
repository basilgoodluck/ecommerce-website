import React, { useState, useEffect, useRef } from "react";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { useLoaderData, useNavigate } from "react-router-dom";

const InfiniteSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [startX, setStartX] = useState(null);
  const [currentX, setCurrentX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [products, setProducts] = useState([]);
  const [extendedItems, setExtendedItems] = useState([]);
  const navigate = useNavigate();
  const data = useLoaderData();
  const sliderRef = useRef(null)

  const slideWidth = 100;
  const transitionTime = 500;
  const autoSlideInterval = 2500;
  const swipeThreshold = 50;

  useEffect(() => {
    if (Array.isArray(data) && data.length > 0) {
      const promoItems = data.slice(0, 5); 
      setProducts(promoItems);
      setExtendedItems([...promoItems, ...promoItems, ...promoItems]); // Triplicate for infinite effect
    }
  }, [data]);

  useEffect(() => {
    let autoSlide;
    if (!isPaused && !isDragging) {
      autoSlide = setInterval(() => {
        if (!isTransitioning) {
          handleNext();
        }
      }, autoSlideInterval);
    }
    return () => clearInterval(autoSlide);
  }, [isPaused, isDragging, isTransitioning, handleNext]);

  useEffect(() => {
    if (currentIndex <= 0) {
      setExtendedItems((prev) => [...products, ...prev]);
      setCurrentIndex((prev) => prev + products.length);
    } else if (currentIndex >= extendedItems.length - products.length) {
      setExtendedItems((prev) => [...prev, ...products]);
    }
  }, [currentIndex, products, extendedItems]);

 function handleNext() {
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
    if (currentIndex >= extendedItems.length - products.length) {
      setCurrentIndex((prev) => prev - products.length);
    } else if (currentIndex < products.length) {
      setCurrentIndex((prev) => prev + products.length);
    }
  };

  const handleDragStart = (e) => {
    if (isTransitioning) return;
    setIsPaused(true);
    setIsDragging(true);
    const pageX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
    setStartX(pageX);
    setCurrentX(pageX);
  };

  const handleDragMove = (e) => {
    if (!isDragging || isTransitioning) return;
    e.preventDefault();
    const pageX = e.type.includes("mouse") ? e.pageX : e.touches[0].pageX;
    setCurrentX(pageX);
  };

  const handleDragEnd = () => {
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
      const dragOffset = ((currentX - startX) / window.innerWidth) * 50;
      baseTranslate += dragOffset;
    }
    return baseTranslate;
  };

  const actualIndex = (currentIndex + products.length) % products.length;

  const idString = (id) => {
    return String(id).toLowerCase().split(' ').join('-').slice(0, 10);
  };

  const handleClick = (product) => {
    const rootId = idString(product.title);
    navigate(`/product/${rootId}`, {
        state: {
            item: product,
        },
    });
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button
        onClick={handlePrev}
        className="absolute w-6 h-6 flex justify-center items-center left-0 top-1/2 z-10 -translate-y-1/2 rounded-full shadow-lg"
      >
        <MdArrowBackIosNew className="text-white text-3xl" />
      </button>
      <button
        onClick={handleNext}
        className="absolute w-6 h-6 flex justify-center items-center right-0 top-1/2 z-10 -translate-y-1/2 rounded-full shadow-lg"
      >
        <MdArrowForwardIos className="text-white text-3xl" />
      </button>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {extendedItems.slice(0, products.length).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              actualIndex === index
                ? 'bg-red-500 w-4'
                : 'bg-white hover:bg-white/70'
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
            ? `transform ${transitionTime}ms ease`
            : "none",
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
            <div className="text-xs font-bold flex gap-1 items-center justify-between">
              <div className=''>
                <p className='font-normal text-[13px]'>{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
                <p className='text-base'>{item.title}</p>
                <button onClick={(e) => handleClick(item)} className="underline underline-offset-1 text-xl text-red-500"  >Shop Now</button>
                
              </div>
              <div className='w-4/5'><img src={item.imageURL} alt='sdiofds' /></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
