import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { FaStar } from 'react-icons/fa'
import { CiHeart } from 'react-icons/ci'

function Product() {
  const [details, setDetails] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (location.state && location.state.item) {
      setDetails(location.state.item)
      console.log(location.state.item)
    }
  }, [location.state])

  if (!details) {
    return <div>Loading...</div>; 
  }

  return (
    <div className='w-11/12 lg:w-4/5 m-auto py-10 flex flex-col gap-10'>
      <div>
        <div className='flex flex-col md:flex-row gap-10'>
          <div className='flex gap-10'>
            {details.images && details.images.length > 0 && (
              <div className='flex flex-col gap-8'>
                <img src={details.images[0]} alt={details.title} className='w-24' />
                <img src={details.images[0]} alt={details.title} className='w-24' />
                <img src={details.images[0]} alt={details.title} className='w-24' />
                <img src={details.images[0]} alt={details.title} className='w-24' />
              </div>
            )}
            {details.images && details.images.length > 0 && (
              <div className='w-4/5'>
                <img src={details.images[0]} alt={details.titel} className='w-full h-full object-cover' />
              </div>
            )}
          </div>
          <div>
            <div className='border-b border-gray-200 py-3 flex flex-col gap-3'>
              <h4 className='text-2xl font-bold'>{details.title}</h4>
              <div className='flex gap-4'>
                <div className='flex gap-'>
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                  <FaStar className='text-yellow-500' />
                </div >
                <p className='text-sm text-gray-400'>({details.price} Reviews)</p>
              </div>
              <div>
                <h4 className='text-2xl font-medium'>${details.price.toFixed(2)}</h4>
                <p>
                  {details.description.substring(0, 150)}
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-4 py-4'>
              <div className='flex gap-4 items-center text-2xl'>
                <p>Colours: </p>
                <div className='flex gap-2'>
                  <button className='w-2 h-2 bg-red-600 rounded-full p-2 outline-1 outline-black'></button>
                  <button className='w-2 h-2 bg-green-600 rounded-full p-2 outline-1 outline-black'></button>
                </div>
              </div>
              <div className='flex gap-4 items-center text-2xl'>
                <p>Size: </p>
                <div className='flex gap-2 text-sm'>
                  <button className='flex justify-center items-center w-6 h-6 border border-gray-400 rounded-md p-2 outline-1 outline-black'>XS</button>
                  <button className='flex justify-center items-center w-6 h-6 border border-gray-400 rounded-md p-2 outline-1 outline-black'>S</button>
                  <button className='flex justify-center items-center w-6 h-6 border border-gray-400 rounded-md p-2 outline-1 outline-black'>M</button>
                  <button className='flex justify-center items-center w-6 h-6 text-white bg-red-600 p-2 outline-1 rounded-md outline-black'>L</button>
                  <button className='flex justify-center items-center w-6 h-6 border border-gray-400 rounded-md p-2 outline-1 outline-black'>XL</button>
                </div>
              </div>
              <div className='flex gap-4 items-center text-2xl py-6'>
                <div className='flex gap-4'>
                  <div className='flex border border-gray-400 rounded-md '>
                    <button className='border-r border-gray-200 h-10 w-10'></button>
                    <input value={1} className='text-center w-20 h-10 border-r border-gray-200' />
                    <button className='bg-red-600 border-l border-gray-400 h-10 w-10 '></button>
                  </div>
                  <div className='border border-red-600 bg-red-600 rounded-md'>
                    <button className='h-10 px-24 text-center text-white text-base'>Buy Now</button>
                  </div>
                  <div className='flex justify-center items-center border border-gray-400 rounded-md'>
                    <CiHeart className='text-4xl'/>
                  </div>
                </div>
              </div>
            </div>
            <div className='border border-gray-400 p-3 rounded-sm '>
              <div className='flex items-center gap-6 py-4'>
                
                <div>
                  <h5 className='text-xl font-medium'>Free Delivery</h5>
                  <p className='underline underline-offset-2'>Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className='flex items-center gap-6 py-4'>
                <div>
                  <h5 className='text-xl font-medium'>Return Delivery</h5>
                  <p className=''>Free 30 Days Delivery Returns, <span className='underline underline-offset-2'>Details</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-11 py-10'>
            <div className='flex gap-11 items-center justify-between'>
                <div className='flex gap-7 items-center'>
                    <div className={`relative w-1 h-6 md:h-10 before:absolute before:left-0 before:top-0 before:content-[''] before:bg-red-500 before:w-4 before:h-full before:rounded-sm`}></div>
                    <h1 className='text-black text-xl md:text-2xl font-medium' style={{whiteSpace:'nowrap'}}>Just for you</h1>
                </div>
                <div className=''>
                    <button className='block text-black border border-gray-400 rounded-md py-2 px-5'>View All</button>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10'>
              <h1>sdj</h1>
              <h1>sdj</h1>
              <h1>sdj</h1>
              <h1>sdj</h1>
              <h1>sdj</h1>
            </div> 
        </div>
    </div>
  )
}

export default Product
