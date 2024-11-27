import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { useCart } from '../hooks/cartContext';
import LoadingSpinner from './loader';
import { useWish } from '../hooks/wishlistContext';

function Product() {
  const [details, setDetails] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [fav, setFav] = useState(false)
  const { addToCart } = useCart()
  const { toggleWish } = useWish()
  const [productCount, setProductCount] = useState(1)
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.item) {
      setDetails(location.state.item);
    }
  }, [location.state]);

  if (!details) {
    return <LoadingSpinner />;
  }

  function handleAddWish () {

  }
  

  const StarRating = ({ rating }) => {
    const totalStars = 5;
    return (
      <div className="flex gap-1">
        {[...Array(totalStars)].map((_, index) => (
          <FaStar
            key={index}
            size={10}
            className={`${
              index < rating
                ? 'fill-orange-400 text-orange-400'
                : 'fill-gray-200 text-gray-200'
            }`}
          />
        ))}
      </div>
    );
  };

  const handleDescriptionToggle = () => {
    setIsExpanded((prev) => !prev);
  };

   const description = (des) => {
    return (
      <div className="">
        <p>{isExpanded ? des : `${des.slice(0, 100)}...`} <button
          onClick={handleDescriptionToggle}
          className="text-blue-500 underline underline-offset-1 inline"
        >
          {isExpanded ? 'Less' : 'More'}
        </button></p>
      </div>
    );
  };

  const incProductCount = () => {
    setProductCount((prev) => prev + 1)    
  }
  const decProductCount = () => {
    if(productCount === 1) return
    setProductCount((prev) => prev - 1)    
  }
  const handleCountChange = (e) => {
    const value = e.target.value
    if(/[^1-9]/g.test(value)){
      if(value === 1) return
    }
  
    if(value === "" || 1){
      setProductCount(parseInt(1))
    }
    if (parseInt(value, 10) >= 1) {
      setProductCount(parseInt(value)); 
    }
  };

  function handleReturn () {
    return
  }
  

  return (
    <div className="w-11/12 lg:w-4/5 m-auto py-10 flex flex-col gap-10 overflow-x-hidden">
      <div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-3/5">
            {details.imageURL && (
              <div className="w-full">
                <img
                  src={details.imageURL}
                  alt={details.title}
                  className="w-full"
                />
              </div>
            )}
            
          </div>
          <div className='md:w-2/5'>
            <div className="border-b border-gray-200 py-3 flex flex-col gap-3">
              <h4 className="text-base font-bold">{details.title}</h4>
              <div className="flex gap-4 items-center">
                <div className="flex gap-2">
                  <StarRating rating={details.reviews.rating} />
                </div>
                <p className="text-sm text-gray-400">
                  ({details.reviews.count } Reviews)
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-medium">
                  ${details.price.toFixed(2)}
                </h4>
                <div className='text-sm'>{description(details.description)}</div>
              </div>
            </div>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex gap-4 items-center text-2xl py-6">
                <div className="flex gap-4">
                  <div className=" min-w-fit flex border border-gray-400 rounded-md overflow-hidden">
                    <button onClick={decProductCount} className={`border-r text-white border-gray-200 w-10 ${parseInt(productCount) === 1 ? "bg-gray-200" : "bg-red-600"}`}>-</button>
                    <input onChange={details.inStock ? handleCountChange : handleReturn} value={parseInt(productCount)} className="text-center w-20 h-full border-0 outline-none" />
                    <button disabled={!details.inStock} onClick={incProductCount} className={`${details.inStock ? "bg-red-600":"bg-gray-400"} text-white border-l border-gray-400 w-10 `}>+</button>
                  </div>
                  <div className='w-full'>
                      <button disabled={!details.inStock} className={`${details.inStock ? "bg-red-600":"bg-gray-400"} block text-white text-xs md:text-md rounded-md m-auto py-4 px-5`} onClick={() => addToCart(location.state.item)}>Add to cart</button>
                  </div>
                  <button onClick={} className="flex justify-center items-center border border-gray-400 rounded-md">
                    <CiHeart className="text-4xl" />
                  </button>
                </div>
              </div>
            </div>
            <div className="border border-gray-400 p-3 rounded-sm ">
              <div className="flex items-center gap-6 py-4">
                <div>
                  <h5 className="text-base font-medium">Free Delivery</h5>
                  <p className="underline underline-offset-1 text-sm">
                    Enter your postal code for Delivery Availability
                  </p>
                  <input className="p-2 w-full h-full border-2 border-black"  />
                </div>
              </div>
              <div className="flex items-center gap-6 py-4">
                <div>
                  <h5 className="text-base font-medium">Return Delivery</h5>
                  <p className='text-sm'>
                    Free 30 Days Delivery Returns,{' '}
                    <span className="underline underline-offset-2 text-sm">Details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-11 py-10">
        <div className="flex gap-11 items-center justify-between">
          <div className="flex gap-7 items-center">
            <div
              className={`relative w-1 h-6 md:h-10 before:absolute before:left-0 before:top-0 before:content-[''] before:bg-red-500 before:w-4 before:h-full before:rounded-sm`}
            ></div>
            <h1 className="text-black text-xl md:text-2xl font-medium" style={{ whiteSpace: 'nowrap' }}>
              Just for you
            </h1>
          </div>
          <div className="">
            <button className="block text-black border border-gray-400 rounded-md py-2 px-5">
              View All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10">
          <h1>sdj</h1>
          <h1>sdj</h1>
          <h1>sdj</h1>
          <h1>sdj</h1>
          <h1>sdj</h1>
        </div>
      </div>
    </div>
  );
}

export default Product;
